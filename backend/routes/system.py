"""System endpoints: health, status, update."""
import asyncio
import subprocess
from fastapi import APIRouter

router = APIRouter(tags=["system"])


@router.get("/health")
async def health():
    return {"status": "ok", "service": "hermes-py-webui"}


@router.get("/api/hermes/status")
async def hermes_status():
    """Basic status info."""
    import sys
    from backend.config import STATE_DB, AGENT_DIR
    return {
        "python": sys.version,
        "state_db": str(STATE_DB),
        "state_db_exists": STATE_DB.exists(),
        "agent_dir": str(AGENT_DIR),
        "agent_exists": AGENT_DIR.exists(),
    }


@router.post("/api/hermes/update")
async def trigger_update():
    """Trigger hermes update via CLI."""
    proc = await asyncio.create_subprocess_exec(
        "hermes", "update",
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    stdout, stderr = await proc.communicate()
    output = stdout.decode("utf-8", errors="replace")
    err = stderr.decode("utf-8", errors="replace")
    return {
        "success": proc.returncode == 0,
        "message": output or err or "Update completed",
    }
