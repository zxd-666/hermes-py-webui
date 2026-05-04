"""System endpoints: health, status, update, launchd service."""
import asyncio
import os
import plistlib
import subprocess
import sys
from pathlib import Path
from fastapi import APIRouter

from backend.config import get_lan_access

router = APIRouter(tags=["system"])

LAUNCHD_LABEL = "com.hermes.py-webui"
PLIST_DIR = Path.home() / "Library" / "LaunchAgents"
PLIST_PATH = PLIST_DIR / f"{LAUNCHD_LABEL}.plist"


def _project_root() -> Path:
    """Return the py-webui project root (where this file lives + 2 levels up)."""
    return Path(__file__).resolve().parents[2]


def _generate_plist() -> dict:
    """Build the launchd plist dict using dynamic paths."""
    root = _project_root()
    python_bin = root / ".venv" / "bin" / "python3"
    if not python_bin.exists():
        # Fallback: use sys.executable
        python_bin = Path(sys.executable)
    log_dir = Path.home() / ".hermes" / "logs"
    log_dir.mkdir(parents=True, exist_ok=True)
    host = "0.0.0.0" if get_lan_access() else "127.0.0.1"
    return {
        "Label": LAUNCHD_LABEL,
        "ProgramArguments": [
            str(python_bin), "-m", "uvicorn",
            "backend.main:app", "--host", host, "--port", "9898",
        ],
        "WorkingDirectory": str(root),
        "RunAtLoad": True,
        "KeepAlive": True,
        "StandardOutPath": str(log_dir / "hermes-py-webui.log"),
        "StandardErrorPath": str(log_dir / "hermes-py-webui.err.log"),
    }


@router.get("/api/hermes/service")
async def service_status():
    """Check launchd auto-start status."""
    uid = os.getuid()
    loaded = False
    try:
        result = subprocess.run(
            ["launchctl", "print", f"gui/{uid}/{LAUNCHD_LABEL}"],
            capture_output=True, text=True, timeout=5,
        )
        loaded = result.returncode == 0
    except Exception:
        pass
    return {
        "enabled": PLIST_PATH.exists(),
        "loaded": loaded,
        "plist_path": str(PLIST_PATH),
    }


@router.post("/api/hermes/service/install")
async def service_install():
    """Install launchd plist and load the service."""
    plist_dict = _generate_plist()
    PLIST_DIR.mkdir(parents=True, exist_ok=True)
    with open(PLIST_PATH, "wb") as f:
        plistlib.dump(plist_dict, f)
    # Unload first if already loaded, then bootstrap
    uid = os.getuid()
    subprocess.run(
        ["launchctl", "bootout", f"gui/{uid}/{LAUNCHD_LABEL}"],
        capture_output=True, timeout=5,
    )
    result = subprocess.run(
        ["launchctl", "bootstrap", f"gui/{uid}", str(PLIST_PATH)],
        capture_output=True, text=True, timeout=5,
    )
    if result.returncode != 0:
        return {"ok": False, "error": result.stderr.strip()}
    return {"ok": True}


@router.post("/api/hermes/service/uninstall")
async def service_uninstall():
    """Remove launchd plist without stopping the running service.

    Only deletes the plist file so the service won't auto-start on next
    login.  We intentionally do NOT call ``launchctl bootout`` here
    because that would terminate the current process (self-kill).
    The stale in-memory registration is harmless — it will not survive
    a reboot since the plist no longer exists.
    """
    if PLIST_PATH.exists():
        PLIST_PATH.unlink()
    return {"ok": True}


@router.get("/health")
async def health():
    return {"status": "ok", "service": "hermes-py-webui"}


@router.get("/api/hermes/lan-access")
async def get_lan_access_api():
    """Return current LAN access setting."""
    from backend.config import get_lan_access
    return {"lan_access": get_lan_access()}


@router.put("/api/hermes/lan-access")
async def set_lan_access_api(body: dict):
    """Set LAN access. Requires service restart to take effect."""
    from backend.config import set_lan_access
    enabled = bool(body.get("lan_access", False))
    ok = set_lan_access(enabled)
    if not ok:
        return {"ok": False, "error": "Failed to save setting"}
    return {"ok": True, "lan_access": enabled, "requires_restart": True}


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
