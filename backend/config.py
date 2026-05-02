"""Shared constants and helpers."""
import os
from pathlib import Path

# Read HERMES_HOME the same way Hermes does — handles profile mode
_env_val = os.environ.get("HERMES_HOME", "").strip()
HERMES_HOME = Path(_env_val) if _env_val else Path.home() / ".hermes"

# Compute the root directory (above profiles/) — mirrors get_default_hermes_root()
def _compute_hermes_root() -> Path:
    native_home = Path.home() / ".hermes"
    env_home = os.environ.get("HERMES_HOME", "").strip()
    if not env_home:
        return native_home
    env_path = Path(env_home)
    try:
        env_path.resolve().relative_to(native_home.resolve())
        return native_home
    except ValueError:
        pass
    if env_path.parent.name == "profiles":
        return env_path.parent.parent
    return env_path

HERMES_ROOT = _compute_hermes_root()
STATE_DB = HERMES_HOME / "state.db"
AGENT_DIR = HERMES_HOME / "hermes-agent"

PORT = int(os.environ.get("HERMES_PY_WEBUI_PORT", "9898"))
HOST = os.environ.get("HERMES_PY_WEBUI_HOST", "127.0.0.1")

DEFAULT_WORKSPACE = Path.home()


def get_profile_state_db(profile_name: str | None = None) -> Path:
    """Return the state.db path for the given profile.

    Profiles live under HERMES_ROOT/profiles/<name>/state.db.
    The 'default' profile uses HERMES_ROOT/state.db (i.e. ~/.hermes/state.db).
    """
    root = HERMES_ROOT
    if profile_name and profile_name != "default":
        return root / "profiles" / profile_name / "state.db"
    return root / "state.db"
