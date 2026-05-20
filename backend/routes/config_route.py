"""Config endpoints: read/write hermes config.yaml, model management, providers."""
import asyncio
import json
import os
import sys
from pathlib import Path as _P
from fastapi import APIRouter, Query, Request
from typing import Optional

# Ensure hermes_cli is importable from the hermes-agent install directory
_HERMES_HOME = _P.home() / ".hermes" / "hermes-agent"
if str(_HERMES_HOME) not in sys.path:
    sys.path.insert(0, str(_HERMES_HOME))

router = APIRouter(prefix="/api/hermes", tags=["config"])


def _profile_from_request(req: Request) -> str | None:
    """Extract profile name from X-Hermes-Profile header."""
    p = req.headers.get("x-hermes-profile", "").strip()
    return p or None


def _profile_home(profile: str | None = None) -> _P:
    """Resolve HERMES_HOME for the given profile."""
    if profile and profile != "default":
        return _P.home() / ".hermes" / "profiles" / profile
    return _P.home() / ".hermes"


def _normalize_model_section(cfg: dict) -> None:
    """Ensure cfg['model'] is a dict.

    YAML parses ``model: ''`` as a string, but every consumer expects
    a dict (``{default: ..., provider: ...}``).  Mutates *cfg* in place.
    """
    raw = cfg.get("model")
    if isinstance(raw, dict):
        return
    # string, None, or any other non-dict → build a proper dict
    cfg["model"] = {"default": str(raw) if raw else ""}


def _load_hermes_config(profile: str | None = None):
    """Load hermes config.yaml for the given profile."""
    try:
        import os
        old = os.environ.get("HERMES_HOME", "")
        try:
            os.environ["HERMES_HOME"] = str(_profile_home(profile))
            from hermes_cli.config import load_config
            cfg = load_config()
        finally:
            if old:
                os.environ["HERMES_HOME"] = old
            else:
                os.environ.pop("HERMES_HOME", None)
    except Exception:
        import yaml
        config_path = _profile_home(profile) / "config.yaml"
        cfg = None
        if config_path.exists():
            with open(config_path) as f:
                cfg = yaml.safe_load(f) or {}
    if cfg:
        _normalize_model_section(cfg)
    return cfg or {}


def _save_hermes_config(cfg: dict, profile: str | None = None):
    """Save hermes config.yaml atomically for the given profile."""
    import yaml
    config_path = _profile_home(profile) / "config.yaml"
    config_path.parent.mkdir(parents=True, exist_ok=True)
    tmp = config_path.with_suffix(".tmp")
    with open(tmp, "w") as f:
        yaml.dump(cfg, f, default_flow_style=False, allow_unicode=True)
    tmp.rename(config_path)


# ── .env / custom_providers helpers ─────────────────────────────────

def _read_env_file(profile: str | None = None) -> dict[str, str]:
    """Read .env file into key-value dict."""
    env_path = _profile_home(profile) / ".env"
    env_vars: dict[str, str] = {}
    if env_path.exists():
        for line in env_path.read_text(encoding="utf-8", errors="ignore").splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                k, _, v = line.partition("=")
                env_vars[k.strip()] = v.strip()
    return env_vars


def _upsert_env_var(var_name: str, value: str, profile: str | None = None):
    """Set or update a variable in .env, preserving comments and order."""
    env_path = _profile_home(profile) / ".env"
    if not env_path.exists():
        env_path.parent.mkdir(parents=True, exist_ok=True)
        env_path.write_text("")
    lines = env_path.read_text(encoding="utf-8", errors="ignore").splitlines()
    updated = False
    new_lines = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("#") or not stripped:
            new_lines.append(line)
            continue
        if "=" in stripped:
            k, _, _ = stripped.partition("=")
            if k.strip() == var_name:
                new_lines.append(f"{var_name}={value}")
                updated = True
                continue
        new_lines.append(line)
    if not updated:
        new_lines.append(f"{var_name}={value}")
    env_path.write_text("\n".join(new_lines) + "\n")


def _delete_env_var(var_name: str, profile: str | None = None):
    """Delete a variable from .env file."""
    env_path = _profile_home(profile) / ".env"
    if not env_path.exists():
        return
    lines = env_path.read_text(encoding="utf-8", errors="ignore").splitlines()
    new_lines = [
        line for line in lines
        if not (
            line.strip()
            and "=" in line.strip()
            and line.strip().partition("=")[0].strip() == var_name
        )
    ]
    env_path.write_text("\n".join(new_lines) + "\n")


def _generate_env_var_name(name: str, existing_env: dict[str, str]) -> str:
    """Generate a unique CUSTOM_*_API_KEY env var name from provider name."""
    import re
    base = re.sub(r"[^a-zA-Z0-9]", "_", name.strip()).upper()
    base = re.sub(r"_+", "_", base).strip("_")
    candidate = f"CUSTOM_{base}_API_KEY"
    if candidate not in existing_env:
        return candidate
    i = 2
    while f"CUSTOM_{base}_{i}_API_KEY" in existing_env:
        i += 1
    return f"CUSTOM_{base}_{i}_API_KEY"


def _is_masked(value: str) -> bool:
    """Check if a value looks like a masked placeholder."""
    return bool(value and ("•" in value or all(c in "*•" for c in value)))


# Platform sections that affect gateway runtime (not just display settings)
_GATEWAY_PLATFORM_SECTIONS = {
    "telegram", "discord", "slack", "whatsapp", "matrix",
    "feishu", "dingtalk", "weixin", "wecom", "signal",
    "qqbot", "api_server",
}


def _ensure_allow_all_users(profile: str | None = None):
    """Write GATEWAY_ALLOW_ALL_USERS=true to profile .env so any
    platform configured via WebUI can receive messages without extra
    allow-list setup."""
    env_path = _profile_home(profile) / ".env"
    content = ""
    if env_path.exists():
        content = env_path.read_text()
    if "GATEWAY_ALLOW_ALL_USERS" in content:
        # Already present — just make sure it's true
        import re
        content = re.sub(
            r"GATEWAY_ALLOW_ALL_USERS=.*",
            "GATEWAY_ALLOW_ALL_USERS=true",
            content,
        )
    else:
        content = content.rstrip("\n") + "\nGATEWAY_ALLOW_ALL_USERS=true\n"
    env_path.write_text(content)


async def _restart_gateway_if_running(profile: str | None = None):
    """Background: restart Hermes gateway if it's currently running."""
    from backend.config import _find_hermes_bin
    try:
        home = _profile_home(profile)
        pid_file = home / "gateway.pid"
        if not pid_file.exists():
            return
        with open(pid_file) as f:
            pid_data = json.load(f)
        pid = pid_data.get("pid")
        if not pid:
            return
        os.kill(pid, 0)  # check if alive
    except Exception:
        return  # not running, nothing to do

    hermes_bin = _find_hermes_bin()
    if not os.path.isfile(hermes_bin):
        return  # hermes CLI not found, nothing to do
    env = {**os.environ}
    if profile and profile != "default":
        env["HERMES_HOME"] = str(_profile_home(profile))

    try:
        # Stop
        proc = await asyncio.create_subprocess_exec(
            hermes_bin, "gateway", "stop",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            env=env,
        )
        await asyncio.wait_for(proc.communicate(), timeout=10)

        # Start
        proc = await asyncio.create_subprocess_exec(
            hermes_bin, "gateway", "start",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            env=env,
        )
        await asyncio.wait_for(proc.communicate(), timeout=15)
    except Exception:
        pass  # best-effort, don't block the caller


@router.get("/config")
async def get_config(req: Request, sections: Optional[str] = Query(None)):
    profile = _profile_from_request(req)
    cfg = _load_hermes_config(profile)
    if sections:
        requested = [s.strip() for s in sections.split(",")]
        return {k: cfg.get(k) for k in requested if k in cfg}
    return cfg


@router.put("/config")
async def update_config(req: Request, body: dict):
    profile = _profile_from_request(req)
    section = body.get("section", "")
    values = body.get("values", {})
    if not section or not values:
        return {"error": "section and values required"}
    cfg = _load_hermes_config(profile)
    if section not in cfg:
        cfg[section] = {}
    cfg[section].update(values)
    _save_hermes_config(cfg, profile)
    needs_restart = False
    if section in _GATEWAY_PLATFORM_SECTIONS:
        _ensure_allow_all_users(profile)
        needs_restart = True
    return {"ok": True, "needs_restart": needs_restart}


@router.get("/config/models")
async def get_config_models(req: Request):
    """Get configured model groups."""
    profile = _profile_from_request(req)
    cfg = _load_hermes_config(profile)
    model_cfg = cfg.get("model", {})
    default = model_cfg.get("default", "")

    # Build groups from credentials pool
    pool = cfg.get("credentials_pool") or {}
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
async def update_default_model(req: Request, body: dict):
    """Update the default model and optionally provider."""
    profile = _profile_from_request(req)
    default = body.get("default", "")
    if not default:
        return {"error": "default model name required"}

    cfg = _load_hermes_config(profile)
    if "model" not in cfg:
        cfg["model"] = {}
    cfg["model"]["default"] = default

    if "provider" in body:
        cfg["model"]["provider"] = body["provider"]
    if "base_url" in body:
        cfg["model"]["base_url"] = body["base_url"]
    if "api_key" in body:
        cfg["model"]["api_key"] = body["api_key"]

    _save_hermes_config(cfg, profile)
    return {"ok": True}


