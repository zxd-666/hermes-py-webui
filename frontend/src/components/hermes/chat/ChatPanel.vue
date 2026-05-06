<script setup lang="ts">
import { renameSession, setSessionWorkspace } from '@/api/hermes/sessions'
import { fetchWorkspaces } from '@/api/hermes/workspaces'
import type { WorkspacePreset } from '@/api/hermes/workspaces'
import { useChatStore, type Session } from '@/stores/hermes/chat'
import { useAppStore } from '@/stores/hermes/app'
import { useSettingsStore } from '@/stores/hermes/settings'
import { useSessionBrowserPrefsStore } from '@/stores/hermes/session-browser-prefs'
import { fetchSourceCounts } from '@/api/hermes/sessions'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { NButton, NDropdown, NInput, NModal, NSelect, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { getSourceLabel } from '@/shared/session-display'
import { copyToClipboard } from '@/utils/clipboard'
import ChatInput from './ChatInput.vue'
import ConversationMonitorPane from './ConversationMonitorPane.vue'
import MessageList from './MessageList.vue'
import SessionListItem from './SessionListItem.vue'

const chatStore = useChatStore()
const appStore = useAppStore()
const sessionBrowserPrefsStore = useSessionBrowserPrefsStore()
const message = useMessage()
const { t } = useI18n()

const currentMode = ref<'chat' | 'live'>('chat')

// Initialize synchronously from the media query so first paint is correct.
// On narrow viewports the session list is an absolute-positioned overlay
// (z-index 10) on top of the chat area; if we default to `true`, onMounted
// only flips it to `false` AFTER the first render, causing a visible flash
// where the session list covers the chat content ("auto-fixes after a
// moment" — that was the race).
const showSessions = ref(
  typeof window === 'undefined' || !window.matchMedia('(max-width: 768px)').matches,
)
let mobileQuery: MediaQueryList | null = null
const isMobile = ref(false)

function handleSessionClick(sessionId: string) {
  chatStore.switchSession(sessionId)
  if (mobileQuery?.matches) showSessions.value = false
}

function handleMobileChange(e: MediaQueryListEvent | MediaQueryList) {
  isMobile.value = e.matches
  if (e.matches && showSessions.value) {
    showSessions.value = false
  }
}

// Fix: Naive UI NSelect menu inherits trigger width via inline style.
// Inject global style override at setup time (not onMounted, to avoid keep-alive issues).
if (!document.getElementById('src-menu-fit')) {
  const s = document.createElement('style')
  s.id = 'src-menu-fit'
  s.textContent = `.n-select-menu{overflow:visible!important}
.v-binder-follower-content{width:fit-content!important;min-width:fit-content!important}`
  document.body.appendChild(s)
}

onMounted(() => {
  mobileQuery = window.matchMedia('(max-width: 768px)')
  handleMobileChange(mobileQuery)
  mobileQuery.addEventListener('change', handleMobileChange)
  loadHeaderWorkspaces()
  // Preload favorite IDs so star icons appear immediately
  import('@/stores/hermes/favorites').then(({ useFavoritesStore }) => useFavoritesStore().loadIds())
})

onUnmounted(() => {
  mobileQuery?.removeEventListener('change', handleMobileChange)
  // Gracefully disconnect any active stream without cancelling the AI run
  const sid = chatStore.activeSessionId
  if (sid) chatStore.disconnectStream(sid)
  sessionListRef.value?.removeEventListener('scroll', handleSessionListScroll)
})
const showRenameModal = ref(false)
const renameValue = ref('')
const renameSessionId = ref<string | null>(null)
const sessionListRef = ref<HTMLElement | null>(null)

function handleSessionListScroll() {
  const el = sessionListRef.value
  if (!el) return
  // Trigger load when scrolled to within 100px of bottom
  if (el.scrollHeight - el.scrollTop - el.clientHeight < 100) {
    chatStore.loadMoreSessions()
  }
}

watch(sessionListRef, (el, oldEl) => {
  oldEl?.removeEventListener('scroll', handleSessionListScroll)
  if (el) el.addEventListener('scroll', handleSessionListScroll)
})

const renameInputRef = ref<InstanceType<typeof NInput> | null>(null)
const isEditingTitle = ref(false)
const editTitleValue = ref('')
const editTitleRef = ref<HTMLInputElement | null>(null)

// Source sort order
const SOURCE_ORDER = ['9898', 'webui', 'feishu', 'cli', 'cron']

function sourceSortKey(source: string): number {
  const idx = SOURCE_ORDER.indexOf(source.toLowerCase())
  return idx >= 0 ? idx : SOURCE_ORDER.length
}

function sortSessionsByTime(items: Session[]): Session[] {
  return [...items].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
}

// Source filter options (from backend DB counts)
const sourceFilterOptions = computed(() => {
  const counts = chatStore.sourceCounts
  if (!counts || Object.keys(counts).length === 0) return []
  const sorted = Object.entries(counts)
    .filter(([, count]) => count > 0)
    .sort(([a], [b]) => sourceSortKey(a) - sourceSortKey(b) || a.localeCompare(b))
  return sorted.map(([source, count]) => ({ label: `${getSourceLabel(source)} ${count}`, value: source }))
})

function handleSourceFilterChange(source: string | null) {
  chatStore.loadSessionsBySource(source)
}

// Pinned sessions (always shown regardless of filter)
const pinnedSessions = computed(() =>
  sortSessionsByTime(chatStore.visibleSessions.filter(session => sessionBrowserPrefsStore.isPinned(session.id))),
)

// All non-pinned sessions (filtering is done server-side via activeSourceFilter)
const filteredSessions = computed(() =>
  sortSessionsByTime(chatStore.visibleSessions.filter(s => !sessionBrowserPrefsStore.isPinned(s.id))),
)

/** True if the session or one of its children is the active session */
function isSessionActive(s: Session): boolean {
  if (s.id === chatStore.activeSessionId) return true
  return s.children?.some(c => c.id === chatStore.activeSessionId) ?? false
}

// Select the most recent session if none is active
watch(
  () => chatStore.sessionsLoaded,
  (loaded) => {
    if (!loaded) return
    const recentSession = chatStore.visibleSessions
      .filter(s => !sessionBrowserPrefsStore.isPinned(s.id))
      .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))[0]
    if (recentSession && !chatStore.activeSessionId) {
      chatStore.switchSession(recentSession.id)
    }
  },
  { once: true },
)

