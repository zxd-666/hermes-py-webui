"""Jobs endpoints: CRUD for cron jobs via ~/.hermes/cron/jobs.json."""
import json
import time
import uuid
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse

from ..config import HERMES_HOME

router = APIRouter(prefix="/api/hermes/jobs", tags=["jobs"])

JOBS_FILE = HERMES_HOME / "cron" / "jobs.json"


def _load_jobs() -> dict:
    """Load jobs.json, return the full dict."""
    if not JOBS_FILE.exists():
        return {"jobs": [], "updated_at": None}
    try:
        with open(JOBS_FILE, encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return {"jobs": [], "updated_at": None}


def _save_jobs(data: dict):
    """Save jobs.json atomically."""
    data["updated_at"] = time.time()
    JOBS_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = JOBS_FILE.with_suffix(".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    tmp.rename(JOBS_FILE)


def _find_job(jobs: list, job_id: str) -> Optional[dict]:
    for j in jobs:
        if j.get("id") == job_id or j.get("job_id") == job_id:
            return j
    return None


def _job_to_response(job: dict) -> dict:
    """Normalize a job dict to match the frontend Job interface."""
    return {
        "job_id": job.get("id", job.get("job_id", "")),
        "id": job.get("id", ""),
        "name": job.get("name", ""),
        "prompt": job.get("prompt", ""),
        "prompt_preview": (job.get("prompt", "") or "")[:100] + ("..." if len(job.get("prompt", "") or "") > 100 else ""),
        "skills": job.get("skills", []),
        "skill": job.get("skill"),
        "model": job.get("model"),
        "provider": job.get("provider"),
        "base_url": job.get("base_url"),
        "script": job.get("script"),
        "schedule": job.get("schedule", ""),
        "schedule_display": job.get("schedule_display", ""),
        "repeat": job.get("repeat"),
        "enabled": job.get("enabled", True),
        "state": job.get("state", "idle"),
        "paused_at": job.get("paused_at"),
        "paused_reason": job.get("paused_reason"),
        "created_at": job.get("created_at", ""),
        "next_run_at": job.get("next_run_at"),
        "last_run_at": job.get("last_run_at"),
        "last_status": job.get("last_status"),
        "last_error": job.get("last_error"),
        "deliver": job.get("deliver", "origin"),
        "origin": job.get("origin"),
        "last_delivery_error": job.get("last_delivery_error"),
    }


@router.get("")
async def list_jobs(include_disabled: bool = Query(True)):
    """List all cron jobs."""
    data = _load_jobs()
    jobs = [_job_to_response(j) for j in data["jobs"]]
    return {"jobs": jobs}


@router.get("/{job_id}")
async def get_job(job_id: str):
    """Get a single job by ID."""
    data = _load_jobs()
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    return {"job": _job_to_response(job)}


@router.post("")
async def create_job(body: dict):
    """Create a new cron job."""
    data = _load_jobs()
    job_id = uuid.uuid4().hex[:12]
    now = time.time()
    job = {
        "id": job_id,
        "name": body.get("name", f"Job {job_id}"),
        "prompt": body.get("prompt", ""),
        "schedule": body.get("schedule", ""),
        "schedule_display": body.get("schedule_display", body.get("schedule", "")),
        "deliver": body.get("deliver", "origin"),
        "skills": body.get("skills", []),
        "repeat": body.get("repeat"),
        "enabled": True,
        "state": "idle",
        "created_at": now,
        "next_run_at": None,
        "last_run_at": None,
        "last_status": None,
    }
    # Add optional fields if provided
    for key in ("skill", "model", "provider", "base_url", "script", "origin"):
        if key in body:
            job[key] = body[key]
    data["jobs"].append(job)
    _save_jobs(data)
    return {"job": _job_to_response(job)}


@router.patch("/{job_id}")
async def update_job(job_id: str, body: dict):
    """Update an existing job."""
    data = _load_jobs()
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    for key, value in body.items():
        if key == "schedule" and isinstance(value, dict):
            job["schedule"] = value.get("expr", "")
            job["schedule_display"] = value.get("display", value.get("expr", ""))
        elif key in ("repeat",) and isinstance(value, dict):
            job[key] = value
        else:
            job[key] = value
    _save_jobs(data)
    return {"job": _job_to_response(job)}


@router.delete("/{job_id}")
async def delete_job(job_id: str):
    """Delete a cron job."""
    data = _load_jobs()
    before = len(data["jobs"])
    data["jobs"] = [j for j in data["jobs"] if j.get("id") != job_id and j.get("job_id") != job_id]
    if len(data["jobs"]) == before:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    _save_jobs(data)
    return {"ok": True}


@router.post("/{job_id}/pause")
async def pause_job(job_id: str):
    """Pause a cron job."""
    data = _load_jobs()
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    job["enabled"] = False
    job["paused_at"] = time.time()
    _save_jobs(data)
    return {"job": _job_to_response(job)}


@router.post("/{job_id}/resume")
async def resume_job(job_id: str):
    """Resume a paused cron job."""
    data = _load_jobs()
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    job["enabled"] = True
    job["paused_at"] = None
    job["paused_reason"] = None
    _save_jobs(data)
    return {"job": _job_to_response(job)}


@router.post("/{job_id}/run")
async def run_job(job_id: str):
    """Trigger a job run (note: actual execution requires the scheduler process)."""
    data = _load_jobs()
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    # Mark as pending — actual execution is done by the hermes scheduler
    job["state"] = "pending"
    _save_jobs(data)
    return {"job": _job_to_response(job)}