@router.get("/available-models")
async def get_available_models(req: Request):
    """Get all available models.

    Discovers providers from three sources:
    1. credentials_pool (in config.yaml) — user-added providers
    2. .env API keys — builtin providers with keys configured via hermes CLI
    3. Fallback — ensures the current default model is always visible
    """
    from pathlib import Path as P

    profile = _profile_from_request(req)
    cfg = _load_hermes_config(profile)
    model_cfg = cfg.get("model", {})
    default = model_cfg.get("default", "")
    default_provider = model_cfg.get("provider", "")

    groups = []
    all_providers = []
    seen = set()
    hidden = set(cfg.get("hidden_providers", []))

    def add_group(provider: str, label: str, base_url: str,
                  models: list, api_key: str):
        if provider in seen or provider in hidden:
            return
        seen.add(provider)
        g = {
            "provider": provider,
            "label": label,
            "base_url": base_url,
            "models": models,
            "api_key": api_key,
        }
        all_providers.append(g)
        groups.append(g)

    # --- 1a. custom_providers (config.yaml list) ---
    env_vars = _read_env_file(profile)
    for cp in cfg.get("custom_providers", []):
        if not isinstance(cp, dict):
            continue
        name = cp.get("name", "")
        if not name:
            continue
        pool_key = f"custom:{name}"
        base_url = cp.get("base_url", "")
        # Resolve api_key: key_env (from .env) > api_key (inline)
        key_env = str(cp.get("key_env", "") or "").strip()
        raw_key = ""
        display_key = ""
        if key_env and key_env in env_vars:
            raw_key = env_vars[key_env]
            display_key = _mask(raw_key)
        elif cp.get("api_key"):
            raw_key = str(cp["api_key"])
            display_key = _mask(raw_key)
        # Models: dict format { "model-name": { "context_length": ... } } or list
        models: list[str] = []
        cp_models = cp.get("models")
        if isinstance(cp_models, dict):
            models = list(cp_models.keys())
        elif isinstance(cp_models, list):
            models = list(cp_models)
        if not models and cp.get("model"):
            models = [str(cp["model"])]
        add_group(pool_key, name, base_url, models, display_key)

    # --- 1b. credentials_pool providers ---
    pool = cfg.get("credentials_pool") or {}
    for pool_key, pool_cfg in pool.items():
        if not isinstance(pool_cfg, dict):
            continue
        base_url = pool_cfg.get("base_url", "")
        api_key = pool_cfg.get("api_key", "")
        models = pool_cfg.get("models", [])
        if not models and pool_cfg.get("model"):
            models = [pool_cfg["model"]]
        # label: pool_cfg.name (custom name) > pool_key suffix > pool_key
        label = pool_cfg.get("name") or (pool_key.split(":", 1)[1] if ":" in pool_key else pool_key)
        add_group(pool_key, label, base_url, models, api_key)

    # --- 2. .env API keys → builtin providers ---
    env_path = _profile_home(profile) / ".env"
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
        # Check if any env var has a value
        has_key = any(
            env_vars.get(ev, "").strip() not in ("", "#")
            for ev in pinfo.api_key_env_vars
        )
        if not has_key:
            continue
        base_url = pinfo.inference_base_url
        if pinfo.base_url_env_var and env_vars.get(pinfo.base_url_env_var, "").strip():
            base_url = env_vars[pinfo.base_url_env_var].strip()
        # Resolve api_key for display (masked)
        api_key_val = ""
        for ev in pinfo.api_key_env_vars:
            if env_vars.get(ev, "").strip():
                api_key_val = "***"
                break
        # Model list from _PROVIDER_MODELS registry
        catalog = _PROVIDER_MODELS.get(pk, [])
        models = list(catalog) if isinstance(catalog, (list, tuple)) else []
        label = pinfo.name
        add_group(pk, label, base_url, models, api_key_val)

    # --- 3. Ensure default model is visible ---
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

    # Fix stale default_provider: if it's just "custom" or doesn't match any group,
    # find the group that actually contains the default model
    if default and default_provider:
        matched = any(
            default_provider == g["provider"] and default in g["models"]
            for g in groups
        )
        if not matched and default_provider == "custom":
            for g in groups:
                if g["provider"].startswith("custom:") and default in g["models"]:
                    default_provider = g["provider"]
                    break

    return {
        "default": default,
        "default_provider": default_provider,
        "groups": groups,
        "allProviders": all_providers,
    }


@router.post("/config/providers")
async def add_provider(req: Request, body: dict):
    """Add a provider to custom_providers list."""
    profile = _profile_from_request(req)
    name = body.get("name", "")
    base_url = body.get("base_url", "")
    api_key = body.get("api_key", "").strip()
    api_mode = body.get("api_mode", "")
    models = body.get("models", [])
    context_length = body.get("context_length")
    provider_key = body.get("providerKey")

    if not name:
        return {"error": "provider name required"}

    cfg = _load_hermes_config(profile)
    providers = cfg.get("custom_providers") or []
    if not isinstance(providers, list):
        providers = []

    # Prevent duplicate names
    if any(isinstance(e, dict) and e.get("name") == name for e in providers):
        return {"error": f"provider '{name}' already exists"}

    # Determine the provider key for matching
    # Use providerKey if given (for preset providers like zai, minimax-cn),
    # otherwise auto-generate from name
    if provider_key and provider_key not in ("custom", "custom:"):
        # Builtin/preset provider — look up the canonical env var name
        # from PROVIDER_REGISTRY so that available-models can detect it.
        env_name = None
        try:
            from hermes_cli.auth import PROVIDER_REGISTRY
            reg = PROVIDER_REGISTRY.get(provider_key)
            if reg and reg.api_key_env_vars:
                env_name = reg.api_key_env_vars[0]
        except ImportError:
            pass
        # Fallback: auto-generate a CUSTOM_* name
        if not env_name:
            env_name = _generate_env_var_name(name, _read_env_file(profile))
        _upsert_env_var(env_name, api_key, profile)
        return {"ok": True}

    # Custom provider — add to custom_providers list
    env_vars = _read_env_file(profile)
    env_name = _generate_env_var_name(name, env_vars)

    entry: dict = {
        "name": name,
        "base_url": base_url,
        "key_env": env_name,
    }
    if api_mode:
        entry["api_mode"] = api_mode
    if models:
        entry["models"] = models
    if context_length:
        entry["context_length"] = context_length

    providers.append(entry)
    cfg["custom_providers"] = providers
    _save_hermes_config(cfg, profile)

    # Write api_key to .env
    if api_key:
        _upsert_env_var(env_name, api_key, profile)

    return {"ok": True}


@router.delete("/config/providers/{pool_key:path}")
async def remove_provider(req: Request, pool_key: str):
    """Remove a provider from custom_providers, credentials_pool, or hide a builtin."""
    profile = _profile_from_request(req)
    cfg = _load_hermes_config(profile)
    removed = False

    # Extract name from key
    prov_name = pool_key.split(":", 1)[1] if ":" in pool_key else pool_key

    # 1. Try custom_providers (match by name)
    providers = cfg.get("custom_providers") or []
    if isinstance(providers, list):
        original_len = len(providers)
        # Find entry to get key_env before removing
        key_env = ""
        for entry in providers:
            if isinstance(entry, dict) and entry.get("name") == prov_name:
                key_env = str(entry.get("key_env", "") or "").strip()
                break
        providers = [
            e for e in providers
            if not (isinstance(e, dict) and e.get("name") == prov_name)
        ]
        if len(providers) < original_len:
            cfg["custom_providers"] = providers
            _save_hermes_config(cfg, profile)
            # Clean up .env var
            if key_env:
                _delete_env_var(key_env, profile)
            removed = True

    # 2. Try credentials_pool (backward compat)
    pool = cfg.get("credentials_pool") or {}
    if pool_key in pool:
        del pool[pool_key]
        cfg["credentials_pool"] = pool
        removed = True

    if removed:
        return {"ok": True}

    # 3. Builtin provider — add to hidden_providers
    hidden = set(cfg.get("hidden_providers", []))
    hidden.add(pool_key)
    cfg["hidden_providers"] = sorted(hidden)
    _save_hermes_config(cfg, profile)
    return {"ok": True}


@router.put("/config/providers/{pool_key:path}")
async def update_provider(req: Request, pool_key: str, body: dict):
    """Update a provider in custom_providers (or credentials_pool for compat)."""
    profile = _profile_from_request(req)
    cfg = _load_hermes_config(profile)
    needs_restart = False

    # Extract provider name from key (custom:NAME → NAME)
    prov_name = pool_key.split(":", 1)[1] if ":" in pool_key else pool_key

    # Try custom_providers first
    providers = cfg.get("custom_providers") or []
    if isinstance(providers, list):
        for entry in providers:
            if isinstance(entry, dict) and entry.get("name") == prov_name:
                # Update models
                if "models" in body:
                    entry["models"] = body["models"]
                # Update api_mode
                if "api_mode" in body:
                    entry["api_mode"] = body["api_mode"]
                # Update context_length
                if "context_length" in body:
                    entry["context_length"] = body["context_length"]
                # Update api_key via .env
                api_key = str(body.get("api_key", "") or "").strip()
                if api_key and not _is_masked(api_key):
                    key_env = str(entry.get("key_env", "") or "").strip()
                    if key_env:
                        _upsert_env_var(key_env, api_key, profile)
                        needs_restart = True
                # name and base_url are read-only — ignored
                cfg["custom_providers"] = providers
                _save_hermes_config(cfg, profile)
                if needs_restart:
                    await _restart_gateway_if_running(profile)
                return {"ok": True}

    # Fallback: credentials_pool (backward compat during transition)
    pool = cfg.get("credentials_pool") or {}
    if pool_key in pool:
        for key in ("name", "base_url", "api_key", "model", "models", "context_length"):
            if key in body:
                pool[pool_key][key] = body[key]
        new_name = body.get("name", "")
        if new_name and pool_key.startswith("custom:") and new_name != pool_key:
            old_key = pool_key
            new_key = f"custom:{new_name}"
            if new_key != old_key and new_key not in pool:
                pool[new_key] = pool.pop(old_key)
        cfg["credentials_pool"] = pool
        _save_hermes_config(cfg, profile)
        return {"ok": True}

    return {"error": "provider not found"}


@router.get("/config/credentials")
async def get_credentials(req: Request):
    """Return platform credentials from .env (masked) merged with config.yaml platforms section.

    Each platform key maps to { token?, extra?: { ... }, ... }.
    Tokens are masked to the first 8 chars for display.
    """
    profile = _profile_from_request(req)
    home = _profile_home(profile)
    env_path = home / ".env"

    env_vars: dict[str, str] = {}
    if env_path.exists():
        for line in env_path.read_text(encoding="utf-8", errors="ignore").splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                k, _, v = line.partition("=")
                env_vars[k.strip()] = v.strip()

    # Environment variable → platform credential mapping
    PLATFORM_ENV_MAP: dict[str, dict[str, list[str]]] = {
        "telegram": {
            "token": ["TELEGRAM_BOT_TOKEN"],
        },
        "discord": {
            "token": ["DISCORD_BOT_TOKEN"],
        },
        "slack": {
            "token": ["SLACK_BOT_TOKEN"],
        },
        "whatsapp": {
            "enabled": [],  # whatsapp uses file-based auth, check enabled
        },
        "matrix": {
            "token": ["MATRIX_ACCESS_TOKEN"],
        },
        "feishu": {
            "extra": {
                "app_id": "FEISHU_APP_ID",
                "app_secret": "FEISHU_APP_SECRET",
            },
        },
        "weixin": {
            "token": ["WEIXIN_TOKEN"],
            "extra": {
                "account_id": "WEIXIN_ACCOUNT_ID",
                "base_url": "WEIXIN_BASE_URL",
            },
        },
        "wecom": {
            "extra": {
                "bot_id": "WECOM_BOT_ID",
                "secret": "WECOM_APP_SECRET",
            },
        },
        "dingtalk": {
            "extra": {
                "client_id": "DINGTALK_CLIENT_ID",
                "client_secret": "DINGTALK_CLIENT_SECRET",
            },
        },
    }

    result: dict[str, dict] = {}
    cfg = _load_hermes_config(profile)
    yaml_platforms = cfg.get("platforms", {})

    for platform, mapping in PLATFORM_ENV_MAP.items():
        creds: dict[str, any] = {}

        # token field
        token_envs = mapping.get("token", [])
        if isinstance(token_envs, list):
            for env_key in token_envs:
                val = env_vars.get(env_key, "")
                if val:
                    creds["token"] = _mask(val)
                    break

        # extra fields
        extra_map = mapping.get("extra")
        if extra_map and isinstance(extra_map, dict):
            extra: dict[str, str] = {}
            for field_name, env_key in extra_map.items():
                val = env_vars.get(env_key, "")
                if val:
                    # Only mask secrets, not IDs or URLs
                    if any(k in field_name for k in ("secret", "token", "key", "password")):
                        extra[field_name] = _mask(val)
                    else:
                        extra[field_name] = val
            if extra:
                creds["extra"] = extra

        # Also merge config.yaml platforms section (non-sensitive fields)
        yaml_plat = yaml_platforms.get(platform, {})
        if isinstance(yaml_plat, dict):
            for k, v in yaml_plat.items():
                if k == "token":
                    if "token" not in creds and v:
                        creds["token"] = _mask(v)
                elif k == "extra" and isinstance(v, dict):
                    if "extra" not in creds:
                        creds["extra"] = {}
                    for ek, ev in v.items():
                        if ek not in creds["extra"] and ev:
                            creds["extra"][ek] = ev
                elif v is not None:
                    creds[k] = v

        # Clean up empty extra
        if not creds.get("extra"):
            creds.pop("extra", None)

        if creds:
            result[platform] = creds

    return result


