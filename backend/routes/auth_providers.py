"""Auth endpoints: Codex, Copilot, Nous OAuth device code flows (stubs)."""
import asyncio
from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/api/hermes/auth", tags=["auth"])


def _stub_response(provider: str, action: str):
    """Return a consistent stub response for unconfigured auth providers."""
    return JSONResponse(
        status_code=501,
        content={
            "error": f"{provider} auth not configured",
            "message": f"{provider} authentication requires external service configuration",
        },
    )


# ─── Codex Auth ───

@router.get("/codex/start")
async def codex_auth_start():
    """Start Codex device code auth flow."""
    return _stub_response("codex", "start")


@router.get("/codex/poll/{session_id}")
async def codex_auth_poll(session_id: str):
    """Poll Codex auth status."""
    return _stub_response("codex", "poll")


@router.get("/codex/status")
async def codex_auth_status():
    """Check Codex auth status."""
    return _stub_response("codex", "status")


# ─── Copilot Auth ───

@router.get("/copilot/start")
async def copilot_auth_start():
    """Start Copilot device code auth flow."""
    return _stub_response("copilot", "start")


@router.get("/copilot/poll/{session_id}")
async def copilot_auth_poll(session_id: str):
    """Poll Copilot auth status."""
    return _stub_response("copilot", "poll")


@router.get("/copilot/check-token")
async def copilot_check_token():
    """Check Copilot token validity."""
    return _stub_response("copilot", "check-token")


@router.post("/copilot/enable")
async def copilot_enable():
    """Enable Copilot as an ACP provider."""
    return _stub_response("copilot", "enable")


@router.post("/copilot/disable")
async def copilot_disable():
    """Disable Copilot ACP provider."""
    return _stub_response("copilot", "disable")


# ─── Nous Auth ───

@router.get("/nous/start")
async def nous_auth_start():
    """Start Nous device code auth flow."""
    return _stub_response("nous", "start")


@router.get("/nous/poll/{session_id}")
async def nous_auth_poll(session_id: str):
    """Poll Nous auth status."""
    return _stub_response("nous", "poll")


@router.get("/nous/status")
async def nous_auth_status():
    """Check Nous auth status."""
    return _stub_response("nous", "status")