watch(
  () => [chatStore.sessionsLoaded, ...chatStore.visibleSessions.map(session => session.id)],
  value => {
    const sessionIds = value.slice(1) as string[]
    if (!value[0] || sessionIds.length === 0) return
    sessionBrowserPrefsStore.pruneMissingSessions(sessionIds)
  },
  { immediate: true },
)

const activeSessionTitle = computed(() =>
  chatStore.activeSession?.title || t('chat.newChat'),
)

const headerTitle = computed(() =>
  currentMode.value === 'live' ? t('chat.liveSessions') : activeSessionTitle.value,
)

const activeSessionSource = computed(() =>
  currentMode.value === 'chat' ? (chatStore.activeSession?.source || '') : '',
)

// Header model selector
const modelOptions = computed(() => {
  const groups: { type: 'group'; label: string; key: string; children: { label: string; value: string; disabled?: boolean }[] }[] = []
  for (const g of appStore.modelGroups) {
    const children: { label: string; value: string; disabled?: boolean }[] = []
    for (const m of g.models) {
      const meta = g.model_meta?.[m]
      children.push({ label: `${m}${meta?.disabled ? ' ✗' : ''}`, value: `${g.provider}::${m}`, disabled: !!meta?.disabled })
    }
    if (children.length) {
      groups.push({ type: 'group', label: g.label || g.provider, key: g.provider, children })
    }
  }
  return groups
})

/** Resolve the compound value `provider::model` from the current session context. */
const headerModelValue = computed(() => {
  const model = chatStore.activeSession?.model || appStore.selectedModel
  if (!model) return undefined
  // Find the matching group: prefer the session's provider hint
  const provider = chatStore.activeSession?.provider || appStore.selectedProvider
  if (provider) {
    const group = appStore.modelGroups.find(g => g.provider === provider && g.models.includes(model))
    if (group) return `${group.provider}::${model}`
  }
  // Fallback: first group containing this model
  const group = appStore.modelGroups.find(g => g.models.includes(model))
  return group ? `${group.provider}::${model}` : undefined
})

