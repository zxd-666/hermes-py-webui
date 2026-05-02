"""Jobs endpoints: CRUD for cron jobs via ~/.hermes/cron/jobs.json."""
import json
import time
import uuid
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse

from ..config import profile_from_request, profile_home

router = APIRouter(prefix="/api/hermes/jobs", tags=["jobs"])


def _jobs_file(home: Path) -> Path:
    return home / "cron" / "jobs.json"


def _load_jobs(home: Path) -> dict:
    """Load jobs.json, return the full dict."""
    path = _jobs_file(home)
    if not path.exists():
        return {"jobs": [], "updated_at": None}
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return {"jobs": [], "updated_at": None}


def _save_jobs(home: Path, data: dict):
    """Save jobs.json atomically."""
    path = _jobs_file(home)
    data["updated_at"] = time.time()
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    tmp.rename(path)


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
async def list_jobs(request: Request, include_disabled: bool = Query(True)):
    """List all cron jobs."""
    home = profile_home(profile_from_request(request))
    data = _load_jobs(home)
    jobs = [_job_to_response(j) for j in data["jobs"]]
    return {"jobs": jobs}


@router.get("/{job_id}")
async def get_job(job_id: str, request: Request):
    """Get a single job by ID."""
    home = profile_home(profile_from_request(request))
    data = _load_jobs(home)
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    return {"job": _job_to_response(job)}


@router.post("")
async def create_job(body: dict, request: Request):
    """Create a new cron job."""
    from datetime import datetime, timezone
    home = profile_home(profile_from_request(request))
    data = _load_jobs(home)
    job_id = uuid.uuid4().hex[:12]
    now = time.time()
    # Hermes scheduler expects schedule as a dict: {"kind": "cron", "expr": "...", "display": "..."}
    raw_schedule = body.get("schedule", "")
    if isinstance(raw_schedule, str) and raw_schedule:
        schedule_obj = {"kind": "cron", "expr": raw_schedule, "display": raw_schedule}
    elif isinstance(raw_schedule, dict):
        schedule_obj = raw_schedule
    else:
        schedule_obj = ""
    job = {
        "id": job_id,
        "name": body.get("name", f"Job {job_id}"),
        "prompt": body.get("prompt", ""),
        "schedule": schedule_obj,
        "schedule_display": body.get("schedule_display", raw_schedule if isinstance(raw_schedule, str) else raw_schedule.get("display", raw_schedule.get("expr", ""))),
        "deliver": body.get("deliver", "origin"),
        "skills": body.get("skills", []),
        # Hermes expects repeat as dict: {"times": <int|null>, "completed": 0}
        "repeat": body.get("repeat") if isinstance(body.get("repeat"), dict) else None,
        "enabled": True,
        "state": "scheduled",
        "created_at": now,
        "next_run_at": datetime.now(timezone.utc).isoformat(),
        "last_run_at": None,
        "last_status": None,
    }
    # Add optional fields if provided
    for key in ("skill", "model", "provider", "base_url", "script", "origin"):
        if key in body:
            job[key] = body[key]
    data["jobs"].append(job)
    _save_jobs(home, data)
    return {"job": _job_to_response(job)}


@router.patch("/{job_id}")
async def update_job(job_id: str, body: dict, request: Request):
    """Update an existing job."""
    home = profile_home(profile_from_request(request))
    data = _load_jobs(home)
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    for key, value in body.items():
        if key == "schedule" and isinstance(value, dict):
            job["schedule"] = value
            job["schedule_display"] = value.get("display", value.get("expr", ""))
        elif key == "schedule" and isinstance(value, str):
            job["schedule"] = {"kind": "cron", "expr": value, "display": value}
            job["schedule_display"] = value
        elif key in ("repeat",) and isinstance(value, dict):
            job[key] = value
        else:
            job[key] = value
    _save_jobs(home, data)
    return {"job": _job_to_response(job)}


@router.delete("/{job_id}")
async def delete_job(job_id: str, request: Request):
    """Delete a cron job."""
    home = profile_home(profile_from_request(request))
    data = _load_jobs(home)
    before = len(data["jobs"])
    data["jobs"] = [j for j in data["jobs"] if j.get("id") != job_id and j.get("job_id") != job_id]
    if len(data["jobs"]) == before:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    _save_jobs(home, data)
    return {"ok": True}


@router.post("/{job_id}/pause")
async def pause_job(job_id: str, request: Request):
    """Pause a cron job."""
    home = profile_home(profile_from_request(request))
    data = _load_jobs(home)
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    job["enabled"] = False
    job["state"] = "paused"
    job["paused_at"] = time.time()
    _save_jobs(home, data)
    return {"job": _job_to_response(job)}


@router.post("/{job_id}/resume")
async def resume_job(job_id: str, request: Request):
    """Resume a paused cron job."""
    home = profile_home(profile_from_request(request))
    data = _load_jobs(home)
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    job["enabled"] = True
    job["state"] = "scheduled"
    job["paused_at"] = None
    job["paused_reason"] = None
    _save_jobs(home, data)
    return {"job": _job_to_response(job)}


@router.post("/{job_id}/run")
async def run_job(job_id: str, request: Request):
    """Trigger a job run by setting next_run_at to now so the scheduler picks it up."""
    from datetime import datetime, timezone
    home = profile_home(profile_from_request(request))
    data = _load_jobs(home)
    job = _find_job(data["jobs"], job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "job not found"})
    job["state"] = "scheduled"
    job["enabled"] = True
    job["next_run_at"] = datetime.now(timezone.utc).isoformat()
    _save_jobs(home, data)
    return {"job": _job_to_response(job)}
