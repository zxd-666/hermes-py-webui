<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import MessageItem from "./MessageItem.vue";
import { useChatStore, type Message } from "@/stores/hermes/chat";
import { useProfilesStore } from "@/stores/hermes/profiles";
import { useSettingsStore } from "@/stores/hermes/settings";

const chatStore = useChatStore();
const profilesStore = useProfilesStore();
const settingsStore = useSettingsStore();
const { t } = useI18n();
const listRef = ref<HTMLElement>();

const hasLineage = computed(() => {
  const s = chatStore.activeSession;
  if (!s) return false;
  const parentId = s.parentSessionId;
  if (!parentId) return false;
  // Only show on leaf sessions (those visible in sidebar, with ancestors loaded).
  // Ancestor sessions (which users navigate into via the ancestor list)
  // should not show this prompt.
  if ((s.ancestors?.length || 0) === 0) return false;
  return !s.loadedParentIds?.includes(parentId);
});

const hasLoadedHistory = computed(() => (chatStore.activeSession?.loadedParentIds?.length || 0) > 0);

function navigateDivider(direction: 'up' | 'down') {
  const dividers = Array.from(document.querySelectorAll('.lineage-divider')) as HTMLElement[];
  if (dividers.length === 0) return;
  const container = listRef.value;
  if (!container) return;
  const viewTop = container.scrollTop;
  const viewBottom = viewTop + container.clientHeight;

  if (direction === 'up') {
    let target: HTMLElement | null = null;
    for (const d of dividers) {
      if (d.offsetTop < viewTop - 10) target = d;
      else break;
    }
    target = target || dividers[0];
    target.scrollIntoView({ block: 'start' });
  } else {
    let target: HTMLElement | null = null;
    for (const d of dividers) {
      if (d.offsetTop > viewBottom - 10) { target = d; break; }
    }
    target = target || dividers[dividers.length - 1];
    target.scrollIntoView({ block: 'start' });
  }
}

const lineageHint = computed(() => {
  const s = chatStore.activeSession;
  if (!s) return '';
  const count = (s.loadedParentIds?.length || 0) + 1;
  return `第 ${count} 段更早的记录`;
});

async function onLoadLineage() {
  await chatStore.loadParentSession();
  // Scroll to the newly loaded segment's divider (first one in list)
  nextTick(() => {
    const dividers = document.querySelectorAll('.lineage-divider');
    if (dividers.length > 0) {
      (dividers[0] as HTMLElement).scrollIntoView({ block: 'start' });
    }
  });
}

const displayMessages = computed(() =>
  chatStore.messages.filter((m) => m.role !== "tool"),
);

// Build render list: insert a divider after each parent segment's last message
type RenderItem =
  | { kind: 'msg'; message: Message }
  | { kind: 'divider'; segment: number };

const renderList = computed<RenderItem[]>(() => {
  const msgs = displayMessages.value;
  if (msgs.length === 0) return [];
  const items: RenderItem[] = [];
  for (let i = 0; i < msgs.length; i++) {
    items.push({ kind: 'msg', message: msgs[i] });
    // If this message has a segment and the next message has a different (or no) segment,
    // insert a divider after this message
    const curSeg = msgs[i].segment;
    const nextSeg = msgs[i + 1]?.segment;
    if (curSeg !== undefined && curSeg !== nextSeg) {
      items.push({ kind: 'divider', segment: curSeg });
    }
  }
  return items;
});

const noStreamDisplay = computed(() => !settingsStore.display.streaming);

const lastAssistantMsg = computed(() => {
  const msgs = displayMessages.value;
  for (let i = msgs.length - 1; i >= 0; i--) {
    if (msgs[i].role === 'assistant') return msgs[i];
  }
  return null;
});

function formatTokens(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
  return String(n)
}

function formatToolDuration(seconds: number): string {
  if (seconds < 1) return `${Math.round(seconds * 1000)}ms`
  if (seconds < 60) return `${Math.round(seconds * 10) / 10}s`
  const mins = Math.floor(seconds / 60)
  const secs = Math.round(seconds % 60)
  return `${mins}m ${secs}s`
}

const currentToolCalls = computed(() => {
  const msgs = chatStore.messages;
  // Find the last user message index
  let lastUserIdx = -1;
  for (let i = msgs.length - 1; i >= 0; i--) {
    if (msgs[i].role === "user") {
      lastUserIdx = i;
      break;
    }
  }
  // Only tool calls after the last user message, newest on top
  const tools = msgs.filter((m, i) => m.role === "tool" && i > lastUserIdx);
  return [...tools].reverse();
});

