<script setup lang="ts">
import type { Attachment } from '@/stores/hermes/chat'
import { useChatStore } from '@/stores/hermes/chat'
import { useAppStore } from '@/stores/hermes/app'
import { useProfilesStore } from '@/stores/hermes/profiles'
import { useSettingsStore } from '@/stores/hermes/settings'
import { fetchContextLength } from '@/api/hermes/sessions'
import { NButton, NTooltip } from 'naive-ui'
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const chatStore = useChatStore()
const settingsStore = useSettingsStore()
const { t } = useI18n()
const inputText = ref('')
const textareaRef = ref<HTMLTextAreaElement>()
const fileInputRef = ref<HTMLInputElement>()
const attachments = ref<Attachment[]>([])
const isDragging = ref(false)
const dragCounter = ref(0)
const isComposing = ref(false)

const canSend = computed(() => inputText.value.trim() || attachments.value.length > 0)

// --- Context info ---

const contextLength = ref(200000)
const FALLBACK_CONTEXT = 200000

async function loadContextLength() {
  try {
    const profile = useProfilesStore().activeProfileName || undefined
    contextLength.value = await fetchContextLength(profile)
  } catch {
    contextLength.value = FALLBACK_CONTEXT
  }
}

onMounted(loadContextLength)
watch(() => useProfilesStore().activeProfileName, loadContextLength)
watch(() => useAppStore().selectedModel, loadContextLength)

const showContextInfo = computed(() => !!chatStore.activeSession?.contextLength)

const contextTokens = computed(() => showContextInfo.value ? (chatStore.activeSession?.inputTokens ?? 0) : 0)

const effectiveContextLength = computed(() =>
  chatStore.activeSession?.contextLength || contextLength.value,
)

const remainingTokens = computed(() => Math.max(0, effectiveContextLength.value - contextTokens.value))

const usagePercent = computed(() =>
  Math.min((contextTokens.value / effectiveContextLength.value) * 100, 100),
)

function formatTokens(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

// --- File attachment helpers ---

function addFile(file: File) {
  if (attachments.value.find(a => a.name === file.name)) return
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
  const url = URL.createObjectURL(file)
  attachments.value.push({
    id,
    name: file.name,
    type: file.type,
    size: file.size,
    url,
    file,
  })
}

function handleAttachClick() {
  fileInputRef.value?.click()
}

function handleFileChange(e: Event) {
  const input = e.target as HTMLInputElement
  if (!input.files) return
  for (const file of input.files) addFile(file)
  input.value = ''
}

// --- Paste image ---

function handlePaste(e: ClipboardEvent) {
  const items = Array.from(e.clipboardData?.items || [])
  const imageItems = items.filter(i => i.type.startsWith('image/'))
  if (!imageItems.length) return
  e.preventDefault()
  for (const item of imageItems) {
    const blob = item.getAsFile()
    if (!blob) continue
    const ext = item.type.split('/')[1] || 'png'
    const file = new File([blob], `pasted-${Date.now()}.${ext}`, { type: item.type })
    addFile(file)
  }
}

// --- Drag and drop ---

function handleDragOver(e: DragEvent) {
  e.preventDefault()
}

function handleDragEnter(e: DragEvent) {
  e.preventDefault()
  if (e.dataTransfer?.types.includes('Files')) {
    dragCounter.value++
    isDragging.value = true
  }
}

function handleDragLeave() {
  dragCounter.value--
  if (dragCounter.value <= 0) {
    dragCounter.value = 0
    isDragging.value = false
  }
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  dragCounter.value = 0
  isDragging.value = false
  const files = Array.from(e.dataTransfer?.files || [])
  if (!files.length) return
  for (const file of files) addFile(file)
  textareaRef.value?.focus()
}

// --- Send ---

function handleSend() {
  const text = inputText.value.trim()
  if (!text && attachments.value.length === 0) return

  chatStore.sendMessage(text, attachments.value.length > 0 ? attachments.value : undefined)
  inputText.value = ''
  attachments.value = []

  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
  }
}

