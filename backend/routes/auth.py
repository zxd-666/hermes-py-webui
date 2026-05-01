"""Auth middleware: check Bearer token if HERMES_PY_WEBUI_PASSWORD is set."""
import os
from fastapi import Request, HTTPException

_PASSWORD = os.environ.get("HERMES_PY_WEBUI_PASSWORD", "")


async def check_auth(request: Request):
    """If password is configured, validate Bearer token."""
    if not _PASSWORD:
        return True
    auth = request.headers.get("Authorization", "")
    if auth == f"Bearer {_PASSWORD}":
        return True
    # Also check query param for SSE connections
    token = request.query_params.get("token", "")
    if token == _PASSWORD:
        return True
    raise HTTPException(status_code=401, detail="Unauthorized")
