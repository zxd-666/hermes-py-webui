<script setup lang="ts">
import { ref, reactive, computed, onMounted, onBeforeUnmount, watch, h } from 'vue'
import {
  NButton, NSpin, NInput, NDrawer, NDrawerContent,
  NSelect, NTag, NModal, NForm, NFormItem, NIcon,
  useMessage, useDialog,
} from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { fetchProfiles, type HermesProfile } from '@/api/hermes/profiles'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({ html: false, linkify: true, typographer: true })

function renderMd(text: string): string {
  if (!text) return ''
  return md.render(text)
}

// Auto-refresh
const autoRefresh = ref(false)
const refreshInterval = ref(30) // seconds
const refreshCountdown = ref(0)
let refreshTimer: ReturnType<typeof setInterval> | null = null

watch(autoRefresh, (val) => {
  if (refreshTimer) clearInterval(refreshTimer)
  if (val) {
    refreshCountdown.value = refreshInterval.value
    refreshTimer = setInterval(() => {
      refreshCountdown.value--
      if (refreshCountdown.value <= 0) {
        refreshCountdown.value = refreshInterval.value
        loadBoard()
      }
    }, 1000)
  } else {
    refreshTimer = null
    refreshCountdown.value = 0
  }
})

function setRefreshTimer(sec: number) {
  refreshInterval.value = sec
  refreshCountdown.value = sec
  if (refreshTimer) {
    clearInterval(refreshTimer)
    if (autoRefresh.value) {
      refreshTimer = setInterval(() => {
        refreshCountdown.value--
        if (refreshCountdown.value <= 0) {
          refreshCountdown.value = refreshInterval.value
          loadBoard()
        }
      }, 1000)
    }
  }
}

import {
  fetchBoard, fetchStats, createTask, updateTask, deleteTask,
  fetchTaskRuns, fetchTaskEvents, fetchTaskComments, addTaskComment, unblockTask,
  fetchBoards, switchBoard, deleteBoard, specifyTask, decomposeTask, dispatchTasks,
  linkTask, unlinkTask, createBoard, archiveTask, fetchTaskLinks,
  COLUMN_ORDER, type KanbanTask, type KanbanBoard, type KanbanRun, type KanbanEvent, type KanbanComment,
  type KanbanBoardMeta, type DecomposeChild, type KanbanLinks,
} from '@/api/hermes/kanban'

const { t } = useI18n()
const message = useMessage()
const dialog = useDialog()

const loading = ref(false)
const board = reactive<KanbanBoard>({})
const searchQuery = ref('')
const stats = ref({ total: 0, columns: {} as Record<string, number> })

// Filters
const tenantFilter = ref<string | null>(null)
const groupLanes = ref(false)
const showArchived = ref(false)
const assigneeFilter = ref<string | null>(null)

// Profile list for assignee dropdown
const profileList = ref<HermesProfile[]>([])
const profileAssigneeOptions = computed(() =>
  profileList.value.map(p => ({
    label: p.alias || p.name,
    value: p.name,
  }))
)

async function loadProfiles() {
  try {
    profileList.value = await fetchProfiles()
  } catch { /* silent */ }
}

// Context menu state
const ctxMenu = ref<{ show: boolean; x: number; y: number; task: KanbanTask | null }>({
  show: false, x: 0, y: 0, task: null,
})

function openCtxMenu(e: MouseEvent, task: KanbanTask) {
  e.preventDefault()
  ctxMenu.value = { show: true, x: e.clientX, y: e.clientY, task }
}

function closeCtxMenu() {
  ctxMenu.value.show = false
}

async function ctxMoveTask(status: string) {
  const task = ctxMenu.value.task
  if (!task) return
  closeCtxMenu()
  if (task.status === status) return
  try {
    await updateTask(task.id, { status })
    message.success(t('kanban.taskUpdated'))
    await loadBoard()
  } catch { /* handled by api layer */ }
}

async function ctxSetPriority(priority: string) {
  const task = ctxMenu.value.task
  if (!task) return
  closeCtxMenu()
  try {
    await updateTask(task.id, { priority })
    message.success(t('kanban.taskUpdated'))
    await loadBoard()
  } catch { /* handled by api layer */ }
}

async function ctxSetAssignee(assignee: string | null) {
  const task = ctxMenu.value.task
  if (!task) return
  closeCtxMenu()
  try {
    await updateTask(task.id, { assignee })
    message.success(t('kanban.taskUpdated'))
    await loadBoard()
  } catch { /* handled by api layer */ }
}

function ctxOpenDetail() {
  const task = ctxMenu.value.task
  if (!task) return
  closeCtxMenu()
  openDetail(task)
}

function ctxArchive() {
  const task = ctxMenu.value.task
  if (!task) return
  closeCtxMenu()
  handleArchive(task, true)
}

function ctxUnarchive() {
  const task = ctxMenu.value.task
  if (!task) return
  closeCtxMenu()
  handleArchive(task, false)
}

function ctxDelete() {
  const task = ctxMenu.value.task
  if (!task) return
  closeCtxMenu()
  handleDelete(task)
}

const ctxColumnOptions = computed(() =>
  COLUMN_ORDER.map(c => ({ label: t(`kanban.columns.${c}`), value: c }))
)

const ctxPriorityOptions = computed(() => {
  const opts = [
    { label: t('kanban.priority.none'), value: 'none' },
    { label: t('kanban.priority.3'), value: '3' },
    { label: t('kanban.priority.2'), value: '2' },
    { label: t('kanban.priority.1'), value: '1' },
  ]
  return opts
})

const ctxAssigneeOptions = computed(() => [
  { label: t('kanban.noAssignee'), value: '__none__' },
  ...profileAssigneeOptions.value,
])

// Active columns (with optional archived)
const activeColumns = computed<string[]>(() =>
  showArchived.value ? [...COLUMN_ORDER, 'archived'] : [...COLUMN_ORDER]
)

// Board switching
const boards = ref<KanbanBoardMeta[]>([])
const currentBoardSlug = ref('')

const boardOptions = computed(() =>
  boards.value.map(b => ({ label: (b.name || b.slug) + ' · ' + (b.task_count ?? 0), value: b.slug }))
)


// Triage operations
const showSpecify = ref(false)
const showDecompose = ref(false)
const specifyTitle = ref('')
const specifyBody = ref('')
const decomposeChildren = ref<DecomposeChild[]>([])
const decomposeRootAssignee = ref('')

// Link dependency
const showLink = ref(false)
const linkDirection = ref<'child' | 'parent'>('child')
const linkTargetId = ref('')
const linkTaskId = ref('')

// Create board
const showCreateBoard = ref(false)
const newBoardSlug = ref('')
const newBoardName = ref('')

function openLink(task: KanbanTask, dir: 'child' | 'parent') {
  linkTaskId.value = task.id
  linkDirection.value = dir
  linkTargetId.value = ''
  showLink.value = true
}

async function handleLink() {
  const tid = linkTargetId.value.trim()
  if (!tid || !linkTaskId.value) return
  try {
    await linkTask(linkTaskId.value, tid, linkDirection.value)
    message.success(t('kanban.addDependency'))
    showLink.value = false
    if (selectedTask.value) await openDetail(selectedTask.value)
  } catch (e: any) {
    message.error(e.message || t('kanban.loadFailed'))
  }
}

async function handleUnlink(parentId: string, childId: string) {
  try {
    await unlinkTask(parentId, childId)
    message.success(t('kanban.removeDependency'))
    if (selectedTask.value) await openDetail(selectedTask.value)
  } catch (e: any) {
    message.error(e.message || t('kanban.loadFailed'))
  }
}

async function handleArchive(task: KanbanTask, doArchive: boolean) {
  try {
    await archiveTask(task.id, doArchive)
    message.success(doArchive ? t('kanban.archive') : t('kanban.unarchive'))
    drawerOpen.value = false
    await loadBoard()
  } catch (e: any) {
    message.error(e.message || t('kanban.loadFailed'))
  }
}

async function handleCreateBoard() {
  const slug = newBoardSlug.value.trim()
  if (!slug) return
  try {
    await createBoard({ slug, name: newBoardName.value.trim() || undefined })
    message.success(t('kanban.createBoard'))
    showCreateBoard.value = false
    newBoardSlug.value = ''
    newBoardName.value = ''
    await loadBoard()
  } catch (e: any) {
    message.error(e.message || t('kanban.loadFailed'))
  }
}

// Detail drawer
const drawerOpen = ref(false)
const selectedTask = ref<KanbanTask | null>(null)
const editingTask = ref<Partial<KanbanTask> | null>(null)
const showAllRuns = ref(false)
const showAllEvents = ref(false)
const detailLoading = ref(false)
const taskRuns = ref<KanbanRun[]>([])
const taskEvents = ref<KanbanEvent[]>([])
const taskComments = ref<KanbanComment[]>([])
const taskLinks = ref<KanbanLinks>({ parent_ids: [], child_ids: [] })

