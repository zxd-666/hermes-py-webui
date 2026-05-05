"""Session endpoints: list, get, delete, rename, search, usage, conversations."""
import json
from pathlib import Path
from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse
from typing import Optional

from ..config import HERMES_HOME
from ..db import (
    list_sessions, get_session, get_session_messages,
    delete_session, rename_session, search_sessions,
    get_usage_stats, get_session_lineage, get_child_session_ids,
    get_lineage_message_count, count_sessions_by_source,
)

router = APIRouter(prefix="/api/hermes", tags=["sessions"])

# ─── Profile helper ───

def _get_profile(request: Request) -> str | None:
    """Read profile name from X-Hermes-Profile header."""
    name = request.headers.get("x-hermes-profile", "").strip()
    return name if name else None

# ─── Workspace persistence ───

_WORKSPACE_META = HERMES_HOME / "webui_session_meta.json"


def _load_workspace_map() -> dict:
    if _WORKSPACE_META.exists():
        try:
            return json.loads(_WORKSPACE_META.read_text())
        except Exception:
            pass
    return {}


def _save_workspace_map(data: dict):
    _WORKSPACE_META.write_text(json.dumps(data, ensure_ascii=False, indent=2))


# ─── Conversation endpoints (MUST be before /sessions/{session_id}) ───

@router.get("/sessions/conversations")
async def conversation_summaries(
    request: Request,
    humanOnly: bool = Query(True),
    source: Optional[str] = Query(None),
    limit: int = Query(50),
):
    """List conversation summaries with richer data."""
    profile = _get_profile(request)
    sessions = list_sessions(source=source, limit=limit, profile=profile)
    wmap = _load_workspace_map()
    summaries = []
    for s in sessions:
        msgs = get_session_messages(s["id"], limit=3, profile=profile)
        preview = ""
        for m in reversed(msgs):
            if m.get("role") == "user" and m.get("content"):
                preview = m["content"][:100]
                break
        summaries.append({
            "id": s.get("id", ""),
            "source": s.get("source", ""),
            "model": s.get("model", ""),
            "title": s.get("title"),
            "started_at": s.get("started_at", 0),
            "ended_at": s.get("ended_at"),
            "last_active": s.get("last_active", 0),
            "message_count": s.get("message_count", 0),
            "tool_call_count": s.get("tool_call_count", 0),
            "input_tokens": s.get("input_tokens", 0),
            "output_tokens": s.get("output_tokens", 0),
            "cache_read_tokens": s.get("cache_read_tokens", 0),
            "cache_write_tokens": s.get("cache_write_tokens", 0),
            "reasoning_tokens": s.get("reasoning_tokens", 0),
            "estimated_cost_usd": s.get("estimated_cost_usd", 0),
            "preview": preview,
            "is_active": not s.get("ended_at"),
            "workspace": wmap.get(s["id"]),
        })
    return {"sessions": summaries}


@router.get("/sessions/conversations/{session_id}/messages")
async def conversation_messages(
    request: Request,
    session_id: str,
    humanOnly: bool = Query(True),
    source: Optional[str] = Query(None),
):
    """Get conversation messages."""
    profile = _get_profile(request)
    messages = get_session_messages(session_id, limit=1000, profile=profile)
    roles = ["user", "assistant"] if humanOnly else None
    if roles:
        messages = [m for m in messages if m.get("role") in roles]
    return {
        "session_id": session_id,
        "messages": messages,
        "visible_count": len(messages),
        "thread_session_count": 0,
    }


# ─── Fixed-path session endpoints (MUST be before /sessions/{session_id}) ───

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


@router.get("/sessions/usage")
async def sessions_usage(request: Request, ids: str = Query("")):
    """Batch token usage for session IDs (comma-separated)."""
    if not ids:
        return {}
    from ..db import _conn
    profile = _get_profile(request)
    conn = _conn(profile)
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


# ─── Core session endpoints ───

@router.get("/sessions/count-by-source")
async def sessions_count_by_source(request: Request):
    """Return raw session count per source (DB-level, no tree grouping)."""
    profile = _get_profile(request)
    counts = count_sessions_by_source(profile)
    return counts


