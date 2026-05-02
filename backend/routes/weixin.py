"""Weixin (WeChat) auth endpoints: QR code login via iLink API."""
import asyncio
import base64
import io
import json
import time
import logging
from pathlib import Path as _P

import aiohttp
import qrcode
from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/hermes/weixin", tags=["weixin"])

# iLink API constants (mirrored from hermes-agent gateway/platforms/weixin.py)
ILINK_BASE_URL = "https://ilinkai.weixin.qq.com"
ILINK_APP_ID = "bot"
ILINK_APP_CLIENT_VERSION = str((2 << 16) | (2 << 8) | 0)  # 2.2.0
EP_GET_BOT_QR = "ilink/bot/get_bot_qrcode"
EP_GET_QR_STATUS = "ilink/bot/get_qrcode_status"
QR_TIMEOUT_MS = 35_000

# In-memory store: qrcode_value -> session state
# Keys: qrcode, qrcode_url, created_at, base_url
_qr_sessions: dict[str, dict] = {}

# Polling cooldown per session: avoid hammering the iLink API
_last_poll: dict[str, float] = {}
_POLL_COOLDOWN = 2.0  # seconds


def _hermes_home() -> _P:
    return _P.home() / ".hermes"


def _account_dir(home: _P) -> _P:
    d = home / "platforms" / "weixin"
    d.mkdir(parents=True, exist_ok=True)
    return d


def _account_file(home: _P, account_id: str) -> _P:
    return _account_dir(home) / f"{account_id}.json"


def _save_account(account_id: str, token: str, base_url: str, user_id: str = "") -> None:
    """Persist WeChat credentials to ~/.hermes/platforms/weixin/<account_id>.json."""
    payload = {
        "token": token,
        "base_url": base_url,
        "user_id": user_id,
        "saved_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
    }
    path = _account_file(_hermes_home(), account_id)
    tmp = path.with_suffix(".tmp")
    tmp.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp.rename(path)
    try:
        path.chmod(0o600)
    except OSError:
        pass
    logger.info("weixin: saved credentials for account_id=%s", account_id)


def _update_config_platform(account_id: str, token: str, base_url: str) -> None:
    """Write account_id + token into config.yaml platforms.weixin section."""
    import yaml
    from .config_route import _load_hermes_config, _save_hermes_config

    cfg = _load_hermes_config()
    platforms = cfg.get("platforms", {})
    if "weixin" not in platforms:
        platforms["weixin"] = {}
    platforms["weixin"]["token"] = token
    extra = platforms["weixin"].get("extra", {})
    extra["account_id"] = account_id
    if base_url and base_url != ILINK_BASE_URL:
        extra["base_url"] = base_url
    platforms["weixin"]["extra"] = extra
    cfg["platforms"] = platforms
    _save_hermes_config(cfg)


def _make_qr_image(url: str) -> dict:
    """Generate a base64 QR code image from a URL string."""
    if not url:
        return {"qrcode_image": None}
    img = qrcode.make(url, box_size=6, border=2)
    buf = io.BytesIO()
    # Write raw PNG bytes without line breaks in base64
    img.save(buf)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return {"qrcode_image": f"data:image/png;base64,{b64}"}


async def _ilink_get(session: aiohttp.ClientSession, base_url: str, endpoint: str, *, timeout_ms: int | None = None) -> dict:
    url = f"{base_url.rstrip('/')}/{endpoint}"
    headers = {
        "iLink-App-Id": ILINK_APP_ID,
        "iLink-App-ClientVersion": ILINK_APP_CLIENT_VERSION,
    }
    ms = timeout_ms if timeout_ms is not None else QR_TIMEOUT_MS
    timeout = aiohttp.ClientTimeout(total=ms / 1000)
    async with session.get(url, headers=headers, timeout=timeout) as resp:
        raw = await resp.text()
        if not resp.ok:
            raise RuntimeError(f"iLink GET {endpoint} HTTP {resp.status}: {raw[:200]}")
        return json.loads(raw)


def _cleanup_expired() -> None:
    """Remove sessions older than 10 minutes."""
    now = time.time()
    expired = [k for k, v in _qr_sessions.items() if now - v.get("created_at", 0) > 600]
    for k in expired:
        _qr_sessions.pop(k, None)