// Related sessions
const relatedSessions = ref<any[]>([])
const sessionsLoading = ref(false)
const sessionsShown = ref(false)

async function loadRelatedSessions(taskId: string) {
  sessionsShown.value = true
  sessionsLoading.value = true
  try {
    const res = await fetch(`/api/hermes/search/sessions?q=${encodeURIComponent(taskId)}&limit=10`)
    const data = await res.json()
    relatedSessions.value = data.results || []
  } catch {
    relatedSessions.value = []
  } finally {
    sessionsLoading.value = false
  }
}

function openSession(sessionId: string) {
  window.open(`/#/hermes/chat?session=${sessionId}`, '_blank')
}

// Comment form
const newCommentBody = ref('')

const visibleRuns = computed(() => showAllRuns.value ? taskRuns.value : taskRuns.value.slice(0, 3))
const visibleEvents = computed(() => showAllEvents.value ? taskEvents.value : taskEvents.value.slice(0, 5))
const newCommentAuthor = ref('')
const submittingComment = ref(false)

// Create modal
const showCreate = ref(false)
const creating = ref(false)
const newTitle = ref('')
const newBody = ref('')
const newStatus = ref('todo')
const newPriority = ref('none')
const newAssignee = ref('default')

function openCreateForColumn(col: string) {
  newStatus.value = col
  showCreate.value = true
}

// Drag state
const dragTaskId = ref<string | null>(null)
const dragOverCol = ref<string | null>(null)

// Dispatch
const dispatching = ref(false)

async function handleDispatch() {
  dispatching.value = true
  try {
    const r = await dispatchTasks()
    const total = r.reclaimed + r.promoted + r.spawned.length + r.crashed.length
    if (total === 0) {
      message.info(t('kanban.dispatchNothing'))
    } else {
      const parts: string[] = []
      if (r.spawned.length) parts.push(`${t('kanban.dispatchSpawned')}: ${r.spawned.length}`)
      if (r.promoted) parts.push(`${t('kanban.dispatchPromoted')}: ${r.promoted}`)
      if (r.reclaimed) parts.push(`${t('kanban.dispatchReclaimed')}: ${r.reclaimed}`)
      if (r.crashed.length) parts.push(`${t('kanban.dispatchCrashed')}: ${r.crashed.length}`)
      message.success(parts.join(' / '))
    }
    await loadBoard()
  } catch (e: any) {
    message.error(e.message || t('kanban.loadFailed'))
  } finally {
    dispatching.value = false
  }
}

const filteredBoard = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  const tf = tenantFilter.value
  const af = assigneeFilter.value
  const result: KanbanBoard = {}
  for (const col of activeColumns.value) {
    const tasks = board[col] || []
    result[col] = tasks.filter(tk => {
      if (q && !tk.title.toLowerCase().includes(q) && !(tk.body && tk.body.toLowerCase().includes(q))) return false
      if (tf && tk.tenant !== tf) return false
      if (af && tk.assignee !== af) return false
      return true
    })
  }
  return result
})

// Collect unique tenants from board
const tenantList = computed(() => {
  const set = new Set<string>()
  for (const col of activeColumns.value) {
    for (const tk of (board[col] || [])) {
      if (tk.tenant) set.add(tk.tenant)
    }
  }
  return Array.from(set).sort()
})

// Collect unique assignees from board
const assigneeList = computed(() => {
  const set = new Set<string>()
  for (const col of activeColumns.value) {
    for (const tk of (board[col] || [])) {
      if (tk.assignee) set.add(tk.assignee)
    }
  }
  return Array.from(set).sort()
})

// Reload when showArchived changes
watch(showArchived, () => loadBoard())

const tenantOptions = computed(() => [
  { label: t('kanban.allTenants'), value: '__all__' },
  ...tenantList.value.map(v => ({ label: v, value: v })),
])

const assigneeOptions = computed(() => [
  { label: t('kanban.allAssignees'), value: '__all__' },
  ...assigneeList.value.map(v => ({ label: v, value: v })),
])

// Worker lanes grouping for running column
interface WorkerLane {
  assignee: string
  tasks: KanbanTask[]
}
const runningLanes = computed<WorkerLane[]>(() => {
  const tasks = filteredBoard.value['running'] || []
  if (!groupLanes.value) return [{ assignee: '', tasks }]
  const map = new Map<string, KanbanTask[]>()
  for (const tk of tasks) {
    const key = tk.assignee || ''
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(tk)
  }
  return Array.from(map.entries())
    .map(([assignee, laneTasks]) => ({ assignee, tasks: laneTasks }))
    .sort((a, b) => a.assignee.localeCompare(b.assignee))
})

async function loadBoard() {
  loading.value = true
  try {
    const [b, s, br] = await Promise.all([fetchBoard(showArchived.value), fetchStats(), fetchBoards()])
    for (const col of activeColumns.value) {
      board[col] = b[col] || []
    }
    stats.value = s
    boards.value = br.boards
    currentBoardSlug.value = br.current
  } catch {
    message.error(t('kanban.loadFailed'))
  } finally {
    loading.value = false
  }
}

async function handleSwitchBoard(slug: string) {
  try {
    await switchBoard(slug)
    currentBoardSlug.value = slug
    // Clear filters and reload
    tenantFilter.value = null
    await loadBoard()
  } catch {
    message.error(t('kanban.loadFailed'))
  }
}
async function handleDeleteBoard(slug: string, e?: Event) {
  e?.stopPropagation()
  if (slug === 'default') {
    message.warning('不能删除默认看板')
    return
  }
  const board = boards.value.find((b: any) => b.slug === slug)
  const name = board?.name || slug
  dialog.warning({
    title: '确认删除',
    content: '确定要删除看板「' + name + '」吗？此操作不可恢复。',
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: async () => {
      try {
        await deleteBoard(slug)
        message.success('看板已删除')
        if (currentBoardSlug.value === slug) {
          currentBoardSlug.value = 'default'
          await loadBoard()
        } else {
          boards.value = (await fetchBoards()).boards
        }
      } catch (err: any) {
        message.error(err.detail || err.message || '删除失败')
      }
    },
  })
}

// ── Drag & Drop ─────────────────────────────────
function onDragStart(e: DragEvent, task: KanbanTask) {
  dragTaskId.value = task.id
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', task.id)
  }
}

function onDragEnd() {
  dragTaskId.value = null
  dragOverCol.value = null
}

function onDragEnter(e: DragEvent, col: string) {
  e.preventDefault()
  dragOverCol.value = col
}

function onDragOver(e: DragEvent) {
  e.preventDefault()
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'move'
}

function onDragLeave(e: DragEvent, col: string) {
  // Only clear if actually leaving the column (not entering a child)
  const related = e.relatedTarget as HTMLElement | null
  if (related && (e.currentTarget as HTMLElement).contains(related)) return
  if (dragOverCol.value === col) dragOverCol.value = null
}

async function onDrop(e: DragEvent, targetColumn: string) {
  e.preventDefault()
  const taskId = dragTaskId.value
  dragTaskId.value = null
  dragOverCol.value = null
  if (!taskId) return
  // Skip if same column
  let currentCol = ''
  for (const col of activeColumns.value) {
    if ((board[col] || []).some(tk => tk.id === taskId)) {
      currentCol = col
      break
    }
  }
  if (currentCol === targetColumn) return
  try {
    await updateTask(taskId, { status: targetColumn })
    message.success(t('kanban.taskUpdated'))
    await loadBoard()
    // Refresh detail panel if open for this task
    if (selectedTask.value?.id === taskId) {
      for (const col of activeColumns.value) {
        const found = (board[col] || []).find(tk => tk.id === taskId)
        if (found) { selectedTask.value = found; break }
      }
    }
  } catch {
    message.error(t('kanban.loadFailed'))
  }
}

// ── Create ──────────────────────────────────────
function openCreate() {
  newTitle.value = ''
  newBody.value = ''
  newStatus.value = 'todo'
  newPriority.value = 'none'
  newAssignee.value = 'default'
  showCreate.value = true
}

async function handleCreate() {
  const title = newTitle.value.trim()
  if (!title || creating.value) return
  creating.value = true
  try {
    await createTask({
      title, body: newBody.value.trim(), status: newStatus.value,
      priority: newPriority.value !== 'none' ? newPriority.value : undefined,
      assignee: newAssignee.value.trim() || undefined,
    })
    message.success(t('kanban.taskCreated'))
    showCreate.value = false
    await loadBoard()
  } catch {
    message.error(t('kanban.loadFailed'))
  } finally {
    creating.value = false
  }
}

