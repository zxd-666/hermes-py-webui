"""Files endpoints: browse, read, write, delete, rename, mkdir, copy, upload.

Root directory is determined by the active profile (X-Hermes-Profile header):
  default  →  ~/.hermes/
  named    →  ~/.hermes/profiles/<name>/

All paths are resolved relative to this profile root.
"""
import os
import shutil
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query, Request, UploadFile, File
from fastapi.responses import JSONResponse
from starlette.datastructures import UploadFile as StarletteUploadFile

from ..config import profile_from_request, profile_home

router = APIRouter(prefix="/api/hermes/files", tags=["files"])

# Sensitive files that should not be written/deleted/renamed
_SENSITIVE_NAMES = {".env", "auth.json"}


def _resolve_path(relative_path: str, root: Path) -> Path:
    """Resolve a relative path under the given root, preventing traversal."""
    if not relative_path or relative_path in (".", "/"):
        return root
    # Reject traversal attempts
    normalized = relative_path.replace("\\", "/")
    if normalized.startswith("..") or "/../" in normalized or normalized.startswith("/"):
        raise PermissionError(f"Invalid path: {relative_path}")
    resolved = (root / normalized).resolve()
    if not str(resolved).startswith(str(root.resolve())):
        raise PermissionError(f"Path escapes profile root: {relative_path}")
    return resolved


def _get_root(request: Request) -> Path:
    """Get the file root for the current request's profile."""
    profile = profile_from_request(request)
    return profile_home(profile)


def _entry_dict(p: Path, root: Path) -> dict:
    """Convert a Path to a FileEntry dict with path relative to root."""
    try:
        st = p.stat()
        rel = str(p.relative_to(root)) if str(p.resolve()).startswith(str(root.resolve())) else p.name
        return {
            "name": p.name,
            "path": rel,
            "isDir": p.is_dir(),
            "size": st.st_size if p.is_file() else 0,
            "modTime": datetime.fromtimestamp(st.st_mtime, tz=timezone.utc).isoformat(),
        }
    except OSError:
        return {
            "name": p.name,
            "path": p.name,
            "isDir": p.is_dir(),
            "size": 0,
            "modTime": "",
        }


@router.get("/list")
async def list_files(request: Request, path: str = Query("", description="Directory path to list")):
    """List directory contents under the profile root."""
    root = _get_root(request)
    target = _resolve_path(path, root) if path else root
    if not target.is_dir():
        return JSONResponse(status_code=400, content={"error": f"Not a directory: {path}"})
    entries = []
    try:
        for entry in sorted(target.iterdir()):
            if entry.name.startswith("."):
                continue
            entries.append(_entry_dict(entry, root))
    except PermissionError:
        return JSONResponse(status_code=403, content={"error": "Permission denied"})
    return {"entries": entries, "path": path or ""}


@router.get("/stat")
async def stat_file(request: Request, path: str = Query(..., description="File or directory path")):
    """Get file/directory metadata."""
    root = _get_root(request)
    target = _resolve_path(path, root)
    if not target.exists():
        return JSONResponse(status_code=404, content={"error": "File not found"})
    st = target.stat()
    rel = str(target.relative_to(root)) if str(target.resolve()).startswith(str(root.resolve())) else target.name
    return {
        "name": target.name,
        "path": rel,
        "isDir": target.is_dir(),
        "size": st.st_size,
        "modTime": datetime.fromtimestamp(st.st_mtime, tz=timezone.utc).isoformat(),
    }


@router.get("/read")
async def read_file_endpoint(request: Request, path: str = Query(..., description="File path to read")):
    """Read file content."""
    root = _get_root(request)
    target = _resolve_path(path, root)
    if not target.is_file():
        return JSONResponse(status_code=404, content={"error": "File not found"})
    try:
        content = target.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return JSONResponse(status_code=400, content={"error": "Binary file, cannot read as text"})
    return {
        "content": content,
        "path": path,
        "size": target.stat().st_size,
    }


