"""System endpoints: health, models, skills."""
from fastapi import APIRouter
from pathlib import Path

router = APIRouter(tags=["system"])


@router.get("/health")
async def health():
    return {"status": "ok", "service": "hermes-py-webui"}


@router.get("/api/hermes/models")
async def list_models():
    """Return available models from config."""
    try:
        from hermes_cli.config import load_config
        cfg = load_config()
        model_cfg = cfg.get("model", {})
        return {
            "current": {
                "model": model_cfg.get("default", ""),
                "provider": model_cfg.get("provider", ""),
            },
            "providers": list(set([model_cfg.get("provider", "")])),
        }
    except Exception as e:
        return {"error": str(e)}


@router.get("/api/hermes/skills")
async def list_skills():
    """Return installed skills."""
    try:
        from hermes_cli.config import load_config
        cfg = load_config()
        skills_cfg = cfg.get("skills", {})
        return {"skills": skills_cfg}
    except Exception as e:
        return {"error": str(e)}


@router.get("/api/hermes/status")
async def hermes_status():
    """Basic status info."""
    import sys
    from .config import STATE_DB, AGENT_DIR
    return {
        "python": sys.version,
        "state_db": str(STATE_DB),
        "state_db_exists": STATE_DB.exists(),
        "agent_dir": str(AGENT_DIR),
        "agent_exists": AGENT_DIR.exists(),
    }
