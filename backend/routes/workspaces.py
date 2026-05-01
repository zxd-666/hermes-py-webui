"""Workspace preset management endpoints."""
import json, os, uuid
from pathlib import Path
from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/hermes", tags=["workspaces"])

_WORKSPACES_FILE = HERMES_HOME / "webui_workspaces.json"


def _load_workspaces() -> list[dict]:
    if _WORKSPACES_FILE.exists():
        try:
            return json.loads(_WORKSPACES_FILE.read_text())
        except Exception:
            pass
    return []


def _save_workspaces(data: list[dict]):
    _WORKSPACES_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=2))


class WorkspaceCreate(BaseModel):
    name: str
    path: str


class WorkspaceUpdate(BaseModel):
    name: Optional[str] = None
    path: Optional[str] = None


@router.get("/workspaces")
async def list_workspaces():
    return {"workspaces": _load_workspaces()}


@router.post("/workspaces")
async def create_workspace(body: WorkspaceCreate):
    workspaces = _load_workspaces()
    # Check duplicate name
    for ws in workspaces:
        if ws["name"] == body.name.strip():
            return JSONResponse(status_code=409, content={"error": "name already exists"})
    ws = {"id": str(uuid.uuid4())[:8], "name": body.name.strip(), "path": body.path.strip()}
    # Validate path exists
    if not os.path.isdir(ws["path"]):
        return JSONResponse(status_code=400, content={"error": "path does not exist"})
    workspaces.append(ws)
    _save_workspaces(workspaces)
    return {"workspace": ws}


@router.put("/workspaces/{ws_id}")
async def update_workspace(ws_id: str, body: WorkspaceUpdate):
    workspaces = _load_workspaces()
    for ws in workspaces:
        if ws["id"] == ws_id:
            if body.name is not None:
                ws["name"] = body.name.strip()
            if body.path is not None:
                p = body.path.strip()
                if not os.path.isdir(p):
                    return JSONResponse(status_code=400, content={"error": "path does not exist"})
                ws["path"] = p
            _save_workspaces(workspaces)
            return {"workspace": ws}
    return JSONResponse(status_code=404, content={"error": "workspace not found"})


@router.delete("/workspaces/{ws_id}")
async def delete_workspace(ws_id: str):
    workspaces = _load_workspaces()
    new_list = [ws for ws in workspaces if ws["id"] != ws_id]
    if len(new_list) == len(workspaces):
        return JSONResponse(status_code=404, content={"error": "workspace not found"})
    _save_workspaces(new_list)
    return {"ok": True}