function handleModelChange(compound: string) {
  const sep = compound.indexOf('::')
  const provider = compound.substring(0, sep)
  const model = compound.substring(sep + 2)
  // Only update active session model, not global default
  if (chatStore.activeSession) {
    chatStore.switchSessionModel(model, provider)
  }
}

// Header workspace selector
const headerWorkspacePresets = ref<WorkspacePreset[]>([])

const headerWorkspaceOptions = computed(() => {
  const opts = headerWorkspacePresets.value.map(ws => ({
    label: ws.name,
    value: ws.path,
  }))
  // Add custom path if current workspace is not in presets
  const currentWs = chatStore.activeSession?.workspace
  if (currentWs && !headerWorkspacePresets.value.some(ws => ws.path === currentWs)) {
    opts.push({ label: currentWs, value: currentWs })
  }
  return opts
})

// Load workspace presets for header selector
async function loadHeaderWorkspaces() {
  try {
    headerWorkspacePresets.value = await fetchWorkspaces()
  } catch {
    headerWorkspacePresets.value = []
  }
}

async function handleHeaderWorkspaceChange(path: string | null) {
  const sid = chatStore.activeSessionId
  if (!sid) return
  const ok = await setSessionWorkspace(sid, path || null)
  if (ok) {
    if (chatStore.activeSession) chatStore.activeSession.workspace = path || null
    message.success(t('chat.workspaceSet'))
  } else {
    message.error(t('chat.workspaceSetFailed'))
  }
}

// Preload workspace presets (handled in onMounted above)

function handleNewChat() {
  chatStore.newChat()
}

async function copySessionId(id?: string) {
  const sessionId = id || chatStore.activeSessionId
  if (sessionId) {
    const ok = await copyToClipboard(sessionId)
    if (ok) message.success(t('common.copied'))
    else message.error(t('common.copied') + ' ✗')
  }
}

function handleDeleteSession(id: string) {
  sessionBrowserPrefsStore.removePinned(id)
  chatStore.deleteSession(id)
  message.success(t('chat.sessionDeleted'))
}

const contextSessionId = ref<string | null>(null)
const contextSessionPinned = computed(() =>
  contextSessionId.value ? sessionBrowserPrefsStore.isPinned(contextSessionId.value) : false,
)

const contextMenuOptions = computed(() => {
  const canDel = contextSessionId.value !== chatStore.activeSessionId || chatStore.visibleSessions.length > 1
  // ancestor sessions are not top-level items — hide pin/workspace/delete for them
  const isAncestor = contextSessionId.value && !chatStore.sessions.find(s => s.id === contextSessionId.value)
  return [
    ...(!isAncestor ? [{ label: t(contextSessionPinned.value ? 'chat.unpin' : 'chat.pin'), key: 'pin' }] : []),
    { label: t('chat.rename'), key: 'rename' },
    ...(!isAncestor ? [{ label: t('chat.setWorkspace'), key: 'workspace' }] : []),
    { label: t('chat.copySessionId'), key: 'copy-id' },
    { label: t('chat.exportMessages'), key: 'export-messages' },
    ...(canDel && !isAncestor ? [{ label: t('common.delete'), key: 'delete' }] : []),
  ]
})

function handleContextMenu(e: MouseEvent, sessionId: string) {
  e.preventDefault()
  contextSessionId.value = sessionId
  showContextMenu.value = true
  contextMenuX.value = e.clientX
  contextMenuY.value = e.clientY
}

const showContextMenu = ref(false)
const contextMenuX = ref(0)
const contextMenuY = ref(0)

function handleContextMenuSelect(key: string) {
  showContextMenu.value = false
  if (!contextSessionId.value) return
  if (key === 'pin') {
    sessionBrowserPrefsStore.togglePinned(contextSessionId.value)
    return
  }
  if (key === 'copy-id') {
    copySessionId(contextSessionId.value)
  } else if (key === 'export-messages') {
    chatStore.exportSessionMessages(contextSessionId.value)
  } else if (key === 'workspace') {
    openWorkspaceModal(contextSessionId.value)
  } else if (key === 'rename') {
    const session = chatStore.sessions.find(s => s.id === contextSessionId.value)
    renameSessionId.value = contextSessionId.value
    renameValue.value = session?.title || ''
    showRenameModal.value = true
    nextTick(() => {
      renameInputRef.value?.focus()
    })
  } else if (key === 'delete') {
    handleDeleteSession(contextSessionId.value)
  }
}

