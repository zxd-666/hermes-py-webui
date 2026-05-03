"""Logs endpoints: list log files, read log entries."""
import os
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse

from ..config import profile_from_request, profile_home

router = APIRouter(prefix="/api/hermes/logs", tags=["logs"])

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
        # JSON structured log: {"ts":"...","level":"info","msg":"..."}
        if line.startswith("{"):
            import json
            obj = json.loads(line)
            ts = obj.get("ts") or obj.get("time") or obj.get("timestamp") or ""
            level = str(obj.get("level", "")).upper()
            # Normalize level names
            level_map = {"10": "DEBUG", "20": "INFO", "30": "WARNING", "WARN": "WARNING", "40": "ERROR", "50": "FATAL"}
            level = level_map.get(level, level)
            msg = obj.get("msg") or obj.get("message") or ""
            logger = obj.get("logger") or obj.get("name") or ""
            if ts:
                # Extract time portion
                if "T" in ts:
                    ts = ts.split("T")[1].split("+")[0].split(".")[0].split("Z")[0]
                m = re.match(r"(\d{2}:\d{2}:\d{2})", ts)
                if m:
                    ts = m.group(1)
            entry["timestamp"] = ts
            entry["level"] = level
            entry["logger"] = str(logger)
            entry["message"] = _clean(str(msg))
            entry["raw"] = None
            return entry

        # Pipe-delimited: 2026-04-30 16:24:03 | INFO | module | message
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
            return entry

        # Standard Python logging: 2026-05-01 17:09:57,106 INFO [session_id] module: message
        m = re.match(
            r"(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.,]\d+)?)\s+(DEBUG|INFO|WARNING|ERROR|CRITICAL)\s+(?:\[\S+\]\s+)?(\S+?):\s*(.*)",
            line,
        )
        if m:
            entry["timestamp"] = m.group(1)
            entry["level"] = m.group(2)
            entry["logger"] = m.group(3)
            entry["message"] = _clean(m.group(4).strip())
            entry["raw"] = None
            return entry

        # Uvicorn/Starlette access log: INFO: GET /api/xxx HTTP/1.1 "200 OK"
        m = re.match(
            r"(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.,]\d+)?)\s+(INFO|WARNING|ERROR):\s+(.*)",
            line,
        )
        if m:
            entry["timestamp"] = m.group(1)
            entry["level"] = m.group(2)
            entry["logger"] = "server"
            entry["message"] = _clean(m.group(3).strip())
            entry["raw"] = None
            return entry

        # [module] LEVEL: message format (e.g., [bootstrap] ERROR: ...)
        m = re.match(r"^\[([^\]]+)\]\s+(DEBUG|INFO|WARNING|ERROR|CRITICAL):\s*(.*)", line)
        if m:
            entry["timestamp"] = ""
            entry["level"] = m.group(2)
            entry["logger"] = m.group(1)
            entry["message"] = _clean(m.group(3).strip())
            entry["raw"] = None
            return entry

        # Uvicorn/Starlette without date prefix: INFO:     Started server process [50253]
        m = re.match(
            r"^\s*(INFO|WARNING|ERROR|DEBUG):\s+(.*)",
            line,
        )
        if m:
            entry["timestamp"] = ""
            entry["level"] = m.group(1)
            entry["logger"] = "server"
            entry["message"] = _clean(m.group(2).strip())
            entry["raw"] = None
            return entry

        # Python traceback / unstructured lines
        if line.strip().startswith(("Traceback", "  File", "    ", "During handling", "The above", "import ", "from ", "#", "---", "===")):
            entry["timestamp"] = ""
            entry["level"] = "DEBUG"
            entry["logger"] = "traceback"
            entry["message"] = _clean(line.strip())
            entry["raw"] = None
            return entry
    except Exception:
        pass
    # Fallback: return as raw unstructured line — promote raw to message
    entry["timestamp"] = ""
    entry["level"] = "RAW"
    entry["logger"] = ""
    entry["message"] = entry.pop("raw", "")
    entry["raw"] = None
    return entry


@router.get("")
async def list_logs(request: Request):
    """List available log files."""
    logs_dir = profile_home(profile_from_request(request)) / "logs"
    if not logs_dir.exists():
        return {"files": []}
    files = []
    for entry in sorted(logs_dir.iterdir()):
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
    request: Request,
    lines: int = Query(200, description="Max lines to return"),
    level: Optional[str] = Query(None, description="Minimum log level (DEBUG/INFO/WARNING/ERROR)"),
    session: Optional[str] = Query(None, description="Filter by session ID"),
    since: Optional[str] = Query(None, description="Only entries after this timestamp"),
):
    """Read log entries from a log file."""
    logs_dir = profile_home(profile_from_request(request)) / "logs"
    target = logs_dir / name
    if not target.is_file():
        # Try appending .log extension
        target = logs_dir / f"{name}.log"
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

    return {"entries": entries[::-1]}
