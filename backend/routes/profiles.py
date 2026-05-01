"""Profiles endpoints: list, detail, create, delete, rename, switch, export/import."""
import asyncio
import json
import shutil
import tarfile
import tempfile
from pathlib import Path

from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse, FileResponse

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/hermes/profiles", tags=["profiles"])

PROFILES_DIR = HERMES_HOME / "profiles"


async def _run_hermes(args: list[str], timeout: int = 30) -> tuple[int, str, str]:
    """Run a hermes CLI command and return (exit_code, stdout, stderr)."""
    import shutil
    hermes_bin = shutil.which("hermes") or str(Path(__file__).resolve().parents[3] / "hermes-agent" / "venv" / "bin" / "hermes")
    proc = await asyncio.create_subprocess_exec(
        hermes_bin, *args,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    try:
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout)
    except asyncio.TimeoutError:
        proc.kill()
        return -1, "", "command timed out"
    return proc.returncode, stdout.decode("utf-8", errors="replace"), stderr.decode("utf-8", errors="replace")


@router.get("")
async def list_profiles():
    """List all hermes profiles."""
    code, stdout, stderr = await _run_hermes(["profile", "list", "--json"])
    if code == 0 and stdout.strip():
        try:
            data = json.loads(stdout.strip())
            return {"profiles": data.get("profiles", data)}
        except json.JSONDecodeError:
            pass

    # Fallback: parse from directory listing
    if not PROFILES_DIR.exists():
        return {"profiles": []}

    profiles = []
    for entry in sorted(PROFILES_DIR.iterdir()):
        if not entry.is_dir():
            continue
        cfg = entry / "config.yaml"
        model, gateway = "", ""
        if cfg.exists():
            try:
                import yaml
                with open(cfg) as f:
                    c = yaml.safe_load(f) or {}
                model = (c.get("model") or {}).get("default", "")
                gateway = (c.get("platforms") or {}).get("api_server", {}).get("extra", {}).get("port", "")
            except Exception:
                pass
        profiles.append({
            "name": entry.name,
            "active": False,
            "model": model,
            "gateway": gateway,
            "alias": entry.name,
        })
    return {"profiles": profiles}


@router.get("/{name}")
async def get_profile(name: str):
    """Get detail for a specific profile."""
    code, stdout, stderr = await _run_hermes(["profile", "show", name, "--json"])
    if code == 0 and stdout.strip():
        try:
            data = json.loads(stdout.strip())
            return {"profile": data.get("profile", data)}
        except json.JSONDecodeError:
            pass

    # Fallback: build from filesystem
    target = PROFILES_DIR / name
    if not target.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})

    cfg = target / "config.yaml"
    model, provider = "", ""
    if cfg.exists():
        try:
            import yaml
            with open(cfg) as f:
                c = yaml.safe_load(f) or {}
            model = (c.get("model") or {}).get("default", "")
            provider = (c.get("model") or {}).get("provider", "")
        except Exception:
            pass

    # Count skills
    skills_dir = target / "skills"
    skill_count = 0
    if skills_dir.is_dir():
        skill_count = sum(1 for _ in skills_dir.rglob("SKILL.md"))

    return {
        "profile": {
            "name": name,
            "path": str(target),
            "model": model,
            "provider": provider,
            "gateway": "",
            "skills": skill_count,
            "hasEnv": (target / ".env").exists(),
            "hasSoulMd": (target / "SOUL.md").exists(),
        }
    }


@router.post("")
async def create_profile(body: dict):
    """Create a new profile, optionally cloning from current."""
    name = body.get("name", "")
    clone = body.get("clone", False)
    if not name:
        return JSONResponse(status_code=400, content={"error": "name is required"})

    args = ["profile", "create", name]
    if clone:
        args.append("--clone")

    code, stdout, stderr = await _run_hermes(args)
    return {"success": code == 0}


@router.delete("/{name}")
async def delete_profile(name: str):
    """Delete a profile."""
    code, stdout, stderr = await _run_hermes(["profile", "delete", name])
    if code != 0:
        return JSONResponse(status_code=400, content={"error": stderr.strip()})
    return {"ok": True}


@router.post("/{name}/rename")
async def rename_profile(name: str, body: dict):
    """Rename a profile."""
    new_name = body.get("new_name", "")
    if not new_name:
        return JSONResponse(status_code=400, content={"error": "new_name is required"})

    code, stdout, stderr = await _run_hermes(["profile", "rename", name, new_name])
    if code != 0:
        return JSONResponse(status_code=400, content={"error": stderr.strip()})
    return {"ok": True}


@router.put("/active")
async def switch_profile(body: dict):
    """Switch to a different profile."""
    name = body.get("name", "")
    if not name:
        return JSONResponse(status_code=400, content={"error": "name is required"})

    code, stdout, stderr = await _run_hermes(["profile", "use", name])
    if code != 0:
        return JSONResponse(status_code=400, content={"error": stderr.strip()})
    return {"ok": True}


@router.post("/{name}/export")
async def export_profile(name: str):
    """Export a profile as tar.gz archive."""
    target = PROFILES_DIR / name
    if not target.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})

    tmp = Path(tempfile.mktemp(suffix=".tar.gz"))
    try:
        with tarfile.open(str(tmp), "w:gz") as tar:
            for entry in target.rglob("*"):
                if entry.is_file():
                    arcname = entry.relative_to(target.parent)
                    tar.add(str(entry), arcname=str(arcname))
        return FileResponse(str(tmp), media_type="application/gzip",
                            filename=f"hermes-profile-{name}.tar.gz")
    except Exception as e:
        if tmp.exists():
            tmp.unlink()
        return JSONResponse(status_code=500, content={"error": str(e)})


@router.post("/import")
async def import_profile(file: UploadFile = File(...)):
    """Import a profile from tar.gz archive."""
    tmp = Path(tempfile.mktemp(suffix=".tar.gz"))
    try:
        with open(str(tmp), "wb") as f:
            f.write(await file.read())

        with tarfile.open(str(tmp), "r:gz") as tar:
            # Find profile directory name from archive
            members = tar.getnames()
            if not members:
                raise ValueError("empty archive")
            # First segment is the profile name
            profile_name = members[0].split("/")[0]
            extract_dir = PROFILES_DIR / profile_name
            if extract_dir.exists():
                return JSONResponse(status_code=400, content={"error": "profile already exists"})
            extract_dir.mkdir(parents=True, exist_ok=True)
            tar.extractall(str(extract_dir))

        return {"ok": True, "name": profile_name}
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": str(e)})
    finally:
        if tmp.exists():
            tmp.unlink()


@router.patch("/{name}/model")
async def update_profile_model(name: str, body: dict):
    """Update model config for a profile."""
    target = PROFILES_DIR / name
    if not target.is_dir():
        return JSONResponse(status_code=404, content={"error": "profile not found"})

    import yaml

    cfg_path = target / "config.yaml"
    config = {}
    if cfg_path.exists():
        try:
            with open(cfg_path) as f:
                config = yaml.safe_load(f) or {}
        except Exception:
            config = {}

    config.setdefault("model", {})
    config["model"]["default"] = body.get("model", "")
    config["model"]["provider"] = body.get("provider", "")

    with open(cfg_path, "w") as f:
        yaml.dump(config, f, allow_unicode=True, default_flow_style=False)

    return {"ok": True}