function handleClickOutside() {
  showContextMenu.value = false
}

async function handleRenameConfirm() {
  if (!renameSessionId.value || !renameValue.value.trim()) return
  const { ok, targetId, reason } = await renameSession(renameSessionId.value, renameValue.value.trim())
  if (ok && targetId) {
    const session = chatStore.sessions.find(s => s.id === targetId)
    if (session) session.title = renameValue.value.trim()
    if (chatStore.activeSession?.id === targetId) {
      chatStore.activeSession.title = renameValue.value.trim()
    }
    message.success(t('chat.renamed'))
  } else {
    message.error(reason === 'duplicate_title' ? t('chat.renameDuplicate') : t('chat.renameFailed'))
  }
  showRenameModal.value = false
}

async function startEditTitle() {
  const session = chatStore.activeSession
  if (!session || currentMode.value !== 'chat') return
  editTitleValue.value = session.title || ''
  isEditingTitle.value = true
  await nextTick()
  editTitleRef.value?.focus()
  editTitleRef.value?.select()
}

async function confirmEditTitle() {
  isEditingTitle.value = false
  const session = chatStore.activeSession
  if (!session) return
  const newTitle = editTitleValue.value.trim()
  if (!newTitle || newTitle === session.title) return
  const { ok, targetId, reason } = await renameSession(session.id, newTitle)
  if (ok && targetId) {
    const s = chatStore.sessions.find(s => s.id === targetId)
    if (s) s.title = newTitle
    if (chatStore.activeSession?.id === targetId) {
      chatStore.activeSession.title = newTitle
    }
  } else if (reason === 'duplicate_title') {
    message.error(t('chat.renameDuplicate'))
  }
}

function cancelEditTitle() {
  isEditingTitle.value = false
}

const showWorkspaceModal = ref(false)
const workspaceValue = ref('')
const workspaceSessionId = ref<string | null>(null)
const workspacePresets = ref<WorkspacePreset[]>([])
const useCustomPath = ref(false)

const workspaceSelectOptions = computed(() =>
  workspacePresets.value.map(ws => ({
    label: `${ws.name}  (${ws.path})`,
    value: ws.path,
  })),
)

async function openWorkspaceModal(sessionId: string) {
  workspaceSessionId.value = sessionId
  const session = chatStore.sessions.find(s => s.id === sessionId)
  const currentPath = session?.workspace || ''

  // Try loading presets
  try {
    workspacePresets.value = await fetchWorkspaces()
  } catch {
    workspacePresets.value = []
  }

  // Check if current path matches a preset
  const match = workspacePresets.value.find(ws => ws.path === currentPath)
  if (match) {
    workspaceValue.value = match.path
    useCustomPath.value = false
  } else if (currentPath) {
    workspaceValue.value = currentPath
    useCustomPath.value = true
  } else {
    workspaceValue.value = ''
    useCustomPath.value = workspacePresets.value.length === 0
  }

  showWorkspaceModal.value = true
}

async function handleWorkspaceConfirm() {
  if (!workspaceSessionId.value) return
  const ok = await setSessionWorkspace(workspaceSessionId.value, workspaceValue.value || null)
  if (ok) {
    const session = chatStore.sessions.find(s => s.id === workspaceSessionId.value)
    if (session) session.workspace = workspaceValue.value || null
    if (chatStore.activeSession?.id === workspaceSessionId.value) {
      chatStore.activeSession.workspace = workspaceValue.value || null
    }
    message.success(t('chat.workspaceSet'))
  } else {
    message.error(t('chat.workspaceSetFailed'))
  }
  showWorkspaceModal.value = false
}

function handleWorkspaceSelect(val: string) {
  workspaceValue.value = val
}
</script>

