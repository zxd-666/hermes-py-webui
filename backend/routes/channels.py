"""Channel endpoints: list channels from Hermes channel_directory.json."""
import json
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query, Request

from ..config import profile_from_request, profile_home

router = APIRouter(prefix="/api/hermes/channels", tags=["channels"])


def _load_directory(home: Path) -> dict:
    """Load channel directory from disk."""
    path = home / "channel_directory.json"
    if not path.exists():
        return {"updated_at": None, "platforms": {}}
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {"updated_at": None, "platforms": {}}


@router.get("")
async def list_channels(
    request: Request,
    platform: Optional[str] = Query(None, description="Filter by platform name"),
):
    """List all channels across platforms."""
    home = profile_home(profile_from_request(request))
    directory = _load_directory(home)
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
async def channel_summary(request: Request):
    """Return channel count per platform."""
    home = profile_home(profile_from_request(request))
    directory = _load_directory(home)
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
async def get_channels_by_platform(platform: str, request: Request):
    """Get channels for a specific platform (path-based)."""
    home = profile_home(profile_from_request(request))
    directory = _load_directory(home)
    platforms = directory.get("platforms", {})
    channels = platforms.get(platform, [])
    return {
        "updated_at": directory.get("updated_at"),
        "platform": platform,
        "channels": channels,
        "total": len(channels),
    }
