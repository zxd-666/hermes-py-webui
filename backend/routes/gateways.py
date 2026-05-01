"""Gateways endpoints: list status, start/stop, health check."""
import asyncio
import json
import os
import signal
from pathlib import Path

from fastapi import APIRouter
from fastapi.responses import JSONResponse

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/hermes/gateways", tags=["gateways"])

PROFILES_DIR = HERMES_HOME / "profiles"


def _read_gateway_state(home: Path) -> dict:
    """Read gateway state from a hermes home directory."""
    result = {
        "profile": "default",
        "port": None,
        "host": "127.0.0.1",
        "url": "",
        "running": False,
        "pid": None,
    }

    # Read gateway_state.json
    state_file = home / "gateway_state.json"
    if state_file.exists():
        try:
            with open(state_file) as f:
                state = json.load(f)
            result["running"] = state.get("gateway_state") == "running"
        except Exception:
            pass

    # Read gateway.pid
    pid_file = home / "gateway.pid"
    if pid_file.exists():
        try:
            with open(pid_file) as f:
                pid_data = json.load(f)
            pid = pid_data.get("pid")
            result["pid"] = pid
            # Check if process is actually running
            if pid:
                try:
                    os.kill(pid, 0)  # Signal 0 = check existence
                    result["running"] = True
                except (ProcessLookupError, PermissionError):
                    result["running"] = False
        except Exception:
            pass

    # Read port from config.yaml
    cfg = home / "config.yaml"
    if cfg.exists():
        try:
            import yaml
            with open(cfg) as f:
                c = yaml.safe_load(f) or {}
            gw = (c.get("platforms") or {}).get("api_server", {})
            extra = gw.get("extra", {})
            port = extra.get("port", 8642)
            host = extra.get("host", "127.0.0.1")
            result["port"] = port
            result["host"] = host
            result["url"] = f"http://{host}:{port}"
        except Exception:
            pass

    return result


@router.get("")
async def list_gateways():
    """List all gateway statuses."""
    gateways = []

    # Default gateway (main home)
    gateways.append(_read_gateway_state(HERMES_HOME))

    # Profile gateways
    if PROFILES_DIR.exists():
        for entry in sorted(PROFILES_DIR.iterdir()):
            if not entry.is_dir():
                continue
            gw = _read_gateway_state(entry)
            gw["profile"] = entry.name
            gateways.append(gw)

    return {"gateways": gateways}


@router.post("/{name}/start")
async def start_gateway(name: str):
    """Start a gateway (via hermes CLI)."""
    proc = await asyncio.create_subprocess_exec(
        "hermes", "gateway", "start",
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    await proc.communicate()
    if proc.returncode != 0:
        return JSONResponse(status_code=500, content={"error": "failed to start gateway"})

    home = PROFILES_DIR / name if name != "default" else HERMES_HOME
    return {"success": True, "gateway": _read_gateway_state(home)}


@router.post("/{name}/stop")
async def stop_gateway(name: str):
    """Stop a gateway (via hermes CLI)."""
    proc = await asyncio.create_subprocess_exec(
        "hermes", "gateway", "stop",
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    await proc.communicate()
    return {"ok": True}


@router.get("/{name}/health")
async def check_gateway_health(name: str):
    """Check gateway health by reading state file."""
    home = PROFILES_DIR / name if name != "default" else HERMES_HOME
    if not home.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})
    return {"gateway": _read_gateway_state(home)}
