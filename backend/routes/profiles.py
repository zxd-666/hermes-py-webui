"""Profiles endpoints: list, detail, create, delete, rename, switch, export/import, avatar, providers."""
import asyncio
import json
import shutil
import sys
import tarfile
import tempfile
from pathlib import Path

from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse, FileResponse

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/hermes/profiles", tags=["profiles"])

PROFILES_DIR = HERMES_HOME / "profiles"

# Ensure hermes_cli is importable (same as config_route.py)
_HERMES_AGENT_DIR = HERMES_HOME / "hermes-agent"
if str(_HERMES_AGENT_DIR) not in sys.path:
    sys.path.insert(0, str(_HERMES_AGENT_DIR))


def _profile_dir(name: str) -> Path:
    """Return the filesystem directory for a profile."""
    if name == "default":
        return HERMES_HOME
    return PROFILES_DIR / name


def _discover_providers(config_path: Path) -> list[dict]:
    """Discover available providers from a profile's config.yaml + .env.

    Returns list of dicts: {provider, label, base_url, models, api_key}.
    Reuses the same discovery logic as config_route.get_available_models.
    """
    import yaml

    if not config_path.exists():
        return []

    with open(config_path) as f:
        cfg = yaml.safe_load(f) or {}

    model_cfg = cfg.get("model", {})
    default = model_cfg.get("default", "")
    default_provider = model_cfg.get("provider", "")

    groups: list[dict] = []
    seen: set[str] = set()
    hidden = set(cfg.get("hidden_providers", []))

    def add_group(provider, label, base_url, models, api_key):
        if provider in seen or provider in hidden:
            return
        seen.add(provider)
        groups.append({
            "provider": provider,
            "label": label,
            "base_url": base_url,
            "models": models,
            "api_key": api_key,
        })

    # 1a. custom_providers
    for cp in cfg.get("custom_providers", []):
        if not isinstance(cp, dict):
            continue
        name = cp.get("name", "")
        if not name:
            continue
        pool_key = f"custom:{name}"
        base_url = cp.get("base_url", "")
        api_key = cp.get("api_key", "") or cp.get("key_env", "")
        models = []
        if cp.get("models"):
            m = cp["models"]
            models = list(m.keys()) if isinstance(m, dict) else list(m)
        if not models and cp.get("model"):
            models = [cp["model"]]
        add_group(pool_key, name, base_url, models, api_key)

    # 1b. credentials_pool
    pool = cfg.get("credentials_pool", {})
    for pool_key, pool_cfg in pool.items():
        if not isinstance(pool_cfg, dict):
            continue
        base_url = pool_cfg.get("base_url", "")
        api_key = pool_cfg.get("api_key", "")
        models = pool_cfg.get("models", [])
        if not models and pool_cfg.get("model"):
            models = [pool_cfg["model"]]
        label = pool_key.split(":", 1)[1] if ":" in pool_key else pool_key
        add_group(pool_key, label, base_url, models, api_key)

    # 2. .env API keys → builtin providers
    profile_dir = config_path.parent
    env_path = profile_dir / ".env"
    env_vars: dict[str, str] = {}
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                k, _, v = line.partition("=")
                env_vars[k.strip()] = v.strip()

    try:
        from hermes_cli.auth import PROVIDER_REGISTRY
    except ImportError:
        PROVIDER_REGISTRY = {}

    try:
        from hermes_cli.models import _PROVIDER_MODELS
    except ImportError:
        _PROVIDER_MODELS = {}

    for pk, pinfo in PROVIDER_REGISTRY.items():
        if pk in seen:
            continue
        if pinfo.auth_type != "api_key":
            continue
        has_key = any(
            env_vars.get(ev, "").strip() not in ("", "#")
            for ev in pinfo.api_key_env_vars
        )
        if not has_key:
            continue
        base_url = pinfo.inference_base_url
        if pinfo.base_url_env_var and env_vars.get(pinfo.base_url_env_var, "").strip():
            base_url = env_vars[pinfo.base_url_env_var].strip()
        api_key_val = ""
        for ev in pinfo.api_key_env_vars:
            if env_vars.get(ev, "").strip():
                api_key_val = "***"
                break
        catalog = _PROVIDER_MODELS.get(pk, [])
        models = list(catalog) if isinstance(catalog, (list, tuple)) else []
        label = pinfo.name
        add_group(pk, label, base_url, models, api_key_val)

    # 3. Ensure default model is visible
    if default and not any(default in g.get("models", []) for g in groups):
        label = default_provider
        if ":" in (label or ""):
            label = label.split(":", 1)[1]
        add_group(
            default_provider or default,
            label or default,
            model_cfg.get("base_url", ""),
            [default],
            "",
        )

    return groups


