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
        "redact_pii": False,
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

    # Read redact_pii from config.yaml
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
            result["redact_pii"] = bool((c.get("privacy") or {}).get("redact_pii", False))
            result["session_reset"] = c.get("session_reset") or {}
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
            if not entry.is_dir() or entry.name == "default":
                continue
            gw = _read_gateway_state(entry)
            gw["profile"] = entry.name
            gateways.append(gw)

    return {"gateways": gateways}


@router.post("/{name}/start")
async def start_gateway(name: str):
    """Start a gateway (via hermes CLI)."""
    hermes_bin = os.path.expanduser("~/.hermes/hermes-agent/venv/bin/hermes")
    home = PROFILES_DIR / name if name != "default" else HERMES_HOME
    env = {**os.environ}
    env["HERMES_HOME"] = str(home)
    cmd = [hermes_bin, "gateway", "start"]
    proc = await asyncio.create_subprocess_exec(
        *cmd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
        env=env,
    )
    stdout, stderr = await proc.communicate()
    if proc.returncode != 0:
        msg = stderr.decode().strip() or stdout.decode().strip() or "failed to start gateway"
        return JSONResponse(status_code=500, content={"error": msg})

    status = _read_gateway_state(home)
    status["profile"] = name
    return {"success": True, "gateway": status}


@router.post("/{name}/stop")
async def stop_gateway(name: str):
    """Stop a gateway (via hermes CLI)."""
    hermes_bin = os.path.expanduser("~/.hermes/hermes-agent/venv/bin/hermes")
    home = PROFILES_DIR / name if name != "default" else HERMES_HOME
    env = {**os.environ}
    env["HERMES_HOME"] = str(home)
    proc = await asyncio.create_subprocess_exec(
        hermes_bin, "gateway", "stop",
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
        env=env,
    )
    await proc.communicate()
    return {"ok": True}


@router.get("/{name}/health")
async def check_gateway_health(name: str):
    """Check gateway health by reading state file."""
    home = PROFILES_DIR / name if name != "default" else HERMES_HOME
    status = _read_gateway_state(home)
    status["profile"] = name
    return {"gateway": status}


@router.put("/{name}/settings")
async def update_gateway_settings(name: str, body: dict):
    """Update per-gateway settings (e.g. redact_pii) in the profile's config.yaml."""
    home = PROFILES_DIR / name if name != "default" else HERMES_HOME
    if not home.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})

    import yaml
    config_path = home / "config.yaml"
    cfg = {}
    if config_path.exists():
        try:
            with open(config_path) as f:
                cfg = yaml.safe_load(f) or {}
        except Exception:
            pass

    # Merge incoming values into existing config
    for key, value in body.items():
        if isinstance(value, dict) and key in cfg and isinstance(cfg[key], dict):
            cfg[key].update(value)
        else:
            cfg[key] = value

    tmp = config_path.with_suffix(".tmp")
    with open(tmp, "w") as f:
        yaml.dump(cfg, f, default_flow_style=False, allow_unicode=True)
    tmp.rename(config_path)

    status = _read_gateway_state(home)
    status["profile"] = name
    return {"ok": True, "gateway": status}