function handleCompositionStart() {
  isComposing.value = true
}

function handleCompositionEnd() {
  requestAnimationFrame(() => {
    isComposing.value = false
  })
}

function isImeEnter(e: KeyboardEvent): boolean {
  return isComposing.value || e.isComposing || e.keyCode === 229
}

function handleKeydown(e: KeyboardEvent) {
  // Slash command panel keyboard navigation
  if (slashVisible.value) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      slashHighlightIndex.value = (slashHighlightIndex.value + 1) % filteredSlashCommands.value.length
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      slashHighlightIndex.value =
        (slashHighlightIndex.value - 1 + filteredSlashCommands.value.length) % filteredSlashCommands.value.length
      return
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      slashVisible.value = false
      return
    }
    if (e.key === 'Enter' && !e.shiftKey && !isImeEnter(e)) {
      e.preventDefault()
      const cmd = filteredSlashCommands.value[slashHighlightIndex.value]
      if (cmd) {
        selectSlashCommand(cmd)
      } else {
        slashVisible.value = false
        handleSend()
      }
      return
    }
  }

  if (e.key !== 'Enter' || e.shiftKey) return
  if (isImeEnter(e)) return

  e.preventDefault()
  handleSend()
}

function handleInput(e: Event) {
  const el = e.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, 100) + 'px'
}

