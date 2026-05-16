import { startRun, streamRunEvents, resumeSession, type RunEvent } from '@/api/hermes/chat'
import { deleteSession as deleteSessionApi, fetchSession, fetchSessions, fetchSessionMessageCount, fetchSourceCounts, renameSession, type HermesMessage, type SessionSummary } from '@/api/hermes/sessions'
import { getApiKey } from '@/api/client'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAppStore } from './app'
import { useProfilesStore } from './profiles'
import { useSettingsStore } from './settings'
import { detectThinkingBoundary } from '@/utils/thinking-parser'

export interface Attachment {
  id: string
  name: string
  type: string
  size: number
  url: string
  file?: File
}

export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system' | 'tool'
  content: string
  timestamp: number
  sessionId?: string  // 实际存储该消息的 session（可能和 activeSessionId 不同，如 ancestor）
  toolName?: string
  toolPreview?: string
  toolArgs?: string
  toolResult?: string
  toolStatus?: 'running' | 'done' | 'error'
  toolDuration?: number  // 工具执行时长（秒）
  isStreaming?: boolean
  attachments?: Attachment[]
  // 思考/推理文本。两条来源：
  //   1) 历史消息：来自 HermesMessage.reasoning 字段
  //   2) 流式：由 reasoning.delta / thinking.delta / reasoning.available 事件累加
  // 不含 <think> 包裹标签；内容自身可以为多段纯文本。
  reasoning?: string
  model?: string  // 该消息使用的 LLM（前端在流式结束时写入）
  segment?: number  // parent session segment index (0 = closest parent, 1 = grandparent, ...)
}

export interface Session {
  id: string
  title: string
  source?: string
  messages: Message[]
  createdAt: number
  updatedAt: number
  model?: string
  provider?: string
  messageCount?: number
  inputTokens?: number
  outputTokens?: number
  contextLength?: number
  endedAt?: number | null
  lastActiveAt?: number
  workspace?: string | null
  pinned?: boolean
  parentSessionId?: string | null
  lineageCount?: number
  lineageMessageCount?: number
  children?: Array<{
    id: string
    title: string
    messageCount: number
    startedAt: number
    endedAt: number | null
    lastMessageTs: number | null
    source?: string
  }>
  loadedParentIds?: string[]
}

function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

async function uploadFiles(attachments: Attachment[]): Promise<{ name: string; path: string }[]> {
  if (attachments.length === 0) return []
  const formData = new FormData()
  for (const att of attachments) {
    if (att.file) formData.append('file', att.file, att.name)
  }
  const token = localStorage.getItem('hermes_api_key') || ''
  const res = await fetch('/upload', {
    method: 'POST',
    body: formData,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  })
  if (!res.ok) throw new Error(`Upload failed: ${res.status}`)
  const data = await res.json() as { files: { name: string; path: string }[] }
  return data.files
}

function mapHermesMessages(msgs: HermesMessage[]): Message[] {
  // Build lookups from assistant messages with tool_calls
  const toolNameMap = new Map<string, string>()
  const toolArgsMap = new Map<string, string>()
  for (const msg of msgs) {
    if (msg.role === 'assistant' && msg.tool_calls) {
      for (const tc of msg.tool_calls) {
        if (tc.id) {
          if (tc.function?.name) toolNameMap.set(tc.id, tc.function.name)
          if (tc.function?.arguments) toolArgsMap.set(tc.id, tc.function.arguments)
        }
      }
    }
  }

  const result: Message[] = []
  for (const msg of msgs) {
    // Skip assistant messages that only contain tool_calls (no meaningful content)
    if (msg.role === 'assistant' && msg.tool_calls?.length && !msg.content?.trim()) {
      // Emit a tool.started message for each tool call
      for (const tc of msg.tool_calls) {
        result.push({
          id: String(msg.id) + '_' + tc.id,
          role: 'tool',
          content: '',
          timestamp: Math.round(msg.timestamp * 1000),
          toolName: tc.function?.name || 'tool',
          toolArgs: tc.function?.arguments || undefined,
          toolStatus: 'done',
        })
      }
      continue
    }

    // Tool result messages
    if (msg.role === 'tool') {
      const tcId = msg.tool_call_id || ''
      const toolName = msg.tool_name || toolNameMap.get(tcId) || 'tool'
      const toolArgs = toolArgsMap.get(tcId) || undefined
      // Extract a short preview from the content
      let preview = ''
      if (msg.content) {
        try {
          const parsed = JSON.parse(msg.content)
          preview = parsed.url || parsed.title || parsed.preview || parsed.summary || ''
        } catch {
          preview = msg.content.slice(0, 80)
        }
      }
      // Find and remove the matching placeholder from tool_calls above
      const placeholderIdx = result.findIndex(
        m => m.role === 'tool' && m.toolName === toolName && !m.toolResult && m.id.includes('_' + tcId)
      )
      if (placeholderIdx !== -1) {
        result.splice(placeholderIdx, 1)
      }
      result.push({
        id: String(msg.id),
        role: 'tool',
        content: '',
        timestamp: Math.round(msg.timestamp * 1000),
        toolName,
        toolArgs,
        toolPreview: typeof preview === 'string' ? preview.slice(0, 100) || undefined : undefined,
        toolResult: msg.content || undefined,
        toolStatus: 'done',
      })
      continue
    }

    // Normal user/assistant messages
    let content = msg.content || ''
    let attachments: Attachment[] | undefined

    // Rebuild attachments from [File: name](url) markers in user messages
    if (msg.role === 'user') {
      const fileRegex = /\[File:\s*([^\]]+)\]\(([^)]+)\)/g
      let match: RegExpExecArray | null
      const fileRefs: Array<{ name: string; url: string }> = []
      while ((match = fileRegex.exec(content)) !== null) {
        fileRefs.push({ name: match[1].trim(), url: match[2] })
      }
      if (fileRefs.length > 0) {
        attachments = fileRefs.map(f => {
          const ext = f.name.includes('.') ? '.' + f.name.split('.').pop()!.toLowerCase() : ''
          const isImg = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp', '.ico'].includes(ext)
          return {
            id: uid(),
            name: f.name,
            type: isImg ? `image/${ext.slice(1)}` : 'application/octet-stream',
            size: 0,
            url: f.url,
          }
        })
        // Remove file markers from display content (trailing block with only File refs)
        content = content.replace(/\n*\[File:\s*[^\]]+\]\([^)]+\)/g, '').trimEnd()
      }
    }

    result.push({
      id: String(msg.id),
      role: msg.role,
      content,
      timestamp: Math.round(msg.timestamp * 1000),
      sessionId: msg.session_id || undefined,
      reasoning: msg.reasoning ? msg.reasoning : undefined,
      model: (msg as any).model || undefined,
      ...(attachments && attachments.length > 0 ? { attachments } : {}),
    })
  }
  return result
}

function mapHermesSession(s: SessionSummary): Session {
  return {
    id: s.id,
    title: s.title || s.preview || '',
    source: s.source || undefined,
    messages: [],
    createdAt: Math.round(s.started_at * 1000),
    updatedAt: Math.round(((s as any).last_message_ts || s.last_active || s.ended_at || s.started_at) * 1000),
    model: s.model,
    provider: (s as any).billing_provider || undefined,
    messageCount: s.message_count,
    inputTokens: (s as any).input_tokens || undefined,
    outputTokens: (s as any).output_tokens || undefined,
    endedAt: s.ended_at != null ? Math.round(s.ended_at * 1000) : null,
    lastActiveAt: s.last_active != null ? Math.round(s.last_active * 1000) : undefined,
    workspace: s.workspace || null,
    pinned: s.pinned || false,
    parentSessionId: s.parent_session_id || null,
    lineageCount: (s as any).lineage_count || 0,
    lineageMessageCount: (s as any).lineage_message_count ?? undefined,
    children: (s as any).children?.map((c: any) => ({
      id: c.id,
      title: c.title || '',
      messageCount: c.message_count || 0,
      startedAt: Math.round((c.started_at || 0) * 1000),
      endedAt: c.ended_at != null ? Math.round(c.ended_at * 1000) : null,
      lastMessageTs: c.last_message_ts != null ? Math.round(c.last_message_ts * 1000) : null,
      source: c.source || undefined,
    })) || [],
  }
}

