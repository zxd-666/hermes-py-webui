"""Auth system: middleware + API routes.

Storage: ~/.hermes/webui-auth.json
  {
    "password_hash": "sha256$salt$hash",
    "tokens": { "session_token": {} }
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
from pathlib import Path

from fastapi import APIRouter, HTTPException, Request

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


def _generate_token() -> str:
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
        # Enforce profile isolation
        token_entry = tokens[token]
        if isinstance(token_entry, dict):
            bound_profile = token_entry.get("profile")
        else:
            bound_profile = None

        if bound_profile is not None:
            req_profile = request.headers.get("x-hermes-profile", "").strip() or None
            if req_profile and req_profile.lower() == "default":
                req_profile = None
            if req_profile != bound_profile:
                raise HTTPException(status_code=403, detail="Token not authorized for this profile")

    return True


# ─── API Routes ────────────────────────────────────────────────


@router.get("/status")
async def get_auth_status():
    """Check if password login is enabled."""
    data = _load()
    return {"hasPassword": bool(data.get("password_hash"))}


@router.post("/setup")
async def setup_password(request: Request):
    """Set password for the first time. Only works when no password exists."""
    body = await request.json()
    password = body.get("password", "")

    if not password or len(password) < 6:
        raise HTTPException(status_code=400, detail="Password must be at least 6 characters")

    with _lock:
        data = _load()
        if data.get("password_hash"):
            raise HTTPException(status_code=400, detail="Password already set. Use change-password instead.")
        data["password_hash"] = _hash_password(password)
        data["tokens"] = {}
        _save(data)

    return {"ok": True}


@router.post("/login")
async def login(request: Request):
    """Login with password, return session token."""
    body = await request.json()
    password = body.get("password", "")

    if not password:
        raise HTTPException(status_code=400, detail="Password required")

    with _lock:
        data = _load()
        stored_hash = data.get("password_hash")
        if not stored_hash:
            raise HTTPException(status_code=400, detail="Password login not configured")
        if not _verify_password(password, stored_hash):
            raise HTTPException(status_code=401, detail="Invalid password")

        # Generate session token
        token = _generate_token()
        tokens = data.get("tokens", {})
        req_profile = request.headers.get("x-hermes-profile", "").strip()
        if req_profile and req_profile.lower() != "default":
            tokens[token] = {"profile": req_profile}
        else:
            tokens[token] = {"profile": None}
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


@router.delete("/password")
async def remove_password():
    """Remove password login entirely (disable auth)."""
    with _lock:
        data = _load()
        data.pop("password_hash", None)
        data["tokens"] = {}
        _save(data)

    return {"ok": True}
