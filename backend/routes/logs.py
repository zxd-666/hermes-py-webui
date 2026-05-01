"""Logs endpoints: list log files, read log entries."""
import os
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/hermes/logs", tags=["logs"])

LOGS_DIR = HERMES_HOME / "logs"

# Log levels in priority order
_LEVELS = {"DEBUG": 10, "INFO": 20, "WARNING": 30, "ERROR": 40, "CRITICAL": 50}


def _clean(s: str) -> str:
    """Remove control characters that break JSON output."""
    return re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", s)


def _parse_log_line(line: str) -> Optional[dict]:
    """Parse a hermes agent log line into structured data."""
    if not line.strip():
        return None
    entry = {"raw": _clean(line.strip())}
    try:
        # Try pipe-delimited: 2026-04-30 16:24:03 | INFO | module | message
        m = re.match(
            r"(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.,]\d+)?)\s*\|\s*(\w+)\s*\|\s*(\S+)\s*\|\s*(.*)",
            line,
        )
        if m:
            entry["timestamp"] = m.group(1)
            entry["level"] = m.group(2)
            entry["logger"] = m.group(3)
            entry["message"] = _clean(m.group(4).strip())
            entry["raw"] = None
        else:
            # Standard Python logging: 2026-05-01 17:09:57,106 INFO [session_id] module: message
            m = re.match(
                r"(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.,]\d+)?)\s+(\w+)\s+(?:\[\S+\]\s+)?(\S+?):\s*(.*)",
                line,
            )
            if m:
                entry["timestamp"] = m.group(1)
                entry["level"] = m.group(2)
                entry["logger"] = m.group(3)
                entry["message"] = _clean(m.group(4).strip())
                entry["raw"] = None
    except Exception:
        pass
    return entry


@router.get("")
async def list_logs():
    """List available log files."""
    if not LOGS_DIR.exists():
        return {"files": []}
    files = []
    for entry in sorted(LOGS_DIR.iterdir()):
        if entry.is_file() and entry.name.endswith((".log", ".txt")):
            stat = entry.stat()
            files.append({
                "name": entry.name,
                "size": stat.st_size,
                "modTime": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).isoformat(),
            })
    return {"files": files}


@router.get("/{name}")
async def read_log(
    name: str,
    lines: int = Query(200, description="Max lines to return"),
    level: Optional[str] = Query(None, description="Minimum log level (DEBUG/INFO/WARNING/ERROR)"),
    session: Optional[str] = Query(None, description="Filter by session ID"),
    since: Optional[str] = Query(None, description="Only entries after this timestamp"),
):
    """Read log entries from a log file."""
    target = LOGS_DIR / name
    if not target.is_file():
        # Try appending .log extension
        target = LOGS_DIR / f"{name}.log"
    if not target.is_file():
        return JSONResponse(status_code=404, content={"error": "log file not found"})

    min_level = _LEVELS.get(level or "", 0)

    try:
        all_lines = target.read_text(encoding="utf-8", errors="replace").splitlines()
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

    # Take last N lines
    all_lines = all_lines[-lines:]

    entries = []
    for line in all_lines:
        parsed = _parse_log_line(line)
        if parsed is None:
            continue
        # Filter by level
        if min_level > 0:
            entry_level = _LEVELS.get(parsed.get("level", ""), 0)
            if entry_level < min_level:
                continue
        # Filter by session
        if session and session not in (parsed.get("message", "") or ""):
            continue
        # Filter by time
        if since:
            ts = parsed.get("timestamp", "")
            if ts and ts < since:
                continue
        entries.append(parsed)

    return {"entries": entries}