const STORAGE_KEY_PREFIX = 'hermes_active_session_'
const LEGACY_STORAGE_KEY = 'hermes_active_session'
const IN_FLIGHT_TTL_MS = 15 * 60 * 1000 // Give up after 15 minutes

/** Merge DB-loaded messages with in-memory streaming messages.
 *  DB messages won't have the still-streaming assistant reply (only persisted on run.completed),
 *  so we append any streaming-only messages that aren't in the DB set. */
function mergeMessagesPreservingStreaming(
  dbMessages: Message[],
  existingMessages: Message[],
): Message[] {
  const hasStreaming = existingMessages.some(m => m.isStreaming)
  if (!hasStreaming) return dbMessages
  const dbIds = new Set(dbMessages.map(m => m.id))
  const streamingOnly = existingMessages.filter(m => m.isStreaming && !dbIds.has(m.id))
  return [...dbMessages, ...streamingOnly]
}

// 获取当前 profile 名称，用于隔离缓存。
// 从 profiles store 的 activeProfileName（同步 localStorage）读取，
// 避免异步加载导致 chat store 初始化时拿到 null。
function getProfileName(): string {
  try {
    return useProfilesStore().activeProfileName || 'default'
  } catch {
    return 'default'
  }
}

function storageKey(): string { return STORAGE_KEY_PREFIX + getProfileName() }
function legacyStorageKey(): string | null { return getProfileName() === 'default' ? LEGACY_STORAGE_KEY : null }
function inFlightKey(sid: string): string { return `hermes_in_flight_v1_${getProfileName()}_${sid}` }
function legacyInFlightKey(sid: string): string | null { return getProfileName() === 'default' ? `hermes_in_flight_v1_${sid}` : null }
function pendingMsgsKey(sid: string): string { return `hermes_pending_msgs_v1_${getProfileName()}_${sid}` }

interface InFlightRun {
  runId: string
  startedAt: number
}

function loadJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

function isQuotaExceededError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false
  const e = error as { name?: string, code?: number }
  return e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014
}

function recoverStorageQuota() {
  try {
    const prefixes = [
      `hermes_session_msgs_v1_${getProfileName()}_`,
      `hermes_in_flight_v1_${getProfileName()}_`,
      `hermes_pending_msgs_v1_${getProfileName()}_`,
    ]
    if (getProfileName() === 'default') {
      prefixes.push('hermes_session_msgs_v1_')
      prefixes.push('hermes_in_flight_v1_')
      prefixes.push('hermes_pending_msgs_v1_')
    }
    const keysToRemove: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key) continue
      if (key === storageKey() || key === LEGACY_STORAGE_KEY) continue
      if (prefixes.some(prefix => key.startsWith(prefix))) {
        keysToRemove.push(key)
      }
    }
    keysToRemove.forEach(key => removeItem(key))
  } catch {
    // ignore
  }
}

function setItemBestEffort(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
    return
  } catch (error) {
    if (!isQuotaExceededError(error)) return
  }

  recoverStorageQuota()

  try {
    localStorage.setItem(key, value)
  } catch {
    // quota exceeded or private mode — ignore, cache is best-effort
  }
}

function saveJson(key: string, value: unknown) {
  try {
    setItemBestEffort(key, JSON.stringify(value))
  } catch {
    // quota exceeded or private mode — ignore, cache is best-effort
  }
}

function removeItem(key: string) {
  try {
    localStorage.removeItem(key)
  } catch {
    // ignore
  }
}

function loadJsonWithFallback<T>(key: string, legacyKey?: string | null): T | null {
  const value = loadJson<T>(key)
  if (value != null) return value
  if (!legacyKey) return null
  return loadJson<T>(legacyKey)
}

function saveJsonWithLegacy(key: string, value: unknown, legacyKey?: string | null) {
  saveJson(key, value)
  if (legacyKey) removeItem(legacyKey)
}

function removeItemWithLegacy(key: string, legacyKey?: string | null) {
  removeItem(key)
  if (legacyKey) removeItem(legacyKey)
}

// Strip the circular `file: File` reference from attachments before caching —
// File objects don't serialize and we only need name/type/size/url for display.

