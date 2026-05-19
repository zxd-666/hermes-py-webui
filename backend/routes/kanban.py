"""Kanban endpoints: CRUD for kanban board tasks via hermes_cli.kanban_db."""
from __future__ import annotations

import json
import time
from datetime import datetime, timezone
from typing import Any, Optional

from fastapi import APIRouter, Query, Request

from ..config import profile_home

router = APIRouter(prefix="/api/hermes/kanban", tags=["kanban"])

COLUMN_ORDER = ["triage", "todo", "ready", "running", "blocked", "done"]


def _get_db():
    """Get kanban_db connection for the active profile."""
    from hermes_cli import kanban_db
    kanban_db.init_db()
    return kanban_db


def _task_dict(task) -> dict[str, Any]:
    """Serialize a kanban task to a dict."""
    created = None
    if hasattr(task, "created_at") and task.created_at:
        created = task.created_at
    updated = None  # tasks table has no updated_at column
    metadata = {}
    if hasattr(task, "metadata") and task.metadata:
        if isinstance(task.metadata, str):
            try:
                metadata = json.loads(task.metadata)
            except (json.JSONDecodeError, TypeError):
                metadata = {}
        elif isinstance(task.metadata, dict):
            metadata = task.metadata

    return {
        "id": task.id,
        "title": task.title,
        "body": task.body or "",
        "status": task.status,
        "priority": task.priority or "none",
        "assignee": task.assignee or "",
        "created_at": created,
        "updated_at": updated,
        "summary": task.summary if hasattr(task, "summary") else None,
        "block_reason": task.block_reason if hasattr(task, "block_reason") else None,
        "result": task.result if hasattr(task, "result") else None,
        "workspace_path": task.workspace_path if hasattr(task, "workspace_path") else None,
        "workspace_kind": getattr(task, "workspace_kind", "default"),
        "tenant": getattr(task, "tenant", None),
        "created_by": getattr(task, "created_by", None),
        "started_at": getattr(task, "started_at", None),
        "completed_at": getattr(task, "completed_at", None),
        "consecutive_failures": getattr(task, "consecutive_failures", 0),
        "worker_pid": getattr(task, "worker_pid", None),
        "last_failure_error": getattr(task, "last_failure_error", None),
        "current_run_id": getattr(task, "current_run_id", None),
        "skills": getattr(task, "skills", None),
        "metadata": metadata,
    }


def _run_dict(run) -> dict[str, Any]:
    """Serialize a Run to a dict."""
    return {
        "id": run.id,
        "task_id": run.task_id,
        "profile": run.profile,
        "step_key": run.step_key,
        "status": run.status,
        "worker_pid": run.worker_pid,
        "max_runtime_seconds": run.max_runtime_seconds,
        "last_heartbeat_at": run.last_heartbeat_at,
        "started_at": run.started_at,
        "ended_at": run.ended_at,
        "outcome": run.outcome,
        "summary": run.summary,
        "metadata": run.metadata,
        "error": run.error,
    }


def _event_dict(event) -> dict[str, Any]:
    """Serialize an Event to a dict."""
    return {
        "id": event.id,
        "task_id": event.task_id,
        "kind": event.kind,
        "payload": event.payload,
        "created_at": event.created_at,
        "run_id": event.run_id,
    }


def _comment_dict(comment) -> dict[str, Any]:
    """Serialize a Comment to a dict."""
    return {
        "id": comment.id,
        "task_id": comment.task_id,
        "author": comment.author,
        "body": comment.body,
        "created_at": comment.created_at,
    }


# ── GET /board ──────────────────────────────────────────────
@router.get("/board")
def get_board(request: Request):
    """Return all tasks grouped by column."""
    db = _get_db()
    conn = db.connect()
    try:
        include_archived = request.query_params.get("archived", "false").lower() == "true"
        tasks = db.list_tasks(conn, include_archived=include_archived)
        columns = list(COLUMN_ORDER) + (["archived"] if include_archived else [])
        board: dict[str, list[dict]] = {col: [] for col in columns}
        for t in tasks:
            if t.status == "archived" and not include_archived:
                continue
            d = _task_dict(t)
            col = t.status if t.status in columns else ("archived" if include_archived and t.status == "archived" else "triage")
            board[col].append(d)
        return board
    finally:
        conn.close()


# ── GET /stats ──────────────────────────────────────────────
@router.get("/stats")
def get_stats(request: Request):
    """Return task counts per column."""
    db = _get_db()
    conn = db.connect()
    try:
        tasks = db.list_tasks(conn)
        stats: dict[str, int] = {col: 0 for col in COLUMN_ORDER}
        total = len(tasks)
        for t in tasks:
            col = t.status if t.status in COLUMN_ORDER else "triage"
            stats[col] += 1
        return {"total": total, "columns": stats}
    finally:
        conn.close()