// ── Detail ──────────────────────────────────────
async function openDetail(task: KanbanTask) {
  selectedTask.value = task
  editingTask.value = null
  sessionsShown.value = false
  relatedSessions.value = []
  drawerOpen.value = true
  await loadTaskDetail(task.id)
}

async function loadTaskDetail(taskId: string) {
  detailLoading.value = true
  try {
    const [runs, events, comments, links] = await Promise.all([
      fetchTaskRuns(taskId),
      fetchTaskEvents(taskId),
      fetchTaskComments(taskId),
      fetchTaskLinks(taskId).catch(() => ({ parent_ids: [] as string[], child_ids: [] as string[] })),
    ])
    taskRuns.value = runs
    taskEvents.value = events
    taskComments.value = comments
    taskLinks.value = links
  } catch {
    // silently fail — detail is supplementary
  } finally {
    detailLoading.value = false
  }
}

async function handleUnblock() {
  if (!selectedTask.value) return
  try {
    await unblockTask(selectedTask.value.id)
    message.success(t('kanban.unblocked'))
    await loadBoard()
    await loadTaskDetail(selectedTask.value.id)
  } catch {
    message.error(t('kanban.unblockFailed'))
  }
}

async function handleSubmitComment() {
  if (!selectedTask.value || !newCommentBody.value.trim()) return
  submittingComment.value = true
  try {
    await addTaskComment(selectedTask.value.id, {
      author: newCommentAuthor.value.trim() || 'anonymous',
      body: newCommentBody.value.trim(),
    })
    message.success(t('kanban.commentAdded'))
    newCommentBody.value = ''
    await loadTaskDetail(selectedTask.value.id)
  } catch {
    message.error(t('kanban.loadFailed'))
  } finally {
    submittingComment.value = false
  }
}

function eventKindLabel(kind: string): string {
  return t(`kanban.events.${kind}`, kind)
}

function runOutcomeColor(outcome: string | null): 'default' | 'success' | 'error' | 'warning' | 'info' {
  const map: Record<string, 'default' | 'success' | 'error' | 'warning' | 'info'> = {
    completed: 'success', blocked: 'warning', crashed: 'error',
    timed_out: 'warning', spawn_failed: 'error', gave_up: 'warning', reclaimed: 'info',
  }
  return outcome ? (map[outcome] || 'default') : 'default'
}

function runStatusColor(status: string): 'default' | 'success' | 'error' | 'warning' | 'info' {
  const map: Record<string, 'default' | 'success' | 'error' | 'warning' | 'info'> = {
    running: 'info', done: 'success', blocked: 'warning', crashed: 'error', timed_out: 'warning', failed: 'error', released: 'default',
  }
  return map[status] || 'default'
}

function startEdit(task: KanbanTask) {
  editingTask.value = {
    title: task.title,
    body: task.body,
    status: task.status,
    priority: task.priority,
    assignee: task.assignee,
    summary: task.summary,
    block_reason: task.block_reason,
    result: task.result,
  }
}

function cancelEdit() {
  editingTask.value = null
}

async function handleSaveEdit() {
  if (!selectedTask.value || !editingTask.value) return
  try {
    const updated = await updateTask(selectedTask.value.id, editingTask.value)
    selectedTask.value = updated
    editingTask.value = null
    message.success(t('kanban.taskUpdated'))
    await loadBoard()
  } catch {
    message.error(t('kanban.loadFailed'))
  }
}

function handleDelete(task: KanbanTask) {
  dialog.warning({
    title: t('kanban.deleteConfirm'),
    positiveText: t('common.confirm'),
    negativeText: t('common.cancel'),
    onPositiveClick: async () => {
      try {
        await deleteTask(task.id)
        message.success(t('kanban.taskDeleted'))
        drawerOpen.value = false
        selectedTask.value = null
        await loadBoard()
      } catch {
        message.error(t('kanban.loadFailed'))
      }
      return true
    },
  })
}

// ── Helpers ─────────────────────────────────────
function handleCardUnblock(e: Event, task: KanbanTask) {
  e.stopPropagation()
  dialog.warning({
    title: t('kanban.unblock'),
    content: task.title,
    positiveText: t('common.confirm'),
    negativeText: t('common.cancel'),
    onPositiveClick: async () => {
      try {
        await unblockTask(task.id)
        message.success(t('kanban.unblocked'))
        await loadBoard()
      } catch {
        message.error(t('kanban.unblockFailed'))
      }
      return true
    },
  })
}

// ── Triage Operations ──────────────────────────
function openSpecify(task: KanbanTask) {
  specifyTitle.value = task.title
  specifyBody.value = task.body || ''
  showSpecify.value = true
}

async function handleSpecify() {
  if (!selectedTask.value) return
  try {
    const updated = await specifyTask(selectedTask.value.id, {
      title: specifyTitle.value.trim() || undefined,
      body: specifyBody.value.trim() || undefined,
    })
    selectedTask.value = updated
    showSpecify.value = false
    message.success(t('kanban.triage.specified'))
    await loadBoard()
  } catch {
    message.error(t('kanban.loadFailed'))
  }
}

function openDecompose(task: KanbanTask) {
  decomposeRootAssignee.value = task.assignee || ''
  decomposeChildren.value = [{ title: '', body: '', assignee: '' }]
  showDecompose.value = true
}

function addDecomposeChild() {
  decomposeChildren.value.push({ title: '', body: '', assignee: '' })
}

function removeDecomposeChild(index: number) {
  decomposeChildren.value.splice(index, 1)
}

async function handleDecompose() {
  if (!selectedTask.value) return
  const validChildren = decomposeChildren.value.filter(c => c.title.trim())
  if (!validChildren.length) return
  dialog.warning({
    title: t('kanban.triage.decomposeConfirm'),
    content: `${selectedTask.value.title} → ${validChildren.length} ${t('kanban.triage.addChild').replace('添加子任务', '个子任务')}`,
    positiveText: t('common.confirm'),
    negativeText: t('common.cancel'),
    onPositiveClick: async () => {
      try {
        const result = await decomposeTask(selectedTask.value!.id, {
          root_assignee: decomposeRootAssignee.value.trim() || undefined,
          children: validChildren.map(c => ({
            title: c.title.trim(),
            body: c.body?.trim() || undefined,
            assignee: c.assignee?.trim() || undefined,
          })),
        })
        showDecompose.value = false
        message.success(t('kanban.triage.decomposed', { count: result.child_ids.length }))
        await loadBoard()
      } catch {
        message.error(t('kanban.loadFailed'))
      }
      return true
    },
  })
}

function formatDate(ts: number | null): string {
  if (!ts) return '—'
  return new Date(ts * 1000).toLocaleString()
}

function timeAgo(ts: number | null): string {
  if (!ts) return ''
  const seconds = Math.floor(Date.now() / 1000) - ts
  if (seconds < 60) return t('kanban.timeAgo', { time: `${seconds}s` })
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return t('kanban.timeAgo', { time: `${minutes}m` })
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return t('kanban.timeAgo', { time: `${hours}h` })
  const days = Math.floor(hours / 24)
  return t('kanban.timeAgo', { time: `${days}d` })
}

function clearFilters() {
  searchQuery.value = ''
  tenantFilter.value = null
  assigneeFilter.value = null
  showArchived.value = false
}

function priorityColor(p: string): 'default' | 'info' | 'warning' | 'error' | 'success' {
  const map: Record<string, 'default' | 'info' | 'warning' | 'error' | 'success'> = {
    none: 'default', low: 'info', medium: 'warning', high: 'error', critical: 'error',
  }
  return map[p] || 'default'
}

const priorityOptions = computed(() => [
  { label: t('kanban.priority.none'), value: 'none' },
  { label: t('kanban.priority.low'), value: 'low' },
  { label: t('kanban.priority.medium'), value: 'medium' },
  { label: t('kanban.priority.high'), value: 'high' },
  { label: t('kanban.priority.critical'), value: 'critical' },
])

const statusOptions = computed(() =>
  activeColumns.value.map(col => ({ label: t(`kanban.columns.${col}`), value: col }))
)

const columnColors: Record<string, string> = {
  triage: '#f0a020', todo: '#60a5fa', ready: '#a78bfa',
  running: '#34d399', blocked: '#f87171', done: '#94a3b8', archived: '#6b7280',
}

// Multi-select
const selectedIds = ref<Set<string>>(new Set())
const showBulkBar = computed(() => selectedIds.value.size > 0)

function toggleSelect(id: string, event: MouseEvent) {
  event.stopPropagation()
  if (selectedIds.value.has(id)) {
    selectedIds.value.delete(id)
  } else {
    selectedIds.value.add(id)
  }
  // Force reactivity
  selectedIds.value = new Set(selectedIds.value)
}

function clearSelection() {
  selectedIds.value = new Set()
}