@router.get("/qrcode")
async def get_weixin_qrcode():
    """Request a WeChat QR code from the iLink API."""
    _cleanup_expired()
    try:
        async with aiohttp.ClientSession() as session:
            data = await _ilink_get(session, ILINK_BASE_URL, f"{EP_GET_BOT_QR}?bot_type=3")
    except Exception as exc:
        logger.error("weixin: failed to fetch QR: %s", exc)
        return JSONResponse(
            status_code=502,
            content={"error": "qr_fetch_failed", "message": str(exc)},
        )

    qrcode_value = str(data.get("qrcode") or "")
    qrcode_url = str(data.get("qrcode_img_content") or "")
    if not qrcode_value:
        return JSONResponse(
            status_code=502,
            content={"error": "qr_no_code", "message": "iLink returned empty qrcode"},
        )

    _qr_sessions[qrcode_value] = {
        "qrcode": qrcode_value,
        "qrcode_url": qrcode_url,
        "base_url": ILINK_BASE_URL,
        "created_at": time.time(),
    }

    # Generate QR code image (base64 PNG) for the scan URL
    return {
        "qrcode": qrcode_value,
        "qrcode_url": qrcode_url or None,
        **_make_qr_image(qrcode_url),
    }


@router.get("/qrcode/status")
async def poll_weixin_qr_status(qrcode: str = Query(...)):
    """Poll WeChat QR scan status from the iLink API."""
    session_data = _qr_sessions.get(qrcode)
    if not session_data:
        return JSONResponse(
            status_code=404,
            content={"error": "session_not_found", "status": "expired"},
        )

    # Cooldown: don't hit the iLink API more than once every _POLL_COOLDOWN seconds
    now = time.time()
    last = _last_poll.get(qrcode, 0)
    if now - last < _POLL_COOLDOWN:
        # Return cached "wait" status during cooldown
        return {"status": "wait"}
    _last_poll[qrcode] = now

    base_url = session_data.get("base_url", ILINK_BASE_URL)

    try:
        async with aiohttp.ClientSession() as session:
            # Use a short timeout (5s) — the iLink status endpoint is long-polling
            # and waits up to 35s; we don't want to block the HTTP request that long.
            data = await _ilink_get(
                session,
                base_url,
                f"{EP_GET_QR_STATUS}?qrcode={qrcode}",
                timeout_ms=5000,
            )
    except (asyncio.TimeoutError, Exception) as exc:
        logger.warning("weixin: QR poll error: %s", exc)
        return {"status": "wait"}

    status = str(data.get("status") or "wait")

    if status == "scaned_but_redirect":
        redirect_host = str(data.get("redirect_host") or "")
        if redirect_host:
            session_data["base_url"] = f"https://{redirect_host}"
        return {"status": "scaned"}

    if status == "confirmed":
        account_id = str(data.get("ilink_bot_id") or "")
        token = str(data.get("bot_token") or "")
        resp_base_url = str(data.get("baseurl") or ILINK_BASE_URL)
        user_id = str(data.get("ilink_user_id") or "")

        if not account_id or not token:
            logger.error("weixin: QR confirmed but credentials incomplete")
            return JSONResponse(
                status_code=502,
                content={"error": "incomplete_credentials", "status": "expired"},
            )

        # Persist credentials
        _save_account(account_id, token, resp_base_url, user_id)
        _update_config_platform(account_id, token, resp_base_url)

        # Clean up session
        _qr_sessions.pop(qrcode, None)
        _last_poll.pop(qrcode, None)

        return {
            "status": "confirmed",
            "account_id": account_id,
            "token": token,
            "base_url": resp_base_url,
            "user_id": user_id,
        }

    if status == "expired":
        # Refresh QR automatically
        try:
            async with aiohttp.ClientSession() as session:
                new_data = await _ilink_get(session, ILINK_BASE_URL, f"{EP_GET_BOT_QR}?bot_type=3")
            new_qr = str(new_data.get("qrcode") or "")
            new_url = str(new_data.get("qrcode_img_content") or "")
            if new_qr:
                _qr_sessions[new_qr] = {
                    "qrcode": new_qr,
                    "qrcode_url": new_url,
                    "base_url": ILINK_BASE_URL,
                    "created_at": time.time(),
                }
                # Remove old session
                _qr_sessions.pop(qrcode, None)
                _last_poll.pop(qrcode, None)
                return {
                    "status": "expired",
                    "new_qrcode": new_qr,
                    "new_qrcode_url": new_url or None,
                    **_make_qr_image(new_url),
                }
        except Exception as exc:
            logger.error("weixin: QR refresh failed: %s", exc)

        _qr_sessions.pop(qrcode, None)
        _last_poll.pop(qrcode, None)
        return {"status": "expired"}

    return {"status": status}


@router.post("/save")
async def save_weixin_credentials(body: dict):
    """Save WeChat credentials (account_id, token, base_url)."""
    account_id = body.get("account_id", "")
    token = body.get("token", "")
    if not account_id or not token:
        return JSONResponse(status_code=400, content={"error": "account_id and token required"})

    base_url = body.get("base_url", ILINK_BASE_URL)
    user_id = body.get("user_id", "")

    _save_account(account_id, token, base_url, user_id)
    _update_config_platform(account_id, token, base_url)
    return {"ok": True}