# ── GET /tasks/{task_id} ────────────────────────────────────
@router.get("/tasks/{task_id}")
def get_task(request: Request, task_id: str):
    """Get a single task by ID."""
    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404
        return _task_dict(task)
    finally:
        conn.close()


# ── POST /tasks ─────────────────────────────────────────────
@router.post("/tasks")
async def create_task(request: Request):
    """Create a new kanban task."""
    body = await request.json() or {}
    title = body.get("title", "").strip()
    if not title:
        return {"error": "title is required"}, 400

    task_body = body.get("body", "")
    status = body.get("status", "triage")
    if status not in COLUMN_ORDER:
        status = "triage"
    priority_raw = body.get("priority", "none")
    # Map string priority to int: none=0, low=1, medium=2, high=3, critical=4
    priority_map = {"none": 0, "low": 1, "medium": 2, "high": 3, "critical": 4}
    priority = priority_map.get(str(priority_raw), 0) if isinstance(priority_raw, str) else (int(priority_raw) if priority_raw else 0)
    assignee = body.get("assignee", "")
    workspace_path = body.get("workspace_path", "")
    summary = body.get("summary", "")

    db = _get_db()
    conn = db.connect()
    try:
        task_id = db.create_task(
            conn,
            title=title,
            body=task_body or None,
            priority=priority,
            assignee=assignee or None,
            workspace_path=workspace_path or None,
            triage=(status == "triage"),
        )
        conn.commit()
        # Set status if not triage (triage is handled by create_task's triage param)
        if status and status != "triage":
            conn.execute("UPDATE tasks SET status = ? WHERE id = ?", (status, task_id))
            conn.commit()
        # Note: summary column doesn't exist in tasks table, ignoring
        # if summary:
        #     conn.execute("UPDATE tasks SET summary = ? WHERE id = ?", (summary, task_id))
        #     conn.commit()
        # Re-fetch and return
        task = db.get_task(conn, task_id)
        return _task_dict(task)
    finally:
        conn.close()


# ── PATCH /tasks/{task_id} ─────────────────────────────────
@router.patch("/tasks/{task_id}")
async def update_task(request: Request, task_id: str):
    """Update fields on a kanban task."""
    body = await request.json() or {}
    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404

        updates: dict[str, Any] = {}

        # Status change
        if "status" in body:
            new_status = body["status"]
            if new_status in COLUMN_ORDER:
                updates["status"] = new_status

        if "title" in body:
            updates["title"] = body["title"].strip()
        if "body" in body:
            updates["body"] = body["body"]
        if "priority" in body:
            updates["priority"] = body["priority"]
        if "assignee" in body:
            updates["assignee"] = body["assignee"]
        if "summary" in body:
            # summary column doesn't exist in tasks table — ignore
            pass
        if "block_reason" in body:
            # block_reason column doesn't exist in tasks table — ignore
            pass
        if "result" in body:
            updates["result"] = body["result"]

        if not updates:
            return _task_dict(task)

        # Apply all updates via SQL (including status)
        set_clauses = []
        params = []
        for field in ("status", "title", "body", "priority", "assignee", "result"):
            if field in updates:
                set_clauses.append(f"{field} = ?")
                params.append(updates[field])

        if set_clauses:
            params.append(task_id)
            conn.execute(
                f"UPDATE tasks SET {', '.join(set_clauses)} WHERE id = ?",
                params,
            )
            conn.commit()

        # Re-fetch
        task = db.get_task(conn, task_id)
        return _task_dict(task)
    finally:
        conn.close()


# ── DELETE /tasks/{task_id} ─────────────────────────────────
@router.delete("/tasks/{task_id}")
def delete_task(request: Request, task_id: str):
    """Delete a kanban task."""
    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404
        conn.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
        conn.commit()
        return {"ok": True}
    finally:
        conn.close()


# ── GET /tasks/{task_id}/runs ──────────────────────────────
@router.get("/tasks/{task_id}/runs")
def get_task_runs(request: Request, task_id: str):
    """Get run history for a task."""
    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404
        runs = db.list_runs(conn, task_id, include_active=True)
        return [_run_dict(r) for r in runs]
    finally:
        conn.close()


# ── GET /tasks/{task_id}/events ────────────────────────────
@router.get("/tasks/{task_id}/events")
def get_task_events(request: Request, task_id: str):
    """Get event timeline for a task."""
    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404
        events = db.list_events(conn, task_id)
        return [_event_dict(e) for e in events]
    finally:
        conn.close()