export const useChatStore = defineStore('chat', () => {
  const sessions = ref<Session[]>([])
  // Restore from localStorage so a page refresh keeps the selected session
  const _restoredSessionId: string | null = (() => {
    try {
      return localStorage.getItem(storageKey()) || null
    } catch {
      return null
    }
  })()
  const activeSessionId = ref<string | null>(_restoredSessionId)
  const focusMessageId = ref<string | null>(null)
  function clearFocusMessage() { focusMessageId.value = null }
  /** If set, the SessionListItem owning this ID should expand its ancestor list */
  const expandAncestorsForId = ref<string | null>(null)
  const streamStates = ref<Map<string, { abort: () => void; disconnect: () => void }>>(new Map())
  /** sessionId → server-reported isWorking status */
  const serverWorking = ref<Set<string>>(new Set())
  const isStreaming = computed(() => {
    const sid = activeSessionId.value
    if (sid == null) return false
    return streamStates.value.has(sid) || serverWorking.value.has(sid)
  })
  const isLoadingSessions = ref(false)
  const sessionsLoaded = ref(false)
  const allSessionsLoaded = ref(false)
  const isLoadingMessages = ref(false)
  const sourceCounts = ref<Record<string, number>>({})
  const activeSourceFilter = ref<string | null>(null)
  const PAGE_SIZE = 50
  const isRunActive = computed(() => isStreaming.value)

  // Compression state
  const compressionState = ref<{
    compressing: boolean
    messageCount: number
    beforeTokens: number
    afterTokens: number
    compressed: boolean | null
    error?: string
  } | null>(null)

  function setCompressionState(state: typeof compressionState.value) {
    compressionState.value = state
  }

  const activeSession = ref<Session | null>(null)
  const messages = computed<Message[]>(() => activeSession.value?.messages || [])

  // Visible sessions: hide child sessions that are part of a lineage chain
  // (their messages are shown under the parent/root session)
  // Backend already returns tree-grouped entries (no parent/child overlap).
  // Expose directly without client-side filtering.
  const visibleSessions = computed<Session[]>(() => sessions.value)

  function isSessionLive(sessionId: string): boolean {
    return streamStates.value.has(sessionId) || serverWorking.value.has(sessionId)
  }

  function markInFlight(sid: string, runId: string) {
    saveJsonWithLegacy(inFlightKey(sid), { runId, startedAt: Date.now() } as InFlightRun, legacyInFlightKey(sid))
    // Snapshot current messages so a page refresh can recover them
    const s = sessions.value.find(s => s.id === sid)
    if (s && s.messages.length) {
      try { localStorage.setItem(pendingMsgsKey(sid), JSON.stringify(s.messages)) } catch {}
    }
  }

  function clearInFlight(sid: string) {
    removeItemWithLegacy(inFlightKey(sid), legacyInFlightKey(sid))
    // Messages are now persisted in DB — remove local cache
    try { localStorage.removeItem(pendingMsgsKey(sid)) } catch {}
  }

  function readPendingMsgs(sid: string): Message[] {
    try {
      const raw = localStorage.getItem(pendingMsgsKey(sid))
      return raw ? JSON.parse(raw) as Message[] : []
    } catch { return [] }
  }

  function readInFlight(sid: string): InFlightRun | null {
    const rec = loadJsonWithFallback<InFlightRun>(inFlightKey(sid), legacyInFlightKey(sid))
    if (!rec) return null
    if (Date.now() - rec.startedAt > IN_FLIGHT_TTL_MS) {
      removeItemWithLegacy(inFlightKey(sid), legacyInFlightKey(sid))
      return null
    }
    return rec
  }

  async function loadMessageCounts() {
    const ids = sessions.value.map(s => s.id)
    for (const id of ids) {
      try {
        const res = await fetchSessionMessageCount(id)
        const target = sessions.value.find(s => s.id === id)
        if (target) target.lineageMessageCount = res.message_count
      } catch {
        // Silently skip — session may have been deleted
      }
    }
  }

  async function _loadSessionPage(source: string | undefined, offset: number, preserveState: boolean) {
    const list = await fetchSessions(source, PAGE_SIZE, offset)
    const fresh = list.map(mapHermesSession)
    if (offset === 0) {
      // Fresh load — preserve messages and local-only sessions
      allSessionsLoaded.value = fresh.length < PAGE_SIZE
      const freshIds = new Set(fresh.map(s => s.id))
      const msgsByIdBefore = new Map(sessions.value.map(s => [s.id, s.messages]))
      for (const s of fresh) {
        const prev = msgsByIdBefore.get(s.id)
        if (prev && prev.length) s.messages = prev
      }
      const localOnly = sessions.value.filter(s => {
        if (freshIds.has(s.id)) return false
        if (readInFlight(s.id)) return true
        removeItemWithLegacy(inFlightKey(s.id), legacyInFlightKey(s.id))
        return false
      })
      // After page refresh, check if the restored activeSessionId has an
      // in-flight run that the backend hasn't picked up yet. If so, create
      // a stub so the session appears in the sidebar while the agent finishes.
      const restoredId = activeSessionId.value
      if (restoredId && !freshIds.has(restoredId) && !localOnly.some(s => s.id === restoredId)) {
        const inflight = readInFlight(restoredId)
        if (inflight) {
          localOnly.unshift({
            id: restoredId,
            title: '',
            source: '9898',
            messages: [],
            createdAt: inflight.startedAt,
            updatedAt: inflight.startedAt,
            messageCount: 0,
            lineageCount: 0,
            lineageMessageCount: 0,
            loadedParentIds: [],
            children: [],
          })
        }
      }
      sessions.value = [...localOnly, ...fresh]
    } else {
      // Append page
      if (fresh.length === 0) {
        allSessionsLoaded.value = true
        return
      }
      sessions.value.push(...fresh)
      if (fresh.length < PAGE_SIZE) allSessionsLoaded.value = true
    }
    // Load message counts for new sessions in background
    if (fresh.length > 0) {
      const newIds = new Set(fresh.map(s => s.id))
      for (const id of newIds) {
        fetchSessionMessageCount(id).then(res => {
          const target = sessions.value.find(s => s.id === id)
          if (target) target.lineageMessageCount = res.message_count
        }).catch(() => {})
      }
    }
    if (preserveState) {
      const savedId = activeSessionId.value
      let targetId: string | undefined
      if (savedId) {
        if (sessions.value.some(s => s.id === savedId)) {
          targetId = savedId
        } else if (sessions.value.some(s => s.children?.some(c => c.id === savedId))) {
          targetId = savedId
        }
      }
      if (!targetId) {
        targetId = sessions.value[0]?.id
      }
      if (targetId) {
        await switchSession(targetId)
      }
    }
  }

  async function loadSessions() {
    isLoadingSessions.value = true
    allSessionsLoaded.value = false
    try {
      const [_, counts] = await Promise.all([
        _loadSessionPage(undefined, 0, true),
        fetchSourceCounts().catch(() => ({})).then(c => { sourceCounts.value = c }),
      ])
    } catch (err) {
      console.error('Failed to load sessions:', err)
    } finally {
      isLoadingSessions.value = false
      sessionsLoaded.value = true
    }
  }

  async function loadSessionsBySource(source: string | null) {
    activeSourceFilter.value = source
    isLoadingSessions.value = true
    allSessionsLoaded.value = false
    try {
      await _loadSessionPage(source ?? undefined, 0, false)
    } catch (err) {
      console.error('Failed to load sessions by source:', err)
    } finally {
      isLoadingSessions.value = false
    }
  }

  async function loadMoreSessions() {
    if (allSessionsLoaded.value || isLoadingSessions.value) return
    isLoadingSessions.value = true
    try {
      await _loadSessionPage(activeSourceFilter.value ?? undefined, sessions.value.length, false)
    } catch (err) {
      console.error('Failed to load more sessions:', err)
    } finally {
      isLoadingSessions.value = false
    }
  }

  // Re-pull active session from server. Used on tab-visible events.
  async function refreshActiveSession(): Promise<boolean> {
    const sid = activeSessionId.value
    if (!sid) return false
    try {
      const detail = await fetchSession(sid)
      if (!detail) return false
      const target = sessions.value.find(s => s.id === sid)
      if (!target) return false
      const mapped = mapHermesMessages(detail.messages || [])
      target.messages = mapped
      if (detail.title) target.title = detail.title
      return true
    } catch (err) {
      console.error('Failed to refresh active session:', err)
      return false
    }
  }


  function createSession(): Session {
    const session: Session = {
      id: uid(),
      title: '',
      source: '9898',
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    sessions.value.unshift(session)
    return session
  }

  async function switchSession(sessionId: string, focusId?: string | null) {
    clearThinkingObservationFor(sessionId)
    activeSessionId.value = sessionId
    focusMessageId.value = focusId ?? null
    setItemBestEffort(storageKey(), sessionId)
    const legacyActiveKey = legacyStorageKey()
    if (legacyActiveKey) removeItem(legacyActiveKey)
    activeSession.value = sessions.value.find(s => s.id === sessionId) || null

    // If target is an ancestor (not a top-level session), find its leaf parent
    // so the sidebar can expand the ancestor list and highlight it
    if (!activeSession.value) {
      const ownerSession = sessions.value.find(
        s => s.children?.some(c => c.id === sessionId)
      )
      expandAncestorsForId.value = ownerSession?.id || null
    } else {
      expandAncestorsForId.value = null
    }

    isLoadingMessages.value = true

    try {
      // Load messages via HTTP resume (server loads from DB if not in memory)
      const data = await resumeSession(sessionId)

      // If session wasn't in local list (e.g. ancestor click),
      // create a stub from resume data so the UI can render it.
      // Inherit source from the session that owns this ancestor so it
      // stays in the same group.
      if (!activeSession.value) {
        // Find the child session that references this ancestor
        const parentChild = sessions.value.find(
          s => s.children?.some(c => c.id === sessionId)
        ) || sessions.value.find(
          s => s.id === data.parentSessionId
        )
        const ancestorMeta = parentChild?.children?.find(c => c.id === sessionId)
        const stub: Session = {
          id: sessionId,
          title: ancestorMeta?.title || '',
          messages: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
          model: undefined,
          provider: undefined,
          messageCount: data.messages?.length || 0,
          inputTokens: data.inputTokens || undefined,
          outputTokens: data.outputTokens || undefined,
          endedAt: null,
          lastActiveAt: undefined,
          workspace: null,
          parentSessionId: data.parentSessionId || null,
          lineageCount: 0,
          lineageMessageCount: 0,
          loadedParentIds: [],
          source: parentChild?.source || '',
        }
        // Don't insert ancestor stubs into the session list — they should
        // stay nested under their parent session, not appear as top-level items.
        activeSession.value = stub
      }

      if (data.isWorking) {
        serverWorking.value.add(sessionId)
      } else {
        serverWorking.value.delete(sessionId)
      }
      if (data.inputTokens != null) activeSession.value!.inputTokens = data.inputTokens
      if (data.outputTokens != null) activeSession.value!.outputTokens = data.outputTokens
      if (data.messages?.length) {
        const dbMsgs = mapHermesMessages(data.messages as any[])
        activeSession.value!.messages = mergeMessagesPreservingStreaming(dbMsgs, activeSession.value!.messages)
      }
      // If an in-flight run is active, the localStorage snapshot (saved by
      // markInFlight at send time) may contain messages that haven't been
      // persisted to DB yet (e.g. the user's latest message, partial assistant
      // reply). Append any messages from the snapshot that DB doesn't have.
      if (readInFlight(sessionId)) {
        const cached = readPendingMsgs(sessionId)
        if (cached.length) {
          const dbMsgIds = new Set((data.messages || []).map((m: any) => m.id))
          const extra = cached.filter(m => !dbMsgIds.has(m.id))
          if (extra.length) {
            activeSession.value!.messages = [...activeSession.value!.messages, ...extra]
          }
        }
      }
      if (!activeSession.value!.title) {
        const firstUser = activeSession.value!.messages.find(m => m.role === 'user')
        if (firstUser) {
          const t = firstUser.content.slice(0, 40)
          activeSession.value!.title = t + (firstUser.content.length > 40 ? '...' : '')
        }
      }
      // Process replayed events (compression state etc.)
      if (data.events?.length) {
        for (const evt of data.events) {
          const e = evt.data as any
          if (e.event === 'compression.started') {
            setCompressionState({
              compressing: true,
              messageCount: e.message_count || 0,
              beforeTokens: e.token_count || 0,
              afterTokens: 0,
              compressed: null,
            })
          } else if (e.event === 'compression.completed') {
            setCompressionState({
              compressing: false,
              messageCount: e.totalMessages || 0,
              beforeTokens: e.beforeTokens || 0,
              afterTokens: e.afterTokens || 0,
              compressed: e.compressed ?? false,
              error: e.error,
            })
          }
        }
      }
    } catch (err) {
      console.error('Failed to load session messages via resume:', err)
      // resumeSession failed (e.g. 404 — session not yet persisted by the
      // agent thread). Fall back to the localStorage snapshot saved by
      // markInFlight() so we don't lose messages on page refresh.
      if (readInFlight(sessionId)) {
        const cached = readPendingMsgs(sessionId)
        if (cached.length) {
          activeSession.value!.messages = cached
        }
      }
    } finally {
      isLoadingMessages.value = false
    }

    // Resume in-flight run event listeners if needed
    resumeInFlightRun(sessionId)
  }

  function newChat() {
    const session = createSession()
    // Inherit current global model
    const appStore = useAppStore()
    session.model = appStore.selectedModel || undefined
    // Default workspace: home (~ will be expanded on server)
    session.workspace = '~'
    switchSession(session.id)
  }

  function switchSessionModel(modelId: string, provider?: string) {
    if (!activeSession.value) return
    activeSession.value.model = modelId
    activeSession.value.provider = provider || ''
  }

  /** Gracefully disconnect an active stream for a session without cancelling the AI run.
   *  Used when navigating away — the backend event queue stays alive for reconnect. */
  function disconnectStream(sid: string) {
    const state = streamStates.value.get(sid)
    if (state) {
      state.disconnect()
    }
  }

  async function loadParentSession(sessionId?: string) {
    const sid = sessionId || activeSessionId.value
    if (!sid) return
    const session = sessions.value.find(s => s.id === sid)
    if (!session || !session.parentSessionId) return

    const parentId = session.parentSessionId
    if (session.loadedParentIds?.includes(parentId)) return

    isLoadingMessages.value = true
    try {
      const data = await resumeSession(parentId)
      if (data.messages?.length) {
        const segmentIdx = session.loadedParentIds?.length || 0
        const parentMsgs = mapHermesMessages(data.messages as any[])

        let uniqueParentMsgs = parentMsgs

        // Content-based dedup: Hermes compaction copies post-compaction messages
        // into the child session with new IDs, so ID-based dedup fails.
        // Compare parent tail with child head by (role, content[:80]) to find
        // the overlap boundary and trim it from the parent.
        // Skip for root segment (no grandparent) — its head is the true start.
        if (data.parentSessionId && session.messages.length > 0) {
          const MAX_CHECK = 20
          const childHead = session.messages.slice(0, MAX_CHECK)
          let overlapCount = 0
          for (let i = parentMsgs.length - 1; i >= 0 && overlapCount < MAX_CHECK; i--) {
            const p = parentMsgs[i]
            const c = childHead[overlapCount]
            if (c && p.role === c.role && (p.content || '').slice(0, 80) === (c.content || '').slice(0, 80)) {
              overlapCount++
            } else {
              break
            }
          }
          if (overlapCount > 0) {
            uniqueParentMsgs = parentMsgs.slice(0, -overlapCount)
          }
        }

        uniqueParentMsgs.forEach(m => { m.segment = segmentIdx })
        session.messages = [...uniqueParentMsgs, ...session.messages]
      }
      if (!session.loadedParentIds) session.loadedParentIds = []
      session.loadedParentIds.push(parentId)
      session.parentSessionId = data.parentSessionId || null
    } finally {
      isLoadingMessages.value = false
    }
  }

  async function deleteSession(sessionId: string) {
    await deleteSessionApi(sessionId)
    sessions.value = sessions.value.filter(s => s.id !== sessionId)
    if (activeSessionId.value === sessionId) {
      if (sessions.value.length > 0) {
        await switchSession(sessions.value[0].id)
      } else {
        const session = createSession()
        switchSession(session.id)
      }
    }
  }

  function getSessionMsgs(sessionId: string): Message[] {
    const s = sessions.value.find(s => s.id === sessionId)
    return s?.messages || []
  }

  /**
   * Export a session's user & assistant messages as an xlsx file.
   * If messages aren't loaded locally, fetches from API first.
   * Only includes role=user and role=assistant, sorted by timestamp asc.
   */
  async function exportSessionMessages(sessionId: string) {
    let msgs = getSessionMsgs(sessionId)

    // If session hasn't been loaded, fetch messages from API
    if (msgs.length === 0) {
      try {
        const data = await resumeSession(sessionId)
        if (data.messages?.length) {
          msgs = mapHermesMessages(data.messages as any[])
        }
      } catch (e) {
        console.warn('[exportSessionMessages] failed to fetch:', e)
        return
      }
    }

    const filtered = msgs
      .filter(m => m.role === 'user' || m.role === 'assistant')
      .sort((a, b) => a.timestamp - b.timestamp)

    if (filtered.length === 0) return

    const session = sessions.value.find(s => s.id === sessionId)
    const title = (session?.title || 'session').replace(/[\\/:*?"<>|]/g, '_')

    const XLSX = await import('xlsx')
    const rows = filtered.map(m => ({
      '时间': new Date(m.timestamp).toLocaleString('zh-CN', { hour12: false }),
      '发送方': m.role === 'user' ? '用户' : 'AI',
      '内容': m.content,
    }))

    const ws = XLSX.utils.json_to_sheet(rows)
    ws['!cols'] = [
      { wch: 22 },
      { wch: 8 },
      { wch: 80 },
    ]
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, title.slice(0, 31))
    XLSX.writeFile(wb, `${title}.xlsx`)
  }

  function addMessage(sessionId: string, msg: Message) {
    const s = sessions.value.find(s => s.id === sessionId)
    if (s) s.messages.push(msg)
  }

  function removeMessage(messageId: string) {
    for (const s of sessions.value) {
      const idx = s.messages.findIndex(m => m.id === messageId)
      if (idx !== -1) {
        s.messages.splice(idx, 1)
        return
      }
    }
  }

  function updateMessage(sessionId: string, id: string, update: Partial<Message>) {
    const s = sessions.value.find(s => s.id === sessionId)
    if (!s) return
    const idx = s.messages.findIndex(m => m.id === id)
    if (idx !== -1) {
      s.messages[idx] = { ...s.messages[idx], ...update }
    }
  }

  function updateSessionTitle(sessionId: string) {
    const target = sessions.value.find(s => s.id === sessionId)
    if (!target) return
    if (!target.title) {
      const firstUser = target.messages.find(m => m.role === 'user')
      if (firstUser) {
        const title = firstUser.attachments?.length
          ? firstUser.attachments.map(a => a.name).join(', ')
          : firstUser.content
        target.title = title.slice(0, 40) + (title.length > 40 ? '...' : '')
      }
    }
    target.updatedAt = Date.now()
  }

  /** Persist locally-set title to backend (state.db) after agent run completes. */
  function persistSessionTitle(sessionId: string) {
    const target = sessions.value.find(s => s.id === sessionId)
    if (!target?.title) return
    renameSession(sessionId, target.title).catch(() => { /* session may not exist yet */ })
  }

  async function sendMessage(content: string, attachments?: Attachment[]) {
    if ((!content.trim() && !(attachments && attachments.length > 0)) || isStreaming.value) return

    if (!activeSession.value) {
      const session = createSession()
      switchSession(session.id)
    }

    // Capture session ID at send time — all callbacks use this, not activeSessionId
    const sid = activeSessionId.value!

    const userMsg: Message = {
      id: uid(),
      role: 'user',
      content: content.trim(),
      timestamp: Date.now(),
      attachments: attachments && attachments.length > 0 ? attachments : undefined,
    }

    addMessage(sid, userMsg)
    updateSessionTitle(sid)

    try {

      // Upload attachments and build input with file paths
      let inputText = content.trim()
      if (attachments && attachments.length > 0) {
        const uploaded = await uploadFiles(attachments)
        // Replace blob URLs with persistent download URLs on the user message
        const token = getApiKey()
        const urlMap = new Map(uploaded.map(f => {
          const base = `/api/hermes/download?path=${encodeURIComponent(f.path)}&name=${encodeURIComponent(f.name)}`
          return [f.name, token ? `${base}&token=${encodeURIComponent(token)}` : base]
        }))
        const msgs = getSessionMsgs(sid)
        const lastUser = msgs.findLast(m => m.id === userMsg.id)
        if (lastUser?.attachments) {
          lastUser.attachments = lastUser.attachments.map(a => {
            const dl = urlMap.get(a.name)
            return dl ? { ...a, url: dl } : a
          })
        }
        const pathParts = uploaded.map(f => `[File: ${f.name}](${urlMap.get(f.name)})`)
        inputText = inputText ? inputText + '\n\n' + pathParts.join('\n') : pathParts.join('\n')
      }

      const appStore = useAppStore()
      const sessionModel = activeSession.value?.model || appStore.selectedModel
      // Resolve provider: prefer session's saved value, but if it's stale
      // (e.g. "custom" from billing_provider instead of "custom:minimax"),
      // fall back to reverse-lookup from the model name in credential pool.
      const sessionProvider = activeSession.value?.provider
      let resolvedProvider = sessionProvider && appStore.modelGroups.some(g => g.provider === sessionProvider)
        ? sessionProvider
        : undefined
      if (!resolvedProvider && sessionModel) {
        const group = appStore.modelGroups.find(g => g.models.includes(sessionModel))
        resolvedProvider = group?.provider || undefined
      }
      const runPayload = {
        input: inputText,
        session_id: sid,
        model: sessionModel || undefined,
        provider: resolvedProvider,
        workspace: activeSession.value?.workspace || null,
      }

      // Helper to clean up this session's stream state
      const cleanup = () => {
        console.log('[sendMessage] cleanup called, deleting stream state for sid:', sid)
        streamStates.value.delete(sid)
        serverWorking.value.delete(sid)
        console.log('[sendMessage] cleanup done, isStreaming now:', isStreaming.value)
      }

      // Per-run flags used to detect silently-swallowed errors at run.completed.
      // hermes-agent occasionally emits run.completed with empty output and no
      // usage when the agent layer caught an upstream error (e.g. invalid API
      // key). We need to distinguish: (a) run with assistant text produced,
      // (b) run with only tool activity, (c) run with truly nothing visible.
      // Reset per send() call — closures captured by Socket.IO callbacks are scoped
      // to this run, so there is no cross-run contamination.
      let runProducedAssistantText = false
      let runHadToolActivity = false

      // Send run via HTTP + stream events via SSE
      let ctrl: { abort: () => void; disconnect: () => void } | null = null
      const { run_id } = await startRun(runPayload)
      markInFlight(sid, run_id)

      ctrl = streamRunEvents(
          run_id,
          // onEvent
          (evt: RunEvent) => {
          switch (evt.event) {
            case 'run.started':
              break

            case 'compression.started': {
              setCompressionState({
                compressing: true,
                messageCount: (evt as any).message_count || 0,
                beforeTokens: (evt as any).token_count || 0,
                afterTokens: 0,
                compressed: null,
              })
              break
            }

            case 'compression.completed': {
              setCompressionState({
                compressing: false,
                messageCount: (evt as any).totalMessages || 0,
                beforeTokens: (evt as any).beforeTokens || 0,
                afterTokens: (evt as any).afterTokens || 0,
                compressed: (evt as any).compressed ?? false,
                error: (evt as any).error,
              })
              // If compression created a new session, refresh the session list
              // in the background so the lineage mapping gets updated.
              // Use setTimeout to avoid interrupting the current stream.
              const newSid = (evt as any).new_session_id
              if (newSid) {
                setTimeout(() => loadSessions(), 1000)
              }
              // Auto-clear after 5s
              setTimeout(() => {
                if (compressionState.value && !compressionState.value.compressing) {
                  setCompressionState(null)
                }
              }, 5000)
              break
            }

            case 'reasoning.delta':
            case 'thinking.delta': {
              const text = evt.text || evt.delta || ''
              if (!text) break
              runProducedAssistantText = true
              const msgs = getSessionMsgs(sid)
              const last = msgs[msgs.length - 1]
              if (last?.role === 'assistant' && last.isStreaming) {
                last.reasoning = (last.reasoning || '') + text
                noteReasoningStart(last.id)
              } else {
                const newId = uid()
                addMessage(sid, {
                  id: newId,
                  role: 'assistant',
                  content: '',
                  timestamp: Date.now(),
                  isStreaming: true,
                  reasoning: text,
                })
                noteReasoningStart(newId)
              }

              break
            }

            case 'reasoning.available': {
              // Upstream run_agent.py fires reasoning.available with
              // `assistant_message.content[:500]` as the preview — i.e.,
              // the main answer, not real reasoning. Ignore the payload
              // and only use this event as a "thinking ended" signal so
              // the duration counter stops.
              const msgs = getSessionMsgs(sid)
              const last = msgs[msgs.length - 1]
              if (last?.role === 'assistant' && last.isStreaming) {
                // 只有当 reasoning.delta 事件曾经启动过计时，才标记结束；
                // 否则（上游未转发 delta，只发这一次 available）不显示时长。
                noteReasoningEnd(last.id)
              }

              break
            }

            case 'message.delta': {
              if (evt.delta) runProducedAssistantText = true
              const msgs = getSessionMsgs(sid)
              const last = msgs[msgs.length - 1]
              if (last?.role === 'assistant' && last.isStreaming) {
                const prev = last.content
                const next = prev + (evt.delta || '')
                noteThinkingDelta(last.id, prev, next)
                if (last.reasoning) noteReasoningEnd(last.id)
                last.content = next
              } else {
                const newId = uid()
                const nextContent = evt.delta || ''
                noteThinkingDelta(newId, '', nextContent)
                addMessage(sid, {
                  id: newId,
                  role: 'assistant',
                  content: nextContent,
                  timestamp: Date.now(),
                  isStreaming: true,
                })
              }

              break
            }

            case 'tool.started': {
              runHadToolActivity = true
              const msgs = getSessionMsgs(sid)
              const last = msgs[msgs.length - 1]
              if (last?.isStreaming) {
                updateMessage(sid, last.id, { isStreaming: false })
              }
              addMessage(sid, {
                id: uid(),
                role: 'tool',
                content: '',
                timestamp: Date.now(),
                toolName: evt.tool || evt.name,
                toolPreview: evt.preview,
                toolStatus: 'running',
              })

              break
            }

            case 'tool.completed': {
              runHadToolActivity = true
              const msgs = getSessionMsgs(sid)
              const toolMsgs = msgs.filter(
                m => m.role === 'tool' && m.toolStatus === 'running',
              )
              if (toolMsgs.length > 0) {
                const last = toolMsgs[toolMsgs.length - 1]
                // Check if tool errored
                const hasError = (evt as any).error === true
                const duration = (evt as any).duration
                updateMessage(sid, last.id, {
                  toolStatus: hasError ? 'error' : 'done',
                  toolDuration: duration,
                })
              }

              break
            }

            case 'run.completed': {
              try {
              const msgs = getSessionMsgs(sid)
              const lastMsg = msgs[msgs.length - 1]
              if (lastMsg?.isStreaming) {
                updateMessage(sid, lastMsg.id, { isStreaming: false })
              }
              // Server-computed usage (from run.completed event)
              const usage = (evt as any).usage
              if (usage) {
                const target = sessions.value.find(s => s.id === sid)
                if (target) {
                  target.inputTokens = usage.input_tokens ?? target.inputTokens
                  target.outputTokens = usage.output_tokens ?? target.outputTokens
                  // Use agent-reported context_length (from compressor) if available
                  const srvCtx = usage.context_length
                  if (srvCtx && srvCtx > 0) target.contextLength = srvCtx
                }
              }
              // Write model into last assistant message
              if (sessionModel) {
                const allMsgs = getSessionMsgs(sid)
                const lastAsst = [...allMsgs].reverse().find(m => m.role === 'assistant')
                if (lastAsst) {
                  updateMessage(sid, lastAsst.id, { model: sessionModel })
                }
              }

              // Belt-and-suspenders: some providers may deliver the final
              // assistant text only via run.completed.output (no message.delta
              // stream). If we never produced assistant text but the gateway
              // reports a non-empty output, fall back to rendering it as a
              // single assistant message so the user actually sees the reply.

              // Check if backend provided parsed content (from stringified array format)
              let finalOutputTrimmed = ''
              if ((evt as any).parsed_content !== undefined) {
                // Backend has parsed stringified array format, update last assistant message
                const msgs = getSessionMsgs(sid)
                const lastAssistant = [...msgs].reverse().find(m => m.role === 'assistant')
                if (lastAssistant) {
                  updateMessage(sid, lastAssistant.id, {
                    content: (evt as any).parsed_content || '',
                  })
                  if ((evt as any).parsed_reasoning) {
                    updateMessage(sid, lastAssistant.id, {
                      reasoning: (evt as any).parsed_reasoning,
                    })
                  }
                  finalOutputTrimmed = ((evt as any).parsed_content || '').trim()
                }
              } else {
                // Fallback to output field (legacy behavior)
                const finalOutput =
                  typeof evt.output === 'string' ? evt.output : ''
                finalOutputTrimmed = finalOutput.trim()
                if (!runProducedAssistantText && finalOutputTrimmed !== '') {
                  addMessage(sid, {
                    id: uid(),
                    role: 'assistant',
                    content: finalOutput,
                    timestamp: Date.now(),
                  })
                  runProducedAssistantText = true
                }
              }
              // Workaround for upstream hermes-agent bug: when the agent
              // layer silently swallows an error (e.g. invalid API key,
              // unsupported model), the gateway still emits run.completed
              // with an empty output. Without surfacing it here the chat UI
              // looks frozen / "succeeded with no reply". Detect by the
              // combination of: no assistant text AND no tool activity AND
              // empty final output. Usage being zero is a *supporting*
              // signal but not required, since some providers/local models
              // legitimately omit usage.
              const swallowedError =
                !runProducedAssistantText &&
                !runHadToolActivity &&
                finalOutputTrimmed === ''
              if (swallowedError) {
                addMessage(sid, {
                  id: uid(),
                  role: 'system',
                  content: 'Error: Agent returned no output. The model call may have failed (e.g. invalid API key, model not supported by provider, or context exceeded). Check the hermes-agent logs for details.',
                  timestamp: Date.now(),
                })
              }
              updateSessionTitle(sid)
              persistSessionTitle(sid)
              // Completion sound
              try {
                const st = useSettingsStore()
                if (st.display.bell_on_complete) {
                  const audio = new Audio('/notification.wav')
                  audio.volume = 0.4
                  audio.play().catch(() => {})
                }
              } catch {}
              } finally {
              cleanup()
              // the in-flight marker. If the browser is reloading right now
              // and kills us between the two localStorage writes, we want
              // the next page load to still see in-flight === true (so
              // polling kicks in and recovers) rather than the other way
              // around (cleared in-flight + stale streaming cache = UI stuck).

              clearInFlight(sid)
              }
              break
            }

            case 'run.failed': {
              try {
              const msgs = getSessionMsgs(sid)
              const lastErr = msgs[msgs.length - 1]
              if (lastErr?.isStreaming) {
                updateMessage(sid, lastErr.id, {
                  isStreaming: false,
                  content: evt.error ? `Error: ${evt.error}` : 'Run failed',
                  role: 'system',
                })
              } else {
                addMessage(sid, {
                  id: uid(),
                  role: 'system',
                  content: evt.error ? `Error: ${evt.error}` : 'Run failed',
                  timestamp: Date.now(),
                })
              }
              msgs.forEach((m, i) => {
                if (m.role === 'tool' && m.toolStatus === 'running') {
                  msgs[i] = { ...m, toolStatus: 'error' }
                }
              })
              } finally {
              cleanup()
              clearInFlight(sid)
              }
              break
            }

            case 'usage.updated': {
              const u = (evt as any).usage || evt
              const target = sessions.value.find(s => s.id === sid)
              if (target) {
                target.inputTokens = u.input_tokens ?? u.inputTokens ?? target.inputTokens
                target.outputTokens = u.output_tokens ?? u.outputTokens ?? target.outputTokens
              }
              break
            }
          }
        },
        // onDone
        () => {
          console.log('[sendMessage] onDone callback called, cleaning up stream state')
          const msgs = getSessionMsgs(sid)
          const last = msgs[msgs.length - 1]
          if (last?.isStreaming) {
            updateMessage(sid, last.id, { isStreaming: false })
          }
          cleanup()
          updateSessionTitle(sid)
          persistSessionTitle(sid)
        },
        // onError
        (err) => {
          console.warn('Socket.IO run stream error:', err.message)
          const msgs = getSessionMsgs(sid)
          const last = msgs[msgs.length - 1]
          if (last?.isStreaming) {
            updateMessage(sid, last.id, { isStreaming: false })
          }
          msgs.forEach((m, i) => {
            if (m.role === 'tool' && m.toolStatus === 'running') {
              msgs[i] = { ...m, toolStatus: 'done' }
            }
          })
          cleanup()
          if (sid === activeSessionId.value) {
            void refreshActiveSession()
          }
        },
      )

      streamStates.value.set(sid, ctrl)
    } catch (err: any) {
      addMessage(sid, {
        id: uid(),
        role: 'system',
        content: `Error: ${err.message}`,
        timestamp: Date.now(),
      })
    }
  }

  /**
   * Resume an in-flight run after page refresh.
   * Tries to reconnect to the backend's SSE stream to receive remaining events.
   * Falls back to polling resumeSession if reconnect fails.
   */
  // Track which sessions already have a reconnect in progress to prevent
  // duplicate consumers (e.g. switchSession called multiple times).
  const _reconnectingSids = new Set<string>()

  function resumeInFlightRun(sid: string) {
    if (_reconnectingSids.has(sid)) return
    const rec = readInFlight(sid)
    if (!rec) return

    _reconnectingSids.add(sid)

    const runId = rec.runId
    const profile = localStorage.getItem('hermes_active_profile_name') || 'default'
    const token = getApiKey()

    // Try reconnect to the backend's SSE stream
    const controller = new AbortController()
    let closed = false

    async function tryReconnect() {
      try {
        const res = await fetch(`/api/chat/reconnect/${runId}`, {
          headers: {
            'Authorization': token ? `Bearer ${token}` : '',
            'X-Hermes-Profile': profile !== 'default' ? profile : '',
            'Accept': 'text/event-stream',
          },
          signal: controller.signal,
        })

        if (res.status === 410) {
          // Stream expired — just resume from DB
          console.log('[resumeInFlightRun] stream expired, resuming from DB')
          void refreshActiveSession()
          clearInFlight(sid)
          return
        }

        if (!res.ok) {
          console.warn('[resumeInFlightRun] reconnect failed:', res.status)
          void refreshActiveSession()
          return
        }

        streamStates.value.set(sid, { abort: () => { controller.abort(); closed = true }, disconnect: () => { controller.abort(); closed = true } })
        serverWorking.value.add(sid)

        // Mark the last assistant message as streaming so that resumed
        // deltas (reasoning / content) append to it instead of creating
        // a brand-new message. Without this, _flushPendingDeltas sees
        // isStreaming=false on the DB-loaded message and creates a
        // duplicate assistant bubble.
        const msgs = getSessionMsgs(sid)
        const lastAsst = [...msgs].reverse().find(m => m.role === 'assistant')
        if (lastAsst && !lastAsst.isStreaming) {
          updateMessage(sid, lastAsst.id, { isStreaming: true })
        }

        const reader = res.body!.getReader()
        const decoder = new TextDecoder()
        let buffer = ''
        let runProducedAssistantText = false
        let runHadToolActivity = false
        let pendingDelta = ''
        let pendingReasoning = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          let currentEvent = ''
          let currentData = ''

          for (const line of lines) {
            const trimmed = line.trim()
            if (trimmed.startsWith('event:')) {
              currentEvent = trimmed.slice(6).trim()
            } else if (trimmed.startsWith('data:')) {
              currentData = trimmed.slice(5).trimStart()
            } else if (trimmed === '' && currentEvent && currentData) {
              try {
                const data = JSON.parse(currentData)
                // Delegate to a minimal event handler (flushes deltas on
                // non-delta events, handles tool/run lifecycle).
                handleResumedEvent(sid, currentEvent, data, {
                  get runProducedAssistantText() { return runProducedAssistantText },
                  set runProducedAssistantText(v: boolean) { runProducedAssistantText = v },
                  get runHadToolActivity() { return runHadToolActivity },
                  set runHadToolActivity(v: boolean) { runHadToolActivity = v },
                  get pendingDelta() { return pendingDelta },
                  set pendingDelta(v: string) { pendingDelta = v },
                  get pendingReasoning() { return pendingReasoning },
                  set pendingReasoning(v: string) { pendingReasoning = v },
                })

                if (currentEvent === 'run.completed' || currentEvent === 'run.failed') {
                  // Flush any remaining accumulated deltas before terminal event
                  const flushFlags = {
                    get runProducedAssistantText() { return runProducedAssistantText },
                    set runProducedAssistantText(v: boolean) { runProducedAssistantText = v },
                    get runHadToolActivity() { return runHadToolActivity },
                    set runHadToolActivity(v: boolean) { runHadToolActivity = v },
                    get pendingDelta() { return pendingDelta },
                    set pendingDelta(v: string) { pendingDelta = v },
                    get pendingReasoning() { return pendingReasoning },
                    set pendingReasoning(v: string) { pendingReasoning = v },
                  }
                  _flushPendingDeltas(sid, flushFlags)
                  pendingDelta = flushFlags.pendingDelta
                  pendingReasoning = flushFlags.pendingReasoning

                  closed = true
                  clearInFlight(sid)
                  void refreshActiveSession()
                  return
                }
              } catch (e) {
                console.warn('[resumeInFlightRun] parse error:', e)
              }
              currentEvent = ''
              currentData = ''
            }
          }
        }

        // Stream ended without terminal event — flush remaining deltas
        if (!closed) {
          if (pendingDelta || pendingReasoning) {
            _flushPendingDeltas(sid, {
              runProducedAssistantText,
              runHadToolActivity,
              pendingDelta,
              pendingReasoning,
            })
          }
          clearInFlight(sid)
          void refreshActiveSession()
        }
      } catch (err: any) {
        if (err.name === 'AbortError') return
        console.warn('[resumeInFlightRun] error:', err.message)
        void refreshActiveSession()
      } finally {
        streamStates.value.delete(sid)
        serverWorking.value.delete(sid)
        _reconnectingSids.delete(sid)
      }
    }

    tryReconnect()
  }

  /** Flush accumulated delta text into the message list as a single update.
   *  This avoids hundreds of reactive mutations when replaying buffered events. */
  function _flushPendingDeltas(
    sid: string,
    flags: { runProducedAssistantText: boolean; runHadToolActivity: boolean; pendingDelta: string; pendingReasoning: string },
  ) {
    const delta = flags.pendingDelta
    const reasoning = flags.pendingReasoning
    if (!delta && !reasoning) return

    const msgs = getSessionMsgs(sid)
    const last = msgs[msgs.length - 1]

    if (reasoning) {
      // Reasoning goes to the last assistant message (or creates one)
      if (last?.role === 'assistant' && last.isStreaming) {
        last.reasoning = (last.reasoning || '') + reasoning
      } else {
        addMessage(sid, {
          id: uid(),
          role: 'assistant',
          content: delta || '',
          timestamp: Date.now(),
          isStreaming: true,
          reasoning,
        })
      }
      flags.pendingReasoning = ''
    }

    if (delta) {
      // If we just created a message for reasoning, append to it
      const updatedMsgs = getSessionMsgs(sid)
      const updatedLast = updatedMsgs[updatedMsgs.length - 1]
      if (updatedLast?.role === 'assistant' && updatedLast.isStreaming) {
        updatedLast.content = updatedLast.content + delta
      } else {
        addMessage(sid, {
          id: uid(),
          role: 'assistant',
          content: delta,
          timestamp: Date.now(),
          isStreaming: true,
        })
      }
      flags.pendingDelta = ''
    }
  }

  /** Minimal event handler for reconnected streams — mirrors sendMessage's switch/case.
   *  Accumulates consecutive delta events and flushes once on non-delta, so a burst
   *  of buffered events doesn't trigger hundreds of reactive updates. */
  function handleResumedEvent(
    sid: string,
    event: string,
    evt: any,
    flags: { runProducedAssistantText: boolean; runHadToolActivity: boolean; pendingDelta: string; pendingReasoning: string },
  ) {
    // Accumulate deltas — flush on any non-delta event or when we leave the function
    if (event === 'message.delta') {
      if (evt.delta) {
        flags.pendingDelta += evt.delta
        flags.runProducedAssistantText = true
      }
      return
    }
    if (event === 'reasoning.delta' || event === 'thinking.delta') {
      const text = evt.text || evt.delta || ''
      if (text) flags.pendingReasoning += text
      return
    }

    // Non-delta event: flush accumulated deltas first
    _flushPendingDeltas(sid, flags)

    switch (event) {
      case 'tool.started': {
        flags.runHadToolActivity = true
        const msgs = getSessionMsgs(sid)
        const last = msgs[msgs.length - 1]
        if (last?.isStreaming) {
          updateMessage(sid, last.id, { isStreaming: false })
        }
        addMessage(sid, {
          id: uid(),
          role: 'tool',
          content: '',
          timestamp: Date.now(),
          toolName: evt.tool || evt.name,
          toolPreview: evt.preview,
          toolStatus: 'running',
        })
        break
      }
      case 'tool.completed': {
        flags.runHadToolActivity = true
        const msgs = getSessionMsgs(sid)
        const toolMsgs = msgs.filter(m => m.role === 'tool' && m.toolStatus === 'running')
        if (toolMsgs.length > 0) {
          const last = toolMsgs[toolMsgs.length - 1]
          updateMessage(sid, last.id, {
            toolStatus: (evt as any).error ? 'error' : 'done',
          })
        }
        break
      }
      case 'run.completed': {
        const msgs = getSessionMsgs(sid)
        const lastMsg = msgs[msgs.length - 1]
        if (lastMsg?.isStreaming) {
          updateMessage(sid, lastMsg.id, { isStreaming: false })
        }
        // Update usage
        const usage = evt.usage
        if (usage) {
          const target = sessions.value.find(s => s.id === sid)
          if (target) {
            target.inputTokens = usage.input_tokens ?? target.inputTokens
            target.outputTokens = usage.output_tokens ?? target.outputTokens
            const srvCtx = usage.context_length
            if (srvCtx && srvCtx > 0) target.contextLength = srvCtx
          }
        }
        // Belt-and-suspenders: if no assistant text was produced via delta
        // but output is non-empty, render it
        const finalOutput = typeof evt.output === 'string' ? evt.output : ''
        if (!flags.runProducedAssistantText && finalOutput.trim() !== '') {
          addMessage(sid, {
            id: uid(),
            role: 'assistant',
            content: finalOutput,
            timestamp: Date.now(),
          })
        }
        updateSessionTitle(sid)
        persistSessionTitle(sid)
        break
      }
      case 'run.failed': {
        const msgs = getSessionMsgs(sid)
        const lastErr = msgs[msgs.length - 1]
        if (lastErr?.isStreaming) {
          updateMessage(sid, lastErr.id, {
            isStreaming: false,
            content: evt.error ? `Error: ${evt.error}` : 'Run failed',
            role: 'system',
          })
        } else {
          addMessage(sid, {
            id: uid(),
            role: 'system',
            content: evt.error ? `Error: ${evt.error}` : 'Run failed',
            timestamp: Date.now(),
          })
        }
        break
      }
    }
  }
  function stopStreaming() {
    const sid = activeSessionId.value
    if (!sid) return
    const ctrl = streamStates.value.get(sid)
    if (ctrl) {
      ctrl.abort()
      const msgs = getSessionMsgs(sid)
      const lastMsg = msgs[msgs.length - 1]
      if (lastMsg?.isStreaming) {
        updateMessage(sid, lastMsg.id, { isStreaming: false })
      }
      streamStates.value.delete(sid)
      serverWorking.value.delete(sid)
    }
    clearInFlight(sid)
  }

  // Tab visibility: re-sync when returning to foreground
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', async () => {
      if (document.visibilityState === 'visible' && activeSessionId.value && !isStreaming.value) {
        const sid = activeSessionId.value
        if (sid && !streamStates.value.has(sid)) {
          // Re-load messages via resume (server loads from DB)
          try {
            const data = await resumeSession(sid)
            if (data.messages?.length && activeSession.value) {
              const dbMsgs = mapHermesMessages(data.messages as any[])
              activeSession.value.messages = mergeMessagesPreservingStreaming(dbMsgs, activeSession.value.messages)
            }
          } catch (_e) { /* non-critical */ }
          resumeInFlightRun(sid)
        }
      }
    })
  }

  // Transient observation of <think> boundaries during active streaming.
  // Not persisted; cleared on session switch. See spec §5.3.
  const thinkingObservation = new Map<string, { startedAt?: number; endedAt?: number }>()

  function getThinkingObservation(messageId: string) {
    return thinkingObservation.get(messageId)
  }

  function noteThinkingDelta(messageId: string, prevContent: string, nextContent: string) {
    const { startedAtBoundary, endedAtBoundary } = detectThinkingBoundary(prevContent, nextContent)
    if (!startedAtBoundary && !endedAtBoundary) return
    const existing = thinkingObservation.get(messageId) || {}
    if (startedAtBoundary && existing.startedAt === undefined) {
      existing.startedAt = Date.now()
    }
    if (endedAtBoundary && existing.endedAt === undefined) {
      existing.endedAt = Date.now()
    }
    thinkingObservation.set(messageId, existing)
  }

  /** 第一次见到某条消息的 reasoning 文本时，标记 startedAt。 */
  function noteReasoningStart(messageId: string) {
    const existing = thinkingObservation.get(messageId) || {}
    if (existing.startedAt === undefined) {
      existing.startedAt = Date.now()
      thinkingObservation.set(messageId, existing)
    }
  }

  /** 内容首次到达（视为推理结束）或显式收到 reasoning.available 时，标记 endedAt。 */
  function noteReasoningEnd(messageId: string) {
    const existing = thinkingObservation.get(messageId)
    if (!existing || existing.startedAt === undefined) return
    if (existing.endedAt === undefined) {
      existing.endedAt = Date.now()
      thinkingObservation.set(messageId, existing)
    }
  }

  function clearProviderFromSessions(provider: string) {
    if (!provider) return
    const target = provider.toLowerCase()
    for (const s of sessions.value) {
      if ((s.provider || '').toLowerCase() === target) {
        s.model = undefined
        s.provider = ''
      }
    }
  }

  function clearThinkingObservationFor(_sessionId: string) {
    // messageId 与 sessionId 的关联未单独持有；方案是切会话时一律清空。
    // 这符合 spec 定义：observation 是"当前会话范围内"的 transient 状态。
    thinkingObservation.clear()
  }

  return {
    sessions,
    visibleSessions,
    activeSessionId,
    activeSession,
    focusMessageId,
    clearFocusMessage,
    expandAncestorsForId,
    messages,
    isStreaming,
    isRunActive,
    isSessionLive,
    compressionState,
    isLoadingSessions,
    sessionsLoaded,
    allSessionsLoaded,
    sourceCounts,
    activeSourceFilter,
    isLoadingMessages,

    newChat,
    switchSession,
    switchSessionModel,
    disconnectStream,
    exportSessionMessages,
    loadParentSession,
    clearProviderFromSessions,
    deleteSession,
    sendMessage,
    stopStreaming,
    loadSessions,
    loadSessionsBySource,
    loadMoreSessions,
    refreshActiveSession,
    addMessage,
    removeMessage,
    updateMessage,
    getThinkingObservation,
    noteThinkingDelta,
    noteReasoningStart,
    noteReasoningEnd,
    clearThinkingObservationFor,
  }
})
