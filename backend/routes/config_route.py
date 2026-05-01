"""Config endpoints: read/write hermes config.yaml, model management, providers."""
import asyncio
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
    """Save hermes config.yaml atomically."""
    import yaml
    from pathlib import Path
    config_path = Path.home() / ".hermes" / "config.yaml"
    tmp = config_path.with_suffix(".tmp")
    with open(tmp, "w") as f:
        yaml.dump(cfg, f, default_flow_style=False, allow_unicode=True)
    tmp.rename(config_path)


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


@router.get("/config/models")
async def get_config_models():
    """Get configured model groups."""
    cfg = _load_hermes_config()
    model_cfg = cfg.get("model", {})
    default = model_cfg.get("default", "")

    # Build groups from credentials pool
    pool = cfg.get("credentials_pool", {})
    groups = []

    if pool:
        for pool_key, pool_cfg in pool.items():
            if isinstance(pool_cfg, dict):
                models = pool_cfg.get("models", [])
                if not models and pool_cfg.get("model"):
                    models = [pool_cfg["model"]]
                label = pool_key
                if ":" in pool_key:
                    label = pool_key.split(":", 1)[1]
                groups.append({
                    "provider": pool_key,
                    "label": label,
                    "models": [{"id": m, "label": m} for m in models],
                })
    else:
        # Fallback: single provider from model config
        provider = model_cfg.get("provider", "")
        if provider and default:
            groups.append({
                "provider": provider,
                "label": provider,
                "models": [{"id": default, "label": default}],
            })

    return {"default": default, "groups": groups}


@router.put("/config/model")
async def update_default_model(body: dict):
    """Update the default model and optionally provider."""
    default = body.get("default", "")
    if not default:
        return {"error": "default model name required"}

    cfg = _load_hermes_config()
    if "model" not in cfg:
        cfg["model"] = {}
    cfg["model"]["default"] = default

    if "provider" in body:
        cfg["model"]["provider"] = body["provider"]
    if "base_url" in body:
        cfg["model"]["base_url"] = body["base_url"]
    if "api_key" in body:
        cfg["model"]["api_key"] = body["api_key"]

    _save_hermes_config(cfg)
    return {"ok": True}


@router.get("/available-models")
async def get_available_models():
    """Get all available models by querying configured providers."""
    cfg = _load_hermes_config()
    model_cfg = cfg.get("model", {})
    default = model_cfg.get("default", "")
    default_provider = model_cfg.get("provider", "")

    # Build groups from credentials pool
    pool = cfg.get("credentials_pool", {})
    groups = []
    all_providers = []

    if pool:
        for pool_key, pool_cfg in pool.items():
            if not isinstance(pool_cfg, dict):
                continue
            base_url = pool_cfg.get("base_url", "")
            api_key = pool_cfg.get("api_key", "")
            models = pool_cfg.get("models", [])
            if not models and pool_cfg.get("model"):
                models = [pool_cfg["model"]]

            label = pool_key
            if ":" in pool_key:
                label = pool_key.split(":", 1)[1]

            group = {
                "provider": pool_key,
                "label": label,
                "base_url": base_url,
                "models": models,
                "api_key": api_key,
            }
            all_providers.append(group)

            if pool_key == default_provider or not pool_key.startswith("custom:"):
                groups.append(group)
    else:
        # Fallback: single provider
        base_url = model_cfg.get("base_url", "")
        group = {
            "provider": default_provider,
            "label": default_provider,
            "base_url": base_url,
            "models": [default] if default else [],
            "api_key": "",
        }
        groups.append(group)
        all_providers.append(group)

    return {
        "default": default,
        "default_provider": default_provider,
        "groups": groups,
        "allProviders": all_providers,
    }


@router.post("/config/providers")
async def add_provider(body: dict):
    """Add a custom provider to the credentials pool."""
    name = body.get("name", "")
    base_url = body.get("base_url", "")
    api_key = body.get("api_key", "")
    model = body.get("model", "")

    if not name:
        return {"error": "provider name required"}

    cfg = _load_hermes_config()
    pool = cfg.get("credentials_pool", {})
    pool_key = f"custom:{name}"

    pool[pool_key] = {
        "base_url": base_url,
        "api_key": api_key,
        "model": model,
    }
    if body.get("context_length"):
        pool[pool_key]["context_length"] = body["context_length"]

    cfg["credentials_pool"] = pool
    _save_hermes_config(cfg)
    return {"ok": True}


@router.delete("/config/providers/{pool_key:path}")
async def remove_provider(pool_key: str):
    """Remove a custom provider from the credentials pool."""
    cfg = _load_hermes_config()
    pool = cfg.get("credentials_pool", {})
    if pool_key not in pool:
        return {"error": "provider not found"}
    del pool[pool_key]
    cfg["credentials_pool"] = pool
    _save_hermes_config(cfg)
    return {"ok": True}


@router.put("/config/providers/{pool_key:path}")
async def update_provider(pool_key: str, body: dict):
    """Update a provider in the credentials pool."""
    cfg = _load_hermes_config()
    pool = cfg.get("credentials_pool", {})
    if pool_key not in pool:
        return {"error": "provider not found"}

    for key in ("name", "base_url", "api_key", "model", "context_length"):
        if key in body:
            pool[pool_key][key] = body[key]

    cfg["credentials_pool"] = pool
    _save_hermes_config(cfg)
    return {"ok": True}


@router.put("/config/credentials")
async def save_credentials(body: dict):
    """Save platform credentials (API keys for telegram, discord, etc.)."""
    platform = body.get("platform", "")
    values = body.get("values", {})
    if not platform or not values:
        return {"error": "platform and values required"}

    cfg = _load_hermes_config()
    platforms = cfg.get("platforms", {})
    if platform not in platforms:
        platforms[platform] = {}
    # Merge values into platform config
    for key, value in values.items():
        platforms[platform][key] = value
    cfg["platforms"] = platforms
    _save_hermes_config(cfg)
    return {"ok": True}


@router.get("/download")
async def download_file(path: str, name: str = ""):
    """Download a file from the filesystem."""
    from fastapi.responses import FileResponse
    from pathlib import Path as P
    target = P(path).expanduser()
    if not target.is_file():
        return JSONResponse(status_code=404, content={"error": "file not found"})
    filename = name or target.name
    return FileResponse(str(target), filename=filename)