# ── GET /tasks/{task_id}/comments ─────────────────────────
@router.get("/tasks/{task_id}/comments")
def get_task_comments(request: Request, task_id: str):
    """Get comments for a task."""
    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404
        comments = db.list_comments(conn, task_id)
        return [_comment_dict(c) for c in comments]
    finally:
        conn.close()


# ── POST /tasks/{task_id}/comments ────────────────────────
@router.post("/tasks/{task_id}/comments")
async def add_task_comment(request: Request, task_id: str):
    """Add a comment to a task."""
    body = await request.json() or {}
    author = body.get("author", "").strip()
    comment_body = body.get("body", "").strip()
    if not comment_body:
        return {"error": "body is required"}, 400
    if not author:
        return {"error": "author is required"}, 400

    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404
        comment_id = db.add_comment(conn, task_id, author=author, body=comment_body)
        conn.commit()
        return {"id": comment_id, "ok": True}
    finally:
        conn.close()


# ── POST /tasks/{task_id}/unblock ─────────────────────────
@router.post("/tasks/{task_id}/unblock")
def unblock_task_endpoint(request: Request, task_id: str):
    """Unblock a blocked task."""
    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404
        if task.status != "blocked":
            return {"error": "Task is not blocked"}, 400
        ok = db.unblock_task(conn, task_id)
        if ok:
            conn.commit()
            return {"ok": True}
        return {"error": "Failed to unblock"}, 500
    finally:
        conn.close()


# ── GET /tasks/{task_id}/links ────────────────────────────
@router.get("/tasks/{task_id}/links")
def get_task_links(request: Request, task_id: str):
    """Get parent/child dependency links for a task."""
    db = _get_db()
    conn = db.connect()
    try:
        task = db.get_task(conn, task_id)
        if not task:
            return {"error": "Task not found"}, 404
        return {
            "parent_ids": db.parent_ids(conn, task_id),
            "child_ids": db.child_ids(conn, task_id),
        }
    finally:
        conn.close()


# ── GET /assignees ────────────────────────────────────────
@router.get("/assignees")
def get_assignees(request: Request):
    """List known assignees."""
    db = _get_db()
    conn = db.connect()
    try:
        return db.known_assignees(conn)
    finally:
        conn.close()


# ── POST /dispatch ──────────────────────────────────────
@router.post("/dispatch")
async def dispatch_tasks(request: Request):
    """Manually trigger a dispatcher tick."""
    import json as _json
    body = await request.json()
    max_spawn = body.get("max_spawn") if body else None
    dry_run = (body.get("dry_run", False) if body else False)
    db = _get_db()
    conn = db.connect()
    try:
        result = db.dispatch_once(
            conn,
            spawn_fn=None,
            dry_run=dry_run,
            max_spawn=max_spawn,
        )
        return {
            "reclaimed": result.reclaimed,
            "promoted": result.promoted,
            "spawned": result.spawned,
            "skipped_unassigned": result.skipped_unassigned,
            "skipped_nonspawnable": result.skipped_nonspawnable,
            "crashed": result.crashed,
            "auto_blocked": result.auto_blocked,
            "timed_out": result.timed_out,
        }
    finally:
        conn.close()


# ── GET /boards ─────────────────────────────────────────
@router.get("/boards")
def get_boards(request: Request):
    """List all kanban boards and the current active board."""
    db = _get_db()
    boards = db.list_boards(include_archived=False)
    current = db.get_current_board()
    # Enrich each board with task count
    for b in boards:
        if isinstance(b, dict):
            db_path = b.get("db_path")
        else:
            db_path = getattr(b, "db_path", None)
        if db_path:
            try:
                import sqlite3
                conn = sqlite3.connect(db_path)
                count = conn.execute("SELECT COUNT(*) FROM tasks WHERE status != 'archived'").fetchone()[0]
                conn.close()
                if isinstance(b, dict):
                    b["task_count"] = count
                else:
                    b.task_count = count  # type: ignore
            except Exception:
                if isinstance(b, dict):
                    b["task_count"] = 0
                else:
                    b.task_count = 0  # type: ignore
    return {"boards": boards, "current": current}


# ── POST /switch-board ──────────────────────────────────
@router.post("/switch-board")
async def switch_board(request: Request):
    """Switch the active kanban board."""
    db = _get_db()
    body = await request.json() or {}
    slug = body.get("slug")
    if not slug:
        return {"error": "slug is required"}, 400
    try:
        db.set_current_board(slug)
        return {"ok": True, "current": slug}
    except Exception as exc:
        return {"error": str(exc)}, 400


