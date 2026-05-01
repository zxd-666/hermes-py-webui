"""Hermes Py WebUI — FastAPI backend that directly imports AIAgent.

Reads sessions from state.db, streams agent responses via SSE.
Core value: workspace-per-session binding (AIAgent instantiated with workdir).
"""
import os
import sys
from pathlib import Path

# Ensure hermes-agent is importable before anything else
HERMES_HOME = os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes"))
sys.path.insert(0, str(Path(HERMES_HOME) / "hermes-agent"))

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from .config import PORT, HOST
from .routes.chat import router as chat_router
from .routes.sessions import router as sessions_router
from .routes.config_route import router as config_router
from .routes.system import router as system_router
from .routes.skills import router as skills_router
from .routes.files import router as files_router
from .routes.jobs import router as jobs_router
from .routes.logs import router as logs_router
from .routes.cron_history import router as cron_history_router
from .routes.profiles import router as profiles_router
from .routes.gateways import router as gateways_router
from .routes.auth_providers import router as auth_providers_router
from .routes.weixin import router as weixin_router
from .routes.terminal import router as terminal_router
from .routes.channels import router as channels_router
from .routes.workspaces import router as workspaces_router
from .routes.auth import check_auth, router as auth_router
from .routes.files import upload_files as _upload_files

app = FastAPI(title="Hermes Py WebUI", version="0.1.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Auth middleware for API routes
@app.middleware("http")
async def auth_middleware(request, call_next):
    path = request.url.path
    # Skip auth for static files and health
    if path.startswith("/assets") or path == "/health" or path == "/favicon.ico":
        return await call_next(request)
    # Skip auth for login page
    if path == "/login.html" or path == "/":
        return await call_next(request)
    # Check auth for API routes (but allow /api/auth/* endpoints)
    if path.startswith("/api/") and not path.startswith("/api/auth/"):
        try:
            await check_auth(request)
        except Exception:
            from fastapi.responses import JSONResponse
            return JSONResponse(status_code=401, content={"error": "Unauthorized"})
    return await call_next(request)

# Auth routes FIRST — /api/auth/* bypasses middleware auth check
app.include_router(auth_router)

# API routes
app.include_router(chat_router)
app.include_router(sessions_router)
app.include_router(config_router)
app.include_router(system_router)
app.include_router(skills_router)
app.include_router(files_router)
app.include_router(jobs_router)
app.include_router(logs_router)
app.include_router(cron_history_router)
app.include_router(profiles_router)
app.include_router(gateways_router)
app.include_router(auth_providers_router)
app.include_router(weixin_router)
app.include_router(terminal_router)
app.include_router(channels_router)
app.include_router(workspaces_router)

# Chat attachment upload — frontend sends POST /upload with FormData
app.post("/upload")(_upload_files)

# Static files — serve Vue build from backend/static/
STATIC_DIR = Path(__file__).parent / "static"
if STATIC_DIR.exists():
    app.mount("/assets", StaticFiles(directory=str(STATIC_DIR / "assets")), name="assets")

    @app.get("/favicon.ico")
    @app.get("/favicon.svg")
    @app.get("/favicon.jpg")
    @app.get("/icons.svg")
    @app.get("/logo.png")
    async def static_root_file(request: Request):
        filename = request.url.path.lstrip("/")
        p = STATIC_DIR / filename
        if p.exists():
            return FileResponse(str(p))

    @app.get("/{path:path}")
    async def spa_catchall(path: str):
        """SPA fallback — serve index.html for all non-API routes."""
        index = STATIC_DIR / "index.html"
        if index.exists():
            return FileResponse(str(index))
        return {"error": "Frontend not built"}


@app.on_event("startup")
async def startup():
    from .config import STATE_DB
    from .streaming import prewarm_ai_agent
    print(f"[9898] Hermes Py WebUI starting", flush=True)
    print(f"[9898] State DB: {STATE_DB} (exists: {STATE_DB.exists()})", flush=True)
    print(f"[9898] Listening on http://{HOST}:{PORT}", flush=True)
    # Pre-warm AIAgent import in background (~26s) so first chat isn't cold
    prewarm_ai_agent()


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host=HOST, port=PORT, reload=False, log_level="warning")


# Wrap app with ASGI middleware to handle WebSocket terminal connections
# This bypasses Starlette 1.0.0's WebSocket routing issues
from .routes.terminal import TerminalWSMiddleware
app = TerminalWSMiddleware(app)