@router.get("/sessions")
async def sessions_list(
    request: Request,
    source: Optional[str] = Query(None),
    limit: int = Query(50),
    offset: int = Query(0),
):
    profile = _get_profile(request)
    sessions = list_sessions(source=source, limit=limit, offset=offset, profile=profile)
    wmap = _load_workspace_map()
    for s in sessions:
        s["workspace"] = wmap.get(s["id"])
        msgs = get_session_messages(s["id"], limit=3, profile=profile)
        for m in reversed(msgs):
            if m.get("role") == "user" and m.get("content"):
                s["preview"] = m["content"][:100]
                break
    return {"sessions": sessions}


@router.get("/sessions/{session_id}/lineage")
async def session_lineage(request: Request, session_id: str):
    """Get full lineage chain and merged messages for a session."""
    profile = _get_profile(request)
    data = get_session_lineage(session_id, profile=profile)
    return data


@router.get("/sessions/{session_id}")
async def session_detail(request: Request, session_id: str):
    profile = _get_profile(request)
    s = get_session(session_id, profile=profile)
    if not s:
        return JSONResponse(status_code=404, content={"error": "session not found"})
    messages = get_session_messages(session_id, profile=profile)
    return {"session": {**s, "messages": messages}}


@router.get("/sessions/{session_id}/message-count")
async def session_message_count(request: Request, session_id: str):
    """Count user+assistant messages (non-empty) across the lineage chain.
    Called asynchronously by the frontend after session list loads."""
    profile = _get_profile(request)
    count = get_lineage_message_count(session_id, profile=profile)
    return {"session_id": session_id, "message_count": count}


@router.delete("/sessions/{session_id}")
async def session_delete(request: Request, session_id: str):
    profile = _get_profile(request)
    return {"deleted": delete_session(session_id, profile=profile)}


@router.post("/sessions/{session_id}/rename")
async def session_rename(request: Request, session_id: str, body: dict):
    profile = _get_profile(request)
    title = body.get("title", "")
    result = rename_session(session_id, title, profile=profile)
    return {"renamed": result["ok"], "target_id": result["target_id"], "reason": result.get("reason")}


@router.post("/sessions/{session_id}/workspace")
async def session_workspace(session_id: str, body: dict):
    """Set or clear workspace for a session. Persists to JSON file."""
    workspace = body.get("workspace", "").strip()
    wmap = _load_workspace_map()
    if workspace:
        wmap[session_id] = workspace
    else:
        wmap.pop(session_id, None)
    _save_workspace_map(wmap)
    return {"ok": True}


@router.get("/workspace/folders")
async def workspace_folders(path: str = Query("")):
    """List folders for workspace picker. Supports sub-path browsing."""
    import os

    home = str(Path.home())
    if not path:
        base = home
        scan_dir = home
    else:
        base = home
        scan_dir = path

    if not os.path.isdir(scan_dir):
        return {"base": home, "current": scan_dir, "folders": []}

    folders = []
    try:
        for entry in sorted(os.scandir(scan_dir), key=lambda e: e.name.lower()):
            if not entry.is_dir():
                continue
            name = entry.name
            # Skip hidden dirs and common noise
            if name.startswith(".") or name in ("Library", "Applications", "System"):
                continue
            rel = os.path.relpath(entry.path, base)
            folders.append({
                "name": name,
                "path": rel,
                "fullPath": entry.path,
            })
    except PermissionError:
        pass

    # Limit to prevent huge responses
    return {"base": base, "current": scan_dir, "folders": folders[:200]}


@router.get("/sessions/{session_id}/usage")
async def session_usage_single(request: Request, session_id: str):
    from ..db import _conn
    profile = _get_profile(request)
    conn = _conn(profile)
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


# ─── Search and stats ───

@router.get("/search/sessions")
async def sessions_search(
    request: Request,
    q: str = Query(...),
    source: Optional[str] = Query(None),
    limit: int = Query(20),
):
    profile = _get_profile(request)
    results = search_sessions(q=q, source=source, limit=limit, profile=profile)
    return {"results": results}


@router.get("/usage/stats")
async def usage_stats(request: Request, days: int = Query(30)):
    profile = _get_profile(request)
    return get_usage_stats(days=days, profile=profile)