async function bulkUpdateStatus(status: string) {
  const ids = Array.from(selectedIds.value)
  if (!ids.length) return
  try {
    await Promise.all(ids.map(id => updateTask(id, { status })))
    message.success(t('kanban.taskUpdated', { count: ids.length }))
    clearSelection()
    await loadBoard()
  } catch (e: any) {
    message.error(e.message || t('kanban.loadFailed'))
  }
}

async function bulkDelete() {
  const ids = Array.from(selectedIds.value)
  if (!ids.length) return
  dialog.warning({
    title: t('common.delete'),
    content: t('kanban.confirmDelete', { count: ids.length }),
    positiveText: t('common.confirm'),
    negativeText: t('common.cancel'),
    onPositiveClick: async () => {
      try {
        await Promise.all(ids.map(id => deleteTask(id)))
        message.success(t('kanban.taskDeleted'))
        clearSelection()
        await loadBoard()
      } catch (e: any) {
        message.error(e.message || t('kanban.loadFailed'))
      }
    },
  })
}

function selectAllVisible() {
  const allIds = new Set<string>()
  for (const col of activeColumns.value) {
    for (const tk of (filteredBoard.value[col] || [])) {
      allIds.add(tk.id)
    }
  }
  selectedIds.value = new Set(allIds)
}

// (Auto-refresh state declared at top of script)

onMounted(() => {
  loadBoard()
  loadProfiles()
})

onBeforeUnmount(() => {
  if (refreshTimer) clearInterval(refreshTimer)
})
</script>