async def _run_hermes(args: list[str], timeout: int = 30) -> tuple[int, str, str]:
    """Run a hermes CLI command and return (exit_code, stdout, stderr)."""
    # Try PATH first, then fallback to platform-specific venv path
    from ..config import HERMES_HOME, _find_hermes_bin
    hermes_bin = _find_hermes_bin()
    proc = await asyncio.create_subprocess_exec(
        hermes_bin, *args,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    try:
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout)
    except asyncio.TimeoutError:
        proc.kill()
        return -1, "", "command timed out"
    return proc.returncode, stdout.decode("utf-8", errors="replace"), stderr.decode("utf-8", errors="replace")


@router.get("")
async def list_profiles():
    """List all hermes profiles."""
    code, stdout, stderr = await _run_hermes(["profile", "list", "--json"])
    if code == 0 and stdout.strip():
        try:
            data = json.loads(stdout.strip())
            items = data.get("profiles", data)
            # Enrich with hasAvatar from filesystem
            for p in items:
                if isinstance(p, dict):
                    pdir = _profile_dir(p.get("name", ""))
                    p["hasAvatar"] = (pdir / "avatar.png").exists()
            return {"profiles": items}
        except json.JSONDecodeError:
            pass

    # Read active profile name from ~/.hermes/active_profile
    # When file is missing/empty, active profile is "default"
    _active_name = "default"
    try:
        content = (HERMES_HOME / "active_profile").read_text().strip()
        if content:
            _active_name = content
    except Exception:
        pass

    # Fallback: parse from directory listing
    if not PROFILES_DIR.exists():
        profiles = []
    else:
        profiles = []
        for entry in sorted(PROFILES_DIR.iterdir()):
            if not entry.is_dir():
                continue
            cfg = entry / "config.yaml"
            model, gateway = "", ""
            if cfg.exists():
                try:
                    import yaml
                    with open(cfg) as f:
                        c = yaml.safe_load(f) or {}
                    model = (c.get("model") or {}).get("default", "")
                    gateway = (c.get("platforms") or {}).get("api_server", {}).get("extra", {}).get("port", "")
                except Exception:
                    pass
            profiles.append({
                "name": entry.name,
                "active": entry.name == _active_name,
                "model": model,
                "gateway": gateway,
                "alias": entry.name,
                "hasAvatar": (entry / "avatar.png").exists(),
            })

    # Ensure the "default" profile (root config.yaml) is always present
    default_names = {p["name"] for p in profiles}
    if "default" not in default_names:
        import yaml
        root_cfg_path = HERMES_HOME / "config.yaml"
        model, gateway = "", ""
        if root_cfg_path.exists():
            try:
                with open(root_cfg_path) as f:
                    c = yaml.safe_load(f) or {}
                model = (c.get("model") or {}).get("default", "")
                gateway = (c.get("platforms") or {}).get("api_server", {}).get("extra", {}).get("port", "")
            except Exception:
                pass
        profiles.insert(0, {
            "name": "default",
            "active": "default" == _active_name,
            "model": model,
            "gateway": gateway,
            "alias": "default",
            "hasAvatar": (HERMES_HOME / "avatar.png").exists(),
        })

    return {"profiles": profiles}