function removeAttachment(id: string) {
  const idx = attachments.value.findIndex(a => a.id === id)
  if (idx !== -1) {
    URL.revokeObjectURL(attachments.value[idx].url)
    attachments.value.splice(idx, 1)
  }
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

function isImage(type: string): boolean {
  return type.startsWith('image/')
}

// ─── Slash Command Selector ──────────────────────────────────────

interface SlashCommand {
  name: string
  aliases: string[]
  desc: string
  hint: string
  category: string
}

// Command definitions (name/aliases/hint are language-independent)
const SLASH_CMD_DEFS = [
  { name: 'new', aliases: ['reset'], descKey: 'new', hint: '', catKey: 'session' },
  { name: 'retry', aliases: [], descKey: 'retry', hint: '', catKey: 'session' },
  { name: 'undo', aliases: [], descKey: 'undo', hint: '', catKey: 'session' },
  { name: 'title', aliases: [], descKey: 'title', hint: '[name]', catKey: 'session' },
  { name: 'branch', aliases: ['fork'], descKey: 'branch', hint: '[name]', catKey: 'session' },
  { name: 'compress', aliases: [], descKey: 'compress', hint: '[focus topic]', catKey: 'session' },
  { name: 'rollback', aliases: [], descKey: 'rollback', hint: '[number]', catKey: 'session' },
  { name: 'stop', aliases: [], descKey: 'stop', hint: '', catKey: 'session' },
  { name: 'background', aliases: ['bg', 'btw'], descKey: 'background', hint: '<prompt>', catKey: 'session' },
  { name: 'agents', aliases: ['tasks'], descKey: 'agents', hint: '', catKey: 'session' },
  { name: 'queue', aliases: ['q'], descKey: 'queue', hint: '<prompt>', catKey: 'session' },
  { name: 'steer', aliases: [], descKey: 'steer', hint: '<prompt>', catKey: 'session' },
  { name: 'status', aliases: [], descKey: 'status', hint: '', catKey: 'session' },
  { name: 'profile', aliases: [], descKey: 'profile', hint: '', catKey: 'session' },
  { name: 'resume', aliases: [], descKey: 'resume', hint: '[name]', catKey: 'session' },
  // Configuration
  { name: 'model', aliases: ['provider'], descKey: 'model', hint: '[model] [--provider name] [--global]', catKey: 'config' },
  { name: 'personality', aliases: [], descKey: 'personality', hint: '[name]', catKey: 'config' },
  { name: 'yolo', aliases: [], descKey: 'yolo', hint: '', catKey: 'config' },
  { name: 'reasoning', aliases: [], descKey: 'reasoning', hint: '[level|show|hide]', catKey: 'config' },
  { name: 'fast', aliases: [], descKey: 'fast', hint: '[normal|fast|status]', catKey: 'config' },
  { name: 'voice', aliases: [], descKey: 'voice', hint: '[on|off|tts|status]', catKey: 'config' },
  // Tools
  { name: 'reload-mcp', aliases: ['reload_mcp'], descKey: 'reloadMcp', hint: '', catKey: 'tools' },
  // Info
  { name: 'commands', aliases: [], descKey: 'commands', hint: '[page]', catKey: 'info' },
  { name: 'help', aliases: [], descKey: 'help', hint: '', catKey: 'info' },
  { name: 'usage', aliases: [], descKey: 'usage', hint: '', catKey: 'info' },
  { name: 'insights', aliases: [], descKey: 'insights', hint: '[days]', catKey: 'info' },
  { name: 'debug', aliases: [], descKey: 'debug', hint: '', catKey: 'info' },
  // Gateway only
  { name: 'approve', aliases: [], descKey: 'approve', hint: '[session|always]', catKey: 'session' },
  { name: 'deny', aliases: [], descKey: 'deny', hint: '', catKey: 'session' },
  { name: 'sethome', aliases: ['set-home'], descKey: 'sethome', hint: '', catKey: 'session' },
  { name: 'update', aliases: [], descKey: 'update', hint: '', catKey: 'info' },
  { name: 'restart', aliases: [], descKey: 'restart', hint: '', catKey: 'info' },
]

const SLASH_COMMANDS = computed<SlashCommand[]>(() =>
  SLASH_CMD_DEFS.map(d => ({
    name: d.name,
    aliases: d.aliases,
    desc: t(`slashCmd.desc.${d.descKey}`),
    hint: d.hint,
    category: t(`slashCmd.category.${d.catKey}`),
  }))
)

const slashVisible = ref(false)
const slashHighlightIndex = ref(0)
const slashPanelRef = ref<HTMLDivElement>()

const slashQuery = computed(() => {
  const text = inputText.value
  if (!text.startsWith('/')) return ''
  const afterSlash = text.slice(1)
  const spaceIdx = afterSlash.indexOf(' ')
  return spaceIdx === -1 ? afterSlash : afterSlash.slice(0, spaceIdx)
})

const filteredSlashCommands = computed(() => {
  const q = slashQuery.value.toLowerCase()
  const cmds = SLASH_COMMANDS.value
  if (!q) return cmds
  return cmds.filter(
    (cmd: SlashCommand) =>
      cmd.name.toLowerCase().startsWith(q) ||
      cmd.aliases.some((a: string) => a.toLowerCase().startsWith(q)),
  )
})

// Group commands by category, preserving order of first appearance
const groupedSlashCommands = computed(() => {
  const groups: { category: string; commands: SlashCommand[] }[] = []
  let currentCat = ''
  for (const cmd of filteredSlashCommands.value) {
    if (cmd.category !== currentCat) {
      groups.push({ category: cmd.category, commands: [cmd] })
      currentCat = cmd.category
    } else {
      groups[groups.length - 1].commands.push(cmd)
    }
  }
  return groups
})

// Pre-compute flat index offsets for each group so the template can map group+cmd → flat index
const groupOffsets = computed(() => {
  const offsets: number[] = []
  let offset = 0
  for (const group of groupedSlashCommands.value) {
    offsets.push(offset)
    offset += group.commands.length
  }
  return offsets
})

/** Map (groupIndex, commandIndex) → flat index in filteredSlashCommands */
function getFlatIndex(gi: number, ci: number): number {
  return (groupOffsets.value[gi] ?? 0) + ci
}

// Reset highlight when filtered list changes
watch(filteredSlashCommands, (cmds) => {
  if (slashHighlightIndex.value >= cmds.length) {
    slashHighlightIndex.value = Math.max(0, cmds.length - 1)
  }
})

// Show/hide panel based on input
watch(inputText, () => {
  if (inputText.value.startsWith('/') && filteredSlashCommands.value.length > 0) {
    if (!slashVisible.value) {
      slashVisible.value = true
      slashHighlightIndex.value = 0
    }
  } else {
    slashVisible.value = false
  }
})

function selectSlashCommand(cmd: SlashCommand) {
  inputText.value = `/${cmd.name} `
  slashVisible.value = false
  nextTick(() => {
    textareaRef.value?.focus()
  })
}

function onSlashPanelClick(e: MouseEvent) {
  e.stopPropagation()
}

function onDocumentClick(e: MouseEvent) {
  if (slashVisible.value && slashPanelRef.value && !slashPanelRef.value.contains(e.target as Node)) {
    slashVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
})
</script>

<template>
  <div class="chat-input-area">
    <!-- Slash command selector panel -->
    <div
      v-if="slashVisible && filteredSlashCommands.length > 0"
      ref="slashPanelRef"
      class="slash-panel"
      @click="onSlashPanelClick"
    >
      <template v-for="(group, gi) in groupedSlashCommands" :key="group.category">
        <div class="slash-group-title">{{ group.category }}</div>
        <div
          v-for="(cmd, ci) in group.commands"
          :key="cmd.name"
          class="slash-item"
          :class="{ 'slash-item--active': slashHighlightIndex === getFlatIndex(gi, ci) }"
          @mouseenter="slashHighlightIndex = getFlatIndex(gi, ci)"
          @click="selectSlashCommand(cmd)"
        >
          <span class="slash-item-name">
            /{{ cmd.name }}
            <span v-if="cmd.aliases.length" class="slash-item-aliases">
              ({{ cmd.aliases.join(', ') }})
            </span>
          </span>
          <span class="slash-item-desc">
            {{ cmd.desc }}
            <span v-if="cmd.hint" class="slash-item-hint">{{ cmd.hint }}</span>
          </span>
        </div>
      </template>
    </div>

    <!-- Top bar: attach + context info -->
    <div class="input-top-bar">
      <NTooltip trigger="hover">
        <template #trigger>
          <NButton quaternary size="tiny" @click="handleAttachClick" circle>
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
            </template>
          </NButton>
        </template>
        {{ t('chat.attachFiles') }}
      </NTooltip>
      <span v-if="contextTokens > 0" class="context-info" :class="{ 'context-warning': usagePercent > 80 }">
        {{ formatTokens(contextTokens) }} / {{ formatTokens(effectiveContextLength) }} · {{ t('chat.contextRemaining') }} {{ formatTokens(remainingTokens) }}
      </span>
      <div v-if="contextTokens > 0" class="context-bar">
        <div
          class="context-bar-fill"
          :class="{
            'context-bar-warn': usagePercent > 60 && usagePercent <= 80,
            'context-bar-danger': usagePercent > 80,
          }"
          :style="{ width: `${usagePercent}%` }"
        />
      </div>
    </div>

    <!-- Attachment previews -->
    <div v-if="attachments.length > 0" class="attachment-previews">
      <div
        v-for="att in attachments"
        :key="att.id"
        class="attachment-preview"
        :class="{ image: isImage(att.type) }"
      >
        <template v-if="isImage(att.type)">
          <img :src="att.url" :alt="att.name" class="attachment-thumb" />
        </template>
        <template v-else>
          <div class="attachment-file">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span class="file-name">{{ att.name }}</span>
            <span class="file-size">{{ formatSize(att.size) }}</span>
          </div>
        </template>
        <button class="attachment-remove" @click="removeAttachment(att.id)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>

    <div
      class="input-wrapper"
      :class="{ 'drag-over': isDragging }"
      @dragover="handleDragOver"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <input
        ref="fileInputRef"
        type="file"
        multiple
        class="file-input-hidden"
        @change="handleFileChange"
      />
      <textarea
        ref="textareaRef"
        v-model="inputText"
        class="input-textarea"
        :placeholder="t('chat.inputPlaceholder')"
        rows="1"
        @keydown="handleKeydown"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @paste="handlePaste"
      ></textarea>
      <div class="input-actions">
        <NButton
          v-if="chatStore.isStreaming && settingsStore.display.busy_input_mode !== 'interrupt'"
          size="small"
          type="error"
          @click="chatStore.stopStreaming()"
        >
          {{ t('chat.stop') }}
        </NButton>
        <NButton
          size="small"
          type="primary"
          :disabled="!canSend || (chatStore.isStreaming && settingsStore.display.busy_input_mode !== 'interrupt')"
          @click="handleSend"
        >
          <template #icon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </template>
          {{ t('chat.send') }}
        </NButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.chat-input-area {
  position: relative;
  padding: 12px 20px 16px;
  border-top: 1px solid $border-color;
  flex-shrink: 0;
}