<template>
  <div class="kanban-view" @click="closeCtxMenu">
    <header class="page-header">
      <div class="header-title-row">
        <h2 class="header-title">{{ t('kanban.title') }}</h2>
        <NSelect
          :value="currentBoardSlug"
          :options="boardOptions"
          size="tiny"
          class="board-select"
          :arrow="false"
          :consistent-menu-width="false"
          @update:value="handleSwitchBoard"
        >
          <template #action>
            <div class="board-dropdown-actions">
              <button class="board-action-btn" @click.stop="showCreateBoard = true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                新建看板
              </button>
              <button v-if="currentBoardSlug !== 'default'" class="board-action-btn danger" @click.stop="handleDeleteBoard(currentBoardSlug)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                删除当前看板
              </button>
            </div>
          </template>
        </NSelect>
      </div>
    </header>

    <div class="kanban-toolbar">
      <!-- 左侧：筛选项 -->
      <div class="toolbar-filters">
        <NInput
          v-model:value="searchQuery"
          size="small"
          :placeholder="t('kanban.searchPlaceholder')"
          clearable
          class="search-input"
        >
          <template #prefix>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </template>
        </NInput>
        <NSelect
          v-if="tenantList.length > 1"
          :value="tenantFilter ?? '__all__'"
          :options="tenantOptions"
          size="small"
          style="width: 140px;"
          @update:value="(v: string) => tenantFilter = v === '__all__' ? null : v"
        />
        <NSelect
          v-if="assigneeList.length > 1"
          :value="assigneeFilter ?? '__all__'"
          :options="assigneeOptions"
          size="small"
          style="width: 140px;"
          @update:value="(v: string) => assigneeFilter = v === '__all__' ? null : v"
        />
        <NButton
          size="small"
          :type="groupLanes ? 'primary' : 'default'"
          quaternary
          @click="groupLanes = !groupLanes"
        >
          <template #icon>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          </template>
          {{ t('kanban.lanes') }}
        </NButton>
        <NButton
          size="small"
          :type="showArchived ? 'primary' : 'default'"
          quaternary
          @click="showArchived = !showArchived"
        >
          {{ t('kanban.showArchived') }}
        </NButton>
        <NButton
          v-if="searchQuery || tenantFilter || assigneeFilter || showArchived"
          size="small"
          quaternary
          @click="clearFilters"
        >
          {{ t('kanban.clearFilters') }}
        </NButton>
      </div>
      <!-- 右侧：操作按钮 -->
      <div class="toolbar-actions">
        <NSelect
          v-if="autoRefresh"
          :value="refreshInterval"
          :options="[
            { label: '10s', value: 10 },
            { label: '30s', value: 30 },
            { label: '60s', value: 60 },
          ]"
          size="small"
          style="width: 80px;"
          @update:value="setRefreshTimer"
        />
        <NButton
          size="small"
          :type="autoRefresh ? 'primary' : 'default'"
          quaternary
          @click="autoRefresh = !autoRefresh"
        >
          <template #icon>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
          </template>
          <span v-if="autoRefresh" class="refresh-countdown">{{ refreshCountdown }}s</span>
        </NButton>
        <NButton
          size="small"
          type="primary"
          :loading="dispatching"
          @click="handleDispatch"
        >
          {{ t('kanban.dispatch') }}
        </NButton>
        <NButton type="primary" size="small" @click="openCreate">
          <template #icon>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </template>
          {{ t('kanban.createTask') }}
        </NButton>
      </div>
    </div>

    <NSpin :show="loading && Object.keys(board).length === 0">
      <div class="kanban-scroll-wrapper">
        <div class="kanban-board">
        <div
          v-for="col in activeColumns"
          :key="col"
          class="kanban-column"
          :class="{ 'drag-over': dragOverCol === col }"
          @dragenter="onDragEnter($event, col)"
          @dragover="onDragOver"
          @dragleave="onDragLeave($event, col)"
          @drop="onDrop($event, col)"
        >
          <div class="column-header">
            <span class="column-dot" :style="{ background: columnColors[col] }"></span>
            <span class="column-name">{{ t(`kanban.columns.${col}`) }}</span>
            <NButton
              size="tiny"
              quaternary
              circle
              @click="openCreateForColumn(col)"
            >
              <template #icon>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </template>
            </NButton>
            <NTooltip trigger="hover">
              <template #trigger>
                <span class="column-count">{{ (filteredBoard[col] || []).length }}</span>
              </template>
              {{ t('kanban.taskCount', { count: (filteredBoard[col] || []).length }) }}
            </NTooltip>
          </div>
          <div class="column-body">
            <!-- Running column: worker lanes mode -->
            <template v-if="col === 'running' && groupLanes">
              <template v-if="runningLanes.length && runningLanes.some(l => l.tasks.length)">
                <div v-for="lane in runningLanes" :key="lane.assignee" class="worker-lane">
                  <div v-if="lane.assignee" class="lane-header">{{ lane.assignee }}</div>
                  <template v-if="lane.tasks.length">
                    <div
                      v-for="task in lane.tasks"
                      :key="task.id"
                      class="kanban-card"
                      draggable="true"
                      :class="{ dragging: dragTaskId === task.id, selected: selectedIds.has(task.id) }"
                      @dragstart="onDragStart($event, task)"
                      @dragend="onDragEnd"
                      @contextmenu.prevent="openCtxMenu($event, task)"
                    >
                      <input
                        type="checkbox"
                        class="card-checkbox"
                        :checked="selectedIds.has(task.id)"
                        @click="toggleSelect(task.id, $event)"
                      />
                      <div class="card-title" @click="openDetail(task)"><span class="card-id">{{ task.id }}</span> {{ task.title }}</div>
                      <p v-if="task.body" class="card-body-preview">{{ task.body.slice(0, 80) }}{{ task.body.length > 80 ? '…' : '' }}</p>
                      <div class="card-meta">
                        <span v-if="task.current_run_id" class="card-running-dot" :title="t('kanban.columns.running')"></span>
                        <NTag v-if="task.priority && String(task.priority) !== 'none' && String(task.priority) !== '0'" size="tiny" :type="priorityColor(String(task.priority))" round>
                          {{ t(`kanban.priority.${task.priority}`, String(task.priority)) }}
                        </NTag>
                        <NTag v-if="task.tenant" size="tiny" type="info" round>{{ task.tenant }}</NTag>
                        <span v-if="task.assignee" class="card-assignee">@{{ task.assignee }}</span>
                        <span v-if="timeAgo(task.created_at)" class="card-created">{{ timeAgo(task.created_at) }}</span>
                      </div>
                    </div>
                  </template>
                </div>
              </template>
              <div v-else class="column-empty">{{ t('kanban.noTasks') }}</div>
            </template>
            <!-- Normal column rendering (non-running, or running without lanes) -->
            <template v-else>
              <template v-if="(filteredBoard[col] || []).length">
                <div
                  v-for="task in filteredBoard[col]"
                  :key="task.id"
                  class="kanban-card"
                  draggable="true"
                  :class="{ dragging: dragTaskId === task.id, selected: selectedIds.has(task.id) }"
                  @dragstart="onDragStart($event, task)"
                  @dragend="onDragEnd"
                  @contextmenu.prevent="openCtxMenu($event, task)"
                >
                  <input
                    type="checkbox"
                    class="card-checkbox"
                    :checked="selectedIds.has(task.id)"
                    @click="toggleSelect(task.id, $event)"
                  />
                  <div class="card-title" @click="openDetail(task)"><span class="card-id">{{ task.id }}</span> {{ task.title }}</div>
                  <p v-if="task.body" class="card-body-preview">{{ task.body.slice(0, 80) }}{{ task.body.length > 80 ? '…' : '' }}</p>
                  <div class="card-meta">
                    <span v-if="col === 'running' && task.current_run_id" class="card-running-dot" :title="t('kanban.columns.running')"></span>
                    <NTag v-if="task.priority && String(task.priority) !== 'none' && String(task.priority) !== '0'" size="tiny" :type="priorityColor(String(task.priority))" round>
                      {{ t(`kanban.priority.${task.priority}`) }}
                    </NTag>
                    <NTag v-if="task.tenant" size="tiny" type="info" round>{{ task.tenant }}</NTag>
                    <span v-if="task.assignee" class="card-assignee">@{{ task.assignee }}</span>
                    <span v-if="timeAgo(task.created_at)" class="card-created">{{ timeAgo(task.created_at) }}</span>
                    <template v-if="task.status === 'triage'">
                      <NButton size="tiny" type="primary" quaternary round @click="openSpecify(task); openDetail(task)">
                        {{ t('kanban.triage.specify') }}
                      </NButton>
                      <NButton size="tiny" type="info" quaternary round @click="openDecompose(task); openDetail(task)">
                        {{ t('kanban.triage.decompose') }}
                      </NButton>
                    </template>
                    <NButton
                      v-if="task.status === 'blocked'"
                      size="tiny"
                      type="warning"
                      quaternary
                      round
                      @click="handleCardUnblock($event, task)"
                    >
                      {{ t('kanban.unblock') }}
                    </NButton>
                  </div>
                </div>
              </template>
              <div v-else class="column-empty">
                {{ t('kanban.noTasks') }}
              </div>
            </template>
          </div>
        </div>
      </div><!-- /kanban-board -->
      </div><!-- /kanban-scroll-wrapper -->
    </NSpin>

    <!-- Bulk action bar -->
    <Transition name="bulk-bar">
      <div v-if="showBulkBar" class="bulk-action-bar">
        <span class="bulk-count">{{ t('kanban.bulkSelected', { count: selectedIds.size }) }}</span>
        <NButton size="tiny" @click="selectAllVisible">{{ t('kanban.selectAll') }}</NButton>
        <NButton size="tiny" @click="clearSelection">{{ t('kanban.clearSelection') }}</NButton>
        <NSelect
          size="tiny"
          :value="null"
          :options="activeColumns.filter(c => c !== 'archived').map(c => ({ label: t(`kanban.columns.${c}`), value: c }))"
          style="width: 100px;"
          :placeholder="t('kanban.bulkMoveTo')"
          @update:value="bulkUpdateStatus"
        />
        <NButton size="tiny" type="error" @click="bulkDelete">{{ t('kanban.bulkDelete') }}</NButton>
      </div>
    </Transition>

    <!-- Create Modal -->
    <NModal v-model:show="showCreate" preset="card" :title="t('kanban.createTask')" style="max-width: 420px; width: 90vw;">
      <NForm @submit.prevent="handleCreate">
        <NFormItem :label="t('kanban.taskTitle')">
          <NInput
            v-model:value="newTitle"
            :placeholder="t('kanban.taskTitlePlaceholder')"
            @keydown.enter="handleCreate"
          />
        </NFormItem>
        <NFormItem :label="t('kanban.taskBody')">
          <NInput
            v-model:value="newBody"
            type="textarea"
            :placeholder="t('kanban.taskBodyPlaceholder')"
            :rows="3"
          />
        </NFormItem>
        <NFormItem :label="t('kanban.detail.priority')">
          <NSelect v-model:value="newPriority" :options="priorityOptions" size="small" />
        </NFormItem>
        <NFormItem :label="t('kanban.detail.assignee')">
          <NSelect
            v-model:value="newAssignee"
            :options="profileAssigneeOptions"
            filterable
            tag
            clearable
            :placeholder="t('kanban.taskAssigneePlaceholder')"
          />
        </NFormItem>
      </NForm>
      <template #footer>
        <div class="modal-actions">
          <NButton size="small" @click="showCreate = false">{{ t('common.cancel') }}</NButton>
          <NButton type="primary" size="small" :loading="creating" :disabled="!newTitle.trim()" @click="handleCreate">
            {{ t('common.confirm') }}
          </NButton>
        </div>
      </template>
    </NModal>

    <!-- Specify Modal -->
    <NModal v-model:show="showSpecify" preset="card" :title="t('kanban.triage.specifyTitle')" style="max-width: 420px; width: 90vw;">
      <NForm @submit.prevent="handleSpecify">
        <NFormItem :label="t('kanban.taskTitle')">
          <NInput v-model:value="specifyTitle" :placeholder="t('kanban.triage.specifyPlaceholder')" />
        </NFormItem>
        <NFormItem :label="t('kanban.taskBody')">
          <NInput v-model:value="specifyBody" type="textarea" :placeholder="t('kanban.triage.specifyBodyPlaceholder')" :rows="3" />
        </NFormItem>
      </NForm>
      <template #footer>
        <div class="modal-actions">
          <NButton size="small" @click="showSpecify = false">{{ t('common.cancel') }}</NButton>
          <NButton type="primary" size="small" @click="handleSpecify">{{ t('common.confirm') }}</NButton>
        </div>
      </template>
    </NModal>

    <!-- Decompose Modal -->
    <NModal v-model:show="showDecompose" preset="card" :title="t('kanban.triage.decomposeTitle')" style="max-width: 520px; width: 90vw;">
      <NFormItem :label="t('kanban.triage.childAssignee')">
        <NSelect v-model:value="decomposeRootAssignee" :options="profileAssigneeOptions" filterable tag clearable size="small" />
      </NFormItem>
      <div v-for="(child, idx) in decomposeChildren" :key="idx" style="display: flex; gap: 6px; align-items: flex-start; margin-bottom: 8px;">
        <NInput
          v-model:value="child.title"
          size="small"
          :placeholder="t('kanban.triage.childTitle')"
          style="flex: 1;"
        />
        <NSelect
          v-model:value="child.assignee!"
          :options="profileAssigneeOptions"
          filterable
          tag
          clearable
          size="small"
          style="width: 120px;"
        />
        <NButton size="small" quaternary type="error" :disabled="decomposeChildren.length <= 1" @click="removeDecomposeChild(idx)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </NButton>
      </div>
      <NButton size="small" dashed block @click="addDecomposeChild">
        + {{ t('kanban.triage.addChild') }}
      </NButton>
      <template #footer>
        <div class="modal-actions">
          <NButton size="small" @click="showDecompose = false">{{ t('common.cancel') }}</NButton>
          <NButton type="primary" size="small" :disabled="!decomposeChildren.some(c => c.title.trim())" @click="handleDecompose">
            {{ t('kanban.triage.decompose') }}
          </NButton>
        </div>
      </template>
    </NModal>

    <!-- Link Dependency Modal -->
    <NModal v-model:show="showLink" preset="card" :title="t('kanban.addDependency')" style="max-width: 360px; width: 90vw;">
      <NFormItem :label="linkDirection === 'child' ? t('kanban.linkChild') : t('kanban.linkParent')">
        <NInput v-model:value="linkTargetId" size="small" :placeholder="linkDirection === 'child' ? t('kanban.linkChildPlaceholder') : t('kanban.linkParentPlaceholder')" @keyup.enter="handleLink" />
      </NFormItem>
      <template #footer>
        <div class="modal-actions">
          <NButton size="small" @click="showLink = false">{{ t('common.cancel') }}</NButton>
          <NButton type="primary" size="small" :disabled="!linkTargetId.trim()" @click="handleLink">{{ t('kanban.addDependency') }}</NButton>
        </div>
      </template>
    </NModal>

    <!-- Create Board Modal -->
    <NModal v-model:show="showCreateBoard" preset="card" :title="t('kanban.createBoardTitle')" style="max-width: 360px; width: 90vw;">
      <NFormItem :label="t('kanban.boardSlug')">
        <NInput v-model:value="newBoardSlug" size="small" placeholder="my-project" @keyup.enter="handleCreateBoard" />
      </NFormItem>
      <NFormItem :label="t('kanban.boardName')">
        <NInput v-model:value="newBoardName" size="small" :placeholder="t('kanban.boardName')" />
      </NFormItem>
      <template #footer>
        <div class="modal-actions">
          <NButton size="small" @click="showCreateBoard = false">{{ t('common.cancel') }}</NButton>
          <NButton type="primary" size="small" :disabled="!newBoardSlug.trim()" @click="handleCreateBoard">{{ t('kanban.createBoard') }}</NButton>
        </div>
      </template>
    </NModal>

    <!-- Context Menu -->
    <Teleport to="body">
      <div
        v-if="ctxMenu.show && ctxMenu.task"
        class="ctx-menu"
        :style="{ left: ctxMenu.x + 'px', top: ctxMenu.y + 'px' }"
        @click.stop
      >
        <!-- Move to -->
        <div class="ctx-group">
          <div class="ctx-group-label">{{ t('kanban.ctx.moveTo') }}</div>
          <div
            v-for="col in ctxColumnOptions"
            :key="col.value"
            class="ctx-item"
            :class="{ 'ctx-active': ctxMenu.task?.status === col.value }"
            @click="ctxMoveTask(col.value)"
          >
            {{ col.label }}
            <span v-if="ctxMenu.task?.status === col.value" class="ctx-check">✓</span>
          </div>
        </div>
        <!-- Priority -->
        <div class="ctx-group">
          <div class="ctx-group-label">{{ t('kanban.ctx.priority') }}</div>
          <div
            v-for="opt in ctxPriorityOptions"
            :key="opt.value"
            class="ctx-item"
            :class="{ 'ctx-active': String(ctxMenu.task?.priority || 'none') === opt.value }"
            @click="ctxSetPriority(opt.value)"
          >
            {{ opt.label }}
            <span v-if="String(ctxMenu.task?.priority || 'none') === opt.value" class="ctx-check">✓</span>
          </div>
        </div>
        <!-- Assignee -->
        <div class="ctx-group">
          <div class="ctx-group-label">{{ t('kanban.detail.assignee') }}</div>
          <div
            v-for="opt in ctxAssigneeOptions"
            :key="opt.value"
            class="ctx-item"
            :class="{ 'ctx-active': opt.value === '__none__' ? !ctxMenu.task?.assignee : ctxMenu.task?.assignee === opt.value }"
            @click="ctxSetAssignee(opt.value === '__none__' ? null : opt.value)"
          >
            {{ opt.label }}
            <span v-if="opt.value === '__none__' ? !ctxMenu.task?.assignee : ctxMenu.task?.assignee === opt.value" class="ctx-check">✓</span>
          </div>
        </div>
        <div class="ctx-separator"></div>
        <div class="ctx-item" @click="ctxOpenDetail">{{ t('kanban.ctx.detail') }}</div>
        <div
          v-if="ctxMenu.task?.status !== 'archived'"
          class="ctx-item ctx-danger"
          @click="ctxArchive"
        >{{ t('kanban.archive') }}</div>
        <div
          v-else
          class="ctx-item"
          @click="ctxUnarchive"
        >{{ t('kanban.unarchive') }}</div>
        <div class="ctx-item ctx-danger" @click="ctxDelete">{{ t('kanban.delete') }}</div>
      </div>
    </Teleport>

    <!-- Detail Drawer -->
    <NDrawer v-model:show="drawerOpen" :width="480" placement="right">
      <NDrawerContent
        v-if="selectedTask"
        :title="selectedTask.title"
        closable
        @close="drawerOpen = false"
      >
        <NSpin :show="detailLoading">
          <!-- Edit Mode -->
          <template v-if="editingTask">
            <div class="detail-panel">
              <div class="edit-field">
                <label>{{ t('kanban.taskTitle') }}</label>
                <NInput v-model:value="editingTask.title!" :placeholder="t('kanban.taskTitlePlaceholder')" size="small" />
              </div>
              <div class="edit-field">
                <label>{{ t('kanban.detail.status') }}</label>
                <NSelect v-model:value="editingTask.status!" :options="statusOptions" size="small" />
              </div>
              <div class="edit-field">
                <label>{{ t('kanban.detail.priority') }}</label>
                <NSelect v-model:value="editingTask.priority!" :options="priorityOptions" size="small" />
              </div>
              <div class="edit-field">
                <label>{{ t('kanban.detail.assignee') }}</label>
                <NSelect v-model:value="editingTask.assignee!" :options="profileAssigneeOptions" filterable tag clearable size="small" />
              </div>
              <div class="edit-field">
                <label>{{ t('kanban.taskBody') }}</label>
                <NInput v-model:value="editingTask.body!" type="textarea" :rows="5" :placeholder="t('kanban.taskBodyPlaceholder')" size="small" />
              </div>
              <div class="edit-field">
                <label>{{ t('kanban.detail.result') }}</label>
                <NInput v-model:value="editingTask.result!" type="textarea" :rows="2" :placeholder="t('kanban.taskResultPlaceholder')" size="small" />
              </div>
              <div class="modal-actions">
                <NButton size="small" @click="cancelEdit">{{ t('common.cancel') }}</NButton>
                <NButton type="primary" size="small" @click="handleSaveEdit">{{ t('common.confirm') }}</NButton>
              </div>
            </div>
          </template>

          <!-- View Mode -->
          <template v-else>
            <div class="detail-scroll">
              <!-- Metadata -->
              <div class="detail-meta">
                <div class="detail-row">
                  <span class="detail-label">{{ t('kanban.detail.status') }}</span>
                  <NTag size="small" :color="{ color: columnColors[selectedTask.status] + '22', textColor: columnColors[selectedTask.status], borderColor: columnColors[selectedTask.status] + '44' }">
                    {{ t(`kanban.columns.${selectedTask.status}`) }}
                  </NTag>
                </div>
                <div class="detail-row">
                  <span class="detail-label">{{ t('kanban.detail.priority') }}</span>
                  <NTag v-if="selectedTask.priority && selectedTask.priority !== 'none'" size="small" :type="priorityColor(String(selectedTask.priority))" round>
                    {{ t(`kanban.priority.${selectedTask.priority}`, String(selectedTask.priority || 'none')) }}
                  </NTag>
                  <span v-else class="detail-value-muted">—</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">{{ t('kanban.detail.assignee') }}</span>
                  <span class="detail-value">{{ selectedTask.assignee || '—' }}</span>
                </div>
                <div v-if="selectedTask.tenant" class="detail-row">
                  <span class="detail-label">{{ t('kanban.detail.tenant') }}</span>
                  <NTag size="small" round>{{ selectedTask.tenant }}</NTag>
                </div>
                <div v-if="selectedTask.created_by" class="detail-row">
                  <span class="detail-label">{{ t('kanban.detail.createdBy') }}</span>
                  <span class="detail-value">{{ selectedTask.created_by }}</span>
                </div>
                <div v-if="selectedTask.consecutive_failures > 0" class="detail-row">
                  <span class="detail-label">{{ t('kanban.detail.failures') }}</span>
                  <NTag size="small" type="error" round>{{ selectedTask.consecutive_failures }}</NTag>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="detail-actions">
                <NButton v-if="selectedTask.status === 'blocked'" type="warning" size="small" @click="handleUnblock">{{ t('kanban.unblock') }}</NButton>
                <NButton size="small" @click="startEdit(selectedTask)">{{ t('common.edit') }}</NButton>
                <NButton v-if="selectedTask.status !== 'archived'" size="small" quaternary @click="handleArchive(selectedTask, true)">{{ t('kanban.archive') }}</NButton>
                <NButton v-if="selectedTask.status === 'archived'" size="small" quaternary @click="handleArchive(selectedTask, false)">{{ t('kanban.unarchive') }}</NButton>
                <NButton size="small" type="error" quaternary @click="handleDelete(selectedTask)">{{ t('common.delete') }}</NButton>
              </div>

              <!-- Description -->
              <div v-if="selectedTask.body" class="detail-section">
                <div class="section-title">{{ t('kanban.detail.description') }}</div>
                <div class="detail-body markdown-content" v-html="renderMd(selectedTask.body)"></div>
              </div>

              <!-- Summary -->
              <div v-if="selectedTask.summary" class="detail-section">
                <div class="section-title">{{ t('kanban.detail.summary') }}</div>
                <p class="detail-body">{{ selectedTask.summary }}</p>
              </div>

              <!-- Block Reason -->
              <div v-if="selectedTask.block_reason" class="detail-section">
                <div class="section-title">{{ t('kanban.detail.blockReason') }}</div>
                <p class="detail-body">{{ selectedTask.block_reason }}</p>
              </div>

              <!-- Result -->
              <div v-if="selectedTask.result" class="detail-section">
                <div class="section-title">{{ t('kanban.detail.result') }}</div>
                <p class="detail-body">{{ selectedTask.result }}</p>
              </div>

              <!-- Dependencies -->
              <div class="detail-section">
                <div class="section-title">
                  {{ t('kanban.parents') }}
                  <button class="section-add-btn" @click="openLink(selectedTask, 'parent')">+</button>
                </div>
                <div v-if="taskLinks.parent_ids.length" class="detail-links">
                  <NTag v-for="pid in taskLinks.parent_ids" :key="pid" size="small" closable @close="handleUnlink(pid, selectedTask.id)">
                    {{ pid }}
                  </NTag>
                </div>
                <p v-else class="detail-muted">—</p>
              </div>
              <div class="detail-section">
                <div class="section-title">
                  {{ t('kanban.children') }}
                  <button class="section-add-btn" @click="openLink(selectedTask, 'child')">+</button>
                </div>
                <div v-if="taskLinks.child_ids.length" class="detail-links">
                  <NTag v-for="cid in taskLinks.child_ids" :key="cid" size="small" closable @close="handleUnlink(selectedTask.id, cid)">
                    {{ cid }}
                  </NTag>
                </div>
                <p v-else class="detail-muted">—</p>
              </div>

              <!-- Related Sessions -->
              <div v-if="taskRuns.length" class="detail-section">
                <div class="section-title" style="cursor: pointer" @click="loadRelatedSessions(selectedTask.id)">
                  {{ t('kanban.relatedSessions') }}
                  <NSpin v-if="sessionsLoading" :size="12" style="margin-left: 6px;" />
                </div>
                <template v-if="sessionsShown">
                  <div v-if="relatedSessions.length" class="session-list">
                    <div v-for="s in relatedSessions" :key="s.id" class="session-item" @click="openSession(s.id)">
                      <div class="session-item-title">{{ s.title || s.id }}</div>
                      <div class="session-item-meta">
                        <span v-if="s.source">{{ s.source }}</span>
                        <span v-if="s.model">{{ s.model }}</span>
                        <span v-if="s.started_at">{{ formatDate(s.started_at) }}</span>
                      </div>
                    </div>
                  </div>
                  <p v-else-if="!sessionsLoading" class="detail-muted">{{ t('kanban.noSessions') }}</p>
                </template>
              </div>

              <!-- Runs -->
              <div v-if="taskRuns.length" class="detail-section">
                <div class="section-title">{{ t('kanban.tabs.runs') }} ({{ taskRuns.length }})</div>
                <div class="detail-timeline">
                  <div v-for="run in visibleRuns" :key="run.id" class="timeline-item run-item">
                    <div class="timeline-header">
                      <NTag size="tiny" :type="runStatusColor(run.status)">{{ t('kanban.runs.' + run.status) || run.status }}</NTag>
                      <NTag v-if="run.outcome" size="tiny" :type="runOutcomeColor(run.outcome)">{{ t('kanban.runs.' + run.outcome) || run.outcome }}</NTag>
                      <span class="timeline-time">#{{ run.id }} · {{ formatDate(run.started_at) }}</span>
                    </div>
                    <p v-if="run.summary" class="timeline-summary">{{ run.summary }}</p>
                    <p v-if="run.error" class="timeline-error">{{ run.error }}</p>
                    <div v-if="run.worker_pid" class="timeline-meta">
                      {{ t('kanban.runs.worker') }}: {{ run.worker_pid }}
                      <span v-if="run.profile"> · {{ t('kanban.runs.profile') }}: {{ run.profile }}</span>
                    </div>
                  </div>
                </div>
                <button v-if="taskRuns.length > 3 && !showAllRuns" class="section-toggle" @click="showAllRuns = true">
                  {{ t('kanban.showAll', { n: taskRuns.length }) }}
                </button>
                <button v-else-if="showAllRuns" class="section-toggle" @click="showAllRuns = false">
                  {{ t('kanban.collapse') }}
                </button>
              </div>

              <!-- Events -->
              <div v-if="taskEvents.length" class="detail-section">
                <div class="section-title">{{ t('kanban.tabs.events') }} ({{ taskEvents.length }})</div>
                <div class="section-scroll-area">
                  <div class="detail-timeline">
                    <div v-for="ev in taskEvents" :key="ev.id" class="timeline-item event-item">
                      <div class="timeline-header">
                        <span class="event-kind">{{ eventKindLabel(ev.kind) }}</span>
                        <span class="timeline-time">{{ formatDate(ev.created_at) }}</span>
                      </div>
                      <pre v-if="ev.payload" class="timeline-payload">{{ JSON.stringify(ev.payload, null, 2) }}</pre>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Timestamps -->
              <div class="detail-ts">
                <span>{{ t('kanban.detail.createdAt') }}: {{ formatDate(selectedTask.created_at) }}</span>
                <span v-if="selectedTask.started_at">{{ t('kanban.runs.startedAt') }}: {{ formatDate(selectedTask.started_at) }}</span>
                <span v-if="selectedTask.completed_at">{{ t('kanban.runs.endedAt') }}: {{ formatDate(selectedTask.completed_at) }}</span>
              </div>

              <!-- Comments List -->
              <div v-if="taskComments.length" class="detail-section">
                <div class="section-title">{{ t('kanban.tabs.comments') }} ({{ taskComments.length }})</div>
                <div class="detail-timeline">
                  <div v-for="c in taskComments" :key="c.id" class="timeline-item comment-item">
                    <div class="timeline-header">
                      <span class="comment-author">{{ c.author }}</span>
                      <span class="timeline-time">{{ formatDate(c.created_at) }}</span>
                    </div>
                    <div class="timeline-body markdown-content" v-html="renderMd(c.body)"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Comment Input Bar -->
            <div class="drawer-comment-bar">
              <NInput
                v-model:value="newCommentAuthor"
                size="small"
                :placeholder="t('kanban.commentAuthor')"
                style="width: 90px;"
              />
              <NInput
                v-model:value="newCommentBody"
                size="small"
                :placeholder="t('kanban.commentPlaceholder')"
                @keydown.enter="handleSubmitComment"
                style="flex: 1;"
              />
              <NButton
                type="primary"
                size="small"
                :disabled="!newCommentBody.trim()"
                :loading="submittingComment"
                @click="handleSubmitComment"
              >
                {{ t('kanban.addComment') }}
              </NButton>
            </div>
          </template>
        </NSpin>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.kanban-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.header-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.board-select {
  width: 160px;
  :deep(.n-base-selection) {
    border-color: var(--border-color);
    border-radius: var(--radius-sm, 8px);
    background: var(--bg-card);
  }
  :deep(.n-base-selection-label) {
    font-size: 13px;
    color: var(--text-primary);
  }
}

