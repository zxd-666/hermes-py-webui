"""Session endpoints: list, get, delete, rename, search, usage."""
from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
from typing import Optional

from ..db import (
    list_sessions, get_session, get_session_messages,
    delete_session, rename_session, search_sessions,
    get_usage_stats,
)

router = APIRouter(prefix="/api/hermes", tags=["sessions"])


@router.get("/sessions")
async def sessions_list(
    source: Optional[str] = Query(None),
    limit: int = Query(50),
):
    sessions = list_sessions(source=source, limit=limit)
    # Add preview from last user message
    for s in sessions:
        msgs = get_session_messages(s["id"], limit=3)
        for m in reversed(msgs):
            if m.get("role") == "user" and m.get("content"):
                s["preview"] = m["content"][:100]
                break
    return {"sessions": sessions}


@router.get("/sessions/{session_id}")
async def session_detail(session_id: str):
    s = get_session(session_id)
    if not s:
        return JSONResponse(status_code=404, content={"error": "session not found"})
    messages = get_session_messages(session_id)
    return {"session": {**s, "messages": messages}}


@router.delete("/sessions/{session_id}")
async def session_delete(session_id: str):
    return {"deleted": delete_session(session_id)}


@router.post("/sessions/{session_id}/rename")
async def session_rename(session_id: str, body: dict):
    title = body.get("title", "")
    return {"renamed": rename_session(session_id, title)}


@router.post("/sessions/{session_id}/workspace")
async def session_workspace(session_id: str, body: dict):
    # Workspace is client-side only in this implementation
    return {"ok": True}


@router.get("/search/sessions")
async def sessions_search(
    q: str = Query(...),
    source: Optional[str] = Query(None),
    limit: int = Query(20),
):
    results = search_sessions(q=q, source=source, limit=limit)
    return {"results": results}


@router.get("/usage/stats")
async def usage_stats(days: int = Query(30)):
    return get_usage_stats(days=days)


@router.get("/sessions/usage")
async def sessions_usage(ids: str = Query("")):
    """Batch token usage for session IDs (comma-separated)."""
    if not ids:
        return {}
    from ..db import _conn
    conn = _conn()
    try:
        id_list = [i.strip() for i in ids.split(",") if i.strip()]
        if not id_list:
            return {}
        placeholders = ",".join("?" * len(id_list))
        rows = conn.execute(
            f"SELECT id, COALESCE(input_tokens,0) as input_tokens, COALESCE(output_tokens,0) as output_tokens FROM sessions WHERE id IN ({placeholders})",
            id_list,
        ).fetchall()
        return {r["id"]: {"input_tokens": r["input_tokens"], "output_tokens": r["output_tokens"]} for r in rows}
    finally:
        conn.close()


@router.get("/sessions/{session_id}/usage")
async def session_usage_single(session_id: str):
    from ..db import _conn
    conn = _conn()
    try:
        r = conn.execute(
            "SELECT COALESCE(input_tokens,0) as input_tokens, COALESCE(output_tokens,0) as output_tokens FROM sessions WHERE id = ?",
            (session_id,),
        ).fetchone()
        if r:
            return {"input_tokens": r["input_tokens"], "output_tokens": r["output_tokens"]}
        return {"input_tokens": 0, "output_tokens": 0}
    finally:
        conn.close()


@router.get("/sessions/context-length")
async def context_length():
    """Return configured context length."""
    try:
        from hermes_cli.config import load_config
        cfg = load_config()
        cl = cfg.get("model", {}).get("context_length", 128000)
        return {"context_length": cl}
    except Exception:
        return {"context_length": 128000}
