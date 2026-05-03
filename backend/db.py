"""Thin wrapper around state.db (SQLite) for session/message queries."""
import sqlite3
import time
from pathlib import Path
from typing import Optional
from .config import get_profile_state_db


def _conn(profile: str | None = None) -> sqlite3.Connection:
    db_path = get_profile_state_db(profile)
    if not db_path.exists():
        raise FileNotFoundError(f"profile database not found: {db_path}")
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    return conn


# ── Sessions ──────────────────────────────────────────────

def list_sessions(source: Optional[str] = None, limit: int = 50, offset: int = 0,
                  profile: str | None = None) -> list[dict]:
    """Return sessions ordered by last message time DESC.
    Hides ancestor sessions (sessions referenced as parent_session_id by others).
    Adds lineage_count and lineage_message_count for chain depth."""
    conn = _conn(profile)
    try:
        # Find all ancestor session IDs (referenced as parent_session_id)
        ancestor_rows = conn.execute(
            "SELECT DISTINCT parent_session_id FROM sessions WHERE parent_session_id IS NOT NULL"
        ).fetchall()
        ancestor_ids = {r[0] for r in ancestor_rows}

        q = """
            SELECT s.*,
              (SELECT MAX(m.timestamp) FROM messages m WHERE m.session_id = s.id)
                AS last_message_ts
            FROM sessions s
        """
        params: list = []
        conditions: list[str] = []
        if source:
            conditions.append("s.source = ?")
            params.append(source)
        # Exclude ancestor sessions
        if ancestor_ids:
            placeholders = ",".join("?" * len(ancestor_ids))
            conditions.append(f"s.id NOT IN ({placeholders})")
            params.extend(ancestor_ids)
        if conditions:
            q += " WHERE " + " AND ".join(conditions)
        q += " ORDER BY last_message_ts DESC LIMIT ? OFFSET ?"
        params.extend([limit, offset])
        rows = conn.execute(q, params).fetchall()
        results = [_row_to_dict(r) for r in rows]

        # For each result, walk parent chain to compute lineage stats.
        # Skip ancestor sessions that have no messages (deleted/orphaned shells).
        for s in results:
            count = 1
            ancestors = []
            current_pid = s.get("parent_session_id")
            while current_pid:
                parent_row = conn.execute(
                    "SELECT id, title, message_count, started_at, ended_at, parent_session_id FROM sessions WHERE id = ?",
                    (current_pid,),
                ).fetchone()
                if not parent_row:
                    break
                d = dict(parent_row)
                parent_mc = d.get("message_count") or 0
                if parent_mc == 0:
                    current_pid = d.get("parent_session_id")
                    continue
                ancestors.append({
                    "id": d.get("id"),
                    "title": d.get("title") or "",
                    "message_count": parent_mc,
                    "started_at": d.get("started_at"),
                    "ended_at": d.get("ended_at"),
                })
                count += 1
                current_pid = d.get("parent_session_id")
            s["lineage_count"] = count
            # lineage_message_count is loaded asynchronously via
            # /api/sessions/:id/message-count to avoid blocking list queries.
            s["lineage_message_count"] = None
            s["ancestors"] = ancestors

        return results
    finally:
        conn.close()


def get_session(session_id: str, profile: str | None = None) -> Optional[dict]:
    conn = _conn(profile)
    try:
        r = conn.execute("SELECT * FROM sessions WHERE id = ?", (session_id,)).fetchone()
        return _row_to_dict(r) if r else None
    finally:
        conn.close()


def get_session_messages(session_id: str, limit: int = 500,
                         profile: str | None = None) -> list[dict]:
    conn = _conn(profile)
    try:
        rows = conn.execute(
            "SELECT m.*, s.model as model FROM messages m "
            "LEFT JOIN sessions s ON s.id = m.session_id "
            "WHERE m.session_id = ? ORDER BY m.timestamp ASC LIMIT ?",
            (session_id, limit),
        ).fetchall()
        return [_row_to_dict(r) for r in rows]
    finally:
        conn.close()


def delete_session(session_id: str, profile: str | None = None) -> bool:
    conn = _conn(profile)
    try:
        conn.execute("DELETE FROM messages WHERE session_id = ?", (session_id,))
        conn.execute("DELETE FROM sessions WHERE id = ?", (session_id,))
        conn.commit()
        return True
    finally:
        conn.close()


def rename_session(session_id: str, title: str, profile: str | None = None) -> dict:
    """Rename a session. If the session has descendants, update the
    **leaf** (last) session in the lineage chain instead, so the
    title is visible in the sidebar (ancestors are hidden).

    Returns {"ok": bool, "target_id": str} where target_id is the
    session that was actually updated (may differ from session_id)."""
    conn = _conn(profile)
    try:
        # Walk down the lineage to find the leaf session
        target = session_id
        seen = {target}
        while True:
            child = conn.execute(
                "SELECT id FROM sessions WHERE parent_session_id = ? LIMIT 1",
                (target,),
            ).fetchone()
            if child and child["id"] not in seen:
                target = child["id"]
                seen.add(target)
            else:
                break

        conn.execute("UPDATE sessions SET title = ? WHERE id = ?", (title, target))
        conn.commit()
        return {"ok": conn.total_changes > 0, "target_id": target}
    except Exception as e:
        if "UNIQUE constraint" in str(e):
            return {"ok": False, "target_id": session_id, "reason": "duplicate_title"}
        raise
    finally:
        conn.close()


