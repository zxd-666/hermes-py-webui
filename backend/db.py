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
    """Return session trees ordered by last message time DESC.

    Tree grouping: sessions connected by parent_session_id form a tree.
    Each tree produces ONE list entry — the newest session (by started_at)
    is the entry point; all other sessions in the tree appear in ``children``
    sorted by started_at DESC.  No session is ever hidden.
    """
    conn = _conn(profile)
    try:
        # ── 1. Load all sessions (one query) ────────────────────
        all_rows = conn.execute("""
            SELECT s.*,
              (SELECT MAX(m.timestamp) FROM messages m WHERE m.session_id = s.id)
                AS last_message_ts
            FROM sessions s
        """).fetchall()

        all_sessions: dict[str, dict] = {}
        for r in all_rows:
            all_sessions[r["id"]] = dict(r)

        all_ids = set(all_sessions.keys())

        # ── 2. Find root for every session (iterative walk-up) ──
        def _find_root(sid: str) -> str:
            visited: set[str] = set()
            cur = sid
            while cur and cur not in visited and cur in all_ids:
                visited.add(cur)
                pid = all_sessions[cur].get("parent_session_id")
                if pid is None or pid not in all_ids:
                    return cur
                cur = pid
            return cur

        # ── 3. Group sessions by root → tree ────────────────────
        trees: dict[str, set[str]] = {}
        for sid in all_ids:
            root = _find_root(sid)
            trees.setdefault(root, set()).add(sid)

        # ── 4. Build entries: each tree → (newest, children) ───
        tree_entries: list[tuple[dict, list[dict]]] = []

        for _root_id, member_ids in trees.items():
            members = [all_sessions[sid] for sid in member_ids if sid in all_sessions]

            # Source filter: include tree if ANY member matches
            if source:
                if not any(m.get("source") == source for m in members):
                    continue

            # Sort by started_at DESC — newest first
            members.sort(key=lambda m: m.get("started_at") or 0, reverse=True)

            entry = _row_to_dict_like(members[0])
            children_raw = members[1:]

            # Tree-level last activity = max across all members
            tree_last_ts = max((m.get("last_message_ts") or 0) for m in members)
            entry["_tree_last_ts"] = tree_last_ts

            children: list[dict] = []
            for c in children_raw:
                children.append({
                    "id": c["id"],
                    "title": c.get("title") or "",
                    "message_count": c.get("message_count") or 0,
                    "started_at": c.get("started_at"),
                    "ended_at": c.get("ended_at"),
                    "last_message_ts": c.get("last_message_ts"),
                    "source": c.get("source"),
                })
            entry["children"] = children
            entry["lineage_count"] = 1 + len(children)
            entry["lineage_message_count"] = None
            tree_entries.append((entry, children))

        # ── 5. Sort trees by last activity DESC ─────────────────
        tree_entries.sort(
            key=lambda x: x[0].pop("_tree_last_ts", 0) or 0,
            reverse=True,
        )

        # ── 6. Paginate ────────────────────────────────────────
        paginated = tree_entries[offset:offset + limit]
        results = [entry for entry, _children in paginated]

        # ── 7. Batch fallback titles ────────────────────────────
        fallback_ids: list[str] = []
        for s in results:
            if not s.get("title"):
                fallback_ids.append(s["id"])
            for c in s.get("children", []):
                if not c.get("title"):
                    fallback_ids.append(c["id"])

        title_map: dict[str, str] = {}
        if fallback_ids:
            id_list = fallback_ids
            placeholders = ",".join("?" * len(id_list))
            title_rows = conn.execute(
                f"SELECT session_id, content FROM messages "
                f"WHERE session_id IN ({placeholders}) "
                f"AND role = 'user' AND content IS NOT NULL AND content != '' "
                f"GROUP BY session_id HAVING MIN(id)",
                id_list,
            ).fetchall()
            for r in title_rows:
                sid = r["session_id"] if hasattr(r, "keys") else r[0]
                content = r["content"] if hasattr(r, "keys") else r[1]
                title_map[sid] = content[:100] if content else ""

        for s in results:
            if not s.get("title"):
                s["title"] = title_map.get(s["id"], "")
            for c in s.get("children", []):
                if not c.get("title"):
                    c["title"] = title_map.get(c["id"], "")

        # ── 8. Batch real message counts for children ───────────
        all_child_ids = []
        for s in results:
            all_child_ids.extend(c["id"] for c in s.get("children", []))

        if all_child_ids:
            placeholders = ",".join("?" * len(all_child_ids))
            count_rows = conn.execute(
                f"SELECT session_id, COUNT(*) AS cnt FROM messages "
                f"WHERE session_id IN ({placeholders}) "
                f"AND role IN ('user', 'assistant') "
                f"AND content IS NOT NULL AND content != '' "
                f"GROUP BY session_id",
                all_child_ids,
            ).fetchall()
            count_map: dict[str, int] = {
                r["session_id"] if hasattr(r, "keys") else r[0]:
                r["cnt"] if hasattr(r, "keys") else r[1]
                for r in count_rows
            }
            child_id_set = set(all_child_ids)
            for s in results:
                for c in s.get("children", []):
                    if c["id"] in child_id_set:
                        c["message_count"] = count_map.get(c["id"], c.get("message_count", 0))

        return results
    finally:
        conn.close()