function isNearBottom(threshold = 200): boolean {
  const el = listRef.value;
  if (!el) return true;
  return el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
}

function scrollToBottom() {
  nextTick(() => {
    if (listRef.value) {
      listRef.value.scrollTop = listRef.value.scrollHeight;
    }
  });
}

function scrollToMessage(messageId: string) {
  nextTick(() => {
    const el = document.getElementById(`message-${messageId}`);
    if (el) {
      el.scrollIntoView({ block: 'center' });
    }
  });
}

// Scroll to bottom on session switch
watch(
  () => chatStore.activeSessionId,
  (id) => {
    if (!id) return;
    if (chatStore.focusMessageId) {
      nextTick(() => scrollToMessage(chatStore.focusMessageId!));
      return;
    }
    nextTick(() => scrollToBottom());
  },
  { immediate: true },
);

watch(
  () => chatStore.focusMessageId,
  (messageId) => {
    if (!messageId) return;
    scrollToMessage(messageId);
  },
);

// When a run starts (user just sent a message), always scroll to bottom once
watch(
  () => chatStore.isRunActive,
  (v) => {
    if (v) scrollToBottom();
  },
);

// During streaming, only auto-scroll if the user is already near the bottom
watch(
  () => chatStore.messages[chatStore.messages.length - 1]?.content,
  () => {
    if (chatStore.focusMessageId) {
      scrollToMessage(chatStore.focusMessageId);
      return;
    }
    if (!isNearBottom()) return;
    scrollToBottom();
  },
);
watch(currentToolCalls, () => {
  if (chatStore.focusMessageId) {
    scrollToMessage(chatStore.focusMessageId);
    return;
  }
  if (!isNearBottom()) return;
  scrollToBottom();
});
</script>

<template>
  <div ref="listRef" class="message-list" :class="{ compact: settingsStore.display.compact, 'no-stream': noStreamDisplay }">
    <div v-if="chatStore.messages.length === 0" class="empty-state">
      <img :src="profilesStore.activeAvatar || '/logo.png'" alt="Hermes" class="empty-logo" :class="{ 'avatar-logo': profilesStore.activeAvatar }" />
      <p>{{ t("chat.emptyState", { name: profilesStore.activeProfileName || 'Brave' }) }}</p>
    </div>
    <div v-if="hasLineage || hasLoadedHistory" class="lineage-bar">
      <button v-if="hasLoadedHistory" class="lineage-nav-btn" title="上一段" @click.stop="navigateDivider('up')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>
      </button>
      <div v-if="hasLineage" class="lineage-load" @click="onLoadLineage">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="lineage-icon">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>{{ lineageHint }}</span>
        <span class="lineage-action">加载</span>
      </div>
      <button v-if="hasLoadedHistory" class="lineage-nav-btn" title="下一段" @click.stop="navigateDivider('down')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
    </div>
    <template v-for="(item, idx) in renderList" :key="item.kind === 'divider' ? 'divider' : item.message.id">
      <div v-if="item.kind === 'divider'" class="lineage-divider">
        <span class="lineage-divider-line"></span>
        <span class="lineage-divider-text">更早的对话</span>
        <span class="lineage-divider-line"></span>
      </div>
      <MessageItem
        v-else
        :message="item.message"
        :highlight="chatStore.focusMessageId === item.message.id"
        :is-last-assistant="item.message === lastAssistantMsg"
      />
    </template>
    <Transition name="fade">
      <div v-if="chatStore.isRunActive" class="streaming-indicator">
        <div v-if="currentToolCalls.length > 0 || chatStore.compressionState" class="tool-calls-panel">
          <!-- Compression indicator -->
          <div v-if="chatStore.compressionState" class="tool-call-item compression-item">
            <svg
              v-if="chatStore.compressionState.compressing"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="tool-call-icon"
            >
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <svg
              v-else-if="chatStore.compressionState.compressed"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="tool-call-icon"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span class="tool-call-name">
              {{
                chatStore.compressionState.compressing
                  ? `Compressing... (${chatStore.compressionState.messageCount} msgs, ~${formatTokens(chatStore.compressionState.beforeTokens)} tokens)`
                  : chatStore.compressionState.compressed
                    ? `Compressed ${chatStore.compressionState.messageCount} msgs: ~${formatTokens(chatStore.compressionState.beforeTokens)} → ~${formatTokens(chatStore.compressionState.afterTokens)} tokens`
                    : `Compression skipped`
              }}
            </span>
            <span
              v-if="chatStore.compressionState.compressing"
              class="tool-call-spinner"
            ></span>
          </div>
          <!-- Tool calls -->
          <div
            v-for="tc in currentToolCalls"
            :key="tc.id"
            class="tool-call-item"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="tool-call-icon"
            >
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              />
            </svg>
            <span class="tool-call-name">{{ tc.toolName }}</span>
            <span v-if="tc.toolPreview" class="tool-call-preview">{{
              tc.toolPreview
            }}</span>
            <span
              v-if="tc.toolDuration && tc.toolStatus !== 'running'"
              class="tool-call-duration"
              :title="$t('chat.executionDuration')"
            >{{ formatToolDuration(tc.toolDuration) }}</span
            >
            <svg
              v-if="tc.toolStatus === 'done'"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              class="tool-call-success-icon"
            >
              <circle cx="12" cy="12" r="10" fill="currentColor" fill-opacity="0.15"/>
              <path
                d="M8 12L11 15L16 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <span
              v-if="tc.toolStatus === 'running'"
              class="tool-call-spinner"
            ></span>
            <svg
              v-if="tc.toolStatus === 'error'"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              class="tool-call-error-icon"
            >
              <circle cx="12" cy="12" r="10" fill="currentColor" fill-opacity="0.15"/>
              <path
                d="M15 9L9 15M9 9L15 15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables" as *;