@router.get("/{name}")
async def get_profile(name: str):
    """Get detail for a specific profile."""
    code, stdout, stderr = await _run_hermes(["profile", "show", name, "--json"])
    if code == 0 and stdout.strip():
        try:
            data = json.loads(stdout.strip())
            return {"profile": data.get("profile", data)}
        except json.JSONDecodeError:
            pass

    # Fallback: build from filesystem
    if name == "default":
        target = HERMES_HOME
        cfg = target / "config.yaml"
    else:
        target = PROFILES_DIR / name
        cfg = target / "config.yaml"
        if not target.is_dir():
            return JSONResponse(status_code=404, content={"error": "profile not found"})
    model, provider = "", ""
    if cfg.exists():
        try:
            import yaml
            with open(cfg) as f:
                c = yaml.safe_load(f) or {}
            model = (c.get("model") or {}).get("default", "")
            provider = (c.get("model") or {}).get("provider", "")
        except Exception:
            pass

    # Count skills
    skills_dir = target / "skills"
    skill_count = 0
    if skills_dir.is_dir():
        skill_count = sum(1 for _ in skills_dir.rglob("SKILL.md"))

    return {
        "profile": {
            "name": name,
            "path": str(target),
            "model": model,
            "provider": provider,
            "gateway": "",
            "skills": skill_count,
            "hasEnv": (target / ".env").exists(),
            "hasSoulMd": (target / "SOUL.md").exists(),
            "hasAvatar": (target / "avatar.png").exists(),
        }
    }


@router.post("")
async def create_profile(body: dict):
    """Create a new profile, optionally cloning from current."""
    name = body.get("name", "")
    clone = body.get("clone", False)
    if not name:
        return JSONResponse(status_code=400, content={"error": "name is required"})

    args = ["profile", "create", name]
    if clone:
        args.append("--clone")

    code, stdout, stderr = await _run_hermes(args)
    return {"success": code == 0}


@router.delete("/{name}")
async def delete_profile(name: str):
    """Delete a profile."""
    code, stdout, stderr = await _run_hermes(["profile", "delete", name, "--yes"])
    if code != 0:
        return JSONResponse(status_code=400, content={"error": stderr.strip()})
    return {"ok": True}


@router.post("/{name}/rename")
async def rename_profile(name: str, body: dict):
    """Rename a profile."""
    new_name = body.get("new_name", "")
    if not new_name:
        return JSONResponse(status_code=400, content={"error": "new_name is required"})

    code, stdout, stderr = await _run_hermes(["profile", "rename", name, new_name])
    if code != 0:
        return JSONResponse(status_code=400, content={"error": stderr.strip()})
    return {"ok": True}


@router.put("/active")
async def switch_profile(body: dict):
    """Switch to a different profile."""
    name = body.get("name", "")
    if not name:
        return JSONResponse(status_code=400, content={"error": "name is required"})

    code, stdout, stderr = await _run_hermes(["profile", "use", name])
    if code != 0:
        return JSONResponse(status_code=400, content={"error": stderr.strip()})
    return {"ok": True}


@router.post("/{name}/export")
async def export_profile(name: str):
    """Export a profile as tar.gz archive."""
    target = PROFILES_DIR / name
    if not target.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})

    tmp = Path(tempfile.mktemp(suffix=".tar.gz"))
    try:
        with tarfile.open(str(tmp), "w:gz") as tar:
            for entry in target.rglob("*"):
                if entry.is_file():
                    arcname = entry.relative_to(target.parent)
                    tar.add(str(entry), arcname=str(arcname))
        return FileResponse(str(tmp), media_type="application/gzip",
                            filename=f"hermes-profile-{name}.tar.gz")
    except Exception as e:
        if tmp.exists():
            tmp.unlink()
        return JSONResponse(status_code=500, content={"error": str(e)})