<template>
  <div class="chat-panel">
    <div v-if="currentMode === 'chat'" class="session-backdrop" :class="{ active: showSessions }" @click="showSessions = false" />
    <aside v-if="currentMode === 'chat'" class="session-list" :class="{ collapsed: !showSessions }">
      <div class="session-list-header">
          <NSelect
            v-if="showSessions && sourceFilterOptions.length >= 1"
            :value="chatStore.activeSourceFilter"
            :options="sourceFilterOptions"
            size="tiny"
            clearable
            :placeholder="t('chat.allSources')"
            class="source-filter-select"
            :arrow="false"
            :consistent-menu-width="false"
            @update:value="handleSourceFilterChange"
          />
        <div class="session-list-actions">
          <NButton quaternary size="tiny" @click="handleNewChat" circle>
            <template #icon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </template>
          </NButton>
          <NButton v-if="showSessions" quaternary size="tiny" @click="showSessions = false" circle>
            <template #icon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="11 17 6 12 11 7"/><path d="M18 6v12"/></svg>
            </template>
          </NButton>
        </div>
      </div>
      <div v-if="showSessions" ref="sessionListRef" class="session-items">
        <div v-if="chatStore.isLoadingSessions && chatStore.visibleSessions.length === 0" class="session-loading">{{ t('common.loading') }}</div>
        <div v-else-if="chatStore.visibleSessions.length === 0" class="session-empty">{{ t('chat.noSessions') }}</div>

        <template v-if="pinnedSessions.length > 0">
          <div class="session-group-header session-group-header--static">
            <span class="session-group-label">{{ t('chat.pinned') }}</span>
            <span class="session-group-count">{{ pinnedSessions.length }}</span>
          </div>
          <SessionListItem
            v-for="s in pinnedSessions"
            :key="`pinned-${s.id}`"
            :session="s"
            :active="isSessionActive(s)"
            :pinned="true"
            :streaming="chatStore.isSessionLive(s.id)"
            @select="handleSessionClick(s.id)"
            @contextmenu="handleContextMenu($event, s.id)"
            @select-child="handleSessionClick"
            @child-contextmenu="(e, id) => handleContextMenu(e, id)"
          />
        </template>

        <template v-if="filteredSessions.length > 0">
          <SessionListItem
            v-for="s in filteredSessions"
            :key="s.id"
            :session="s"
            :active="isSessionActive(s)"
            :pinned="false"
            :streaming="chatStore.isSessionLive(s.id)"
            @select="handleSessionClick(s.id)"
            @contextmenu="handleContextMenu($event, s.id)"
            @select-child="handleSessionClick"
            @child-contextmenu="(e, id) => handleContextMenu(e, id)"
          />
        </template>
        <div v-if="chatStore.isLoadingSessions && chatStore.visibleSessions.length > 0" class="session-loading session-loading--more">...</div>
      </div>
    </aside>

    <NDropdown
      placement="bottom-start"
      trigger="manual"
      :x="contextMenuX"
      :y="contextMenuY"
      :options="contextMenuOptions"
      :show="showContextMenu"
      @select="handleContextMenuSelect"
      @clickoutside="handleClickOutside"
    />

    <NModal
      v-model:show="showRenameModal"
      preset="dialog"
      :title="t('chat.renameSession')"
      :positive-text="t('common.ok')"
      :negative-text="t('common.cancel')"
      @positive-click="handleRenameConfirm"
    >
      <NInput
        ref="renameInputRef"
        v-model:value="renameValue"
        :placeholder="t('chat.enterNewTitle')"
        @keydown.enter="handleRenameConfirm"
      />
    </NModal>

    <NModal
      v-model:show="showWorkspaceModal"
      preset="dialog"
      :title="t('chat.setWorkspaceTitle')"
      :positive-text="t('common.ok')"
      :negative-text="t('common.cancel')"
      style="width: 480px"
      @positive-click="handleWorkspaceConfirm"
    >
      <div class="workspace-modal-body">
        <div v-if="workspacePresets.length > 0" class="workspace-mode-switch">
          <NButton
            size="tiny"
            :type="!useCustomPath ? 'primary' : 'default'"
            @click="useCustomPath = false"
          >
            {{ t('chat.workspaceFromPresets') }}
          </NButton>
          <NButton
            size="tiny"
            :type="useCustomPath ? 'primary' : 'default'"
            @click="useCustomPath = true"
          >
            {{ t('chat.workspaceCustom') }}
          </NButton>
        </div>
        <div v-if="!useCustomPath && workspacePresets.length > 0">
          <NSelect
            :value="workspaceValue"
            :options="workspaceSelectOptions"
            placeholder=""
            filterable
            @update:value="handleWorkspaceSelect"
            :show-tooltip="true"
          />
        </div>
        <div v-else>
          <NInput
            :value="workspaceValue"
            :placeholder="t('chat.workspacePlaceholder')"
            @update:value="v => workspaceValue = v"
            @keydown.enter="handleWorkspaceConfirm"
          />
        </div>
        <div v-if="workspacePresets.length === 0" class="workspace-empty-hint">
          {{ t('chat.workspaceNoPresets') }}
        </div>
      </div>
    </NModal>

    <div class="chat-main">
      <header class="chat-header">
        <div class="header-left">
          <NButton v-if="currentMode === 'chat' && !showSessions" quaternary size="small" @click="showSessions = true" circle>
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 17 18 12 13 7"/><path d="M6 6v12"/></svg>
            </template>
          </NButton>
          <input
            v-if="isEditingTitle"
            ref="editTitleRef"
            v-model="editTitleValue"
            class="header-title-input"
            @keydown.enter="confirmEditTitle"
            @keydown.escape="cancelEditTitle"
            @blur="confirmEditTitle"
          />
          <span v-else class="header-session-title" @dblclick="startEditTitle">{{ headerTitle }}</span>
          <span v-if="activeSessionSource" class="source-badge">{{ getSourceLabel(activeSessionSource) }}</span>
        </div>
        <div class="header-actions">
          <template v-if="currentMode === 'chat'">
            <div class="header-select-group">
              <NSelect
                :value="headerModelValue"
                :options="modelOptions"
                size="small"
                filterable
                :virtual-scroll="false"
                class="header-model-select"
                :placeholder="t('models.title')"
                @update:value="handleModelChange"
                :show-tooltip="true"
              />
              <NSelect
                :value="chatStore.activeSession?.workspace || undefined"
                :options="headerWorkspaceOptions"
                size="small"
                filterable
                clearable
                class="header-workspace-select"
                :placeholder="t('chat.workspace')"
                @update:value="handleHeaderWorkspaceChange"
                :show-tooltip="true"
              />
            </div>
          </template>
        </div>
      </header>

      <template v-if="currentMode === 'chat'">
        <MessageList />
        <ChatInput />
      </template>
      <ConversationMonitorPane v-else :human-only="sessionBrowserPrefsStore.humanOnly" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.chat-panel {
  display: flex;
  height: 100%;
  position: relative;
}

