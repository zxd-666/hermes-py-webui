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

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from .config import PORT, HOST
from .routes.chat import router as chat_router
from .routes.sessions import router as sessions_router
from .routes.config_route import router as config_router
from .routes.system import router as system_router
from .routes.auth import check_auth

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
    # Check auth for API routes
    if path.startswith("/api/"):
        try:
            await check_auth(request)
        except Exception:
            from fastapi.responses import JSONResponse
            return JSONResponse(status_code=401, content={"error": "Unauthorized"})
    return await call_next(request)

# API routes
app.include_router(chat_router)
app.include_router(sessions_router)
app.include_router(config_router)
app.include_router(system_router)


# Static files — serve Vue build from backend/static/
STATIC_DIR = Path(__file__).parent / "static"
if STATIC_DIR.exists():
    app.mount("/assets", StaticFiles(directory=str(STATIC_DIR / "assets")), name="assets")

    @app.get("/favicon.ico")
    @app.get("/favicon.svg")
    @app.get("/icons.svg")
    async def favicon():
        for name in ["favicon.ico", "favicon.svg", "icons.svg"]:
            p = STATIC_DIR / name
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
    print(f"[9898] Hermes Py WebUI starting", flush=True)
    print(f"[9898] State DB: {STATE_DB} (exists: {STATE_DB.exists()})", flush=True)
    print(f"[9898] Listening on http://{HOST}:{PORT}", flush=True)
    # AIAgent is lazy-loaded on first chat request (import takes ~26s).
    # Verification is done in streaming.py::_get_ai_agent().


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host=HOST, port=PORT, reload=False, log_level="warning")
