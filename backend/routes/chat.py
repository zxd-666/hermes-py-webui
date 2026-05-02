"""Chat endpoints: start run + SSE stream."""
import asyncio
import json
import threading
import time
from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse, JSONResponse
from pydantic import BaseModel
from typing import Optional

from ..streaming import create_stream, get_stream, cleanup_stream, run_agent_in_thread, cancel_stream

router = APIRouter(prefix="/api/chat", tags=["chat"])


class StartRunRequest(BaseModel):
    input: str | list[dict]
    conversation_history: list[dict] | None = None
    instructions: str | None = None
    session_id: str | None = None
    model: str | None = None


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

    # Get model (passed through to agent thread, which does full resolution)
    model = body.model or ""

    # Start agent in background thread
    thread = threading.Thread(
        target=run_agent_in_thread,
        kwargs={
            "stream_id": stream_id,
            "session_id": session_id,
            "msg_text": msg_text,
            "model": model,
            "workspace": workspace,
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
                    break
        finally:
            cleanup_stream(stream_id)

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
    }
