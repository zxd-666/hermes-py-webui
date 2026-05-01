"""Config endpoints: read/write hermes config.yaml."""
from fastapi import APIRouter, Query
from typing import Optional

router = APIRouter(prefix="/api/hermes", tags=["config"])


def _load_hermes_config():
    """Load hermes config.yaml via hermes CLI infrastructure."""
    try:
        from hermes_cli.config import load_config
        return load_config()
    except Exception:
        import yaml
        from pathlib import Path
        config_path = Path.home() / ".hermes" / "config.yaml"
        if config_path.exists():
            with open(config_path) as f:
                return yaml.safe_load(f) or {}
        return {}


def _save_hermes_config(cfg: dict):
    """Save hermes config.yaml."""
    import yaml
    from pathlib import Path
    config_path = Path.home() / ".hermes" / "config.yaml"
    with open(config_path, "w") as f:
        yaml.dump(cfg, f, default_flow_style=False, allow_unicode=True)


@router.get("/config")
async def get_config(sections: Optional[str] = Query(None)):
    cfg = _load_hermes_config()
    if sections:
        requested = [s.strip() for s in sections.split(",")]
        return {k: cfg.get(k) for k in requested if k in cfg}
    return cfg


@router.put("/config")
async def update_config(body: dict):
    section = body.get("section", "")
    values = body.get("values", {})
    if not section or not values:
        return {"error": "section and values required"}
    cfg = _load_hermes_config()
    if section not in cfg:
        cfg[section] = {}
    cfg[section].update(values)
    _save_hermes_config(cfg)
    return {"ok": True}