def _mask(value: str) -> str:
    """Mask a sensitive value, showing first 8 chars."""
    if not value or len(value) <= 8:
        return "••••••••" if value else ""
    return value[:8] + "••••••••"


@router.put("/config/credentials")
async def save_credentials(req: Request, body: dict):
    """Save platform credentials (API keys for telegram, discord, etc.).
    Empty-string values are treated as deletion — the key is removed."""
    profile = _profile_from_request(req)
    platform = body.get("platform", "")
    values = body.get("values", {})
    if not platform:
        return {"error": "platform required"}

    cfg = _load_hermes_config(profile)
    platforms = cfg.get("platforms", {})
    if platform not in platforms:
        platforms[platform] = {}

    # Merge values; remove keys whose value is empty/null
    has_update = False
    for key, value in values.items():
        if value is None or value == "":
            platforms[platform].pop(key, None)
            has_update = True
        else:
            platforms[platform][key] = value
            has_update = True

    # Clean up empty-string values inside nested "extra" dict
    extra = platforms.get(platform, {}).get("extra")
    if isinstance(extra, dict):
        empty_extra_keys = [k for k, v in extra.items() if v is None or v == ""]
        for k in empty_extra_keys:
            extra.pop(k)
        if not extra:
            platforms[platform].pop("extra", None)

    # If no real keys left after cleanup, mark as disabled
    section = platforms.get(platform, {})
    remaining = {k: v for k, v in section.items()
                 if k != "enabled" and v is not None and v != ""}
    if not remaining:
        platforms[platform]["enabled"] = False
    elif values:
        platforms[platform]["enabled"] = True

    cfg["platforms"] = platforms
    _save_hermes_config(cfg, profile)
    _ensure_allow_all_users(profile)
    return {"ok": True, "needs_restart": bool(has_update)}


@router.get("/config/provider-presets")
async def get_provider_presets():
    """Return known API-key providers from CLI PROVIDER_REGISTRY.

    Filters out OAuth-only and AWS providers — only returns entries
    where the user needs to manually fill in an API key / base URL.
    """
    try:
        from hermes_cli.auth import PROVIDER_REGISTRY
    except ImportError:
        return []

    presets = []
    for key, cfg in PROVIDER_REGISTRY.items():
        # Skip non-API-key auth types
        if cfg.auth_type not in ("api_key",):
            continue
        presets.append({
            "id": cfg.id,
            "name": cfg.name,
            "base_url": cfg.inference_base_url,
        })
    return sorted(presets, key=lambda p: p["name"])


@router.get("/config/raw")
async def get_config_raw(req: Request):
    """Return the raw YAML text of config.yaml."""
    profile = _profile_from_request(req)
    config_path = _profile_home(profile) / "config.yaml"
    if not config_path.exists():
        return {"yaml_text": "", "config_path": str(config_path)}
    return {
        "yaml_text": config_path.read_text(encoding="utf-8", errors="ignore"),
        "config_path": str(config_path),
    }


@router.put("/config/raw")
async def save_config_raw(req: Request, body: dict):
    """Save raw YAML text to config.yaml (atomic write)."""
    profile = _profile_from_request(req)
    yaml_text = body.get("yaml_text", "")
    if not isinstance(yaml_text, str) or not yaml_text.strip():
        return {"error": "yaml_text is required"}

    # Validate YAML before writing
    import yaml
    try:
        parsed = yaml.safe_load(yaml_text)
        if parsed is not None and not isinstance(parsed, dict):
            return {"error": "config.yaml must be a mapping (dict), not a scalar or list"}
    except yaml.YAMLError as e:
        return {"error": f"Invalid YAML: {e}"}

    config_path = _profile_home(profile) / "config.yaml"
    config_path.parent.mkdir(parents=True, exist_ok=True)
    tmp = config_path.with_suffix(".tmp")
    with open(tmp, "w") as f:
        f.write(yaml_text)
    tmp.rename(config_path)

    # Reload and normalize
    cfg = _load_hermes_config(profile)
    return {"ok": True, "config": cfg}


