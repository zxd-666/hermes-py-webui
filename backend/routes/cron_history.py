"""Cron history endpoints: list and read cron job output files."""
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/cron-history", tags=["cron-history"])

OUTPUT_DIR = HERMES_HOME / "cron" / "output"

# Only list these file extensions
_OUTPUT_EXTENSIONS = {".md", ".txt", ".json", ".log"}


@router.get("")
async def list_cron_runs(jobId: Optional[str] = Query(None)):
    """List cron run output files, optionally filtered by job ID."""
    if not OUTPUT_DIR.exists():
        return {"runs": []}

    runs = []

    def _collect(directory: Path, job_name: str):
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
                "jobId": job_name,
                "fileName": name,
                "runTime": run_time,
                "size": entry.stat().st_size,
            })

    if jobId:
        _collect(OUTPUT_DIR / jobId, jobId)
    else:
        for job_dir in sorted(OUTPUT_DIR.iterdir(), reverse=True):
            if not job_dir.is_dir():
                continue
            _collect(job_dir, job_dir.name)

    return {"runs": runs}


@router.get("/{job_id}/{file_name}")
async def read_cron_run(job_id: str, file_name: str):
    """Read the content of a specific cron run output file."""
    target = OUTPUT_DIR / job_id / file_name
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