.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: $bg-card;
  transition: gap 0.2s ease, padding 0.2s ease;

  &.compact {
    gap: 6px;
    padding: 12px 20px;
  }

  // Non-streaming: hide streaming content, show loading dots only
  &.no-stream :deep(.message.assistant .message-bubble.is-streaming) {
    .markdown-body,
    .msg-attachments,
    .thinking-block {
      display: none;
    }
  }

  .dark & {
    background-color: #333333;
  }
}

.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $text-muted;
  gap: 12px;

  .empty-logo {
    width: 48px;
    height: 48px;
    opacity: 0.25;

    &.avatar-logo {
      border-radius: 12px;
      object-fit: cover;
      opacity: 0.5;
    }
  }

  p {
    font-size: 14px;
  }
}

.lineage-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 2;
}

.lineage-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: $radius-sm;
  background: rgba(0, 0, 0, 0.03);
  color: $text-muted;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: $text-secondary;
  }

  .dark & {
    background: rgba(255, 255, 255, 0.06);
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }
}

.lineage-load {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 12px;
  color: $text-muted;
  background: rgba(0, 0, 0, 0.03);
  border-radius: $radius-sm;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    color: $text-secondary;
  }

  .dark & {
    background: rgba(255, 255, 255, 0.06);
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .lineage-icon {
    flex-shrink: 0;
    opacity: 0.7;
  }

  .lineage-action {
    color: $text-muted;
    font-size: 11px;
    opacity: 0.7;
  }
}

.lineage-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  user-select: none;

  .lineage-divider-line {
    flex: 1;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
    .dark & {
      background: rgba(255, 255, 255, 0.08);
    }
  }

  .lineage-divider-text {
    font-size: 11px;
    color: $text-muted;
    white-space: nowrap;
    opacity: 0.6;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.streaming-indicator {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 4px;
}

.tool-calls-panel {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 213px;
  overflow-y: auto;
  padding-top: 4px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.tool-call-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: $text-secondary;
  padding: 3px 8px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: $radius-sm;

  .dark & {
    background: rgba(255, 255, 255, 0.06);
  }

  &.compression-item {
    color: $text-muted;
    font-size: 10px;
  }

  .tool-call-icon {
    flex-shrink: 0;
    color: $text-muted;
  }

  .tool-call-name {
    font-family: $font-code;
    flex-shrink: 0;
  }

  .tool-call-preview {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 300px;
    color: $text-muted;
  }
}

.tool-call-spinner {
  width: 10px;
  height: 10px;
  border: 1.5px solid $text-muted;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  flex-shrink: 0;
}

.tool-call-error-icon {
  color: #ff4d4f;
  flex-shrink: 0;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-call-duration {
  font-size: 10px;
  color: $text-muted;
  font-family: $font-code;
  margin-left: 4px;
  flex-shrink: 0;
}

.tool-call-success-icon {
  color: #52c41a;
  flex-shrink: 0;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