def count_sessions_by_source(profile: str | None = None) -> dict[str, int]:
    """Return raw session count per source from DB (no tree grouping)."""
    conn = _conn(profile)
    try:
        rows = conn.execute(
            "SELECT source, COUNT(*) AS cnt FROM sessions GROUP BY source"
        ).fetchall()
        return {r["source"] if r["source"] else "unknown": r["cnt"] for r in rows}
    finally:
        conn.close()


def _row_to_dict_like(row: dict) -> dict:
    """Convert a raw session dict (from dict(), not sqlite3.Row) to API-safe dict."""
    d = dict(row)
    d.pop("system_prompt", None)
    return d


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

        # ── All-time stats (no time filter) ──
        all_row = conn.execute("""
            SELECT
                COALESCE(SUM(input_tokens), 0) as total_input_tokens,
                COALESCE(SUM(output_tokens), 0) as total_output_tokens,
                COALESCE(SUM(cache_read_tokens), 0) as total_cache_read_tokens,
                COALESCE(SUM(cache_write_tokens), 0) as total_cache_write_tokens,
                COALESCE(SUM(estimated_cost_usd), 0) as total_cost,
                COUNT(*) as total_sessions,
                COUNT(DISTINCT DATE(started_at, 'unixepoch', 'localtime')) as active_days
            FROM sessions
        """).fetchone()
        result = {
            "all_input_tokens": all_row["total_input_tokens"],
            "all_output_tokens": all_row["total_output_tokens"],
            "all_cache_read_tokens": all_row["total_cache_read_tokens"],
            "all_cache_write_tokens": all_row["total_cache_write_tokens"],
            "all_cost": all_row["total_cost"],
            "all_sessions": all_row["total_sessions"],
            "all_active_days": all_row["active_days"],
        }

        # ── All-time message counts ──
        msg_row = conn.execute("""
            SELECT
                COUNT(*) as total_messages,
                SUM(CASE WHEN role = 'user' AND content IS NOT NULL AND content != '' THEN 1 ELSE 0 END) as user_messages,
                SUM(CASE WHEN role = 'assistant' AND content IS NOT NULL AND content != '' THEN 1 ELSE 0 END) as assistant_messages
            FROM messages
        """).fetchone()
        result["all_messages"] = msg_row["total_messages"]
        result["all_user_messages"] = msg_row["user_messages"]
        result["all_assistant_messages"] = msg_row["assistant_messages"]

        # ── Recent (N-day) stats ──
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
        recent = _row_to_dict(row)
        result.update(recent)

        # ── Recent message counts ──
        recent_msg = conn.execute("""
            SELECT
                COUNT(*) as total_messages,
                SUM(CASE WHEN role = 'user' AND content IS NOT NULL AND content != '' THEN 1 ELSE 0 END) as user_messages,
                SUM(CASE WHEN role = 'assistant' AND content IS NOT NULL AND content != '' THEN 1 ELSE 0 END) as assistant_messages
            FROM messages WHERE timestamp >= ?
        """, (since,)).fetchone()
        result["recent_messages"] = recent_msg["total_messages"]
        result["recent_user_messages"] = recent_msg["user_messages"]
        result["recent_assistant_messages"] = recent_msg["assistant_messages"]

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

        # ── Average tokens per session (all-time) ──
        if result["all_sessions"] > 0:
            result["avg_tokens_per_session"] = (result["all_input_tokens"] + result["all_output_tokens"]) // result["all_sessions"]
        else:
            result["avg_tokens_per_session"] = 0

        # ── Hourly session distribution (recent N days) ──
        hourly_rows = conn.execute("""
            SELECT
                CAST(strftime('%H', started_at, 'unixepoch', 'localtime') AS INTEGER) as hour,
                COUNT(*) as sessions
            FROM sessions WHERE started_at >= ?
            GROUP BY hour ORDER BY hour
        """, (since,)).fetchall()
        result["hourly_distribution"] = [{"hour": r["hour"], "sessions": r["sessions"]} for r in hourly_rows]

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
