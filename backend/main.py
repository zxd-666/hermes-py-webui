"""Hermes Py WebUI — FastAPI backend that directly imports AIAgent.

Reads sessions from state.db, streams agent responses via SSE.
Core value: workspace-per-session binding (AIAgent instantiated with workdir).
"""
import os
import re
import sys
from pathlib import Path

# Ensure hermes-agent is importable before anything else
HERMES_HOME = os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes"))
sys.path.insert(0, str(Path(HERMES_HOME) / "hermes-agent"))

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse

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
from .routes.auth import _load, _lock, check_auth, router as auth_router
from .routes.weixin import router as weixin_router
from .routes.terminal import router as terminal_router
from .routes.channels import router as channels_router
from .routes.workspaces import router as workspaces_router
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
@app.exception_handler(FileNotFoundError)
async def not_found_handler(request, exc):
    return JSONResponse(status_code=404, content={"error": str(exc)})


@app.middleware("http")
async def auth_middleware(request, call_next):
    path = request.url.path
    # Auth routes and static files are always accessible
    if path.startswith("/api/auth/") or path.startswith("/assets/") or path == "/logo.png" or path == "/favicon.ico":
        return await call_next(request)
    # Local IP is public (used to build LAN access URL in settings page)
    if path == "/api/hermes/local-ip":
        return await call_next(request)
    # Avatar images are public (used in <img src="..."> which can't carry auth headers)
    if path.startswith("/api/hermes/profiles/") and path.endswith("/avatar"):
        return await call_next(request)
    # API routes require auth when password is set
    if path.startswith("/api/"):
        data = _load()
        if data.get("password_hash"):
            auth = request.headers.get("Authorization", "")
            token = auth[7:] if auth.startswith("Bearer ") else request.query_params.get("token", "")
            if not token:
                return JSONResponse(status_code=401, content={"detail": "Unauthorized"})
            with _lock:
                tokens = data.get("tokens", {})
                if token not in tokens:
                    return JSONResponse(status_code=401, content={"detail": "Invalid token"})
    return await call_next(request)
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
app.include_router(weixin_router)
app.include_router(terminal_router)
app.include_router(channels_router)
app.include_router(workspaces_router)

# Chat attachment upload — frontend sends POST /upload with FormData
app.post("/upload")(_upload_files)

# Static files — serve Vue build from backend/static/
STATIC_DIR = Path(__file__).parent / "static"
if STATIC_DIR.exists():
    @app.get("/assets/{path:path}")
    async def serve_asset(path: str):
        p = STATIC_DIR / "assets" / path
        if not p.exists():
            return {"error": "not found"}, 404
        resp = FileResponse(str(p))
        if re.search(r"-[a-zA-Z0-9_-]{6,}\.", path):
            resp.headers["Cache-Control"] = "public, max-age=31536000, immutable"
        return resp

    @app.middleware("http")
    async def cache_control_middleware(request: Request, call_next):
        response = await call_next(request)
        path = request.url.path
        if path == "/" or path.endswith("/index.html"):
            # index.html must never be cached — it references hashed chunks
            response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
            response.headers["ETag"] = ""  # Clear ETag to prevent 304
            response.headers["Last-Modified"] = ""  # Clear Last-Modified
        return response

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
            return FileResponse(str(index), headers={"Cache-Control": "no-cache, no-store, must-revalidate"})
        return {"error": "Frontend not built"}


@app.on_event("startup")
async def startup():
    from .config import STATE_DB
    from .streaming import prewarm_ai_agent, expire_old_streams
    print(f"[9898] Hermes Py WebUI starting", flush=True)
    print(f"[9898] State DB: {STATE_DB} (exists: {STATE_DB.exists()})", flush=True)
    print(f"[9898] Listening on http://{HOST}:{PORT}", flush=True)
    # Pre-warm AIAgent import in background (~26s) so first chat isn't cold
    prewarm_ai_agent()
    # Periodically clean up expired SSE stream queues
    import asyncio
    async def _cleanup_loop():
        while True:
            await asyncio.sleep(120)  # every 2 minutes
            try:
                expire_old_streams()
            except Exception:
                pass
    asyncio.create_task(_cleanup_loop())


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host=HOST, port=PORT, reload=False, log_level="warning")


# Wrap app with ASGI middleware to handle WebSocket terminal connections
# This bypasses Starlette 1.0.0's WebSocket routing issues
from .routes.terminal import TerminalWSMiddleware
app = TerminalWSMiddleware(app)