@router.put("/write")
async def write_file_endpoint(request: Request, body: dict):
    """Write content to a file."""
    path = body.get("path", "")
    content = body.get("content", "")
    if not path:
        return JSONResponse(status_code=400, content={"error": "path required"})
    # Block sensitive files
    if Path(path).name in _SENSITIVE_NAMES:
        return JSONResponse(status_code=403, content={"error": "Cannot modify sensitive file"})
    root = _get_root(request)
    target = _resolve_path(path, root)
    target.parent.mkdir(parents=True, exist_ok=True)
    try:
        target.write_text(content, encoding="utf-8")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    return {"ok": True}


@router.delete("/delete")
async def delete_file_endpoint(request: Request, body: dict):
    """Delete a file or directory."""
    path = body.get("path", "")
    recursive = body.get("recursive", False)
    if not path:
        return JSONResponse(status_code=400, content={"error": "path required"})
    if Path(path).name in _SENSITIVE_NAMES:
        return JSONResponse(status_code=403, content={"error": "Cannot delete sensitive file"})
    root = _get_root(request)
    target = _resolve_path(path, root)
    if not target.exists():
        return JSONResponse(status_code=404, content={"error": "File not found"})
    try:
        if target.is_dir():
            if recursive:
                shutil.rmtree(target)
            else:
                target.rmdir()
        else:
            target.unlink()
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    return {"ok": True}


@router.post("/rename")
async def rename_file_endpoint(request: Request, body: dict):
    """Rename or move a file/directory."""
    old_path = body.get("oldPath", "")
    new_path = body.get("newPath", "")
    if not old_path or not new_path:
        return JSONResponse(status_code=400, content={"error": "oldPath and newPath required"})
    if Path(old_path).name in _SENSITIVE_NAMES:
        return JSONResponse(status_code=403, content={"error": "Cannot rename sensitive file"})
    root = _get_root(request)
    src = _resolve_path(old_path, root)
    dst = _resolve_path(new_path, root)
    if not src.exists():
        return JSONResponse(status_code=404, content={"error": "Source not found"})
    try:
        src.rename(dst)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    return {"ok": True}


@router.post("/mkdir")
async def mkdir_endpoint(request: Request, body: dict):
    """Create a directory."""
    path = body.get("path", "")
    if not path:
        return JSONResponse(status_code=400, content={"error": "path required"})
    root = _get_root(request)
    target = _resolve_path(path, root)
    try:
        target.mkdir(parents=True, exist_ok=True)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    return {"ok": True}


@router.post("/copy")
async def copy_file_endpoint(request: Request, body: dict):
    """Copy a file or directory."""
    src_path = body.get("srcPath", "")
    dest_path = body.get("destPath", "")
    if not src_path or not dest_path:
        return JSONResponse(status_code=400, content={"error": "srcPath and destPath required"})
    root = _get_root(request)
    src = _resolve_path(src_path, root)
    dst = _resolve_path(dest_path, root)
    if not src.exists():
        return JSONResponse(status_code=404, content={"error": "Source not found"})
    try:
        if src.is_dir():
            shutil.copytree(src, dst)
        else:
            shutil.copy2(src, dst)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    return {"ok": True}


@router.post("/upload")
async def upload_files(
    request: Request,
    path: str = Query("", description="Target directory"),
):
    """Upload files via multipart form."""
    root = _get_root(request)
    target_dir = _resolve_path(path, root) if path else root
    target_dir.mkdir(parents=True, exist_ok=True)

    form = await request.form()
    uploaded = []
    for file_field in form.getlist("file"):
        if not isinstance(file_field, (UploadFile, StarletteUploadFile)):
            continue
        dest = target_dir / file_field.filename
        try:
            content = await file_field.read()
            dest.write_bytes(content)
            rel = str(dest.relative_to(root)) if str(dest.resolve()).startswith(str(root.resolve())) else file_field.filename
            uploaded.append({"name": file_field.filename, "path": rel})
        except Exception as e:
            uploaded.append({"name": file_field.filename, "error": str(e)})
    return {"files": uploaded}
