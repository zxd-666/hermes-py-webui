"""Shared constants and helpers."""
import os
from pathlib import Path

HERMES_HOME = Path(os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes")))
STATE_DB = HERMES_HOME / "state.db"
AGENT_DIR = HERMES_HOME / "hermes-agent"

PORT = int(os.environ.get("HERMES_PY_WEBUI_PORT", "9898"))
HOST = os.environ.get("HERMES_PY_WEBUI_HOST", "127.0.0.1")

DEFAULT_WORKSPACE = Path.home()