.session-list {
  width: 228px;
  border-right: 1px solid $border-color;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition: width $transition-normal, opacity $transition-normal;
  overflow: hidden;

  &.collapsed {
    width: 0;
    border-right: none;
    opacity: 0;
    pointer-events: none;
  }

  @media (max-width: $breakpoint-mobile) {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 10;
    background: $bg-card;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    width: 280px;

    &.collapsed {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
}

@media (max-width: $breakpoint-mobile) {
  .session-close-btn {
    display: flex;
  }

  .session-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9;
    opacity: 0;
    pointer-events: none;
    transition: opacity $transition-fast;

    &.active {
      opacity: 1;
      pointer-events: auto;
    }
  }
}

.session-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  flex-shrink: 0;
}

.session-list-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.source-filter-select {
  width: 120px;
}

.session-close-btn {
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  color: $text-secondary;
  padding: 4px;
  border-radius: $radius-sm;

  &:hover {
    background: rgba($accent-primary, 0.06);
  }
}

.session-list-title {
  font-size: 12px;
  font-weight: 600;
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.session-group-header {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 10px 5px;
  cursor: pointer;
  user-select: none;
}

.session-group-header--static {
  cursor: default;
}

.group-chevron {
  flex-shrink: 0;
  transition: transform 0.15s ease;
  transform: rotate(90deg);
  opacity: 0.5;

  &.collapsed {
    transform: rotate(0deg);
  }
}

.session-group-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.session-group-count {
  font-size: 11px;
  color: var(--text-3);
  font-weight: 400;
  opacity: 0.7;
}

.session-items {
  flex: 1;
  overflow-y: auto;
  padding: 0 6px 12px;
}

.session-loading,
.session-empty {
  padding: 16px 10px;
  font-size: 12px;
  color: $text-muted;
  text-align: center;
}

.session-loading--more {
  padding: 8px 10px;
  animation: spin 1.2s linear infinite;
}

:deep(.session-item) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 7px 10px;
  border: none;
  background: none;
  border-radius: $radius-sm;
  cursor: pointer;
  text-align: left;
  color: $text-secondary;
  font-family: inherit;
  transition: background $transition-fast, color $transition-fast;
  margin-bottom: 1px;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
    color: var(--text-primary);

    .session-item-delete {
      opacity: 1;
    }
  }

  &.active {
    background: rgba(var(--accent-primary-rgb), 0.12);
    color: $text-primary;
  }

  &.active .session-item-title {
    font-weight: 500;
  }
}

