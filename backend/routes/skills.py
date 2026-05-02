"""Skills endpoints: list, view content, toggle. Memory endpoints: read/write."""
import os
import shutil
import time
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse

from ..config import profile_from_request, profile_home

router = APIRouter(prefix="/api/hermes", tags=["skills"])


def _skill_dirs(home: Path) -> list[Path]:
    """Return all immediate subdirectories under skills/."""
    d = home / "skills"
    if not d.exists():
        return []
    return sorted(
        p for p in d.iterdir()
        if p.is_dir() and not p.name.startswith(".") and not p.name.startswith("_")
    )


def _parse_skill_md(skill_path: Path) -> dict:
    """Parse YAML frontmatter from SKILL.md."""
    content = ""
    skill_file = skill_path / "SKILL.md"
    if skill_file.exists():
        content = skill_file.read_text(encoding="utf-8")

    name = skill_path.name
    description = ""
    enabled = True

    # Parse frontmatter
    if content.startswith("---"):
        end = content.find("---", 3)
        if end > 0:
            fm = content[3:end].strip()
            for line in fm.splitlines():
                if line.startswith("name:"):
                    name = line.split(":", 1)[1].strip().strip('"').strip("'")
                elif line.startswith("description:"):
                    # Multi-line description (| syntax)
                    desc_lines = []
                    rest = line.split(":", 1)[1].strip()
                    if rest.startswith("|"):
                        pass  # continuation lines handled below
                    elif rest:
                        desc_lines.append(rest.strip().strip('"').strip("'"))
                    # Read continuation lines until we hit the next key
                    idx = fm.splitlines().index(line) + 1
                    for cl in fm.splitlines()[idx:]:
                        if ":" in cl and not cl.startswith(" "):
                            break
                        stripped = cl.strip().strip('"').strip("'")
                        if stripped:
                            desc_lines.append(stripped)
                    description = " ".join(desc_lines)
                elif line.startswith("enabled:"):
                    enabled = line.split(":", 1)[1].strip().lower() not in ("false", "0", "no")

    return {"name": name, "description": description, "enabled": enabled}


def _file_mtime(path: Path) -> Optional[float]:
    if path.exists():
        return path.stat().st_mtime
    return None


# ── Skills ──────────────────────────────────────────────

@router.get("/skills")
async def list_skills(request: Request):
    """List all skills grouped by category directory."""
    home = profile_home(profile_from_request(request))
    categories = []
    for cat_dir in _skill_dirs(home):
        skills = []
        for skill_dir in sorted(cat_dir.iterdir()):
            if skill_dir.is_dir() and (skill_dir / "SKILL.md").exists():
                info = _parse_skill_md(skill_dir)
                skills.append(info)
        if skills:
            cat_desc_file = cat_dir / "README.md"
            cat_desc = ""
            if cat_desc_file.exists():
                first_lines = cat_desc_file.read_text(encoding="utf-8").splitlines()
                cat_desc = first_lines[0].lstrip("#").strip() if first_lines else ""
            categories.append({
                "name": cat_dir.name,
                "description": cat_desc,
                "skills": skills,
            })
    return {"categories": categories}


@router.get("/skills/{category}/{skill}/files")
async def get_skill_files(category: str, skill: str, request: Request):
    """List files in a skill directory recursively."""
    home = profile_home(profile_from_request(request))
    skill_dir = home / "skills" / category / skill
    if not skill_dir.is_dir():
        return JSONResponse(status_code=404, content={"error": "skill directory not found"})
    files = []
    for entry in sorted(skill_dir.rglob("*")):
        if not entry.is_file():
            continue
        if entry.name.startswith(".") or entry.name == "SKILL.md":
            continue
        # Skip compiled / cache files
        if entry.suffix in (".pyc", ".pyo") or "__pycache__" in entry.parts:
            continue
        rel = str(entry.relative_to(skill_dir))
        files.append({
            "name": entry.name,
            "path": rel,
            "isDir": False,
        })
    return {"files": files}