.kanban-toolbar {
  padding: 12px 20px 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.toolbar-filters {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.search-input {
  max-width: 180px;
  :deep(.n-input) {
    border-color: var(--border-color);
    border-radius: var(--radius-sm, 8px);
    font-size: 13px;
    background: var(--bg-card);
  }
}

/* Board scroll wrapper — constrains height, allows horizontal scroll */
.kanban-scroll-wrapper {
  flex: 1 1 0;
  min-height: 0;
  overflow: hidden;
}

/* NSpin n-spin-container and n-spin-content break flex chain — fix them */
.kanban-view :deep(.n-spin-container),
.kanban-view :deep(.n-spin-content) {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  overflow: hidden;
}

/* Board layout */
.kanban-board {
  display: flex;
  gap: 12px;
  padding: 8px 20px 20px;
  overflow: hidden;
  height: 100%;
  align-items: stretch;
}

/* Column */
.kanban-column {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  transition: border-color $transition-fast;
  min-height: 0;
  overflow: hidden;
}

.kanban-column.drag-over {
  border-color: rgba(var(--accent-primary-rgb), 0.4);
  background: rgba(var(--accent-primary-rgb), 0.02);
}

.column-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 600;
  color: $text-primary;
  border-bottom: 1px solid $border-light;
  flex-shrink: 0;
  min-width: 0;
  overflow: hidden;
}

.column-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.column-name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.column-count {
  font-size: 11px;
  font-weight: 400;
  color: $text-muted;
  background: $bg-card-hover;
  padding: 1px 7px;
  border-radius: 10px;
}

.column-body {
  padding: 8px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 0;
}

/* ─── Card (aligned with ProviderCard) ───────── */
.kanban-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 12px;
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-sm;
  cursor: grab;
  position: relative;
  transition: border-color $transition-fast, box-shadow $transition-fast, transform 0.15s;
  flex-shrink: 0;

  &:hover {
    border-color: rgba(var(--accent-primary-rgb), 0.3);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
}

.kanban-card.dragging {
  opacity: 0.4;
  transform: rotate(1.5deg);
}

.card-title {
  font-size: 13px;
  font-weight: 600;
  color: $text-primary;
  line-height: 1.4;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-right: 22px;
}

.card-body-preview {
  font-size: 12px;
  color: $text-muted;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 4px 0;
}

.card-id {
  font-size: 10px;
  color: $text-muted;
  font-family: monospace;
  margin-right: 4px;
}

.card-assignee {
  font-size: 11px;
  color: $text-secondary;
  margin-left: 4px;
}

.card-created {
  font-size: 10px;
  color: $text-muted;
  margin-left: auto;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.card-running-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: $success;
  animation: pulse-dot 1.5s ease-in-out infinite;
  margin-right: 2px;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.card-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-info-label {
  font-size: 11px;
  color: $text-muted;
}

.card-info-value {
  font-size: 11px;
  color: $text-secondary;
  font-family: $font-code;
}

.column-empty {
  padding: 20px 12px;
  text-align: center;
  font-size: 12px;
  color: $text-muted;
  opacity: 0.5;
}

/* Modal actions */
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* Detail panel */
.detail-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* ─── Detail drawer ───────── */
.detail-scroll {
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  padding-right: 4px;
  padding-bottom: 8px;
  overscroll-behavior: contain;
}

/* Overview metadata */
.detail-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid $border-light;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.detail-label {
  font-size: 12px;
  color: $text-muted;
  min-width: 56px;
  flex-shrink: 0;
}

.detail-value {
  font-size: 13px;
  color: $text-secondary;
}

.detail-value-muted {
  font-size: 13px;
  color: $text-muted;
}

/* Section — each block in the drawer */
.detail-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.detail-section .detail-label {
  min-width: auto;
}

.section-title {
  font-size: 12px;
  font-weight: 600;
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.section-add-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid $border-light;
  background: transparent;
  color: $text-muted;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  transition: all $transition-fast;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    border-color: $accent-primary;
    color: $accent-primary;
    background: rgba($accent-primary, 0.06);
  }
}

.section-toggle {
  font-size: 12px;
  color: $text-muted;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  transition: color $transition-fast;

  &:hover { color: $text-secondary; }
}

/* Action buttons */
.detail-actions {
  display: flex;
  gap: 6px;
  padding: 10px 0;
  border-bottom: 1px solid $border-light;
}

/* Body text */
.detail-body {
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
  color: $text-secondary;
}

.detail-muted {
  margin: 0;
  font-size: 12px;
  color: $text-muted;
}

/* Timestamps */
.detail-ts {
  font-size: 11px;
  color: $text-muted;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  padding: 12px 0;
  border-top: 1px solid $border-light;
}

/* Links (parent/child) */
.detail-links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

/* ─── Timeline ───────── */
.detail-timeline {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.timeline-item {
  padding: 10px 12px;
  border-radius: $radius-sm;
  border: 1px solid $border-light;
}

/* Runs — subtle card */
.run-item {
  background: $bg-card-hover;
}

/* Events — minimal row, no card background */
.event-item {
  background: transparent;
  border-color: transparent;
  padding: 6px 0;
  border-bottom: 1px dashed $border-light;

  &:last-child { border-bottom-color: transparent; }
}

/* Scrollable area inside a section */
.section-scroll-area {
  max-height: 240px;
  overflow-y: auto;
  overscroll-behavior: contain;
  margin: 0 -2px;
  padding: 0 2px;

  /* thin scrollbar */
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: $border-color;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-track { background: transparent; }
}

/* Context Menu */
.ctx-menu {
  position: fixed;
  z-index: 9999;
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: 8px;
  padding: 4px 0;
  min-width: 180px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.ctx-group-label {
  padding: 6px 14px 2px;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ctx-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.82);
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: $bg-card-hover; }
}

.ctx-item.ctx-active {
  color: #18a058;
  font-weight: 500;
}

.ctx-check {
  font-size: 11px;
  margin-left: 12px;
}

.ctx-separator {
  height: 1px;
  background: $border-color;
  margin: 4px 8px;
}

.ctx-item.ctx-danger {
  color: #d03050;

  &:hover { background: rgba(208, 48, 80, 0.08); }
}

/* Comments */
.comment-item {
  background: $bg-card-hover;
}

.timeline-header {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.timeline-time {
  font-size: 12px;
  line-height: 1.5;
  color: $text-muted;
}

.timeline-summary {
  margin: 6px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: $text-secondary;
}

.timeline-error {
  margin: 6px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: $error;
  word-break: break-word;
}

.timeline-payload {
  margin: 6px 0 0;
  font-size: 11px;
  line-height: 1.5;
  color: $text-muted;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: $font-code;
  opacity: 0.7;
}

.timeline-meta {
  font-size: 11px;
  color: $text-muted;
  margin-top: 6px;
}

.timeline-body {
  margin: 6px 0 0;
  font-size: 13px;
  line-height: 1.7;
  word-break: break-word;
  color: $text-secondary;
}

.event-kind {
  font-size: 12px;
  font-weight: 600;
  color: $text-secondary;
}

.comment-author {
  font-size: 12px;
  font-weight: 600;
  color: $text-primary;
}

/* ─── Sessions ───────── */
.session-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.session-item {
  padding: 8px 10px;
  border-radius: $radius-sm;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background $transition-fast;

  &:hover {
    background: $bg-card-hover;
    border-color: $border-light;
  }
}

.session-item-title {
  font-size: 13px;
  font-weight: 500;
  color: $text-primary;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.session-item-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: $text-muted;
}

/* ─── Comment bar (fixed at drawer bottom) ───────── */
.drawer-comment-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0 0;
  border-top: 1px solid $border-light;
  margin-top: 12px;
  flex-shrink: 0;
}

/* Markdown content */
.markdown-content {
  font-size: 13px;
  line-height: 1.6;
  color: $text-secondary;
  word-break: break-word;
  overflow-wrap: break-word;

  :deep(p) {
    margin: 0 0 8px;
    &:last-child { margin-bottom: 0; }
  }

  :deep(code) {
    background: rgba($accent-primary, 0.1);
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 12px;
  }

  :deep(pre) {
    background: rgba(0, 0, 0, 0.2);
    padding: 8px 12px;
    border-radius: $radius-sm;
    overflow-x: auto;
    margin: 4px 0;

    code {
      background: none;
      padding: 0;
    }
  }

  :deep(ul), :deep(ol) {
    margin: 4px 0;
    padding-left: 20px;
  }

  :deep(a) {
    color: $accent-primary;
  }

  :deep(blockquote) {
    border-left: 3px solid $border-color;
    padding-left: 12px;
    margin: 4px 0;
    color: $text-muted;
  }
}

/* Edit mode */
.edit-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.edit-field label {
  font-size: 12px;
  color: $text-muted;
}

/* Checkbox */
.card-checkbox {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 14px;
  height: 14px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 2;
  accent-color: $accent-primary;
}

.kanban-card:hover .card-checkbox,
.kanban-card.selected .card-checkbox {
  opacity: 1;
}

.kanban-card.selected {
  border-color: $accent-primary !important;
  background: rgba($accent-primary, 0.05);
}

/* Bulk action bar */
.bulk-action-bar {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.bulk-count {
  font-size: 13px;
  font-weight: 600;
  color: $text-primary;
  margin-right: 4px;
}

.bulk-bar-enter-active,
.bulk-bar-leave-active {
  transition: all 0.2s ease;
}

.bulk-bar-enter-from,
.bulk-bar-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
}

/* Running indicator dot */
.card-running-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34d399;
  animation: pulse-dot 1.5s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4); }
  50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(52, 211, 153, 0); }
}