:deep(.session-item-content) {
  flex: 1;
  overflow: hidden;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

:deep(.session-item-title-row) {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
}

:deep(.session-item-title) {
  display: block;
  flex: 1 1 auto;
  min-width: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.session-item-streaming) {
  display: inline-block;
  flex-shrink: 0;
  margin-right: 4px;
  vertical-align: middle;
  animation: spin 1.2s linear infinite;
  color: $accent-primary;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

:deep(.session-item-pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: $accent-primary;
}

:deep(.session-item-meta) {
  display: flex;
  align-items: center;
}

:deep(.session-item-meta-info) {
  display: flex;
  align-items: center;
  font-size: 11px;
  color: var(--text-3);
  opacity: 0.6;
  gap: 0;
}

:deep(.session-item-meta-info > span:not(:last-child)::after) {
  content: '·';
  margin: 0 5px;
}

:deep(.session-item-delete) {
  flex-shrink: 0;
  opacity: 0.5;
  padding: 2px;
  border: none;
  background: none;
  color: $text-muted;
  cursor: pointer;
  border-radius: 3px;
  transition: all $transition-fast;

  &:hover {
    color: $error;
    background: rgba($error, 0.1);
  }
}

.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 20px;
  border-bottom: 1px solid $border-color;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  flex: 1;
  min-width: 0;
}

.header-session-title {
  font-size: 16px;
  font-weight: 600;
  color: $text-primary;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;

  &:hover {
    cursor: text;
  }
}

.header-title-input {
  font-size: 16px;
  font-weight: 600;
  color: $text-primary;
  background: rgba(var(--accent-primary-rgb), 0.06);
  border: 1px solid rgba(var(--accent-primary-rgb), 0.3);
  border-radius: 4px;
  padding: 2px 6px;
  outline: none;
  min-width: 80px;
  max-width: 300px;
}

.source-badge {
  font-size: 10px;
  color: $text-muted;
  background: rgba($text-muted, 0.12);
  padding: 1px 7px;
  border-radius: 8px;
  flex-shrink: 0;
  white-space: nowrap;
  line-height: 16px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.header-select-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-model-select {
  width: 160px;
}

.header-workspace-select {
  width: 120px;
}

.chat-mode-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 4px;
}

@media (max-width: $breakpoint-mobile) {
  .chat-header {
    padding: 16px 12px 16px 52px;
  }
}

.workspace-modal-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.workspace-mode-switch {
  display: flex;
  gap: 6px;
}

.workspace-empty-hint {
  font-size: 12px;
  opacity: 0.5;
}
</style>

<!-- Global (unscoped) to override Naive UI inline CSS variables -->
<style>
.source-filter-select {
  width: 120px !important;
}

.source-filter-select .n-base-selection {
  --n-border: 1px solid transparent !important;
  --n-border-hover: 1px solid transparent !important;
  --n-border-focus: 1px solid transparent !important;
  --n-border-active: 1px solid transparent !important;
  --n-box-shadow-focus: none !important;
  --n-box-shadow-active: none !important;
  --n-box-shadow-hover: none !important;
  --n-color: transparent !important;
  --n-color-active: transparent !important;
  --n-color-hover: transparent !important;
  --n-arrow-color: transparent !important;
  --n-padding-single: 0 !important;
  --n-placeholder-color: #262626 !important;
  --n-text-color: #262626 !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  color: #262626 !important;
}

.source-filter-select .n-base-selection__arrow {
  visibility: hidden;
}
</style>
