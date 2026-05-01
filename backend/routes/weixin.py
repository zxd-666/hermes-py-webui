"""Weixin (WeChat) auth endpoints: QR code login (stubs)."""
import asyncio
from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/api/hermes/weixin", tags=["weixin"])


@router.get("/qrcode")
async def get_weixin_qrcode():
    """Get WeChat login QR code."""
    return JSONResponse(
        status_code=501,
        content={
            "error": "weixin auth not configured",
            "message": "WeChat QR login requires weixin platform credentials in config",
        },
    )


@router.get("/qrcode/status")
async def poll_weixin_qr_status(qrcode: str = Query(...)):
    """Poll WeChat QR scan status."""
    return JSONResponse(
        status_code=501,
        content={
            "error": "weixin auth not configured",
            "status": "expired",
        },
    )


@router.post("/save")
async def save_weixin_credentials(body: dict):
    """Save WeChat credentials (account_id, token, base_url)."""
    account_id = body.get("account_id", "")
    token = body.get("token", "")
    if not account_id or not token:
        return JSONResponse(status_code=400, content={"error": "account_id and token required"})

    from .config_route import _load_hermes_config, _save_hermes_config
    cfg = _load_hermes_config()
    platforms = cfg.get("platforms", {})
    if "weixin" not in platforms:
        platforms["weixin"] = {}
    platforms["weixin"]["account_id"] = account_id
    platforms["weixin"]["token"] = token
    if body.get("base_url"):
        platforms["weixin"]["base_url"] = body["base_url"]
    cfg["platforms"] = platforms
    _save_hermes_config(cfg)
    return {"ok": True}