# ── Config Schema for Settings UI ──────────────────────────────
CONFIG_SCHEMA = {
    "category_order": [
        "general",
        "display",
        "agent",
        "terminal",
        "delegation",
        "memory",
        "compression",
        "session_reset",
        "sessions",
        "approvals",
        "human_delay",
        "security",
        "browser",
        "tool_loop_guardrails",
        "tool_output",
        "auxiliary",
        "tts",
        "stt",
        "voice",
        "logging",
        "lsp",
        "kanban",
        "curator",
        "web",
        "x_search",
        "model_catalog",
        "updates",
    ],
    "fields": {
        # ── 通用 (general) ── 新增 ──
        "command_allowlist": {
            "type": "list", "category": "general",
            "label_i18n": "settings.general.command_allowlist",
            "hint_i18n": "settings.general.command_allowlistHint"
        },
        "fallback_providers": {
            "type": "list", "category": "general",
            "label_i18n": "settings.general.fallback_providers",
            "hint_i18n": "settings.general.fallback_providersHint"
        },
        "file_read_max_chars": {
            "type": "number", "category": "general",
            "label_i18n": "settings.general.file_read_max_chars",
            "hint_i18n": "settings.general.file_read_max_charsHint",
            "min": 0, "max": 999999, "step": 1
        },
        "hooks_auto_accept": {
            "type": "boolean", "category": "general",
            "label_i18n": "settings.general.hooks_auto_accept",
            "hint_i18n": "settings.general.hooks_auto_acceptHint"
        },
        "model": {
            "type": "string", "category": "general",
            "label_i18n": "settings.general.model",
            "hint_i18n": "settings.general.modelHint"
        },
        "model_context_length": {
            "type": "number", "category": "general",
            "label_i18n": "settings.general.model_context_length",
            "hint_i18n": "settings.general.model_context_lengthHint",
            "min": 0, "max": 999999, "step": 1
        },
        "prefill_messages_file": {
            "type": "string", "category": "general",
            "label_i18n": "settings.general.prefill_messages_file",
            "hint_i18n": "settings.general.prefill_messages_fileHint"
        },
        "timezone": {
            "type": "string", "category": "general",
            "label_i18n": "settings.general.timezone",
            "hint_i18n": "settings.general.timezoneHint"
        },
        "toolsets": {
            "type": "list", "category": "general",
            "label_i18n": "settings.general.toolsets",
            "hint_i18n": "settings.general.toolsetsHint"
        },
        # ── 显示 (display) ── 新增 ──
        "dashboard.show_token_analytics": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.show_token_analytics",
            "hint_i18n": "settings.display.show_token_analyticsHint"
        },
        "dashboard.theme": {
            "type": "select", "category": "display",
            "label_i18n": "settings.display.theme",
            "hint_i18n": "settings.display.themeHint",
            "options": [
                {"value": "default", "label_i18n": "settings.display.theme_opt_default"}, {"value": "midnight", "label_i18n": "settings.display.theme_opt_midnight"}, {"value": "ember", "label_i18n": "settings.display.theme_opt_ember"}, {"value": "mono", "label_i18n": "settings.display.theme_opt_mono"}, {"value": "cyberpunk", "label_i18n": "settings.display.theme_opt_cyberpunk"}, {"value": "rose", "label_i18n": "settings.display.theme_opt_rose"},
            ]
        },
        "display.bell_on_complete": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.bell_on_complete",
            "hint_i18n": "settings.display.bell_on_completeHint"
        },
        "display.busy_input_mode": {
            "type": "select", "category": "display",
            "label_i18n": "settings.display.busy_input_mode",
            "hint_i18n": "settings.display.busy_input_modeHint",
            "options": [
                {"value": "{'value': 'off', 'label_i18n': 'settings.display.busyOff'}", "label_i18n": "settings.display.busy_input_mode_opt_{'value': 'off', 'label_i18n': 'settings.display.busyOff'}"}, {"value": "{'value': 'interrupt', 'label_i18n': 'settings.display.busyInterrupt'}", "label_i18n": "settings.display.busy_input_mode_opt_{'value': 'interrupt', 'label_i18n': 'settings.display.busyInterrupt'}"},
            ]
        },
        "display.compact": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.compact",
            "hint_i18n": "settings.display.compactHint"
        },
        "display.copy_shortcut": {
            "type": "string", "category": "display",
            "label_i18n": "settings.display.copy_shortcut",
            "hint_i18n": "settings.display.copy_shortcutHint"
        },
        "display.ephemeral_system_ttl": {
            "type": "number", "category": "display",
            "label_i18n": "settings.display.ephemeral_system_ttl",
            "hint_i18n": "settings.display.ephemeral_system_ttlHint",
            "min": 0, "max": 999999, "step": 1
        },
        "display.file_mutation_verifier": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.file_mutation_verifier",
            "hint_i18n": "settings.display.file_mutation_verifierHint"
        },
        "display.final_response_markdown": {
            "type": "string", "category": "display",
            "label_i18n": "settings.display.final_response_markdown",
            "hint_i18n": "settings.display.final_response_markdownHint"
        },
        "display.inline_diffs": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.inline_diffs",
            "hint_i18n": "settings.display.inline_diffsHint"
        },
        "display.interim_assistant_messages": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.interim_assistant_messages",
            "hint_i18n": "settings.display.interim_assistant_messagesHint"
        },
        "display.language": {
            "type": "string", "category": "display",
            "label_i18n": "settings.display.language",
            "hint_i18n": "settings.display.languageHint"
        },
        "display.persistent_output": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.persistent_output",
            "hint_i18n": "settings.display.persistent_outputHint"
        },
        "display.persistent_output_max_lines": {
            "type": "number", "category": "display",
            "label_i18n": "settings.display.persistent_output_max_lines",
            "hint_i18n": "settings.display.persistent_output_max_linesHint",
            "min": 0, "max": 999999, "step": 1
        },
        "display.personality": {
            "type": "string", "category": "display",
            "label_i18n": "settings.display.personality",
            "hint_i18n": "settings.display.personalityHint"
        },
        "display.resume_display": {
            "type": "select", "category": "display",
            "label_i18n": "settings.display.resume_display",
            "hint_i18n": "settings.display.resume_displayHint",
            "options": [
                {"value": "minimal", "label_i18n": "settings.display.resume_display_opt_minimal"}, {"value": "full", "label_i18n": "settings.display.resume_display_opt_full"}, {"value": "off", "label_i18n": "settings.display.resume_display_opt_off"},
            ]
        },
        "display.runtime_footer.enabled": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.enabled",
            "hint_i18n": "settings.display.enabledHint"
        },
        "display.runtime_footer.fields": {
            "type": "list", "category": "display",
            "label_i18n": "settings.display.fields",
            "hint_i18n": "settings.display.fieldsHint"
        },
        "display.show_cost": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.show_cost",
            "hint_i18n": "settings.display.show_costHint"
        },
        "display.show_reasoning": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.show_reasoning",
            "hint_i18n": "settings.display.show_reasoningHint"
        },
        "display.skin": {
            "type": "select", "category": "display",
            "label_i18n": "settings.display.skin",
            "hint_i18n": "settings.display.skinHint",
            "options": [
                {"value": "default", "label_i18n": "settings.display.skin_opt_default"}, {"value": "ares", "label_i18n": "settings.display.skin_opt_ares"}, {"value": "mono", "label_i18n": "settings.display.skin_opt_mono"}, {"value": "slate", "label_i18n": "settings.display.skin_opt_slate"},
            ]
        },
        "display.streaming": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.streaming",
            "hint_i18n": "settings.display.streamingHint"
        },
        "display.timestamps": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.timestamps",
            "hint_i18n": "settings.display.timestampsHint"
        },
        "display.tool_preview_length": {
            "type": "number", "category": "display",
            "label_i18n": "settings.display.tool_preview_length",
            "hint_i18n": "settings.display.tool_preview_lengthHint",
            "min": 0, "max": 999999, "step": 1
        },
        "display.tool_progress_command": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.tool_progress_command",
            "hint_i18n": "settings.display.tool_progress_commandHint"
        },
        "display.tui_auto_resume_recent": {
            "type": "boolean", "category": "display",
            "label_i18n": "settings.display.tui_auto_resume_recent",
            "hint_i18n": "settings.display.tui_auto_resume_recentHint"
        },
        "display.tui_status_indicator": {
            "type": "string", "category": "display",
            "label_i18n": "settings.display.tui_status_indicator",
            "hint_i18n": "settings.display.tui_status_indicatorHint"
        },
        "display.user_message_preview.first_lines": {
            "type": "number", "category": "display",
            "label_i18n": "settings.display.first_lines",
            "hint_i18n": "settings.display.first_linesHint",
            "min": 0, "max": 999999, "step": 1
        },
        "display.user_message_preview.last_lines": {
            "type": "number", "category": "display",
            "label_i18n": "settings.display.last_lines",
            "hint_i18n": "settings.display.last_linesHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── Agent (agent) ── 新增 ──
        "agent.api_max_retries": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.api_max_retries",
            "hint_i18n": "settings.agent.api_max_retriesHint",
            "min": 0, "max": 999999, "step": 1
        },
        "agent.clarify_timeout": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.clarify_timeout",
            "hint_i18n": "settings.agent.clarify_timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "agent.disabled_toolsets": {
            "type": "list", "category": "agent",
            "label_i18n": "settings.agent.disabled_toolsets",
            "hint_i18n": "settings.agent.disabled_toolsetsHint"
        },
        "agent.gateway_auto_continue_freshness": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.gateway_auto_continue_freshness",
            "hint_i18n": "settings.agent.gateway_auto_continue_freshnessHint",
            "min": 0, "max": 999999, "step": 1
        },
        "agent.gateway_notify_interval": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.gateway_notify_interval",
            "hint_i18n": "settings.agent.gateway_notify_intervalHint",
            "min": 0, "max": 999999, "step": 1
        },
        "agent.gateway_timeout": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.gateway_timeout",
            "hint_i18n": "settings.agent.gateway_timeoutHint",
            "min": 60, "max": 7200, "step": 60
        },
        "agent.gateway_timeout_warning": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.gateway_timeout_warning",
            "hint_i18n": "settings.agent.gateway_timeout_warningHint",
            "min": 0, "max": 999999, "step": 1
        },
        "agent.image_input_mode": {
            "type": "string", "category": "agent",
            "label_i18n": "settings.agent.image_input_mode",
            "hint_i18n": "settings.agent.image_input_modeHint"
        },
        "agent.max_turns": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.max_turns",
            "hint_i18n": "settings.agent.max_turnsHint",
            "min": 1, "max": 200, "step": 5
        },
        "agent.restart_drain_timeout": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.restart_drain_timeout",
            "hint_i18n": "settings.agent.restart_drain_timeoutHint",
            "min": 10, "max": 300, "step": 10
        },
        "agent.service_tier": {
            "type": "select", "category": "agent",
            "label_i18n": "settings.agent.service_tier",
            "hint_i18n": "settings.agent.service_tierHint",
            "options": [
                {"value": "", "label_i18n": "settings.agent.service_tier_opt_empty"}, {"value": "auto", "label_i18n": "settings.agent.service_tier_opt_auto"}, {"value": "default", "label_i18n": "settings.agent.service_tier_opt_default"}, {"value": "flex", "label_i18n": "settings.agent.service_tier_opt_flex"},
            ]
        },
        "agent.tool_use_enforcement": {
            "type": "select", "category": "agent",
            "label_i18n": "settings.agent.tool_use_enforcement",
            "hint_i18n": "settings.agent.tool_use_enforcementHint",
            "options": [
                {"value": "{'value': 'auto', 'label_i18n': 'settings.agent.auto'}", "label_i18n": "settings.agent.tool_use_enforcement_opt_{'value': 'auto', 'label_i18n': 'settings.agent.auto'}"}, {"value": "{'value': 'always', 'label_i18n': 'settings.agent.always'}", "label_i18n": "settings.agent.tool_use_enforcement_opt_{'value': 'always', 'label_i18n': 'settings.agent.always'}"}, {"value": "{'value': 'never', 'label_i18n': 'settings.agent.never'}", "label_i18n": "settings.agent.tool_use_enforcement_opt_{'value': 'never', 'label_i18n': 'settings.agent.never'}"},
            ]
        },
        "checkpoints.auto_prune": {
            "type": "boolean", "category": "agent",
            "label_i18n": "settings.agent.auto_prune",
            "hint_i18n": "settings.agent.auto_pruneHint"
        },
        "checkpoints.delete_orphans": {
            "type": "boolean", "category": "agent",
            "label_i18n": "settings.agent.delete_orphans",
            "hint_i18n": "settings.agent.delete_orphansHint"
        },
        "checkpoints.enabled": {
            "type": "boolean", "category": "agent",
            "label_i18n": "settings.agent.enabled",
            "hint_i18n": "settings.agent.enabledHint"
        },
        "checkpoints.max_file_size_mb": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.max_file_size_mb",
            "hint_i18n": "settings.agent.max_file_size_mbHint",
            "min": 0, "max": 999999, "step": 1
        },
        "checkpoints.max_snapshots": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.max_snapshots",
            "hint_i18n": "settings.agent.max_snapshotsHint",
            "min": 0, "max": 999999, "step": 1
        },
        "checkpoints.max_total_size_mb": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.max_total_size_mb",
            "hint_i18n": "settings.agent.max_total_size_mbHint",
            "min": 0, "max": 999999, "step": 1
        },
        "checkpoints.min_interval_hours": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.min_interval_hours",
            "hint_i18n": "settings.agent.min_interval_hoursHint",
            "min": 0, "max": 999999, "step": 1
        },
        "checkpoints.retention_days": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.retention_days",
            "hint_i18n": "settings.agent.retention_daysHint",
            "min": 0, "max": 999999, "step": 1
        },
        "code_execution.mode": {
            "type": "string", "category": "agent",
            "label_i18n": "settings.agent.mode",
            "hint_i18n": "settings.agent.modeHint"
        },
        "context.engine": {
            "type": "select", "category": "agent",
            "label_i18n": "settings.agent.engine",
            "hint_i18n": "settings.agent.engineHint",
            "options": [
                {"value": "default", "label_i18n": "settings.agent.engine_opt_default"}, {"value": "custom", "label_i18n": "settings.agent.engine_opt_custom"},
            ]
        },
        "cron.max_parallel_jobs": {
            "type": "string", "category": "agent",
            "label_i18n": "settings.agent.max_parallel_jobs",
            "hint_i18n": "settings.agent.max_parallel_jobsHint"
        },
        "cron.wrap_response": {
            "type": "boolean", "category": "agent",
            "label_i18n": "settings.agent.wrap_response",
            "hint_i18n": "settings.agent.wrap_responseHint"
        },
        "goals.max_turns": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.max_turns",
            "hint_i18n": "settings.agent.max_turnsHint",
            "min": 0, "max": 999999, "step": 1
        },
        "network.force_ipv4": {
            "type": "boolean", "category": "agent",
            "label_i18n": "settings.agent.force_ipv4",
            "hint_i18n": "settings.agent.force_ipv4Hint"
        },
        "prompt_caching.cache_ttl": {
            "type": "string", "category": "agent",
            "label_i18n": "settings.agent.cache_ttl",
            "hint_i18n": "settings.agent.cache_ttlHint"
        },
        "skills.external_dirs": {
            "type": "list", "category": "agent",
            "label_i18n": "settings.agent.external_dirs",
            "hint_i18n": "settings.agent.external_dirsHint"
        },
        "skills.guard_agent_created": {
            "type": "boolean", "category": "agent",
            "label_i18n": "settings.agent.guard_agent_created",
            "hint_i18n": "settings.agent.guard_agent_createdHint"
        },
        "skills.inline_shell": {
            "type": "boolean", "category": "agent",
            "label_i18n": "settings.agent.inline_shell",
            "hint_i18n": "settings.agent.inline_shellHint"
        },
        "skills.inline_shell_timeout": {
            "type": "number", "category": "agent",
            "label_i18n": "settings.agent.inline_shell_timeout",
            "hint_i18n": "settings.agent.inline_shell_timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "skills.template_vars": {
            "type": "boolean", "category": "agent",
            "label_i18n": "settings.agent.template_vars",
            "hint_i18n": "settings.agent.template_varsHint"
        },
        # ── 终端 (terminal) ── 新增 ──
        "terminal.auto_source_bashrc": {
            "type": "boolean", "category": "terminal",
            "label_i18n": "settings.terminal.auto_source_bashrc",
            "hint_i18n": "settings.terminal.auto_source_bashrcHint"
        },
        "terminal.backend": {
            "type": "select", "category": "terminal",
            "label_i18n": "settings.terminal.backend",
            "hint_i18n": "settings.terminal.backendHint",
            "options": [
                {"value": "local", "label_i18n": "settings.terminal.backend_opt_local"}, {"value": "docker", "label_i18n": "settings.terminal.backend_opt_docker"}, {"value": "ssh", "label_i18n": "settings.terminal.backend_opt_ssh"}, {"value": "modal", "label_i18n": "settings.terminal.backend_opt_modal"}, {"value": "daytona", "label_i18n": "settings.terminal.backend_opt_daytona"}, {"value": "vercel_sandbox", "label_i18n": "settings.terminal.backend_opt_vercel_sandbox"}, {"value": "singularity", "label_i18n": "settings.terminal.backend_opt_singularity"},
            ]
        },
        "terminal.container_cpu": {
            "type": "number", "category": "terminal",
            "label_i18n": "settings.terminal.container_cpu",
            "hint_i18n": "settings.terminal.container_cpuHint",
            "min": 0, "max": 999999, "step": 1
        },
        "terminal.container_disk": {
            "type": "number", "category": "terminal",
            "label_i18n": "settings.terminal.container_disk",
            "hint_i18n": "settings.terminal.container_diskHint",
            "min": 0, "max": 999999, "step": 1
        },
        "terminal.container_memory": {
            "type": "number", "category": "terminal",
            "label_i18n": "settings.terminal.container_memory",
            "hint_i18n": "settings.terminal.container_memoryHint",
            "min": 0, "max": 999999, "step": 1
        },
        "terminal.container_persistent": {
            "type": "boolean", "category": "terminal",
            "label_i18n": "settings.terminal.container_persistent",
            "hint_i18n": "settings.terminal.container_persistentHint"
        },
        "terminal.cwd": {
            "type": "string", "category": "terminal",
            "label_i18n": "settings.terminal.cwd",
            "hint_i18n": "settings.terminal.cwdHint"
        },
        "terminal.daytona_image": {
            "type": "string", "category": "terminal",
            "label_i18n": "settings.terminal.daytona_image",
            "hint_i18n": "settings.terminal.daytona_imageHint"
        },
        "terminal.docker_extra_args": {
            "type": "list", "category": "terminal",
            "label_i18n": "settings.terminal.docker_extra_args",
            "hint_i18n": "settings.terminal.docker_extra_argsHint"
        },
        "terminal.docker_forward_env": {
            "type": "list", "category": "terminal",
            "label_i18n": "settings.terminal.docker_forward_env",
            "hint_i18n": "settings.terminal.docker_forward_envHint"
        },
        "terminal.docker_image": {
            "type": "string", "category": "terminal",
            "label_i18n": "settings.terminal.docker_image",
            "hint_i18n": "settings.terminal.docker_imageHint"
        },
        "terminal.docker_mount_cwd_to_workspace": {
            "type": "boolean", "category": "terminal",
            "label_i18n": "settings.terminal.docker_mount_cwd_to_workspace",
            "hint_i18n": "settings.terminal.docker_mount_cwd_to_workspaceHint"
        },
        "terminal.docker_run_as_host_user": {
            "type": "boolean", "category": "terminal",
            "label_i18n": "settings.terminal.docker_run_as_host_user",
            "hint_i18n": "settings.terminal.docker_run_as_host_userHint"
        },
        "terminal.docker_volumes": {
            "type": "list", "category": "terminal",
            "label_i18n": "settings.terminal.docker_volumes",
            "hint_i18n": "settings.terminal.docker_volumesHint"
        },
        "terminal.env_passthrough": {
            "type": "list", "category": "terminal",
            "label_i18n": "settings.terminal.env_passthrough",
            "hint_i18n": "settings.terminal.env_passthroughHint"
        },
        "terminal.modal_image": {
            "type": "string", "category": "terminal",
            "label_i18n": "settings.terminal.modal_image",
            "hint_i18n": "settings.terminal.modal_imageHint"
        },
        "terminal.modal_mode": {
            "type": "select", "category": "terminal",
            "label_i18n": "settings.terminal.modal_mode",
            "hint_i18n": "settings.terminal.modal_modeHint",
            "options": [
                {"value": "sandbox", "label_i18n": "settings.terminal.modal_mode_opt_sandbox"}, {"value": "function", "label_i18n": "settings.terminal.modal_mode_opt_function"},
            ]
        },
        "terminal.persistent_shell": {
            "type": "boolean", "category": "terminal",
            "label_i18n": "settings.terminal.persistent_shell",
            "hint_i18n": "settings.terminal.persistent_shellHint"
        },
        "terminal.shell_init_files": {
            "type": "list", "category": "terminal",
            "label_i18n": "settings.terminal.shell_init_files",
            "hint_i18n": "settings.terminal.shell_init_filesHint"
        },
        "terminal.singularity_image": {
            "type": "string", "category": "terminal",
            "label_i18n": "settings.terminal.singularity_image",
            "hint_i18n": "settings.terminal.singularity_imageHint"
        },
        "terminal.timeout": {
            "type": "number", "category": "terminal",
            "label_i18n": "settings.terminal.timeout",
            "hint_i18n": "settings.terminal.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "terminal.vercel_runtime": {
            "type": "select", "category": "terminal",
            "label_i18n": "settings.terminal.vercel_runtime",
            "hint_i18n": "settings.terminal.vercel_runtimeHint",
            "options": [
                {"value": "node24", "label_i18n": "settings.terminal.vercel_runtime_opt_node24"}, {"value": "node22", "label_i18n": "settings.terminal.vercel_runtime_opt_node22"}, {"value": "python3.13", "label_i18n": "settings.terminal.vercel_runtime_opt_python3.13"},
            ]
        },
        # ── 委派 (delegation) ── 新增 ──
        "delegation.api_key": {
            "type": "string", "category": "delegation",
            "label_i18n": "settings.agent.api_key",
            "hint_i18n": "settings.agent.api_keyHint"
        },
        "delegation.api_mode": {
            "type": "string", "category": "delegation",
            "label_i18n": "settings.agent.api_mode",
            "hint_i18n": "settings.agent.api_modeHint"
        },
        "delegation.base_url": {
            "type": "string", "category": "delegation",
            "label_i18n": "settings.agent.base_url",
            "hint_i18n": "settings.agent.base_urlHint"
        },
        "delegation.child_timeout_seconds": {
            "type": "number", "category": "delegation",
            "label_i18n": "settings.agent.child_timeout_seconds",
            "hint_i18n": "settings.agent.child_timeout_secondsHint",
            "min": 0, "max": 999999, "step": 1
        },
        "delegation.inherit_mcp_toolsets": {
            "type": "boolean", "category": "delegation",
            "label_i18n": "settings.agent.inherit_mcp_toolsets",
            "hint_i18n": "settings.agent.inherit_mcp_toolsetsHint"
        },
        "delegation.max_concurrent_children": {
            "type": "number", "category": "delegation",
            "label_i18n": "settings.agent.max_concurrent_children",
            "hint_i18n": "settings.agent.max_concurrent_childrenHint",
            "min": 1, "max": 10, "step": 1
        },
        "delegation.max_iterations": {
            "type": "number", "category": "delegation",
            "label_i18n": "settings.agent.max_iterations",
            "hint_i18n": "settings.agent.max_iterationsHint",
            "min": 0, "max": 999999, "step": 1
        },
        "delegation.max_spawn_depth": {
            "type": "number", "category": "delegation",
            "label_i18n": "settings.agent.max_spawn_depth",
            "hint_i18n": "settings.agent.max_spawn_depthHint",
            "min": 1, "max": 5, "step": 1
        },
        "delegation.model": {
            "type": "string", "category": "delegation",
            "label_i18n": "settings.agent.model",
            "hint_i18n": "settings.agent.modelHint"
        },
        "delegation.orchestrator_enabled": {
            "type": "boolean", "category": "delegation",
            "label_i18n": "settings.agent.orchestrator_enabled",
            "hint_i18n": "settings.agent.orchestrator_enabledHint"
        },
        "delegation.provider": {
            "type": "string", "category": "delegation",
            "label_i18n": "settings.agent.provider",
            "hint_i18n": "settings.agent.providerHint"
        },
        "delegation.reasoning_effort": {
            "type": "select", "category": "delegation",
            "label_i18n": "settings.agent.reasoning_effort",
            "hint_i18n": "settings.agent.reasoning_effortHint",
            "options": [
                {"value": "", "label_i18n": "settings.agent.reasoning_effort_opt_empty"}, {"value": "low", "label_i18n": "settings.agent.reasoning_effort_opt_low"}, {"value": "medium", "label_i18n": "settings.agent.reasoning_effort_opt_medium"}, {"value": "high", "label_i18n": "settings.agent.reasoning_effort_opt_high"},
            ]
        },
        "delegation.subagent_auto_approve": {
            "type": "boolean", "category": "delegation",
            "label_i18n": "settings.agent.subagent_auto_approve",
            "hint_i18n": "settings.agent.subagent_auto_approveHint"
        },
        # ── 记忆 (memory) ──
        "memory.flush_min_turns": {
            "type": "number", "category": "memory",
            "label_i18n": "settings.memory.flush_min_turns",
            "hint_i18n": "settings.memory.flush_min_turnsHint",
            "min": 1, "max": 50, "step": 1
        },
        "memory.max_memory_entries": {
            "type": "number", "category": "memory",
            "label_i18n": "settings.memory.max_memory_entries",
            "hint_i18n": "settings.memory.max_memory_entriesHint",
            "min": 100, "max": 10000, "step": 100
        },
        "memory.memory_char_limit": {
            "type": "number", "category": "memory",
            "label_i18n": "settings.memory.memory_char_limit",
            "hint_i18n": "settings.memory.memory_char_limitHint",
            "min": 100, "max": 10000, "step": 100
        },
        "memory.memory_enabled": {
            "type": "boolean", "category": "memory",
            "label_i18n": "settings.memory.memory_enabled",
            "hint_i18n": "settings.memory.memory_enabledHint"
        },
        "memory.nudge_interval": {
            "type": "number", "category": "memory",
            "label_i18n": "settings.memory.nudge_interval",
            "hint_i18n": "settings.memory.nudge_intervalHint",
            "min": 1, "max": 50, "step": 1
        },
        "memory.provider": {
            "type": "select", "category": "memory",
            "label_i18n": "settings.memory.provider",
            "hint_i18n": "settings.memory.providerHint",
            "options": [
                {"value": "builtin", "label_i18n": "settings.memory.provider_opt_builtin"}, {"value": "honcho", "label_i18n": "settings.memory.provider_opt_honcho"},
            ]
        },
        "memory.retrieval_threshold": {
            "type": "number", "category": "memory",
            "label_i18n": "settings.memory.retrieval_threshold",
            "hint_i18n": "settings.memory.retrieval_thresholdHint",
            "min": 0, "max": 1, "step": 0.05
        },
        "memory.user_char_limit": {
            "type": "number", "category": "memory",
            "label_i18n": "settings.memory.user_char_limit",
            "hint_i18n": "settings.memory.user_char_limitHint",
            "min": 100, "max": 10000, "step": 100
        },
        "memory.user_profile_enabled": {
            "type": "boolean", "category": "memory",
            "label_i18n": "settings.memory.user_profile_enabled",
            "hint_i18n": "settings.memory.user_profile_enabledHint"
        },
        # ── 压缩 (compression) ── 新增 ──
        "compression.enabled": {
            "type": "boolean", "category": "compression",
            "label_i18n": "settings.compression.enabled",
            "hint_i18n": "settings.compression.enabledHint"
        },
        "compression.hygiene_hard_message_limit": {
            "type": "number", "category": "compression",
            "label_i18n": "settings.compression.hygiene_hard_message_limit",
            "hint_i18n": "settings.compression.hygiene_hard_message_limitHint",
            "min": 0, "max": 999999, "step": 1
        },
        "compression.protect_first_n": {
            "type": "number", "category": "compression",
            "label_i18n": "settings.compression.protect_first_n",
            "hint_i18n": "settings.compression.protect_first_nHint",
            "min": 0, "max": 999999, "step": 1
        },
        "compression.protect_last_n": {
            "type": "number", "category": "compression",
            "label_i18n": "settings.compression.protect_last_n",
            "hint_i18n": "settings.compression.protect_last_nHint",
            "min": 0, "max": 999999, "step": 1
        },
        "compression.target_ratio": {
            "type": "number", "category": "compression",
            "label_i18n": "settings.compression.target_ratio",
            "hint_i18n": "settings.compression.target_ratioHint",
            "min": 0, "max": 999999, "step": 1
        },
        "compression.threshold": {
            "type": "number", "category": "compression",
            "label_i18n": "settings.compression.threshold",
            "hint_i18n": "settings.compression.thresholdHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── 会话重置 (session_reset) ──
        "session_reset.at_hour": {
            "type": "number", "category": "session_reset",
            "label_i18n": "settings.session.at_hour",
            "hint_i18n": "settings.session.at_hourHint",
            "min": 0, "max": 23, "step": 1
        },
        "session_reset.idle_minutes": {
            "type": "number", "category": "session_reset",
            "label_i18n": "settings.session.idle_minutes",
            "hint_i18n": "settings.session.idle_minutesHint",
            "min": 10, "max": 10080, "step": 30
        },
        "session_reset.mode": {
            "type": "select", "category": "session_reset",
            "label_i18n": "settings.session.mode",
            "hint_i18n": "settings.session.modeHint",
            "options": [
                {"value": "{'value': 'both', 'label_i18n': 'settings.session.modeBoth'}", "label_i18n": "settings.session.mode_opt_{'value': 'both', 'label_i18n': 'settings.session.modeBoth'}"}, {"value": "{'value': 'idle', 'label_i18n': 'settings.session.modeIdle'}", "label_i18n": "settings.session.mode_opt_{'value': 'idle', 'label_i18n': 'settings.session.modeIdle'}"}, {"value": "{'value': 'hourly', 'label_i18n': 'settings.session.modeHourly'}", "label_i18n": "settings.session.mode_opt_{'value': 'hourly', 'label_i18n': 'settings.session.modeHourly'}"},
            ]
        },
        # ── 会话 (sessions) ──
        "sessions.auto_prune": {
            "type": "boolean", "category": "sessions",
            "label_i18n": "settings.session.auto_prune",
            "hint_i18n": "settings.session.auto_pruneHint"
        },
        "sessions.min_interval_hours": {
            "type": "number", "category": "sessions",
            "label_i18n": "settings.session.min_interval_hours",
            "hint_i18n": "settings.session.min_interval_hoursHint",
            "min": 0, "max": 999999, "step": 1
        },
        "sessions.retention_days": {
            "type": "number", "category": "sessions",
            "label_i18n": "settings.session.retention_days",
            "hint_i18n": "settings.session.retention_daysHint",
            "min": 1, "max": 365, "step": 1
        },
        "sessions.vacuum_after_prune": {
            "type": "boolean", "category": "sessions",
            "label_i18n": "settings.session.vacuum_after_prune",
            "hint_i18n": "settings.session.vacuum_after_pruneHint"
        },
        # ── 审批 (approvals) ──
        "approvals.cron_mode": {
            "type": "select", "category": "approvals",
            "label_i18n": "settings.approvals.cron_mode",
            "hint_i18n": "settings.approvals.cron_modeHint",
            "options": [
                {"value": "{'value': 'deny', 'label_i18n': 'settings.approvals.deny'}", "label_i18n": "settings.approvals.cron_mode_opt_{'value': 'deny', 'label_i18n': 'settings.approvals.deny'}"}, {"value": "{'value': 'allow', 'label_i18n': 'settings.approvals.allow'}", "label_i18n": "settings.approvals.cron_mode_opt_{'value': 'allow', 'label_i18n': 'settings.approvals.allow'}"}, {"value": "{'value': 'manual', 'label_i18n': 'settings.approvals.manual'}", "label_i18n": "settings.approvals.cron_mode_opt_{'value': 'manual', 'label_i18n': 'settings.approvals.manual'}"},
            ]
        },
        "approvals.mode": {
            "type": "select", "category": "approvals",
            "label_i18n": "settings.approvals.mode",
            "hint_i18n": "settings.approvals.modeHint",
            "options": [
                {"value": "{'value': 'manual', 'label_i18n': 'settings.approvals.manual'}", "label_i18n": "settings.approvals.mode_opt_{'value': 'manual', 'label_i18n': 'settings.approvals.manual'}"}, {"value": "{'value': 'auto-off', 'label_i18n': 'settings.approvals.autoOff'}", "label_i18n": "settings.approvals.mode_opt_{'value': 'auto-off', 'label_i18n': 'settings.approvals.autoOff'}"},
            ]
        },
        "approvals.timeout": {
            "type": "number", "category": "approvals",
            "label_i18n": "settings.approvals.timeout",
            "hint_i18n": "settings.approvals.timeoutHint",
            "min": 10, "max": 600, "step": 10
        },
        # ── 人工延迟 (human_delay) ──
        "human_delay.max_ms": {
            "type": "number", "category": "human_delay",
            "label_i18n": "settings.humanDelay.max_ms",
            "hint_i18n": "settings.humanDelay.max_msHint",
            "min": 100, "max": 10000, "step": 100
        },
        "human_delay.min_ms": {
            "type": "number", "category": "human_delay",
            "label_i18n": "settings.humanDelay.min_ms",
            "hint_i18n": "settings.humanDelay.min_msHint",
            "min": 100, "max": 5000, "step": 100
        },
        "human_delay.mode": {
            "type": "select", "category": "human_delay",
            "label_i18n": "settings.humanDelay.mode",
            "hint_i18n": "settings.humanDelay.modeHint",
            "options": [
                {"value": "{'value': 'off', 'label_i18n': 'settings.humanDelay.off'}", "label_i18n": "settings.humanDelay.mode_opt_{'value': 'off', 'label_i18n': 'settings.humanDelay.off'}"}, {"value": "{'value': 'random', 'label_i18n': 'settings.humanDelay.random'}", "label_i18n": "settings.humanDelay.mode_opt_{'value': 'random', 'label_i18n': 'settings.humanDelay.random'}"},
            ]
        },
        # ── 安全 (security) ── 新增 ──
        "approvals.destructive_slash_confirm": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.destructive_slash_confirm",
            "hint_i18n": "settings.security.destructive_slash_confirmHint"
        },
        "approvals.mcp_reload_confirm": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.mcp_reload_confirm",
            "hint_i18n": "settings.security.mcp_reload_confirmHint"
        },
        "privacy.redact_pii": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.redact_pii",
            "hint_i18n": "settings.security.redact_piiHint"
        },
        "security.acked_advisories": {
            "type": "list", "category": "security",
            "label_i18n": "settings.security.acked_advisories",
            "hint_i18n": "settings.security.acked_advisoriesHint"
        },
        "security.allow_lazy_installs": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.allow_lazy_installs",
            "hint_i18n": "settings.security.allow_lazy_installsHint"
        },
        "security.allow_private_urls": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.allow_private_urls",
            "hint_i18n": "settings.security.allow_private_urlsHint"
        },
        "security.redact_secrets": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.redact_secrets",
            "hint_i18n": "settings.security.redact_secretsHint"
        },
        "security.tirith_enabled": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.tirith_enabled",
            "hint_i18n": "settings.security.tirith_enabledHint"
        },
        "security.tirith_fail_open": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.tirith_fail_open",
            "hint_i18n": "settings.security.tirith_fail_openHint"
        },
        "security.tirith_path": {
            "type": "string", "category": "security",
            "label_i18n": "settings.security.tirith_path",
            "hint_i18n": "settings.security.tirith_pathHint"
        },
        "security.tirith_timeout": {
            "type": "number", "category": "security",
            "label_i18n": "settings.security.tirith_timeout",
            "hint_i18n": "settings.security.tirith_timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "security.website_blocklist.domains": {
            "type": "list", "category": "security",
            "label_i18n": "settings.security.domains",
            "hint_i18n": "settings.security.domainsHint"
        },
        "security.website_blocklist.enabled": {
            "type": "boolean", "category": "security",
            "label_i18n": "settings.security.enabled",
            "hint_i18n": "settings.security.enabledHint"
        },
        "security.website_blocklist.shared_files": {
            "type": "list", "category": "security",
            "label_i18n": "settings.security.shared_files",
            "hint_i18n": "settings.security.shared_filesHint"
        },
        # ── 浏览器 (browser) ── 新增 ──
        "browser.allow_private_urls": {
            "type": "boolean", "category": "browser",
            "label_i18n": "settings.browser.allow_private_urls",
            "hint_i18n": "settings.browser.allow_private_urlsHint"
        },
        "browser.auto_local_for_private_urls": {
            "type": "boolean", "category": "browser",
            "label_i18n": "settings.browser.auto_local_for_private_urls",
            "hint_i18n": "settings.browser.auto_local_for_private_urlsHint"
        },
        "browser.camofox.adopt_existing_tab": {
            "type": "boolean", "category": "browser",
            "label_i18n": "settings.browser.adopt_existing_tab",
            "hint_i18n": "settings.browser.adopt_existing_tabHint"
        },
        "browser.camofox.managed_persistence": {
            "type": "boolean", "category": "browser",
            "label_i18n": "settings.browser.managed_persistence",
            "hint_i18n": "settings.browser.managed_persistenceHint"
        },
        "browser.camofox.session_key": {
            "type": "string", "category": "browser",
            "label_i18n": "settings.browser.session_key",
            "hint_i18n": "settings.browser.session_keyHint"
        },
        "browser.camofox.user_id": {
            "type": "string", "category": "browser",
            "label_i18n": "settings.browser.user_id",
            "hint_i18n": "settings.browser.user_idHint"
        },
        "browser.cdp_url": {
            "type": "string", "category": "browser",
            "label_i18n": "settings.browser.cdp_url",
            "hint_i18n": "settings.browser.cdp_urlHint"
        },
        "browser.command_timeout": {
            "type": "number", "category": "browser",
            "label_i18n": "settings.browser.command_timeout",
            "hint_i18n": "settings.browser.command_timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "browser.dialog_policy": {
            "type": "string", "category": "browser",
            "label_i18n": "settings.browser.dialog_policy",
            "hint_i18n": "settings.browser.dialog_policyHint"
        },
        "browser.dialog_timeout_s": {
            "type": "number", "category": "browser",
            "label_i18n": "settings.browser.dialog_timeout_s",
            "hint_i18n": "settings.browser.dialog_timeout_sHint",
            "min": 0, "max": 999999, "step": 1
        },
        "browser.engine": {
            "type": "string", "category": "browser",
            "label_i18n": "settings.browser.engine",
            "hint_i18n": "settings.browser.engineHint"
        },
        "browser.inactivity_timeout": {
            "type": "number", "category": "browser",
            "label_i18n": "settings.browser.inactivity_timeout",
            "hint_i18n": "settings.browser.inactivity_timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "browser.record_sessions": {
            "type": "boolean", "category": "browser",
            "label_i18n": "settings.browser.record_sessions",
            "hint_i18n": "settings.browser.record_sessionsHint"
        },
        # ── 工具循环护栏 (tool_loop_guardrails) ── 新增 ──
        "tool_loop_guardrails.hard_stop_after.exact_failure": {
            "type": "number", "category": "tool_loop_guardrails",
            "label_i18n": "settings.tool_loop_guardrails.exact_failure",
            "hint_i18n": "settings.tool_loop_guardrails.exact_failureHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tool_loop_guardrails.hard_stop_after.idempotent_no_progress": {
            "type": "number", "category": "tool_loop_guardrails",
            "label_i18n": "settings.tool_loop_guardrails.idempotent_no_progress",
            "hint_i18n": "settings.tool_loop_guardrails.idempotent_no_progressHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tool_loop_guardrails.hard_stop_after.same_tool_failure": {
            "type": "number", "category": "tool_loop_guardrails",
            "label_i18n": "settings.tool_loop_guardrails.same_tool_failure",
            "hint_i18n": "settings.tool_loop_guardrails.same_tool_failureHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tool_loop_guardrails.hard_stop_enabled": {
            "type": "boolean", "category": "tool_loop_guardrails",
            "label_i18n": "settings.tool_loop_guardrails.hard_stop_enabled",
            "hint_i18n": "settings.tool_loop_guardrails.hard_stop_enabledHint"
        },
        "tool_loop_guardrails.warn_after.exact_failure": {
            "type": "number", "category": "tool_loop_guardrails",
            "label_i18n": "settings.tool_loop_guardrails.exact_failure",
            "hint_i18n": "settings.tool_loop_guardrails.exact_failureHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tool_loop_guardrails.warn_after.idempotent_no_progress": {
            "type": "number", "category": "tool_loop_guardrails",
            "label_i18n": "settings.tool_loop_guardrails.idempotent_no_progress",
            "hint_i18n": "settings.tool_loop_guardrails.idempotent_no_progressHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tool_loop_guardrails.warn_after.same_tool_failure": {
            "type": "number", "category": "tool_loop_guardrails",
            "label_i18n": "settings.tool_loop_guardrails.same_tool_failure",
            "hint_i18n": "settings.tool_loop_guardrails.same_tool_failureHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tool_loop_guardrails.warnings_enabled": {
            "type": "boolean", "category": "tool_loop_guardrails",
            "label_i18n": "settings.tool_loop_guardrails.warnings_enabled",
            "hint_i18n": "settings.tool_loop_guardrails.warnings_enabledHint"
        },
        # ── 工具输出 (tool_output) ── 新增 ──
        "tool_output.max_bytes": {
            "type": "number", "category": "tool_output",
            "label_i18n": "settings.tool_output.max_bytes",
            "hint_i18n": "settings.tool_output.max_bytesHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tool_output.max_line_length": {
            "type": "number", "category": "tool_output",
            "label_i18n": "settings.tool_output.max_line_length",
            "hint_i18n": "settings.tool_output.max_line_lengthHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tool_output.max_lines": {
            "type": "number", "category": "tool_output",
            "label_i18n": "settings.tool_output.max_lines",
            "hint_i18n": "settings.tool_output.max_linesHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── 辅助模型 (auxiliary) ── 新增 ──
        "auxiliary.approval.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.approval.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.approval.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.approval.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.approval.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.compression.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.compression.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.compression.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.compression.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.compression.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.curator.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.curator.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.curator.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.curator.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.curator.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.kanban_decomposer.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.kanban_decomposer.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.kanban_decomposer.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.kanban_decomposer.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.kanban_decomposer.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.mcp.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.mcp.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.mcp.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.mcp.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.mcp.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.profile_describer.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.profile_describer.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.profile_describer.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.profile_describer.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.profile_describer.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.skills_hub.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.skills_hub.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.skills_hub.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.skills_hub.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.skills_hub.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.title_generation.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.title_generation.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.title_generation.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.title_generation.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.title_generation.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.triage_specifier.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.triage_specifier.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.triage_specifier.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.triage_specifier.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.triage_specifier.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.vision.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.vision.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.vision.download_timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.download_timeout",
            "hint_i18n": "settings.auxiliary.download_timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.vision.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.vision.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.vision.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        "auxiliary.web_extract.api_key": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.api_key",
            "hint_i18n": "settings.auxiliary.api_keyHint"
        },
        "auxiliary.web_extract.base_url": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.base_url",
            "hint_i18n": "settings.auxiliary.base_urlHint"
        },
        "auxiliary.web_extract.model": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.model",
            "hint_i18n": "settings.auxiliary.modelHint"
        },
        "auxiliary.web_extract.provider": {
            "type": "string", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.provider",
            "hint_i18n": "settings.auxiliary.providerHint"
        },
        "auxiliary.web_extract.timeout": {
            "type": "number", "category": "auxiliary",
            "label_i18n": "settings.auxiliary.timeout",
            "hint_i18n": "settings.auxiliary.timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── TTS (tts) ── 新增 ──
        "tts.edge.voice": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.voice",
            "hint_i18n": "settings.tts.voiceHint"
        },
        "tts.elevenlabs.model_id": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.model_id",
            "hint_i18n": "settings.tts.model_idHint"
        },
        "tts.elevenlabs.voice_id": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.voice_id",
            "hint_i18n": "settings.tts.voice_idHint"
        },
        "tts.mistral.model": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.model",
            "hint_i18n": "settings.tts.modelHint"
        },
        "tts.mistral.voice_id": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.voice_id",
            "hint_i18n": "settings.tts.voice_idHint"
        },
        "tts.neutts.device": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.device",
            "hint_i18n": "settings.tts.deviceHint"
        },
        "tts.neutts.model": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.model",
            "hint_i18n": "settings.tts.modelHint"
        },
        "tts.neutts.ref_audio": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.ref_audio",
            "hint_i18n": "settings.tts.ref_audioHint"
        },
        "tts.neutts.ref_text": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.ref_text",
            "hint_i18n": "settings.tts.ref_textHint"
        },
        "tts.openai.model": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.model",
            "hint_i18n": "settings.tts.modelHint"
        },
        "tts.openai.voice": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.voice",
            "hint_i18n": "settings.tts.voiceHint"
        },
        "tts.piper.voice": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.voice",
            "hint_i18n": "settings.tts.voiceHint"
        },
        "tts.provider": {
            "type": "select", "category": "tts",
            "label_i18n": "settings.tts.provider",
            "hint_i18n": "settings.tts.providerHint",
            "options": [
                {"value": "edge", "label_i18n": "settings.tts.provider_opt_edge"}, {"value": "elevenlabs", "label_i18n": "settings.tts.provider_opt_elevenlabs"}, {"value": "openai", "label_i18n": "settings.tts.provider_opt_openai"}, {"value": "neutts", "label_i18n": "settings.tts.provider_opt_neutts"},
            ]
        },
        "tts.xai.bit_rate": {
            "type": "number", "category": "tts",
            "label_i18n": "settings.tts.bit_rate",
            "hint_i18n": "settings.tts.bit_rateHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tts.xai.language": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.language",
            "hint_i18n": "settings.tts.languageHint"
        },
        "tts.xai.sample_rate": {
            "type": "number", "category": "tts",
            "label_i18n": "settings.tts.sample_rate",
            "hint_i18n": "settings.tts.sample_rateHint",
            "min": 0, "max": 999999, "step": 1
        },
        "tts.xai.voice_id": {
            "type": "string", "category": "tts",
            "label_i18n": "settings.tts.voice_id",
            "hint_i18n": "settings.tts.voice_idHint"
        },
        # ── STT (stt) ── 新增 ──
        "stt.enabled": {
            "type": "boolean", "category": "stt",
            "label_i18n": "settings.stt.enabled",
            "hint_i18n": "settings.stt.enabledHint"
        },
        "stt.local.language": {
            "type": "string", "category": "stt",
            "label_i18n": "settings.stt.language",
            "hint_i18n": "settings.stt.languageHint"
        },
        "stt.local.model": {
            "type": "string", "category": "stt",
            "label_i18n": "settings.stt.model",
            "hint_i18n": "settings.stt.modelHint"
        },
        "stt.mistral.model": {
            "type": "string", "category": "stt",
            "label_i18n": "settings.stt.model",
            "hint_i18n": "settings.stt.modelHint"
        },
        "stt.openai.model": {
            "type": "string", "category": "stt",
            "label_i18n": "settings.stt.model",
            "hint_i18n": "settings.stt.modelHint"
        },
        "stt.provider": {
            "type": "select", "category": "stt",
            "label_i18n": "settings.stt.provider",
            "hint_i18n": "settings.stt.providerHint",
            "options": [
                {"value": "local", "label_i18n": "settings.stt.provider_opt_local"}, {"value": "openai", "label_i18n": "settings.stt.provider_opt_openai"},
            ]
        },
        # ── 语音 (voice) ── 新增 ──
        "voice.auto_tts": {
            "type": "boolean", "category": "voice",
            "label_i18n": "settings.voice.auto_tts",
            "hint_i18n": "settings.voice.auto_ttsHint"
        },
        "voice.beep_enabled": {
            "type": "boolean", "category": "voice",
            "label_i18n": "settings.voice.beep_enabled",
            "hint_i18n": "settings.voice.beep_enabledHint"
        },
        "voice.max_recording_seconds": {
            "type": "number", "category": "voice",
            "label_i18n": "settings.voice.max_recording_seconds",
            "hint_i18n": "settings.voice.max_recording_secondsHint",
            "min": 0, "max": 999999, "step": 1
        },
        "voice.record_key": {
            "type": "string", "category": "voice",
            "label_i18n": "settings.voice.record_key",
            "hint_i18n": "settings.voice.record_keyHint"
        },
        "voice.silence_duration": {
            "type": "number", "category": "voice",
            "label_i18n": "settings.voice.silence_duration",
            "hint_i18n": "settings.voice.silence_durationHint",
            "min": 0, "max": 999999, "step": 1
        },
        "voice.silence_threshold": {
            "type": "number", "category": "voice",
            "label_i18n": "settings.voice.silence_threshold",
            "hint_i18n": "settings.voice.silence_thresholdHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── 日志 (logging) ── 新增 ──
        "logging.backup_count": {
            "type": "number", "category": "logging",
            "label_i18n": "settings.logging.backup_count",
            "hint_i18n": "settings.logging.backup_countHint",
            "min": 0, "max": 999999, "step": 1
        },
        "logging.level": {
            "type": "select", "category": "logging",
            "label_i18n": "settings.logging.level",
            "hint_i18n": "settings.logging.levelHint",
            "options": [
                {"value": "DEBUG", "label_i18n": "settings.logging.level_opt_DEBUG"}, {"value": "INFO", "label_i18n": "settings.logging.level_opt_INFO"}, {"value": "WARNING", "label_i18n": "settings.logging.level_opt_WARNING"}, {"value": "ERROR", "label_i18n": "settings.logging.level_opt_ERROR"},
            ]
        },
        "logging.max_size_mb": {
            "type": "number", "category": "logging",
            "label_i18n": "settings.logging.max_size_mb",
            "hint_i18n": "settings.logging.max_size_mbHint",
            "min": 0, "max": 999999, "step": 1
        },
        "logging.memory_monitor.enabled": {
            "type": "boolean", "category": "logging",
            "label_i18n": "settings.logging.enabled",
            "hint_i18n": "settings.logging.enabledHint"
        },
        "logging.memory_monitor.interval_seconds": {
            "type": "number", "category": "logging",
            "label_i18n": "settings.logging.interval_seconds",
            "hint_i18n": "settings.logging.interval_secondsHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── LSP (lsp) ── 新增 ──
        "lsp.enabled": {
            "type": "boolean", "category": "lsp",
            "label_i18n": "settings.lsp.enabled",
            "hint_i18n": "settings.lsp.enabledHint"
        },
        "lsp.install_strategy": {
            "type": "string", "category": "lsp",
            "label_i18n": "settings.lsp.install_strategy",
            "hint_i18n": "settings.lsp.install_strategyHint"
        },
        "lsp.wait_mode": {
            "type": "string", "category": "lsp",
            "label_i18n": "settings.lsp.wait_mode",
            "hint_i18n": "settings.lsp.wait_modeHint"
        },
        "lsp.wait_timeout": {
            "type": "number", "category": "lsp",
            "label_i18n": "settings.lsp.wait_timeout",
            "hint_i18n": "settings.lsp.wait_timeoutHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── 看板 (kanban) ── 新增 ──
        "kanban.auto_decompose": {
            "type": "boolean", "category": "kanban",
            "label_i18n": "settings.kanban.auto_decompose",
            "hint_i18n": "settings.kanban.auto_decomposeHint"
        },
        "kanban.auto_decompose_per_tick": {
            "type": "number", "category": "kanban",
            "label_i18n": "settings.kanban.auto_decompose_per_tick",
            "hint_i18n": "settings.kanban.auto_decompose_per_tickHint",
            "min": 0, "max": 999999, "step": 1
        },
        "kanban.default_assignee": {
            "type": "string", "category": "kanban",
            "label_i18n": "settings.kanban.default_assignee",
            "hint_i18n": "settings.kanban.default_assigneeHint"
        },
        "kanban.dispatch_in_gateway": {
            "type": "boolean", "category": "kanban",
            "label_i18n": "settings.kanban.dispatch_in_gateway",
            "hint_i18n": "settings.kanban.dispatch_in_gatewayHint"
        },
        "kanban.dispatch_interval_seconds": {
            "type": "number", "category": "kanban",
            "label_i18n": "settings.kanban.dispatch_interval_seconds",
            "hint_i18n": "settings.kanban.dispatch_interval_secondsHint",
            "min": 0, "max": 999999, "step": 1
        },
        "kanban.failure_limit": {
            "type": "number", "category": "kanban",
            "label_i18n": "settings.kanban.failure_limit",
            "hint_i18n": "settings.kanban.failure_limitHint",
            "min": 0, "max": 999999, "step": 1
        },
        "kanban.orchestrator_profile": {
            "type": "string", "category": "kanban",
            "label_i18n": "settings.kanban.orchestrator_profile",
            "hint_i18n": "settings.kanban.orchestrator_profileHint"
        },
        "kanban.worker_log_backup_count": {
            "type": "number", "category": "kanban",
            "label_i18n": "settings.kanban.worker_log_backup_count",
            "hint_i18n": "settings.kanban.worker_log_backup_countHint",
            "min": 0, "max": 999999, "step": 1
        },
        "kanban.worker_log_rotate_bytes": {
            "type": "number", "category": "kanban",
            "label_i18n": "settings.kanban.worker_log_rotate_bytes",
            "hint_i18n": "settings.kanban.worker_log_rotate_bytesHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── 管理器 (curator) ── 新增 ──
        "curator.archive_after_days": {
            "type": "number", "category": "curator",
            "label_i18n": "settings.curator.archive_after_days",
            "hint_i18n": "settings.curator.archive_after_daysHint",
            "min": 0, "max": 999999, "step": 1
        },
        "curator.backup.enabled": {
            "type": "boolean", "category": "curator",
            "label_i18n": "settings.curator.enabled",
            "hint_i18n": "settings.curator.enabledHint"
        },
        "curator.backup.keep": {
            "type": "number", "category": "curator",
            "label_i18n": "settings.curator.keep",
            "hint_i18n": "settings.curator.keepHint",
            "min": 0, "max": 999999, "step": 1
        },
        "curator.enabled": {
            "type": "boolean", "category": "curator",
            "label_i18n": "settings.curator.enabled",
            "hint_i18n": "settings.curator.enabledHint"
        },
        "curator.interval_hours": {
            "type": "number", "category": "curator",
            "label_i18n": "settings.curator.interval_hours",
            "hint_i18n": "settings.curator.interval_hoursHint",
            "min": 0, "max": 999999, "step": 1
        },
        "curator.min_idle_hours": {
            "type": "number", "category": "curator",
            "label_i18n": "settings.curator.min_idle_hours",
            "hint_i18n": "settings.curator.min_idle_hoursHint",
            "min": 0, "max": 999999, "step": 1
        },
        "curator.stale_after_days": {
            "type": "number", "category": "curator",
            "label_i18n": "settings.curator.stale_after_days",
            "hint_i18n": "settings.curator.stale_after_daysHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── Web (web) ── 新增 ──
        "web.backend": {
            "type": "string", "category": "web",
            "label_i18n": "settings.web.backend",
            "hint_i18n": "settings.web.backendHint"
        },
        "web.extract_backend": {
            "type": "string", "category": "web",
            "label_i18n": "settings.web.extract_backend",
            "hint_i18n": "settings.web.extract_backendHint"
        },
        "web.search_backend": {
            "type": "string", "category": "web",
            "label_i18n": "settings.web.search_backend",
            "hint_i18n": "settings.web.search_backendHint"
        },
        # ── X Search (x_search) ── 新增 ──
        "x_search.model": {
            "type": "string", "category": "x_search",
            "label_i18n": "settings.x_search.model",
            "hint_i18n": "settings.x_search.modelHint"
        },
        "x_search.retries": {
            "type": "number", "category": "x_search",
            "label_i18n": "settings.x_search.retries",
            "hint_i18n": "settings.x_search.retriesHint",
            "min": 0, "max": 999999, "step": 1
        },
        "x_search.timeout_seconds": {
            "type": "number", "category": "x_search",
            "label_i18n": "settings.x_search.timeout_seconds",
            "hint_i18n": "settings.x_search.timeout_secondsHint",
            "min": 0, "max": 999999, "step": 1
        },
        # ── 模型目录 (model_catalog) ── 新增 ──
        "model_catalog.enabled": {
            "type": "boolean", "category": "model_catalog",
            "label_i18n": "settings.model_catalog.enabled",
            "hint_i18n": "settings.model_catalog.enabledHint"
        },
        "model_catalog.ttl_hours": {
            "type": "number", "category": "model_catalog",
            "label_i18n": "settings.model_catalog.ttl_hours",
            "hint_i18n": "settings.model_catalog.ttl_hoursHint",
            "min": 0, "max": 999999, "step": 1
        },
        "model_catalog.url": {
            "type": "string", "category": "model_catalog",
            "label_i18n": "settings.model_catalog.url",
            "hint_i18n": "settings.model_catalog.urlHint"
        },
        # ── 更新 (updates) ── 新增 ──
        "updates.backup_keep": {
            "type": "number", "category": "updates",
            "label_i18n": "settings.updates.backup_keep",
            "hint_i18n": "settings.updates.backup_keepHint",
            "min": 0, "max": 999999, "step": 1
        },
        "updates.pre_update_backup": {
            "type": "boolean", "category": "updates",
            "label_i18n": "settings.updates.pre_update_backup",
            "hint_i18n": "settings.updates.pre_update_backupHint"
        },
    },
}


@router.get("/config/schema")
async def get_config_schema():
    """Return the config field schema for the settings UI."""
    return CONFIG_SCHEMA


@router.get("/config/defaults")
async def get_config_defaults(req: Request):
    """Return the default config values from hermes-agent."""
    try:
        old = os.environ.get("HERMES_HOME", "")
        profile = _profile_from_request(req)
        try:
            os.environ["HERMES_HOME"] = str(_profile_home(profile))
            from hermes_cli.config import DEFAULT_CONFIG
            defaults = dict(DEFAULT_CONFIG) if DEFAULT_CONFIG else {}
        finally:
            if old:
                os.environ["HERMES_HOME"] = old
            else:
                os.environ.pop("HERMES_HOME", None)
        return defaults
    except Exception as e:
        return {"error": str(e)}


@router.api_route("/download", methods=["GET", "HEAD"])
async def download_file(request: Request, path: str, name: str = ""):
    """Download a file from the filesystem."""
    from fastapi.responses import FileResponse, JSONResponse
    from pathlib import Path as P

    target = P(path)

    # If path is relative, resolve against profile home first
    if not target.is_absolute():
        profile = _profile_from_request(request)
        root = _profile_home(profile)
        resolved = (root / target).resolve()
        if resolved.is_relative_to(root.resolve()) and resolved.is_file():
            target = resolved

    # Fallback: try expanduser for absolute or ~/ paths
    if not target.is_absolute():
        target = target.expanduser()
    target = target.expanduser()

    if not target.is_file():
        return JSONResponse(
            status_code=404,
            content={"error": f"File not found: {target.name}", "code": "FILE_NOT_FOUND"},
        )
    filename = name or target.name
    return FileResponse(str(target), filename=filename)
