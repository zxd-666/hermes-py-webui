"""Auth system: middleware + 6 API routes.

Storage: ~/.hermes/webui-auth.json
  {
    "username": "admin",
    "password_hash": "$2b$12$...",
    "tokens": { "session_token": "username" }
  }

When no password is set, auth is disabled (open access).
When password is set, all /api/ routes require Bearer token.
Auth routes themselves (/api/auth/*) are always accessible.
"""
import hashlib
import hmac
import json
import os
import secrets
import threading
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, HTTPException, Request, Response
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/api/auth", tags=["auth"])

AUTH_FILE = Path(os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes"))) / "webui-auth.json"
_lock = threading.Lock()


def _load() -> dict:
    """Load auth data from disk."""
    if AUTH_FILE.exists():
        try:
            data = json.loads(AUTH_FILE.read_text("utf-8"))
            if not isinstance(data, dict):
                return {}
            return data
        except (json.JSONDecodeError, OSError):
            return {}
    return {}


def _save(data: dict):
    """Save auth data to disk."""
    AUTH_FILE.parent.mkdir(parents=True, exist_ok=True)
    AUTH_FILE.write_text(json.dumps(data, indent=2), "utf-8")


def _hash_password(password: str) -> str:
    """Hash password with SHA-256 + salt (no bcrypt dependency)."""
    salt = secrets.token_hex(16)
    hashed = hashlib.sha256((salt + password).encode()).hexdigest()
    return f"sha256${salt}${hashed}"


def _verify_password(password: str, stored: str) -> bool:
    """Verify password against stored hash."""
    parts = stored.split("$")
    if len(parts) != 3 or parts[0] != "sha256":
        return False
    salt, hashed = parts[1], parts[2]
    computed = hashlib.sha256((salt + password).encode()).hexdigest()
    return hmac.compare_digest(computed, hashed)


def _generate_token(username: str) -> str:
    """Generate a random session token."""
    return secrets.token_urlsafe(32)


def is_auth_enabled() -> bool:
    """Check if password login is configured."""
    data = _load()
    return bool(data.get("password_hash"))


async def check_auth(request: Request):
    """Middleware: if password is set, validate Bearer token."""
    data = _load()
    if not data.get("password_hash"):
        return True  # No password configured, open access

    auth = request.headers.get("Authorization", "")
    token = ""
    if auth.startswith("Bearer "):
        token = auth[7:]
    # Also check query param for SSE connections
    if not token:
        token = request.query_params.get("token", "")

    if not token:
        raise HTTPException(status_code=401, detail="Unauthorized")

    # Validate token against stored tokens
    with _lock:
        tokens = data.get("tokens", {})
        if token not in tokens:
            raise HTTPException(status_code=401, detail="Invalid token")

    return True


def require_current_password(request: Request) -> str:
    """Extract current user from token, raise if not authenticated."""
    auth = request.headers.get("Authorization", "")
    token = ""
    if auth.startswith("Bearer "):
        token = auth[7:]
    if not token:
        token = request.query_params.get("token", "")

    data = _load()
    tokens = data.get("tokens", {})
    username = tokens.get(token)
    if not username:
        raise HTTPException(status_code=401, detail="Not authenticated")
    return username


# ─── API Routes ────────────────────────────────────────────────


@router.get("/status")
async def get_auth_status():
    """Check if password login is enabled and get username."""
    data = _load()
    has_password = bool(data.get("password_hash"))
    username = data.get("username") if has_password else None
    return {"hasPasswordLogin": has_password, "username": username}


@router.post("/setup")
async def setup_password(request: Request):
    """Set password for the first time. Only works when no password exists."""
    body = await request.json()
    username = (body.get("username") or "").strip()
    password = body.get("password", "")

    if not username or len(username) < 2:
        raise HTTPException(status_code=400, detail="Username must be at least 2 characters")
    if not password or len(password) < 6:
        raise HTTPException(status_code=400, detail="Password must be at least 6 characters")

    with _lock:
        data = _load()
        if data.get("password_hash"):
            raise HTTPException(status_code=400, detail="Password already set. Use change-password instead.")
        data["username"] = username
        data["password_hash"] = _hash_password(password)
        data["tokens"] = {}
        _save(data)

    return {"ok": True}


@router.post("/login")
async def login(request: Request):
    """Login with username and password, return session token."""
    body = await request.json()
    username = (body.get("username") or "").strip()
    password = body.get("password", "")

    if not username or not password:
        raise HTTPException(status_code=400, detail="Username and password required")

    with _lock:
        data = _load()
        stored_hash = data.get("password_hash")
        if not stored_hash:
            raise HTTPException(status_code=400, detail="Password login not configured")
        if data.get("username") != username:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        if not _verify_password(password, stored_hash):
            raise HTTPException(status_code=401, detail="Invalid credentials")

        # Generate session token
        token = _generate_token(username)
        tokens = data.get("tokens", {})
        tokens[token] = username
        data["tokens"] = tokens
        _save(data)

    return {"token": token}


@router.post("/change-password")
async def change_password(request: Request):
    """Change password. Requires current password for verification."""
    body = await request.json()
    current_password = body.get("currentPassword", "")
    new_password = body.get("newPassword", "")

    if not current_password or not new_password:
        raise HTTPException(status_code=400, detail="Current and new password required")
    if len(new_password) < 6:
        raise HTTPException(status_code=400, detail="New password must be at least 6 characters")

    with _lock:
        data = _load()
        stored_hash = data.get("password_hash")
        if not stored_hash or not _verify_password(current_password, stored_hash):
            raise HTTPException(status_code=401, detail="Current password incorrect")
        data["password_hash"] = _hash_password(new_password)
        # Invalidate all existing tokens (force re-login)
        data["tokens"] = {}
        _save(data)

    return {"ok": True}


@router.post("/change-username")
async def change_username(request: Request):
    """Change username. Requires current password for verification."""
    body = await request.json()
    current_password = body.get("currentPassword", "")
    new_username = (body.get("newUsername") or "").strip()

    if not current_password or not new_username:
        raise HTTPException(status_code=400, detail="Current password and new username required")
    if len(new_username) < 2:
        raise HTTPException(status_code=400, detail="Username must be at least 2 characters")

    with _lock:
        data = _load()
        stored_hash = data.get("password_hash")
        if not stored_hash or not _verify_password(current_password, stored_hash):
            raise HTTPException(status_code=401, detail="Current password incorrect")
        data["username"] = new_username
        _save(data)

    return {"ok": True}


@router.delete("/password")
async def remove_password(request: Request):
    """Remove password login entirely (disable auth)."""
    with _lock:
        data = _load()
        data.pop("password_hash", None)
        data.pop("username", None)
        data["tokens"] = {}
        _save(data)

    return {"ok": True}