/* Worker lanes */
.worker-lane {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.lane-header {
  font-size: 11px;
  font-weight: 600;
  color: $text-muted;
  padding: 4px 0 2px;
  border-bottom: 1px dashed $border-light;
  margin-bottom: 2px;
}

.refresh-countdown {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  min-width: 20px;
  text-align: center;
}

/* ─── NDrawerContent overrides ───────── */
.kanban-view :deep(.n-drawer-content) {
  display: flex;
  flex-direction: column;
}

/* Drawer is teleported to body — :deep() can't reach it. Use :global. */
:global(.n-drawer-body) {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

:global(.n-drawer-body-content-wrapper) {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
  min-height: 0;
}

/* Fix NSpin inside drawer — same flex chain break as board */
:global(.n-drawer-body .n-spin-container),
:global(.n-drawer-body .n-spin-content) {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  overflow: hidden;
}

.board-dropdown-actions {
  border-top: 1px solid var(--border-light);
  padding: 6px 0 4px;
}
.board-action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 7px 14px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  color: var(--text-secondary);
  border-radius: 6px;
  transition: all 0.15s ease;
}
.board-action-btn:hover {
  background: var(--bg-card-hover);
  color: var(--text-primary);
}
.board-action-btn.danger {
  color: var(--error);
}
.board-action-btn.danger:hover {
  background: rgba(228, 88, 88, 0.08);
  color: var(--error);
}

/* NSelect dropdown panel */
:global(.n-select-menu) {
  border-radius: var(--radius-sm, 8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
</style>