# ── POST /tasks/{task_id}/specify ───────────────────────
@router.post("/tasks/{task_id}/specify")
async def specify_task(request: Request, task_id: str):
    """Specify a triage task — refine title/body."""
    db = _get_db()
    body = await request.json() or {}
    conn = db.connect()
    try:
        ok = db.specify_triage_task(
            conn, task_id,
            title=body.get("title"),
            body=body.get("body"),
            author=body.get("author"),
        )
        if ok:
            conn.commit()
            task = db.get_task(conn, task_id)
            return _task_dict(task)
        return {"error": "Task not found or not in triage"}, 404
    finally:
        conn.close()


# ── POST /tasks/{task_id}/decompose ─────────────────────
@router.post("/tasks/{task_id}/decompose")
async def decompose_task(request: Request, task_id: str):
    """Decompose a triage task into child tasks."""
    db = _get_db()
    body = await request.json() or {}
    conn = db.connect()
    try:
        children = body.get("children")
        if not children:
            return {"error": "children is required"}, 400
        child_ids = db.decompose_triage_task(
            conn, task_id,
            root_assignee=body.get("root_assignee"),
            children=children,
            author=body.get("author"),
        )
        if child_ids is None:
            return {"error": "Decomposition failed"}, 400
        conn.commit()
        return {"ok": True, "child_ids": child_ids}
    finally:
        conn.close()


# ── POST /tasks/{task_id}/link ─────────────────────────
@router.post("/tasks/{task_id}/link")
async def link_task(request: Request, task_id: str):
    """Add a dependency link (parent → child)."""
    db = _get_db()
    body = await request.json() or {}
    child_id = body.get("child_id")
    direction = body.get("direction", "child")  # "child" or "parent"
    if not child_id:
        return {"error": "child_id is required"}, 400
    conn = db.connect()
    try:
        parent_id = task_id if direction == "child" else child_id
        cid = child_id if direction == "child" else task_id
        db.link_tasks(conn, parent_id, cid)
        conn.commit()
        return {"ok": True}
    except ValueError as e:
        return {"error": str(e)}, 400
    except Exception as e:
        return {"error": str(e)}, 404
    finally:
        conn.close()


# ── POST /tasks/{task_id}/unlink ───────────────────────
@router.post("/tasks/{task_id}/unlink")
async def unlink_task(request: Request, task_id: str):
    """Remove a dependency link."""
    db = _get_db()
    body = await request.json() or {}
    child_id = body.get("child_id")
    direction = body.get("direction", "child")
    if not child_id:
        return {"error": "child_id is required"}, 400
    conn = db.connect()
    try:
        parent_id = task_id if direction == "child" else child_id
        cid = child_id if direction == "child" else task_id
        ok = db.unlink_tasks(conn, parent_id, cid)
        if ok:
            conn.commit()
        return {"ok": ok}
    finally:
        conn.close()


# ── POST /boards/create ────────────────────────────────
@router.post("/boards/create")
async def create_board(request: Request):
    """Create a new kanban board."""
    db = _get_db()
    body = await request.json() or {}
    slug = body.get("slug")
    if not slug:
        return {"error": "slug is required"}, 400
    try:
        board = db.create_board(
            slug,
            name=body.get("name"),
            description=body.get("description"),
            icon=body.get("icon"),
            color=body.get("color"),
        )
        return {"ok": True, "board": board}
    except Exception as e:
        return {"error": str(e)}, 400


# ── DELETE /boards/{slug} ─────────────────────────────
@router.delete("/boards/{slug}")
def delete_board(slug: str):
    """Delete a kanban board (its directory + DB). Cannot delete 'default'."""
    import shutil
    from pathlib import Path

    db = _get_db()
    if slug == "default":
        return {"error": "Cannot delete default board"}, 400

    current = db.get_current_board()
    if slug == current:
        return {"error": "Cannot delete the active board. Switch first."}, 400

    try:
        board_path = db.board_dir(slug)
        if board_path.is_dir():
            shutil.rmtree(board_path)
        # If we were pointing at this board, revert
        return {"ok": True}
    except Exception as e:
        return {"error": str(e)}, 400


# ── POST /tasks/{task_id}/archive ──────────────────────
async def archive_task(request: Request, task_id: str):
    """Archive (or unarchive) a task."""
    db = _get_db()
    body = await request.json() or {}
    archive = body.get("archive", True)
    conn = db.connect()
    try:
        conn.execute(
            "UPDATE tasks SET status = ? WHERE id = ?",
            ("archived" if archive else "todo", task_id),
        )
        conn.commit()
        return {"ok": True}
    finally:
        conn.close()
