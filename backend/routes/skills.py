"""Skills endpoints: list, view content, toggle. Memory endpoints: read/write."""
import os
import shutil
import time
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/hermes", tags=["skills"])

SKILLS_DIR = HERMES_HOME / "skills"
SOUL_PATH = HERMES_HOME / "SOUL.md"
MEMORIES_DIR = HERMES_HOME / "memories"
MEMORY_PATH = MEMORIES_DIR / "MEMORY.md"
USER_PATH = MEMORIES_DIR / "USER.md"


def _skill_dirs() -> list[Path]:
    """Return all immediate subdirectories under skills/."""
    if not SKILLS_DIR.exists():
        return []
    return sorted(
        p for p in SKILLS_DIR.iterdir()
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
async def list_skills():
    """List all skills grouped by category directory."""
    categories = []
    for cat_dir in _skill_dirs():
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
async def get_skill_files(category: str, skill: str):
    """List files in a skill directory."""
    skill_dir = SKILLS_DIR / category / skill
    if not skill_dir.is_dir():
        return JSONResponse(status_code=404, content={"error": "skill directory not found"})
    files = []
    for entry in sorted(skill_dir.iterdir()):
        if entry.name.startswith(".") or entry.name == "SKILL.md":
            continue
        files.append({
            "name": entry.name,
            "path": str(entry),
            "isDir": entry.is_dir(),
        })
    return {"files": files}


@router.get("/skills/{skill_path:path}")
async def get_skill_content(skill_path: str):
    """Read SKILL.md content for a given skill path (e.g. 'content/AIwanfuye')."""
    target = SKILLS_DIR / skill_path / "SKILL.md"
    if not target.exists():
        return JSONResponse(status_code=404, content={"error": "skill not found"})
    return {"content": target.read_text(encoding="utf-8")}


@router.put("/skills/toggle")
async def toggle_skill(body: dict):
    """Toggle skill enabled/disabled by moving to/from quarantine."""
    name = body.get("name", "")
    enabled = body.get("enabled", True)
    if not name:
        return JSONResponse(status_code=400, content={"error": "name required"})

    # Find the skill across all categories
    quarantine = SKILLS_DIR / ".hub" / "quarantine"
    target = None
    for cat_dir in _skill_dirs():
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
        dest = SKILLS_DIR / name  # default category
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

def _read_memory_text() -> str:
    """Read current memory content from MEMORY.md."""
    if MEMORY_PATH.exists():
        return MEMORY_PATH.read_text(encoding="utf-8")
    return ""


def _read_user_text() -> str:
    """Read current user profile content from USER.md."""
    if USER_PATH.exists():
        return USER_PATH.read_text(encoding="utf-8")
    return ""


def _read_soul_text() -> str:
    """Read SOUL.md content."""
    if SOUL_PATH.exists():
        return SOUL_PATH.read_text(encoding="utf-8")
    return ""


@router.get("/memory")
async def get_memory():
    """Read MEMORY.md, USER.md, SOUL.md contents and mtimes."""
    return {
        "memory": _read_memory_text(),
        "user": _read_user_text(),
        "soul": _read_soul_text(),
        "memory_mtime": _file_mtime(MEMORY_PATH),
        "user_mtime": _file_mtime(USER_PATH),
        "soul_mtime": _file_mtime(SOUL_PATH),
    }


@router.post("/memory")
async def save_memory(body: dict):
    """Write content to MEMORY.md, USER.md, or SOUL.md."""
    section = body.get("section", "")
    content = body.get("content", "")

    if section == "soul":
        SOUL_PATH.parent.mkdir(parents=True, exist_ok=True)
        SOUL_PATH.write_text(content, encoding="utf-8")
    elif section == "memory":
        MEMORIES_DIR.mkdir(parents=True, exist_ok=True)
        MEMORY_PATH.write_text(content, encoding="utf-8")
    elif section == "user":
        MEMORIES_DIR.mkdir(parents=True, exist_ok=True)
        USER_PATH.write_text(content, encoding="utf-8")
    else:
        return JSONResponse(status_code=400, content={"error": "section must be memory|user|soul"})

    return {"ok": True}
