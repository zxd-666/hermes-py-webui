"""System endpoints: health, status, update, platform service management."""
import asyncio
import os
import subprocess
import sys
from pathlib import Path
from fastapi import APIRouter

from backend.config import get_lan_access, IS_WINDOWS

router = APIRouter(tags=["system"])

SERVICE_NAME = "HermesPyWebUI"


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
        "Label": "com.hermes.py-webui",
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


# ── macOS (launchd) ──────────────────────────────────────────────

_LAUNCHD_LABEL = "com.hermes.py-webui"
_PLIST_DIR = Path.home() / "Library" / "LaunchAgents"
_PLIST_PATH = _PLIST_DIR / f"{_LAUNCHD_LABEL}.plist"


@router.get("/api/hermes/service")
async def service_status():
    """Check auto-start service status."""
    if IS_WINDOWS:
        return _windows_service_status()
    return _macos_service_status()


@router.post("/api/hermes/service/install")
async def service_install():
    """Install auto-start service."""
    if IS_WINDOWS:
        return await _windows_service_install()
    return await _macos_service_install()


@router.post("/api/hermes/service/uninstall")
async def service_uninstall():
    """Remove auto-start service."""
    if IS_WINDOWS:
        return await _windows_service_uninstall()
    return _macos_service_uninstall()


# ── macOS implementation ──────────────────────────────────────────

def _macos_service_status():
    uid = os.getuid()
    loaded = False
    try:
        result = subprocess.run(
            ["launchctl", "print", f"gui/{uid}/{_LAUNCHD_LABEL}"],
            capture_output=True, text=True, timeout=5,
        )
        loaded = result.returncode == 0
    except Exception:
        pass
    return {
        "enabled": _PLIST_PATH.exists(),
        "loaded": loaded,
        "plist_path": str(_PLIST_PATH),
    }


async def _macos_service_install():
    plist_dict = _generate_plist()
    _PLIST_DIR.mkdir(parents=True, exist_ok=True)
    with open(_PLIST_PATH, "wb") as f:
        import plistlib
        plistlib.dump(plist_dict, f)
    uid = os.getuid()
    subprocess.run(
        ["launchctl", "bootout", f"gui/{uid}/{_LAUNCHD_LABEL}"],
        capture_output=True, timeout=5,
    )
    result = subprocess.run(
        ["launchctl", "bootstrap", f"gui/{uid}", str(_PLIST_PATH)],
        capture_output=True, text=True, timeout=5,
    )
    if result.returncode != 0:
        return {"ok": False, "error": result.stderr.strip()}
    return {"ok": True}


def _macos_service_uninstall():
    if _PLIST_PATH.exists():
        _PLIST_PATH.unlink()
    return {"ok": True}


# ── Windows implementation (Task Scheduler) ───────────────────────

def _windows_service_status():
    """Check if a scheduled task exists."""
    try:
        result = subprocess.run(
            ["schtasks", "/Query", "/TN", SERVICE_NAME],
            capture_output=True, text=True, timeout=5,
        )
        return {"enabled": result.returncode == 0}
    except Exception:
        return {"enabled": False}


async def _windows_service_install():
    """Create a scheduled task that runs at user logon."""
    root = _project_root()
    python_bin = root / ".venv" / "Scripts" / "python.exe"
    if not python_bin.exists():
        python_bin = Path(sys.executable)
    host = "0.0.0.0" if get_lan_access() else "127.0.0.1"
    log_dir = Path.home() / ".hermes" / "logs"
    log_dir.mkdir(parents=True, exist_ok=True)

    # schtasks /create with TRIGGER=LOGON
    cmd = [
        "schtasks", "/Create",
        "/TN", SERVICE_NAME,
        "/TR", f'"{python_bin}" -m uvicorn backend.main:app --host {host} --port 9898',
        "/SC", "ONLOGON",
        "/RL", "HIGHEST",
        "/F",
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
    if result.returncode != 0:
        return {"ok": False, "error": result.stderr.strip() or result.stdout.strip()}
    return {"ok": True}


async def _windows_service_uninstall():
    """Delete the scheduled task."""
    try:
        result = subprocess.run(
            ["schtasks", "/Delete", "/TN", SERVICE_NAME, "/F"],
            capture_output=True, text=True, timeout=5,
        )
        return {"ok": True}
    except Exception as e:
        return {"ok": False, "error": str(e)}


@router.get("/health")
async def health():
    return {"status": "ok", "service": "hermes-py-webui"}


@router.get("/api/hermes/lan-access")
async def get_lan_access_api():
    """Return current LAN access setting."""
    from backend.config import get_lan_access
    return {"lan_access": get_lan_access()}


@router.get("/api/hermes/local-ip")
async def get_local_ip():
    """Return the machine's LAN IP address."""
    import socket
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return {"ip": ip}
    except Exception:
        return {"ip": "127.0.0.1"}


@router.put("/api/hermes/lan-access")
async def set_lan_access_api(body: dict):
    """Set LAN access, update plist, then restart the service."""
    from backend.config import set_lan_access
    enabled = bool(body.get("lan_access", False))
    ok = set_lan_access(enabled)
    if not ok:
        return {"ok": False, "error": "Failed to save setting"}

    # Update launchd plist so the setting survives reboot
    _update_service_config()

    # Schedule self-restart in a background thread so the response reaches the client
    import threading
    threading.Thread(target=_delayed_restart, daemon=True, args=(1.5,)).start()

    return {"ok": True, "lan_access": enabled}


def _update_service_config():
    """Regenerate service config with current settings (called when LAN access changes)."""
    if IS_WINDOWS:
        # Recreate the scheduled task with new host setting
        try:
            asyncio.get_event_loop().run_until_complete(_windows_service_install())
        except RuntimeError:
            pass
    else:
        import plistlib
        try:
            plist_dict = _generate_plist()
            _PLIST_DIR.mkdir(parents=True, exist_ok=True)
            with open(_PLIST_PATH, "wb") as f:
                plistlib.dump(plist_dict, f)
        except Exception:
            pass


def _delayed_restart(delay: float):
    """Wait, then replace the current process with a fresh one."""
    import time
    time.sleep(delay)
    os.execv(sys.executable, [sys.executable, "-m", "backend.main"])


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
