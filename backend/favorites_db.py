"""Self-contained SQLite store for message bookmarks.
Kept separate from Hermes state.db — zero coupling with agent core."""
import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent / "favorites.db"


def _conn() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("""
        CREATE TABLE IF NOT EXISTS favorites (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            message_id TEXT    NOT NULL,
            session_id TEXT    NOT NULL,
            role       TEXT    NOT NULL,
            content    TEXT    NOT NULL,
            session_title TEXT DEFAULT '',
            message_ts    TEXT DEFAULT '',
            source        TEXT DEFAULT '',
            favorited_at  TEXT NOT NULL DEFAULT (datetime('now'))
        )
    """)
    # Migrate: add source column if missing
    cols = {r[1] for r in conn.execute("PRAGMA table_info(favorites)").fetchall()}
    if "source" not in cols:
        conn.execute("ALTER TABLE favorites ADD COLUMN source TEXT DEFAULT ''")
        conn.commit()
    return conn


def add(message_id: str, session_id: str, role: str, content: str,
        session_title: str = "", message_ts: str = "", source: str = "") -> dict:
    conn = _conn()
    try:
        # Upsert: remove old then insert
        conn.execute("DELETE FROM favorites WHERE message_id = ?", (message_id,))
        conn.execute(
            """INSERT INTO favorites (message_id, session_id, role, content, session_title, message_ts, source)
               VALUES (?, ?, ?, ?, ?, ?, ?)""",
            (message_id, session_id, role, content, session_title, message_ts, source),
        )
        conn.commit()
        row = conn.execute(
            "SELECT * FROM favorites WHERE message_id = ?", (message_id,)
        ).fetchone()
        return dict(row)
    finally:
        conn.close()


def remove(message_id: str) -> bool:
    conn = _conn()
    try:
        cur = conn.execute("DELETE FROM favorites WHERE message_id = ?", (message_id,))
        conn.commit()
        return cur.rowcount > 0
    finally:
        conn.close()


def is_favorited(message_id: str) -> bool:
    conn = _conn()
    try:
        row = conn.execute(
            "SELECT 1 FROM favorites WHERE message_id = ?", (message_id,)
        ).fetchone()
        return row is not None
    finally:
        conn.close()


def list_all(limit: int = 100, offset: int = 0) -> list[dict]:
    conn = _conn()
    try:
        rows = conn.execute(
            "SELECT * FROM favorites ORDER BY favorited_at DESC LIMIT ? OFFSET ?",
            (limit, offset),
        ).fetchall()
        return [dict(r) for r in rows]
    finally:
        conn.close()


def count() -> int:
    conn = _conn()
    try:
        row = conn.execute("SELECT COUNT(*) FROM favorites").fetchone()
        return row[0]
    finally:
        conn.close()


def get_favorited_ids() -> set[str]:
    conn = _conn()
    try:
        rows = conn.execute("SELECT message_id FROM favorites").fetchall()
        return {r["message_id"] for r in rows}
    finally:
        conn.close()