.input-top-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 0 6px;
}

.context-info {
  font-size: 11px;
  color: $text-muted;

  &.context-warning {
    color: #e8a735;
  }
}

.context-bar {
  width: 60px;
  height: 4px;
  background: rgba(128, 128, 128, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.context-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, rgba(128, 128, 128, 0.3), rgba(128, 128, 128, 0.6));
  border-radius: 2px;
  transition: width 0.3s ease;

  &.context-bar-warn {
    background: linear-gradient(90deg, #c98a1a, #e8a735);
  }

  &.context-bar-danger {
    background: linear-gradient(90deg, #c43a2a, #e85d4a);
  }
}

.attachment-previews {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 0 10px;
}

.attachment-preview {
  position: relative;
  border-radius: $radius-sm;
  overflow: hidden;
  background-color: $bg-secondary;
  border: 1px solid $border-color;

  &.image {
    width: 64px;
    height: 64px;
  }
}

.attachment-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.attachment-file {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 8px 12px;
  min-width: 80px;
  max-width: 140px;
  color: $text-secondary;

  .file-name {
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .file-size {
    font-size: 10px;
    color: $text-muted;
  }
}

.attachment-remove {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: var(--text-on-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity $transition-fast;

  .attachment-preview:hover & {
    opacity: 1;
  }
}

.file-input-hidden {
  display: none;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: $bg-input;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  padding: 10px 12px;
  transition: border-color $transition-fast, background-color $transition-fast;

  &:focus-within {
    border-color: $accent-primary;
  }

  .dark & {
    background-color: #333333;
  }
}

.input-textarea {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: $text-primary;
  font-family: $font-ui;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  max-height: 100px;
  min-height: 20px;
  overflow-y: auto;

  &::placeholder {
    color: $text-muted;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.input-actions {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
  align-items: center;
}

// Drag-over state
.input-wrapper.drag-over {
  border-color: var(--accent-info);
  border-style: dashed;
  background-color: rgba(var(--accent-info-rgb), 0.04);
}

// ─── Slash Command Panel ────────────────────────────────────

.slash-panel {
  position: absolute;
  bottom: 100%;
  left: 20px;
  right: 20px;
  margin-bottom: 6px;
  max-height: 280px;
  overflow-y: auto;
  background-color: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.12);
  z-index: 100;
  padding: 4px 0;

  .dark & {
    background-color: #2a2a2a;
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.4);
  }
}

.slash-group-title {
  font-size: 11px;
  color: $text-muted;
  padding: 6px 14px 2px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  user-select: none;
}

.slash-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 14px;
  cursor: pointer;
  transition: background-color $transition-fast;
  user-select: none;

  &:hover,
  &--active {
    background-color: rgba(var(--accent-primary-rgb), 0.08);
  }
}

.slash-item-name {
  font-family: $font-code;
  font-size: 13px;
  color: $accent-primary;
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 90px;
}

.slash-item-aliases {
  font-family: $font-ui;
  font-size: 11px;
  color: $text-muted;
  margin-left: 4px;
}

.slash-item-desc {
  font-size: 13px;
  color: $text-secondary;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.slash-item-hint {
  color: $text-muted;
  margin-left: 4px;
  font-family: $font-code;
  font-size: 12px;
}
</style>
