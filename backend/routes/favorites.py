"""REST API for message favorites."""
from fastapi import APIRouter, Request
from pydantic import BaseModel
from ..favorites_db import add, remove, is_favorited, list_all, count, get_favorited_ids
from ..db import _conn as state_db_conn

router = APIRouter(prefix="/api/favorites", tags=["favorites"])


class FavoriteIn(BaseModel):
    message_id: str
    session_id: str
    role: str
    content: str
    session_title: str = ""
    message_ts: str = ""


def _get_session_source(session_id: str) -> str:
    """Look up session source from state.db."""
    try:
        conn = state_db_conn()
        try:
            row = conn.execute(
                "SELECT COALESCE(source, '') FROM sessions WHERE id = ?", (session_id,)
            ).fetchone()
            return (row[0] if row else "") or ""
        finally:
            conn.close()
    except Exception:
        return ""


def _get_preceding_user_message(session_id: str, message_id: str) -> str:
    """Find the user message immediately before message_id in the same session."""
    try:
        conn = state_db_conn()
        try:
            row = conn.execute(
                """SELECT content FROM messages
                   WHERE session_id = ? AND role = 'user'
                     AND content IS NOT NULL AND content != ''
                     AND timestamp < (SELECT COALESCE(timestamp, 0) FROM messages WHERE id = ?)
                   ORDER BY timestamp DESC LIMIT 1""",
                (session_id, message_id),
            ).fetchone()
            if row:
                content = row[0] if hasattr(row, "keys") else row["content"]
                return content[:200] if content else ""
            return ""
        finally:
            conn.close()
    except Exception:
        return ""


@router.post("/")
def toggle_favorite(body: FavoriteIn, request: Request):
    """Add or update a favorite. (Frontend handles unfavorite via DELETE.)"""
    source = _get_session_source(body.session_id)
    row = add(
        message_id=body.message_id,
        session_id=body.session_id,
        role=body.role,
        content=body.content,
        session_title=body.session_title,
        message_ts=body.message_ts,
        source=source,
    )
    return {"ok": True, "data": row}


@router.delete("/{message_id}")
def delete_favorite(message_id: str):
    removed = remove(message_id)
    return {"ok": True, "removed": removed}


@router.get("/check/{message_id}")
def check_favorite(message_id: str):
    return {"favorited": is_favorited(message_id)}


@router.get("/ids")
def favorite_ids():
    return {"ids": list(get_favorited_ids())}


@router.get("/")
def get_favorites(limit: int = 100, offset: int = 0):
    items = list_all(limit=limit, offset=offset)
    # Backfill source for existing favorites that lack it
    for item in items:
        if not item.get("source") and item.get("session_id"):
            item["source"] = _get_session_source(item["session_id"])
    total = count()
    return {"items": items, "total": total}


@router.get("/preceding-user/{message_id}")
def get_preceding_user(message_id: str, session_id: str = ""):
    """Return the user message content immediately before this message_id."""
    if not session_id:
        return {"content": ""}
    content = _get_preceding_user_message(session_id, message_id)
    return {"content": content}
