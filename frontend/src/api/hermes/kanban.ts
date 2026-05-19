import { request } from '../client'

// ── Task ────────────────────────────────────────────────
export interface KanbanTask {
  id: string
  title: string
  body: string
  status: string
  priority: number | string
  assignee: string
  created_at: number | null
  updated_at: number | null
  summary: string | null
  block_reason: string | null
  result: string | null
  workspace_path: string | null
  workspace_kind: string | null
  tenant: string | null
  created_by: string | null
  started_at: number | null
  completed_at: number | null
  consecutive_failures: number
  worker_pid: number | null
  last_failure_error: string | null
  current_run_id: number | null
  skills: string[] | null
  metadata: Record<string, unknown>
}

export type KanbanBoard = Record<string, KanbanTask[]>
export type KanbanStats = { total: number; columns: Record<string, number> }

export const COLUMN_ORDER = ['triage', 'todo', 'ready', 'running', 'blocked', 'done'] as const
export type ColumnKey = (typeof COLUMN_ORDER)[number]

// ── Run ─────────────────────────────────────────────────
export interface KanbanRun {
  id: number
  task_id: string
  profile: string | null
  step_key: string | null
  status: string
  worker_pid: number | null
  max_runtime_seconds: number | null
  last_heartbeat_at: number | null
  started_at: number
  ended_at: number | null
  outcome: string | null
  summary: string | null
  metadata: Record<string, unknown> | null
  error: string | null
}

// ── Event ───────────────────────────────────────────────
export interface KanbanEvent {
  id: number
  task_id: string
  kind: string
  payload: Record<string, unknown> | null
  created_at: number
  run_id: number | null
}

// ── Comment ─────────────────────────────────────────────
export interface KanbanComment {
  id: number
  task_id: string
  author: string
  body: string
  created_at: number
}

// ── Links ───────────────────────────────────────────────
export interface KanbanLinks {
  parent_ids: string[]
  child_ids: string[]
}

// ── Assignee ────────────────────────────────────────────
export interface KanbanAssignee {
  name: string
  on_disk: boolean
  counts: Record<string, number>
}

// ── Board ───────────────────────────────────────────────
export interface KanbanBoardMeta {
  slug: string
  name: string
  description: string
  icon: string
  color: string
  archived: boolean
  db_path: string
  task_count?: number
}

export interface BoardsResponse {
  boards: KanbanBoardMeta[]
  current: string
}

export async function fetchBoards(): Promise<BoardsResponse> {
  return request<BoardsResponse>('/api/hermes/kanban/boards')
}

export async function switchBoard(slug: string): Promise<{ ok: boolean; current: string }> {
  return request('/api/hermes/kanban/switch-board', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug }),
  })
}

export async function deleteBoard(slug: string): Promise<{ ok: boolean }> {
  return request('/api/hermes/kanban/boards/' + encodeURIComponent(slug), {
    method: 'DELETE',
  })
}

export async function fetchBoard(includeArchived = false): Promise<KanbanBoard> {
  return request<KanbanBoard>(`/api/hermes/kanban/board${includeArchived ? '?archived=true' : ''}`)
}

export async function fetchStats(): Promise<KanbanStats> {
  return request<KanbanStats>('/api/hermes/kanban/stats')
}

// ── Task CRUD ───────────────────────────────────────────
export async function fetchTask(taskId: string): Promise<KanbanTask> {
  return request<KanbanTask>(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}`)
}

export async function createTask(data: {
  title: string; body?: string; status?: string; priority?: string; assignee?: string
  workspace_path?: string; summary?: string
}): Promise<KanbanTask> {
  return request<KanbanTask>('/api/hermes/kanban/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

export async function updateTask(taskId: string, data: Partial<KanbanTask>): Promise<KanbanTask> {
  return request<KanbanTask>(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

export async function deleteTask(taskId: string): Promise<{ ok: boolean }> {
  return request(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}`, { method: 'DELETE' })
}

// ── Runs ────────────────────────────────────────────────
export async function fetchTaskRuns(taskId: string): Promise<KanbanRun[]> {
  return request<KanbanRun[]>(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}/runs`)
}

// ── Events ──────────────────────────────────────────────
export async function fetchTaskEvents(taskId: string): Promise<KanbanEvent[]> {
  return request<KanbanEvent[]>(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}/events`)
}

// ── Dispatch ────────────────────────────────────────────
export interface DispatchResult {
  reclaimed: number
  promoted: number
  spawned: [string, string, string][]
  skipped_unassigned: string[]
  skipped_nonspawnable: string[]
  crashed: string[]
  auto_blocked: string[]
  timed_out: string[]
}

export async function dispatchTasks(opts?: { max_spawn?: number; dry_run?: boolean }): Promise<DispatchResult> {
  return request<DispatchResult>('/api/hermes/kanban/dispatch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(opts || {}),
  })
}

// ── Dependencies ────────────────────────────────────────
export async function linkTask(taskId: string, childId: string, direction: 'child' | 'parent' = 'child'): Promise<{ ok: boolean }> {
  return request('/api/hermes/kanban/tasks/' + encodeURIComponent(taskId) + '/link', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ child_id: childId, direction }),
  })
}

export async function unlinkTask(taskId: string, childId: string, direction: 'child' | 'parent' = 'child'): Promise<{ ok: boolean }> {
  return request('/api/hermes/kanban/tasks/' + encodeURIComponent(taskId) + '/unlink', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ child_id: childId, direction }),
  })
}

// ── Board Create ────────────────────────────────────────
export async function createBoard(data: { slug: string; name?: string; description?: string; icon?: string; color?: string }): Promise<{ ok: boolean; board: KanbanBoardMeta }> {
  return request('/api/hermes/kanban/boards/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

// ── Archive ─────────────────────────────────────────────
export async function archiveTask(taskId: string, archive = true): Promise<{ ok: boolean }> {
  return request('/api/hermes/kanban/tasks/' + encodeURIComponent(taskId) + '/archive', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ archive }),
  })
}

// ── Comments ────────────────────────────────────────────
export async function fetchTaskComments(taskId: string): Promise<KanbanComment[]> {
  return request<KanbanComment[]>(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}/comments`)
}

export async function addTaskComment(taskId: string, data: { author: string; body: string }): Promise<{ id: number; ok: boolean }> {
  return request(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

// ── Unblock ─────────────────────────────────────────────
export async function unblockTask(taskId: string): Promise<{ ok: boolean }> {
  return request(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}/unblock`, {
    method: 'POST',
  })
}

// ── Triage: Specify ────────────────────────────────────
export async function specifyTask(taskId: string, data: { title?: string; body?: string; author?: string }): Promise<KanbanTask> {
  return request<KanbanTask>(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}/specify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

// ── Triage: Decompose ──────────────────────────────────
export interface DecomposeChild {
  title: string
  body?: string
  assignee?: string
  parents?: number[]
}

export async function decomposeTask(taskId: string, data: {
  root_assignee?: string
  children: DecomposeChild[]
  author?: string
}): Promise<{ ok: boolean; child_ids: string[] }> {
  return request(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}/decompose`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

// ── Links ───────────────────────────────────────────────
export async function fetchTaskLinks(taskId: string): Promise<KanbanLinks> {
  return request<KanbanLinks>(`/api/hermes/kanban/tasks/${encodeURIComponent(taskId)}/links`)
}

// ── Assignees ───────────────────────────────────────────
export async function fetchAssignees(): Promise<KanbanAssignee[]> {
  return request<KanbanAssignee[]>('/api/hermes/kanban/assignees')
}
