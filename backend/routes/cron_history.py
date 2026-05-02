"""Cron history endpoints: list and read cron job output files."""
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse

from ..config import profile_from_request, profile_home

router = APIRouter(prefix="/api/cron-history", tags=["cron-history"])

# Only list these file extensions
_OUTPUT_EXTENSIONS = {".md", ".txt", ".json", ".log"}

# Simple LRU-style cache for deleted job names (process-lifetime)
_deleted_name_cache: dict[str, str] = {}


def _load_job_name_map(home: Path) -> dict[str, str]:
    """Build jobId → name mapping from jobs.json."""
    job_file = home / "cron" / "jobs.json"
    if not job_file.is_file():
        return {}
    import json
    try:
        data = json.loads(job_file.read_text(encoding="utf-8"))
        return {j["id"]: j["name"] for j in data.get("jobs", []) if "id" in j and "name" in j}
    except Exception:
        return {}


def _recover_job_name(output_dir: Path, job_id: str) -> str:
    """Try to recover a deleted job's name from its latest output file."""
    if job_id in _deleted_name_cache:
        return _deleted_name_cache[job_id]

    job_dir = output_dir / job_id
    if not job_dir.is_dir():
        return job_id

    # Pick the most recent .md file
    files = sorted(
        (f for f in job_dir.iterdir() if f.is_file() and f.suffix.lower() in _OUTPUT_EXTENSIONS),
        reverse=True,
    )
    if not files:
        return job_id

    try:
        first_line = files[0].read_text(encoding="utf-8", errors="replace").split("\n")[0]
        # Format: "# Cron Job: {name}"
        if first_line.startswith("# Cron Job: "):
            name = first_line[len("# Cron Job: "):].strip()
            if name:
                _deleted_name_cache[job_id] = name
                return name
    except Exception:
        pass

    return job_id


@router.get("")
async def list_cron_runs(request: Request, jobId: Optional[str] = Query(None)):
    """List cron run output files, optionally filtered by job ID."""
    home = profile_home(profile_from_request(request))
    output_dir = home / "cron" / "output"
    if not output_dir.exists():
        return {"runs": []}

    # Build name map from active jobs, use file recovery for deleted ones
    name_map = _load_job_name_map(home)

    runs = []

    def _collect(directory: Path, job_id: str):
        """Collect output files from a job directory."""
        if not directory.is_dir():
            return
        for entry in sorted(directory.iterdir(), reverse=True):
            if not entry.is_file():
                continue
            if entry.suffix.lower() not in _OUTPUT_EXTENSIONS:
                continue
            name = entry.name
            # Parse timestamp from filename like "2026-04-30_23-01-30.md"
            try:
                stem = name.rsplit(".", 1)[0]  # "2026-04-30_23-01-30"
                # Replace the space-like _ between date and time with T
                run_time = stem[:10] + "T" + stem[11:].replace("-", ":")
            except Exception:
                run_time = name

            runs.append({
                "jobId": job_id,
                "jobName": name_map.get(job_id) or _recover_job_name(output_dir, job_id),
                "jobDeleted": job_id not in name_map,
                "fileName": name,
                "runTime": run_time,
                "size": entry.stat().st_size,
            })

    if jobId:
        _collect(output_dir / jobId, jobId)
    else:
        for job_dir in sorted(output_dir.iterdir(), reverse=True):
            if not job_dir.is_dir():
                continue
            _collect(job_dir, job_dir.name)

    return {"runs": runs}


@router.get("/{job_id}/{file_name}")
async def read_cron_run(job_id: str, file_name: str, request: Request):
    """Read the content of a specific cron run output file."""
    home = profile_home(profile_from_request(request))
    output_dir = home / "cron" / "output"
    target = output_dir / job_id / file_name
    if not target.is_file():
        return JSONResponse(status_code=404, content={"error": "output file not found"})

    try:
        content = target.read_text(encoding="utf-8", errors="replace")
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

    return {
        "jobId": job_id,
        "fileName": file_name,
        "content": content,
    }
