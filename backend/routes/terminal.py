"""WebSocket terminal — multi-session PTY manager via ptyprocess.

Supports both FastAPI routing (via APIRouter) and direct ASGI middleware.
The ASGI handler `asgi_terminal_ws` can be used by a raw ASGI middleware
to bypass Starlette routing if needed.
"""

import asyncio
import json
import os
import select
import shutil
import uuid
from typing import Dict, Optional
from urllib.parse import parse_qs

import ptyprocess
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from starlette.websockets import WebSocket as StarletteWebSocket
from starlette.types import ASGIApp, Receive, Scope, Send

from .auth import _load, is_auth_enabled

router = APIRouter(prefix="/api/hermes", tags=["terminal"])


class PtySession:
    """Manages a single PTY process."""

    def __init__(self, cols=80, rows=24):
        self._proc: Optional[ptyprocess.PtyProcess] = None
        self.cols = cols
        self.rows = rows

    def spawn(self, cwd=None):
        shell = (
            os.environ.get("SHELL")
            or shutil.which("zsh")
            or shutil.which("bash")
            or "/bin/sh"
        )
        self._proc = ptyprocess.PtyProcess.spawn(
            [shell],
            cwd=cwd or os.environ.get("HOME", "/"),
            dimensions=(self.rows, self.cols),
        )

    @property
    def pid(self):
        return self._proc.pid if self._proc else None

    def is_alive(self):
        return self._proc is not None and self._proc.isalive()

    def read_once(self, timeout=0.1):
        """Non-blocking read. Returns str on data, "" on timeout, None on EOF."""
        if not self.is_alive():
            return None
        fd = self._proc.fileno()
        try:
            r, _, _ = select.select([fd], [], [], timeout)
            if r:
                data = os.read(fd, 4096)
                if data:
                    return data.decode("utf-8", errors="replace")
                return None  # EOF
        except (OSError, ValueError):
            return None
        return ""  # timeout, no data

    def write(self, data: str):
        if self.is_alive():
            try:
                self._proc.write(data.encode("utf-8") if isinstance(data, str) else data)
            except Exception:
                pass

    def resize(self, cols, rows):
        self.cols, self.rows = cols, rows
        if self.is_alive():
            try:
                self._proc.setwinsize(rows, cols)
            except Exception:
                pass

    def kill(self):
        if self._proc:
            try:
                self._proc.terminate()
                self._proc.wait()
            except Exception:
                pass
            self._proc = None


