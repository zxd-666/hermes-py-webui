"""Chat endpoints: start run + SSE stream."""
import asyncio
import json
import threading
import time
import uuid
from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse, JSONResponse
from pydantic import BaseModel
from typing import Optional

from ..streaming import create_stream, get_stream, cleanup_stream, run_agent_in_thread, cancel_stream, detach_stream_consumer, is_stream_alive, register_session_stream, get_active_stream_id

router = APIRouter(prefix="/api/chat", tags=["chat"])


class StartRunRequest(BaseModel):
    input: str | list[dict]
    conversation_history: list[dict] | None = None
    instructions: str | None = None
    session_id: str | None = None
    model: str | None = None
    provider: str | None = None


@router.post("/start")
async def start_run(req: Request, body: StartRunRequest):
    """Start a new agent run, return run_id for SSE subscription."""
    session_id = body.session_id or f"s_{uuid.uuid4().hex[:12]}"
    stream_id = create_stream()
    register_session_stream(session_id, stream_id)

    # Extract message text
    if isinstance(body.input, str):
        msg_text = body.input
    elif isinstance(body.input, list) and body.input:
        msg_text = body.input[-1].get("content", "")
    else:
        msg_text = ""

    # Get workspace from header
    workspace = "/"
    workspace_header = req.headers.get("x-hermes-workspace", "")
    if workspace_header:
        from urllib.parse import unquote
        workspace = unquote(workspace_header)

    # Get profile from header
    profile = req.headers.get("x-hermes-profile", "").strip() or None

    # Get model & provider (passed through to agent thread, which does full resolution)
    model = body.model or ""
    provider = body.provider or None

    # Start agent in background thread
    thread = threading.Thread(
        target=run_agent_in_thread,
        kwargs={
            "stream_id": stream_id,
            "session_id": session_id,
            "msg_text": msg_text,
            "model": model,
            "provider": provider,
            "workspace": workspace,
            "profile": profile,
            "conversation_history": body.conversation_history,
        },
        daemon=True,
    )
    thread.start()

    return {"run_id": stream_id, "session_id": session_id, "status": "running"}


@router.get("/stream/{stream_id}")
async def stream_events(stream_id: str, req: Request):
    """SSE endpoint: stream events for a given run."""
    q = get_stream(stream_id)
    if q is None:
        return StreamingResponse(
            iter(["event: error\ndata: {\"error\": \"stream not found\"}\n\n"]),
            media_type="text/event-stream",
        )

    async def event_generator():
        try:
            loop = asyncio.get_event_loop()
            while True:
                # Check if client disconnected
                if await req.is_disconnected():
                    break

                try:
                    event_type, data = await loop.run_in_executor(
                        None, lambda: q.get(timeout=30)
                    )
                except Exception:
                    # Send keepalive
                    yield ": keepalive\n\n"
                    continue

                payload = json.dumps(data, ensure_ascii=False)
                yield f"event: {event_type}\ndata: {payload}\n\n"

                if event_type in ("run.completed", "run.failed", "cancel"):
                    cleanup_stream(stream_id)
                    break
        finally:
            # Client disconnected without run completing — detach consumer
            # but keep queue alive so agent thread doesn't lose events.
            # The queue will be cleaned up after TTL expires.
            if get_stream(stream_id) is not None:
                detach_stream_consumer(stream_id)
            else:
                # Already cleaned up (run completed normally)
                pass

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@router.get("/reconnect/{stream_id}")
async def reconnect_stream(stream_id: str, req: Request):
    """Re-subscribe to an existing stream after a disconnect.
    Drains accumulated events in small batches to avoid front-end frame drops,
    then continues streaming new events."""
    if not is_stream_alive(stream_id):
        return JSONResponse(
            status_code=410,
            content={"error": "stream expired or not found"},
        )

    q = get_stream(stream_id)
    if q is None:
        return JSONResponse(
            status_code=410,
            content={"error": "stream not found"},
        )

    # Drain accumulated events to check if the run has already finished.
    # Discard everything — the front-end already has these messages from its
    # localStorage snapshot (saved by markInFlight). Replaying buffered events
    # would cause duplicate messages. Only forward the terminal event so the
    # front-end knows to refresh from DB.
    terminal_hit = False
    terminal_evt = None
    while True:
        try:
            event_type, data = q.get_nowait()
            if event_type in ("run.completed", "run.failed", "cancel"):
                terminal_hit = True
                terminal_evt = (event_type, data)
                break
            # Discard all other buffered events — front-end already has them
        except Exception:
            break

    # If run already finished, forward only the terminal event
    if terminal_hit:
        cleanup_stream(stream_id)
        event_type, data = terminal_evt
        return StreamingResponse(
            iter([f"event: {event_type}\ndata: {json.dumps(data, ensure_ascii=False)}\n\n"]),
            media_type="text/event-stream",
            headers={"Cache-Control": "no-cache"},
        )

    async def event_generator():
        try:
            # No buffered events to replay — go straight to live stream.
            # New events produced after reconnect are not in the front-end's
            # snapshot and will be appended correctly.
            loop = asyncio.get_event_loop()
            while True:
                if await req.is_disconnected():
                    break
                try:
                    event_type, data = await loop.run_in_executor(None, lambda: q.get(timeout=30))
                except Exception:
                    yield ": keepalive\n\n"
                    continue

                payload = f"event: {event_type}\ndata: {json.dumps(data, ensure_ascii=False)}\n\n"
                yield payload

                if event_type in ("run.completed", "run.failed", "cancel"):
                    cleanup_stream(stream_id)
                    break
        finally:
            if get_stream(stream_id) is not None:
                detach_stream_consumer(stream_id)

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@router.post("/cancel/{stream_id}")
@router.post("/abort/{stream_id}")
async def cancel_run(stream_id: str):
    return {"cancelled": cancel_stream(stream_id)}


@router.get("/resume/{session_id}")
async def resume_session(request: Request, session_id: str):
    """Resume a session — return current state from state.db."""
    from ..db import get_session, get_session_messages

    profile = request.headers.get("x-hermes-profile", "").strip() or None
    s = get_session(session_id, profile=profile)
    if not s:
        return JSONResponse(status_code=404, content={"error": "session not found"})

    messages = get_session_messages(session_id, profile=profile)
    input_tokens = s.get("input_tokens", 0) or 0
    output_tokens = s.get("output_tokens", 0) or 0

    # Check if this session has an active in-flight stream
    active_stream = get_active_stream_id(session_id)
    is_working = active_stream is not None

    return {
        "session_id": session_id,
        "messages": messages,
        "isWorking": is_working,
        "events": [],
        "inputTokens": input_tokens,
        "outputTokens": output_tokens,
        "parentSessionId": s.get("parent_session_id"),
    }