@router.get("/skills/{skill_path:path}")
async def get_skill_content(skill_path: str, request: Request):
    """Read a file within a skill directory (SKILL.md or any attached file)."""
    home = profile_home(profile_from_request(request))
    base = home / "skills"

    # Try exact path first (for attached files like references/api.md)
    target = (base / skill_path).resolve()
    # Security: ensure the resolved path stays within skills/
    try:
        target.relative_to(base.resolve())
    except ValueError:
        return JSONResponse(status_code=403, content={"error": "access denied"})

    if target.is_file():
        try:
            return {"content": target.read_text(encoding="utf-8")}
        except UnicodeDecodeError:
            return JSONResponse(status_code=400, content={"error": "binary file"})

    # Fall back to SKILL.md in the directory
    skill_path = skill_path.removesuffix("/SKILL.md")
    target = base / skill_path / "SKILL.md"
    if not target.exists():
        return JSONResponse(status_code=404, content={"error": "file not found"})
    return {"content": target.read_text(encoding="utf-8")}


@router.put("/skills/toggle")
async def toggle_skill(body: dict, request: Request):
    """Toggle skill enabled/disabled by moving to/from quarantine."""
    name = body.get("name", "")
    enabled = body.get("enabled", True)
    if not name:
        return JSONResponse(status_code=400, content={"error": "name required"})

    home = profile_home(profile_from_request(request))
    skills_dir = home / "skills"

    # Find the skill across all categories
    quarantine = skills_dir / ".hub" / "quarantine"
    target = None
    for cat_dir in _skill_dirs(home):
        for skill_dir in cat_dir.iterdir():
            if skill_dir.is_dir() and skill_dir.name == name:
                target = skill_dir
                break
        if target:
            break

    if not target:
        # Maybe it's in quarantine
        if quarantine.exists():
            q_entry = quarantine / name
            if q_entry.is_dir():
                target = q_entry

    if not target:
        return JSONResponse(status_code=404, content={"error": f"skill '{name}' not found"})

    if enabled and target.parent == quarantine:
        # Restore — move back to original category (best effort)
        dest = skills_dir / name  # default category
        shutil.move(str(target), str(dest))
        return {"ok": True}
    elif not enabled and target.parent != quarantine:
        # Quarantine
        quarantine.mkdir(parents=True, exist_ok=True)
        dest = quarantine / name
        shutil.move(str(target), str(dest))
        return {"ok": True}
    else:
        return {"ok": True}  # already in desired state


# ── Memory ──────────────────────────────────────────────

@router.get("/memory")
async def get_memory(request: Request):
    """Read MEMORY.md, USER.md, SOUL.md contents and mtimes."""
    home = profile_home(profile_from_request(request))
    mem_dir = home / "memories"
    memory_path = mem_dir / "MEMORY.md"
    user_path = mem_dir / "USER.md"
    soul_path = home / "SOUL.md"
    return {
        "memory": memory_path.read_text(encoding="utf-8") if memory_path.exists() else "",
        "user": user_path.read_text(encoding="utf-8") if user_path.exists() else "",
        "soul": soul_path.read_text(encoding="utf-8") if soul_path.exists() else "",
        "memory_mtime": _file_mtime(memory_path),
        "user_mtime": _file_mtime(user_path),
        "soul_mtime": _file_mtime(soul_path),
    }


@router.post("/memory")
async def save_memory(body: dict, request: Request):
    """Write content to MEMORY.md, USER.md, or SOUL.md."""
    section = body.get("section", "")
    content = body.get("content", "")

    home = profile_home(profile_from_request(request))
    mem_dir = home / "memories"

    if section == "soul":
        (home / "SOUL.md").parent.mkdir(parents=True, exist_ok=True)
        (home / "SOUL.md").write_text(content, encoding="utf-8")
    elif section == "memory":
        mem_dir.mkdir(parents=True, exist_ok=True)
        (mem_dir / "MEMORY.md").write_text(content, encoding="utf-8")
    elif section == "user":
        mem_dir.mkdir(parents=True, exist_ok=True)
        (mem_dir / "USER.md").write_text(content, encoding="utf-8")
    else:
        return JSONResponse(status_code=400, content={"error": "section must be memory|user|soul"})

    return {"ok": True}
