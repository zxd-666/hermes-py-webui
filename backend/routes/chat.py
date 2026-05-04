"""Chat endpoints: start run + SSE stream."""
import asyncio
import json
import threading
import time
from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse, JSONResponse
from pydantic import BaseModel
from typing import Optional

from ..streaming import create_stream, get_stream, cleanup_stream, run_agent_in_thread, cancel_stream, detach_stream_consumer, is_stream_alive

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
    import uuid
    session_id = body.session_id or f"s_{uuid.uuid4().hex[:12]}"
    stream_id = create_stream()

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
            while True:
                # Check if client disconnected
                if await req.is_disconnected():
                    break

                try:
                    event_type, data = q.get(timeout=30)
                except Exception:
                    # Send keepalive
                    yield f": keepalive\n\n"
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
    Returns the current queue contents (missed events) plus new ones."""
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

    # Drain any buffered events first
    buffered = []
    while True:
        try:
            event_type, data = q.get_nowait()
            buffered.append((event_type, data))
            if event_type in ("run.completed", "run.failed", "cancel"):
                break
        except Exception:
            break

    # If we got a terminal event, return it directly
    if buffered and buffered[-1][0] in ("run.completed", "run.failed", "cancel"):
        cleanup_stream(stream_id)
        event_type, data = buffered[-1]
        return StreamingResponse(
            iter([f"event: {event_type}\ndata: {json.dumps(data, ensure_ascii=False)}\n\n"]),
            media_type="text/event-stream",
            headers={"Cache-Control": "no-cache"},
        )

    # Otherwise, resume SSE streaming from where we left off
    async def event_generator():
        try:
            # Replay buffered events first
            for event_type, data in buffered:
                yield f"event: {event_type}\ndata: {json.dumps(data, ensure_ascii=False)}\n\n"
                if event_type in ("run.completed", "run.failed", "cancel"):
                    cleanup_stream(stream_id)
                    return

            # Continue streaming new events
            while True:
                if await req.is_disconnected():
                    break
                try:
                    event_type, data = q.get(timeout=30)
                except Exception:
                    yield f": keepalive\n\n"
                    continue

                yield f"event: {event_type}\ndata: {json.dumps(data, ensure_ascii=False)}\n\n"

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

    return {
        "session_id": session_id,
        "messages": messages,
        "isWorking": False,  # SSE doesn't persist in-flight state across reconnects
        "events": [],
        "inputTokens": input_tokens,
        "outputTokens": output_tokens,
        "parentSessionId": s.get("parent_session_id"),
    }