async def _handle_ws(ws) -> None:
    """Core WebSocket terminal handler. Works with both FastAPI and raw Starlette WebSocket."""
    sessions: Dict[str, PtySession] = {}
    active_id: Optional[str] = None
    read_task: Optional[asyncio.Task] = None

    def _shell_name() -> str:
        return os.path.basename(
            os.environ.get("SHELL")
            or shutil.which("zsh")
            or shutil.which("bash")
            or "/bin/sh"
        )

    def _create(cols=80, rows=24) -> PtySession:
        s = PtySession(cols, rows)
        s.spawn()
        return s

    async def _read_loop():
        """Read from active PTY, forward output to frontend."""
        loop = asyncio.get_event_loop()
        while active_id and active_id in sessions:
            session = sessions[active_id]
            result = await loop.run_in_executor(None, session.read_once, 0.1)
            if result is None:
                exit_code = 0
                try:
                    exit_code = session._proc.exitstatus if session._proc else 0
                except Exception:
                    pass
                try:
                    await ws.send_json(
                        {"type": "exited", "id": active_id, "exitCode": exit_code}
                    )
                except Exception:
                    pass
                sessions.pop(active_id, None)
                return
            if result:
                try:
                    await ws.send_text(result)
                except Exception:
                    return
            await asyncio.sleep(0.001)

    async def _start_reader():
        nonlocal read_task
        if read_task:
            read_task.cancel()
            try:
                await read_task
            except asyncio.CancelledError:
                pass
        read_task = asyncio.create_task(_read_loop())

    try:
        session = _create()
        sid = str(uuid.uuid4())[:8]
        sessions[sid] = session
        active_id = sid

        await ws.send_json(
            {
                "type": "created",
                "id": sid,
                "shell": _shell_name(),
                "pid": session.pid,
            }
        )
        await _start_reader()

        while True:
            msg = await ws.receive()

            if "text" in msg and msg["text"]:
                text = msg["text"]
                if text.startswith("{"):
                    try:
                        cmd = json.loads(text)
                    except json.JSONDecodeError:
                        if active_id and active_id in sessions:
                            sessions[active_id].write(text)
                        continue

                    t = cmd.get("type")

                    if t == "create":
                        s = _create(
                            cols=cmd.get("cols", 80), rows=cmd.get("rows", 24)
                        )
                        new_id = str(uuid.uuid4())[:8]
                        sessions[new_id] = s
                        active_id = new_id
                        await ws.send_json(
                            {
                                "type": "created",
                                "id": new_id,
                                "shell": _shell_name(),
                                "pid": s.pid,
                            }
                        )
                        await _start_reader()

                    elif t == "switch":
                        target = cmd.get("sessionId")
                        if target in sessions:
                            active_id = target
                            await _start_reader()
                            await ws.send_json({"type": "switched", "id": target})

                    elif t == "resize":
                        cols = cmd.get("cols", 80)
                        rows = cmd.get("rows", 24)
                        if active_id and active_id in sessions:
                            sessions[active_id].resize(cols, rows)

                    elif t == "close":
                        target = cmd.get("sessionId")
                        if target in sessions:
                            sessions[target].kill()
                            del sessions[target]
                            if active_id == target:
                                active_id = (
                                    next(iter(sessions), None) if sessions else None
                                )
                                if active_id:
                                    await _start_reader()
                else:
                    if active_id and active_id in sessions:
                        sessions[active_id].write(text)

            elif "bytes" in msg and msg["bytes"]:
                if active_id and active_id in sessions:
                    data = msg["bytes"]
                    if isinstance(data, bytes):
                        data = data.decode("utf-8", errors="replace")
                    sessions[active_id].write(data)

    except WebSocketDisconnect:
        pass
    except asyncio.CancelledError:
        pass
    except Exception:
        pass
    finally:
        if read_task:
            read_task.cancel()
            try:
                await read_task
            except (asyncio.CancelledError, Exception):
                pass
        for s in sessions.values():
            s.kill()
        sessions.clear()


# --- FastAPI route (decorator-based, may not work with Starlette 1.0.0 routing) ---

@router.websocket("/terminal")
async def terminal_ws(ws: WebSocket):
    """FastAPI WebSocket endpoint."""
    # Auth check
    from fastapi import Query
    token = ws.query_params.get("token")
    if is_auth_enabled():
        data = _load()
        tokens = data.get("tokens", {})
        if not token or token not in tokens:
            await ws.close(code=4001, reason="Unauthorized")
            return
    await ws.accept()
    await _handle_ws(ws)


# --- Raw ASGI handler (bypasses Starlette routing) ---

async def asgi_terminal_ws(scope: Scope, receive: Receive, send: Send):
    """Raw ASGI WebSocket handler. Call this from an ASGI middleware."""
    # Auth check from query params
    if is_auth_enabled():
        qs = parse_qs(scope.get("query_string", b"").decode())
        token = qs.get("token", [None])[0]
        data = _load()
        tokens = data.get("tokens", {})
        if not token or token not in tokens:
            await send({"type": "websocket.close", "code": 4001, "reason": "Unauthorized"})
            return

    ws = StarletteWebSocket(scope, receive=receive, send=send)
    await ws.accept()
    await _handle_ws(ws)


class TerminalWSMiddleware:
    """ASGI middleware that intercepts terminal WebSocket connections."""

    def __init__(self, app: ASGIApp):
        self.app = app

    async def __call__(self, scope: Scope, receive: Receive, send: Send):
        if scope["type"] == "websocket" and scope.get("path") == "/api/hermes/terminal":
            await asgi_terminal_ws(scope, receive, send)
            return
        await self.app(scope, receive, send)