def search_sessions(q: str, source: Optional[str] = None, limit: int = 20,
                    profile: str | None = None) -> list[dict]:
    """FTS5 full-text search on messages, return matching sessions with snippet."""
    conn = _conn(profile)
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


def get_usage_stats(days: int = 30, profile: str | None = None) -> dict:
    conn = _conn(profile)
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


def get_session_lineage(session_id: str, profile: str | None = None) -> dict:
    """Get full lineage chain for a session (walk parent_session_id up to root).
    Returns { root_id, chain: [session dicts oldest→newest], messages: [all messages merged] }.
    """
    conn = _conn(profile)
    try:
        # Walk up the parent chain to find root, skip empty shells
        chain_ids: list[str] = []
        current = session_id
        seen = set()
        while current and current not in seen:
            chain_ids.append(current)
            seen.add(current)
            row = conn.execute(
                "SELECT parent_session_id, message_count FROM sessions WHERE id = ?", (current,)
            ).fetchone()
            if not row:
                break
            mc = (row["message_count"] if hasattr(row, "keys") else row[1]) or 0
            pid = (row["parent_session_id"] if hasattr(row, "keys") else row[0])
            if mc == 0 and pid:
                # Empty shell — skip to grandparent
                current = pid
                continue
            current = pid
        chain_ids.reverse()  # oldest first

        # Fetch all session dicts in chain
        placeholders = ",".join("?" * len(chain_ids))
        rows = conn.execute(
            f"SELECT * FROM sessions WHERE id IN ({placeholders}) ORDER BY started_at ASC",
            chain_ids,
        ).fetchall()
        chain = [_row_to_dict(r) for r in rows]

        # Fetch all messages across the lineage
        msg_rows = conn.execute(
            f"SELECT m.*, s.model as model FROM messages m "
            f"LEFT JOIN sessions s ON s.id = m.session_id "
            f"WHERE m.session_id IN ({placeholders}) ORDER BY m.timestamp ASC",
            chain_ids,
        ).fetchall()
        messages = [_row_to_dict(r) for r in msg_rows]

        return {
            "root_id": chain_ids[0] if chain_ids else session_id,
            "chain": chain,
            "messages": messages,
            "chain_ids": chain_ids,
        }
    finally:
        conn.close()


def get_child_session_ids(session_id: str, profile: str | None = None) -> list[str]:
    """Get all direct children of a session (sessions whose parent_session_id = session_id)."""
    conn = _conn(profile)
    try:
        rows = conn.execute(
            "SELECT id FROM sessions WHERE parent_session_id = ?", (session_id,)
        ).fetchall()
        return [r["id"] for r in rows]
    finally:
        conn.close()


def _row_to_dict(row: sqlite3.Row) -> dict:
    """Convert sqlite3.Row to dict, filtering out sensitive fields."""
    d = dict(row)
    d.pop("system_prompt", None)
    return d


def get_lineage_message_count(session_id: str, profile: str | None = None) -> int:
    """Count user+assistant messages (non-empty content) across the full lineage tree.

    Walks both ancestor chain (parent_session_id) and descendant tree (children)
    to cover compressed sessions where new messages live in child sessions.
    """
    conn = _conn(profile)
    try:
        all_ids: set[str] = set()

        # 1. Walk ancestors (parent_session_id)
        current = session_id
        seen: set[str] = set()
        while current and current not in seen:
            all_ids.add(current)
            seen.add(current)
            row = conn.execute(
                "SELECT parent_session_id FROM sessions WHERE id = ?",
                (current,),
            ).fetchone()
            if not row:
                break
            current = row["parent_session_id"] if hasattr(row, "keys") else row[0]

        # 2. Walk descendants (children whose parent_session_id is in the tree)
        queue = list(all_ids)
        while queue:
            parent = queue.pop(0)
            children = conn.execute(
                "SELECT id FROM sessions WHERE parent_session_id = ?",
                (parent,),
            ).fetchall()
            for child in children:
                cid = child["id"] if hasattr(child, "keys") else child[0]
                if cid not in all_ids:
                    all_ids.add(cid)
                    queue.append(cid)

        if not all_ids:
            return 0
        placeholders = ",".join("?" * len(all_ids))
        row = conn.execute(
            f"SELECT COUNT(*) FROM messages WHERE session_id IN ({placeholders}) "
            "AND role IN ('user', 'assistant') "
            "AND content IS NOT NULL AND content != ''",
            list(all_ids),
        ).fetchone()
        return row[0] if row else 0
    finally:
        conn.close()
