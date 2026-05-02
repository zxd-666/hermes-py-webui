"""Workspace preset management endpoints.

Workspaces are stored per-profile:
  default  →  ~/.hermes/webui_workspaces.json
  named    →  ~/.hermes/profiles/<name>/webui_workspaces.json
"""
import json, os, uuid
from pathlib import Path
from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional

from ..config import profile_from_request, profile_home

router = APIRouter(prefix="/api/hermes", tags=["workspaces"])


def _workspaces_file(request: Request) -> Path:
    profile = profile_from_request(request)
    return profile_home(profile) / "webui_workspaces.json"


def _load_workspaces(request: Request) -> list[dict]:
    fp = _workspaces_file(request)
    if fp.exists():
        try:
            return json.loads(fp.read_text())
        except Exception:
            pass
    return []


def _save_workspaces(request: Request, data: list[dict]):
    fp = _workspaces_file(request)
    fp.parent.mkdir(parents=True, exist_ok=True)
    fp.write_text(json.dumps(data, ensure_ascii=False, indent=2))


class WorkspaceCreate(BaseModel):
    name: str
    path: str


class WorkspaceUpdate(BaseModel):
    name: Optional[str] = None
    path: Optional[str] = None


@router.get("/workspaces")
async def list_workspaces(request: Request):
    return {"workspaces": _load_workspaces(request)}


@router.post("/workspaces")
async def create_workspace(request: Request, body: WorkspaceCreate):
    workspaces = _load_workspaces(request)
    # Check duplicate name
    for ws in workspaces:
        if ws["name"] == body.name.strip():
            return JSONResponse(status_code=409, content={"error": "name already exists"})
    ws = {"id": str(uuid.uuid4())[:8], "name": body.name.strip(), "path": body.path.strip()}
    # Validate path exists
    if not os.path.isdir(ws["path"]):
        return JSONResponse(status_code=400, content={"error": "path does not exist"})
    workspaces.append(ws)
    _save_workspaces(request, workspaces)
    return {"workspace": ws}


@router.put("/workspaces/{ws_id}")
async def update_workspace(request: Request, ws_id: str, body: WorkspaceUpdate):
    workspaces = _load_workspaces(request)
    for ws in workspaces:
        if ws["id"] == ws_id:
            if body.name is not None:
                ws["name"] = body.name.strip()
            if body.path is not None:
                p = body.path.strip()
                if not os.path.isdir(p):
                    return JSONResponse(status_code=400, content={"error": "path does not exist"})
                ws["path"] = p
            _save_workspaces(request, workspaces)
            return {"workspace": ws}
    return JSONResponse(status_code=404, content={"error": "workspace not found"})


@router.delete("/workspaces/{ws_id}")
async def delete_workspace(request: Request, ws_id: str):
    workspaces = _load_workspaces(request)
    new_list = [ws for ws in workspaces if ws["id"] != ws_id]
    if len(new_list) == len(workspaces):
        return JSONResponse(status_code=404, content={"error": "workspace not found"})
    _save_workspaces(request, new_list)
    return {"ok": True}
