"""Channel endpoints: list channels from Hermes channel_directory.json."""
import json
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/hermes/channels", tags=["channels"])

CHANNEL_DIR_PATH = HERMES_HOME / "channel_directory.json"


def _load_directory() -> dict:
    """Load channel directory from disk."""
    if not CHANNEL_DIR_PATH.exists():
        return {"updated_at": None, "platforms": {}}
    try:
        with open(CHANNEL_DIR_PATH, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {"updated_at": None, "platforms": {}}


@router.get("")
async def list_channels(
    platform: Optional[str] = Query(None, description="Filter by platform name"),
):
    """List all channels across platforms."""
    directory = _load_directory()
    platforms = directory.get("platforms", {})

    if platform:
        channels = platforms.get(platform, [])
        return {
            "updated_at": directory.get("updated_at"),
            "platform": platform,
            "channels": channels,
            "total": len(channels),
        }

    # Flatten all channels with platform label
    all_channels = []
    for plat_name, channels in platforms.items():
        for ch in channels:
            all_channels.append({**ch, "platform": plat_name})

    return {
        "updated_at": directory.get("updated_at"),
        "platforms": {k: len(v) for k, v in platforms.items()},
        "channels": all_channels,
        "total": len(all_channels),
    }


@router.get("/summary")
async def channel_summary():
    """Return channel count per platform."""
    directory = _load_directory()
    platforms = directory.get("platforms", {})
    summary = {}
    for name, channels in platforms.items():
        count = len(channels)
        if count > 0:
            summary[name] = {
                "count": count,
                "channels": channels[:50],  # first 50 for preview
            }
    return {
        "updated_at": directory.get("updated_at"),
        "summary": summary,
    }


@router.get("/{platform}")
async def get_channels_by_platform(platform: str):
    """Get channels for a specific platform (path-based)."""
    directory = _load_directory()
    platforms = directory.get("platforms", {})
    channels = platforms.get(platform, [])
    return {
        "updated_at": directory.get("updated_at"),
        "platform": platform,
        "channels": channels,
        "total": len(channels),
    }