@router.post("/import")
async def import_profile(file: UploadFile = File(...)):
    """Import a profile from tar.gz archive."""
    tmp = Path(tempfile.mktemp(suffix=".tar.gz"))
    try:
        with open(str(tmp), "wb") as f:
            f.write(await file.read())

        with tarfile.open(str(tmp), "r:gz") as tar:
            # Find profile directory name from archive
            members = tar.getnames()
            if not members:
                raise ValueError("empty archive")
            # First segment is the profile name
            profile_name = members[0].split("/")[0]
            extract_dir = PROFILES_DIR / profile_name
            if extract_dir.exists():
                return JSONResponse(status_code=400, content={"error": "profile already exists"})
            extract_dir.mkdir(parents=True, exist_ok=True)
            tar.extractall(str(extract_dir))

        return {"ok": True, "name": profile_name}
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": str(e)})
    finally:
        if tmp.exists():
            tmp.unlink()


@router.patch("/{name}/model")
async def update_profile_model(name: str, body: dict):
    """Update model config for a profile."""
    target = _profile_dir(name)
    if name != "default" and not target.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})

    import yaml

    cfg_path = target / "config.yaml"
    config = {}
    if cfg_path.exists():
        try:
            with open(cfg_path) as f:
                config = yaml.safe_load(f) or {}
        except Exception:
            config = {}

    config.setdefault("model", {})
    config["model"]["default"] = body.get("model", "")
    config["model"]["provider"] = body.get("provider", "")

    with open(cfg_path, "w") as f:
        yaml.dump(config, f, allow_unicode=True, default_flow_style=False)

    return {"ok": True}


# --- Avatar endpoints ---

@router.post("/{name}/avatar")
async def upload_avatar(name: str, file: UploadFile = File(...)):
    """Upload an avatar image for a profile. Accepts png/jpg/webp, max 512KB."""
    target = _profile_dir(name)
    if name != "default" and not target.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})

    # Validate content type
    allowed = {"image/png", "image/jpeg", "image/webp"}
    if file.content_type and file.content_type not in allowed:
        return JSONResponse(status_code=400, content={"error": "only png/jpg/webp allowed"})

    data = await file.read()
    if len(data) > 512 * 1024:
        return JSONResponse(status_code=400, content={"error": "image too large (max 512KB)"})

    target.mkdir(parents=True, exist_ok=True)
    avatar_path = target / "avatar.png"
    avatar_path.write_bytes(data)

    return {"ok": True}


@router.get("/{name}/avatar")
async def get_avatar(name: str):
    """Get the avatar image for a profile."""
    target = _profile_dir(name)
    avatar_path = target / "avatar.png"
    if not avatar_path.exists():
        return JSONResponse(status_code=404, content={"error": "no avatar"})

    return FileResponse(
        str(avatar_path),
        media_type="image/png",
        headers={"Cache-Control": "public, max-age=60"},
    )


@router.delete("/{name}/avatar")
async def delete_avatar(name: str):
    """Delete the avatar image for a profile."""
    target = _profile_dir(name)
    avatar_path = target / "avatar.png"
    if not avatar_path.exists():
        return JSONResponse(status_code=404, content={"error": "no avatar"})

    avatar_path.unlink()
    return {"ok": True}


# --- Profile-level providers endpoint ---

@router.get("/{name}/providers")
async def get_profile_providers(name: str):
    """Get available providers for a specific profile based on its own config."""
    target = _profile_dir(name)
    if name != "default" and not target.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})

    cfg_path = target / "config.yaml"
    groups = _discover_providers(cfg_path)

    # Also return the profile's current model/provider from config
    import yaml
    default_model = ""
    default_provider = ""
    if cfg_path.exists():
        try:
            with open(cfg_path) as f:
                c = yaml.safe_load(f) or {}
            mc = c.get("model", {})
            default_model = mc.get("default", "")
            default_provider = mc.get("provider", "")
        except Exception:
            pass

    return {
        "default": default_model,
        "default_provider": default_provider,
        "groups": groups,
    }
