"""Files endpoints: browse, read, write, delete, rename, mkdir, copy, upload."""
import os
import shutil
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query, Request, UploadFile, File
from fastapi.responses import JSONResponse
from starlette.datastructures import UploadFile as StarletteUploadFile

router = APIRouter(prefix="/api/hermes/files", tags=["files"])

# Default root is home directory
DEFAULT_ROOT = Path.home()


def _resolve_path(path: str, allow_outside: bool = False) -> Path:
    """Resolve a user-provided path, enforcing root boundary by default."""
    p = Path(path).expanduser().resolve()
    if not allow_outside:
        # Basic safety: must be absolute
        if not p.is_absolute():
            p = DEFAULT_ROOT / path
    return p


def _entry_dict(p: Path) -> dict:
    """Convert a Path to a FileEntry dict."""
    try:
        stat = p.stat()
        return {
            "name": p.name,
            "path": str(p),
            "isDir": p.is_dir(),
            "size": stat.st_size if p.is_file() else 0,
            "modTime": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).isoformat(),
        }
    except OSError:
        return {
            "name": p.name,
            "path": str(p),
            "isDir": p.is_dir(),
            "size": 0,
            "modTime": "",
        }


@router.get("/list")
async def list_files(path: str = Query("", description="Directory path to list")):
    """List directory contents."""
    if not path:
        path = str(DEFAULT_ROOT)
    target = _resolve_path(path)
    if not target.is_dir():
        return JSONResponse(status_code=400, content={"error": f"Not a directory: {path}"})
    entries = []
    try:
        for entry in sorted(target.iterdir()):
            # Skip hidden files/dirs
            if entry.name.startswith("."):
                continue
            entries.append(_entry_dict(entry))
    except PermissionError:
        return JSONResponse(status_code=403, content={"error": "Permission denied"})
    return {"entries": entries, "path": str(target)}


@router.get("/stat")
async def stat_file(path: str = Query(..., description="File or directory path")):
    """Get file/directory metadata."""
    target = _resolve_path(path)
    if not target.exists():
        return JSONResponse(status_code=404, content={"error": "File not found"})
    stat = target.stat()
    return {
        "name": target.name,
        "path": str(target),
        "isDir": target.is_dir(),
        "size": stat.st_size,
        "modTime": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).isoformat(),
    }


@router.get("/read")
async def read_file_endpoint(path: str = Query(..., description="File path to read")):
    """Read file content."""
    target = _resolve_path(path)
    if not target.is_file():
        return JSONResponse(status_code=404, content={"error": "File not found"})
    # Reject binary files
    try:
        content = target.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return JSONResponse(status_code=400, content={"error": "Binary file, cannot read as text"})
    return {
        "content": content,
        "path": str(target),
        "size": target.stat().st_size,
    }


@router.put("/write")
async def write_file_endpoint(body: dict):
    """Write content to a file."""
    path = body.get("path", "")
    content = body.get("content", "")
    if not path:
        return JSONResponse(status_code=400, content={"error": "path required"})
    target = _resolve_path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    try:
        target.write_text(content, encoding="utf-8")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    return {"ok": True}


@router.delete("/delete")
async def delete_file_endpoint(body: dict):
    """Delete a file or directory."""
    path = body.get("path", "")
    recursive = body.get("recursive", False)
    if not path:
        return JSONResponse(status_code=400, content={"error": "path required"})
    target = _resolve_path(path)
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
async def rename_file_endpoint(body: dict):
    """Rename or move a file/directory."""
    old_path = body.get("oldPath", "")
    new_path = body.get("newPath", "")
    if not old_path or not new_path:
        return JSONResponse(status_code=400, content={"error": "oldPath and newPath required"})
    src = _resolve_path(old_path)
    dst = _resolve_path(new_path)
    if not src.exists():
        return JSONResponse(status_code=404, content={"error": "Source not found"})
    try:
        src.rename(dst)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    return {"ok": True}


@router.post("/mkdir")
async def mkdir_endpoint(body: dict):
    """Create a directory."""
    path = body.get("path", "")
    if not path:
        return JSONResponse(status_code=400, content={"error": "path required"})
    target = _resolve_path(path)
    try:
        target.mkdir(parents=True, exist_ok=True)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
    return {"ok": True}


@router.post("/copy")
async def copy_file_endpoint(body: dict):
    """Copy a file or directory."""
    src_path = body.get("srcPath", "")
    dest_path = body.get("destPath", "")
    if not src_path or not dest_path:
        return JSONResponse(status_code=400, content={"error": "srcPath and destPath required"})
    src = _resolve_path(src_path)
    dst = _resolve_path(dest_path)
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
    if path:
        target_dir = _resolve_path(path)
    else:
        target_dir = DEFAULT_ROOT
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
            uploaded.append({"name": file_field.filename, "path": str(dest)})
        except Exception as e:
            uploaded.append({"name": file_field.filename, "error": str(e)})
    return {"files": uploaded}
