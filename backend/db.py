"""Thin wrapper around state.db (SQLite) for session/message queries."""
import sqlite3
import time
from pathlib import Path
from typing import Optional
from .config import STATE_DB


def _conn() -> sqlite3.Connection:
    conn = sqlite3.connect(str(STATE_DB))
    conn.row_factory = sqlite3.Row
    return conn


# ── Sessions ──────────────────────────────────────────────

def list_sessions(source: Optional[str] = None, limit: int = 50, offset: int = 0) -> list[dict]:
    """Return sessions ordered by started_at DESC."""
    conn = _conn()
    try:
        q = "SELECT * FROM sessions"
        params: list = []
        if source:
            q += " WHERE source = ?"
            params.append(source)
        q += " ORDER BY started_at DESC LIMIT ? OFFSET ?"
        params.extend([limit, offset])
        rows = conn.execute(q, params).fetchall()
        return [_row_to_dict(r) for r in rows]
    finally:
        conn.close()


def get_session(session_id: str) -> Optional[dict]:
    conn = _conn()
    try:
        r = conn.execute("SELECT * FROM sessions WHERE id = ?", (session_id,)).fetchone()
        return _row_to_dict(r) if r else None
    finally:
        conn.close()


def get_session_messages(session_id: str, limit: int = 500) -> list[dict]:
    conn = _conn()
    try:
        rows = conn.execute(
            "SELECT * FROM messages WHERE session_id = ? ORDER BY timestamp ASC LIMIT ?",
            (session_id, limit),
        ).fetchall()
        return [_row_to_dict(r) for r in rows]
    finally:
        conn.close()


def delete_session(session_id: str) -> bool:
    conn = _conn()
    try:
        conn.execute("DELETE FROM messages WHERE session_id = ?", (session_id,))
        conn.execute("DELETE FROM sessions WHERE id = ?", (session_id,))
        conn.commit()
        return True
    finally:
        conn.close()


def rename_session(session_id: str, title: str) -> bool:
    conn = _conn()
    try:
        conn.execute("UPDATE sessions SET title = ? WHERE id = ?", (title, session_id))
        conn.commit()
        return conn.total_changes > 0
    finally:
        conn.close()


def search_sessions(q: str, source: Optional[str] = None, limit: int = 20) -> list[dict]:
    """FTS5 full-text search on messages, return matching sessions with snippet."""
    conn = _conn()
    try:
        # Search messages for the query
        sql = """
            SELECT m.session_id, m.id as matched_message_id, m.content as snippet, s.*
            FROM messages m
            JOIN sessions s ON s.id = m.session_id
            WHERE m.content LIKE ?
        """
        params: list = [f"%{q}%"]
        if source:
            sql += " AND s.source = ?"
            params.append(source)
        sql += " ORDER BY m.timestamp DESC LIMIT ?"
        params.append(limit)
        rows = conn.execute(sql, params).fetchall()
        results = []
        for r in rows:
            d = _row_to_dict(r)
            d["matched_message_id"] = r["matched_message_id"]
            d["snippet"] = r["snippet"][:200] if r["snippet"] else ""
            d["rank"] = 0
            results.append(d)
        return results
    finally:
        conn.close()


def get_usage_stats(days: int = 30) -> dict:
    conn = _conn()
    try:
        since = time.time() - days * 86400
        row = conn.execute("""
            SELECT
                COALESCE(SUM(input_tokens), 0) as total_input_tokens,
                COALESCE(SUM(output_tokens), 0) as total_output_tokens,
                COALESCE(SUM(cache_read_tokens), 0) as total_cache_read_tokens,
                COALESCE(SUM(cache_write_tokens), 0) as total_cache_write_tokens,
                COALESCE(SUM(reasoning_tokens), 0) as total_reasoning_tokens,
                COUNT(*) as total_sessions,
                COALESCE(SUM(estimated_cost_usd), 0) as total_cost
            FROM sessions WHERE started_at >= ?
        """, (since,)).fetchone()
        result = _row_to_dict(row)

        # Model usage breakdown
        model_rows = conn.execute("""
            SELECT
                COALESCE(model, 'unknown') as model,
                COALESCE(SUM(input_tokens), 0) as input_tokens,
                COALESCE(SUM(output_tokens), 0) as output_tokens,
                COALESCE(SUM(cache_read_tokens), 0) as cache_read_tokens,
                COALESCE(SUM(cache_write_tokens), 0) as cache_write_tokens,
                COALESCE(SUM(reasoning_tokens), 0) as reasoning_tokens,
                COUNT(*) as sessions
            FROM sessions WHERE started_at >= ?
            GROUP BY model ORDER BY sessions DESC
        """, (since,)).fetchall()
        result["model_usage"] = [_row_to_dict(r) for r in model_rows]

        # Daily usage
        daily_rows = conn.execute("""
            SELECT
                DATE(started_at, 'unixepoch', 'localtime') as date,
                COALESCE(SUM(input_tokens + output_tokens), 0) as tokens,
                COALESCE(SUM(cache_read_tokens + cache_write_tokens), 0) as cache,
                COUNT(*) as sessions,
                COALESCE(SUM(estimated_cost_usd), 0) as cost
            FROM sessions WHERE started_at >= ?
            GROUP BY date ORDER BY date DESC
        """, (since,)).fetchall()
        result["daily_usage"] = [_row_to_dict(r) for r in daily_rows]

        # Source usage breakdown
        source_rows = conn.execute("""
            SELECT
                COALESCE(source, 'unknown') as source,
                COALESCE(SUM(input_tokens), 0) as input_tokens,
                COALESCE(SUM(output_tokens), 0) as output_tokens,
                COALESCE(SUM(cache_read_tokens), 0) as cache_read_tokens,
                COALESCE(SUM(cache_write_tokens), 0) as cache_write_tokens,
                COALESCE(SUM(reasoning_tokens), 0) as reasoning_tokens,
                COUNT(*) as sessions
            FROM sessions WHERE started_at >= ?
            GROUP BY source ORDER BY sessions DESC
        """, (since,)).fetchall()
        result["source_usage"] = [_row_to_dict(r) for r in source_rows]

        # Top sessions by token usage
        top_rows = conn.execute("""
            SELECT
                id, title, source, model,
                COALESCE(input_tokens, 0) as input_tokens,
                COALESCE(output_tokens, 0) as output_tokens,
                COALESCE(cache_read_tokens, 0) as cache_read_tokens,
                COALESCE(cache_write_tokens, 0) as cache_write_tokens,
                COALESCE(reasoning_tokens, 0) as reasoning_tokens,
                started_at, message_count, tool_call_count
            FROM sessions WHERE started_at >= ?
            ORDER BY (COALESCE(input_tokens, 0) + COALESCE(output_tokens, 0)) DESC
            LIMIT 10
        """, (since,)).fetchall()
        result["top_sessions"] = [_row_to_dict(r) for r in top_rows]

        result["period_days"] = days
        return result
    finally:
        conn.close()


def _row_to_dict(row: sqlite3.Row) -> dict:
    return dict(row)
