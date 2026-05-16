<script setup lang="ts">
import type { Message } from "@/stores/hermes/chat";
import { computed, onBeforeUnmount, ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useMessage, NPopover, useDialog } from "naive-ui";
import { downloadFile } from "@/api/hermes/download";
import { copyToClipboard } from "@/utils/clipboard";
import { fetchPrecedingUserMessage } from "@/api/hermes/favorites";
import { deleteMessage as deleteMessageApi } from "@/api/hermes/sessions";
import MarkdownRenderer from "./MarkdownRenderer.vue";
import { parseThinking, countThinkingChars } from "@/utils/thinking-parser";
import { useChatStore } from "@/stores/hermes/chat";
import { useFavoritesStore } from "@/stores/hermes/favorites";
import { useSettingsStore } from "@/stores/hermes/settings";
import { useProfilesStore } from "@/stores/hermes/profiles";
import {
  copyTextToClipboard,
  handleCodeBlockCopyClick,
  renderHighlightedCodeBlock,
} from "./highlight";

const TOOL_PAYLOAD_DISPLAY_LIMIT = 2000;

const props = defineProps<{ message: Message; highlight?: boolean; isLastAssistant?: boolean }>();
const { t } = useI18n();
const toast = useMessage();
const dialog = useDialog();

function copyMessage() {
  if (!props.message.content) return;
  copyToClipboard(props.message.content);
  toast.success(t('common.copied'));
}

const chatStore = useChatStore();
const favStore = useFavoritesStore();
const isSystem = computed(() => props.message.role === "system");
const toolExpanded = ref(false);
const previewUrl = ref<string | null>(null);

const settingsStore = useSettingsStore();
const profilesStore = useProfilesStore();

const assistantAvatar = computed(() => profilesStore.activeAvatar || '/logo.png');

const showCost = computed(() => !!settingsStore.display.show_cost);

// Track images that failed to load (file deleted or missing)
const brokenImages = ref(new Set<string>());

// --- Favorites ---
const isAssistant = computed(() => props.message.role === 'assistant');
const isFav = computed(() => isAssistant.value && !props.message.isStreaming && favStore.isFavorited(props.message.id));
const favLabel = computed(() => isFav.value ? t('favorites.cancelFavorite') : t('favorites.addFavorite'));
const favBusy = ref(false);

async function toggleFavorite() {
  if (favBusy.value || !isAssistant.value || props.message.isStreaming) return
  favBusy.value = true
  try {
    const nowFav = await favStore.toggle({
      message_id: props.message.id,
      session_id: props.message.sessionId || chatStore.activeSessionId || '',
      role: props.message.role,
      content: props.message.content || '',
      session_title: chatStore.activeSession?.title || '',
      message_ts: props.message.timestamp ? new Date(props.message.timestamp).toISOString() : '',
    })
    toast.success(nowFav ? t('favorites.favorited') : t('favorites.canceledFavorite'))
  } finally {
    favBusy.value = false
  }
}

const sessionCost = computed(() => {
  const session = chatStore.activeSession;
  if (!session) return null;
  const input = session.inputTokens || 0;
  const output = session.outputTokens || 0;
  if (input === 0 && output === 0) return null;
  return { input, output };
});

function formatTokens(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
  return String(n)
}

// Copy entire bubble content
const copyableContent = computed(() => {
  if (props.message.role === 'tool') return null
  const content = props.message.content || ''
  if (!content.trim()) return null
  return content
})

const canDelete = computed(() => {
  return !props.message.isStreaming && props.message.role !== 'system'
})

const deleteBusy = ref(false)

async function handleDeleteMessage() {
  if (deleteBusy.value || !canDelete.value) return
  dialog.warning({
    title: t('chat.deleteMessage'),
    content: t('chat.deleteMessageConfirm'),
    positiveText: t('common.confirm'),
    negativeText: t('common.cancel'),
    onPositiveClick: async () => {
      deleteBusy.value = true
      try {
        const sessionId = props.message.sessionId || chatStore.activeSessionId || ''
        if (!sessionId) return
        const ok = await deleteMessageApi(sessionId, Number(props.message.id))
        if (ok) {
          chatStore.removeMessage(props.message.id)
          toast.success(t('chat.messageDeleted'))
        } else {
          toast.error(t('common.operationFailed'))
        }
      } catch {
        toast.error(t('common.operationFailed'))
      } finally {
        deleteBusy.value = false
      }
    },
  })
}

async function copyBubbleContent() {
  const text = copyableContent.value
  if (!text) return
  const ok = await copyToClipboard(text)
  if (ok) {
    toast.success(t('chat.copiedBubble'))
    return
  }
  toast.error(t('chat.copyFailed'))
}

// Download bubble content as markdown (same logic as FavoritesView)
function sanitizeFilename(name: string): string {
  return name.replace(/[\\/:*?"<>|\n\r]/g, '_').replace(/\s+/g, ' ').trim().slice(0, 80) || 'untitled'
}

async function downloadBubbleContent() {
  const text = copyableContent.value
  if (!text) return
  let filename = sanitizeFilename(chatStore.activeSession?.title || 'Hermes')
  let userContent = ''
  try {
    const sid = props.message.sessionId || chatStore.activeSessionId
    if (sid) {
      userContent = await fetchPrecedingUserMessage(props.message.id, sid) || ''
      if (userContent) filename = sanitizeFilename(userContent)
    }
  } catch { /* fallback to session title */ }

  const lines = [
    `# ${chatStore.activeSession?.title || 'Hermes'}`,
    '',
  ]
  if (userContent) {
    lines.push('## User')
    lines.push('')
    lines.push(userContent)
    lines.push('')
    lines.push('---')
    lines.push('')
  }
  lines.push('## AI')
  lines.push('')
  lines.push(text)
  const blob = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}.md`
  a.click()
  URL.revokeObjectURL(url)
}

const parsedThinking = computed(() =>
  parseThinking(props.message.content || "", { streaming: !!props.message.isStreaming }),
);

// 优先使用来自 reasoning 字段/事件的思考文本；否则回退到从 content 解析的  Thought 标签。
// 当 reasoning 字段存在时，跳过 content 中解析出的 segments——hermes-agent 会把
// 相同的 thinking 内容同时放在 reasoning 字段和 content 的  Thought 标签里，拼接会重复。
const hasReasoningField = computed(() => !!(props.message.reasoning && props.message.reasoning.length > 0));

const hasThinking = computed(() => hasReasoningField.value || parsedThinking.value.hasThinking);

const thinkingFullText = computed(() => {
  const parts: string[] = [];
  if (props.message.reasoning) parts.push(props.message.reasoning);
  // Only parse content segments when reasoning field is absent — avoids duplication
  if (!hasReasoningField.value) parts.push(...parsedThinking.value.segments);
  // Pending (open tag in streaming) is always included — it's content the reasoning
  // field hasn't captured yet during mid-stream scenarios
  if (parsedThinking.value.pending) parts.push(parsedThinking.value.pending);
  return parts.join("\n\n");
});

const thinkingCharCount = computed(() => {
  // Match thinkingFullText logic: reasoning field takes priority
  if (hasReasoningField.value) {
    let count = [...(props.message.reasoning || '')].length;
    if (parsedThinking.value.pending) count += [...(parsedThinking.value.pending || '')].length;
    return count;
  }
  return countThinkingChars(parsedThinking.value);
});

// 流式思考态：仍有未闭合 <think> 标签，或 reasoning 有内容但正文尚未开始。
const thinkingStreamingNow = computed(() => {
  if (!props.message.isStreaming) return false;
  if (parsedThinking.value.pending !== null) return true;
  if (hasReasoningField.value && !props.message.content) return true;
  return false;
});

const thinkingOverride = ref<boolean | null>(null);

// Context compaction detection
const COMPACTION_PREFIX = '[CONTEXT COMPACTION';
const isCompaction = computed(() =>
  props.message.role === 'assistant' &&
  !!(props.message.content || '').trimStart().startsWith(COMPACTION_PREFIX),
);
const compactionExpanded = ref(false);
function toggleCompaction() {
  compactionExpanded.value = !compactionExpanded.value;
}
const compactionBody = computed(() => {
  const c = (props.message.content || '').trimStart();
  if (!c.startsWith(COMPACTION_PREFIX)) return '';
  // Find the end of the compaction marker line ("--- END OF CONTEXT SUMMARY ---")
  const endMarker = '--- END OF CONTEXT SUMMARY ---';
  const endIdx = c.indexOf(endMarker);
  if (endIdx === -1) return c;
  return c.slice(endIdx + endMarker.length).trim();
});

const thinkingExpanded = computed(() => {
  if (thinkingStreamingNow.value) return true;
  if (thinkingOverride.value !== null) return thinkingOverride.value;
  return !!settingsStore.display.show_reasoning;
});

function toggleThinking() {
  thinkingOverride.value = !thinkingExpanded.value;
}

const nowTick = ref(Date.now());
let tickTimer: number | null = null;

function ensureTick() {
  const ob = chatStore.getThinkingObservation(props.message.id);
  const shouldTick = !!(
    props.message.isStreaming &&
    ob?.startedAt !== undefined &&
    ob.endedAt === undefined
  );
  if (shouldTick && tickTimer === null) {
    tickTimer = window.setInterval(() => {
      nowTick.value = Date.now();
    }, 1000);
  } else if (!shouldTick && tickTimer !== null) {
    window.clearInterval(tickTimer);
    tickTimer = null;
  }
}

watchEffect(ensureTick);

onBeforeUnmount(() => {
  if (tickTimer !== null) window.clearInterval(tickTimer);
});

const thinkingDurationMs = computed<number | null>(() => {
  const ob = chatStore.getThinkingObservation(props.message.id);
  if (!ob?.startedAt) return null;
  const startedAt = ob.startedAt!; // Non-null assertion after check
  const end = ob?.endedAt ?? (props.message.isStreaming ? nowTick.value : startedAt);
  return Math.max(0, end - startedAt);
});

function formatDuration(ms: number): string {
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const r = s % 60;
  return r === 0 ? `${m}m` : `${m}m ${r}s`;
}

const timeStr = computed(() => {
  const d = new Date(props.message.timestamp);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
});

function isImage(type: string): boolean {
  return type.startsWith("image/");
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

/**
 * Extract the upload file path from message content for a given attachment.
 * Upload format in content: [File: name.txt](/tmp/hermes-uploads/abc123.txt)
 */
function getFilePathFromContent(attName: string): string | null {
  const content = props.message.content || "";
  const regex = /\[File:\s*([^\]]+)\]\(([^)]+)\)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    if (match[1].trim() === attName.trim()) return match[2];
  }
  return null;
}

function handleAttachmentDownload(att: { name: string; url: string; type: string }) {
  if (att.url && (att.url.startsWith("/api/") || att.url.startsWith("http"))) {
    const loading = toast.loading(t("download.downloading"), { duration: 0 });
    const loadStart = Date.now();
    fetch(att.url)
      .then(async res => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.error || body.code === "FILE_NOT_FOUND" ? t("download.fileNotFound") : `HTTP ${res.status}`);
        }
        return res.blob();
      })
      .then(blob => {
        const elapsed = Date.now() - loadStart;
        const minShow = 500;
        const delay = Math.max(0, minShow - elapsed);
        setTimeout(() => loading.destroy(), delay);
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = att.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      })
      .catch((err: Error) => {
        loading.destroy();
        toast.error(err.message || t("download.downloadFailed"));
      });
    return;
  }
  if (att.url && att.url.startsWith("blob:")) {
    const a = document.createElement("a");
    a.href = att.url;
    a.download = att.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

type ToolPayload = {
  full: string;
  display: string;
  language?: string;
};

function formatToolPayload(raw?: string): ToolPayload {
  if (!raw) {
    return { full: "", display: "" };
  }

  try {
    const full = JSON.stringify(JSON.parse(raw), null, 2);
    return {
      full,
      display:
        full.length > TOOL_PAYLOAD_DISPLAY_LIMIT
          ? full.slice(0, TOOL_PAYLOAD_DISPLAY_LIMIT) + "\n" + t("chat.truncated")
          : full,
      language: "json",
    };
  } catch {
    return {
      full: raw,
      display:
        raw.length > TOOL_PAYLOAD_DISPLAY_LIMIT
          ? raw.slice(0, TOOL_PAYLOAD_DISPLAY_LIMIT) + "\n" + t("chat.truncated")
          : raw,
    };
  }
}

function renderToolPayload(content: string, language?: string): string {
  return renderHighlightedCodeBlock(content, language, t("common.copy"), {
    maxHighlightLength: TOOL_PAYLOAD_DISPLAY_LIMIT,
  });
}

async function handleToolDetailClick(event: MouseEvent): Promise<void> {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const button = target.closest<HTMLElement>("[data-copy-code=\"true\"]");
  if (!button) return;

  event.preventDefault();

  const source = button.closest<HTMLElement>("[data-copy-source]")?.dataset.copySource;
  if (source === "tool-args" && fullToolArgs.value) {
    const ok = await copyTextToClipboard(fullToolArgs.value);
    if (ok) toast.success(t("common.copied"));
    else toast.error(t("chat.copyFailed"));
    return;
  }
  if (source === "tool-result" && fullToolResult.value) {
    const ok = await copyTextToClipboard(fullToolResult.value);
    if (ok) toast.success(t("common.copied"));
    else toast.error(t("chat.copyFailed"));
    return;
  }

  const copyResult = await handleCodeBlockCopyClick(event);
  if (copyResult) toast.success(t("common.copied"));
  else if (copyResult === false) toast.error(t("chat.copyFailed"));
}

const hasAttachments = computed(
  () => (props.message.attachments?.length ?? 0) > 0,
);

const hasToolDetails = computed(
  () => !!(props.message.toolArgs || props.message.toolResult),
);

const toolArgsPayload = computed(() => formatToolPayload(props.message.toolArgs));
const toolResultPayload = computed(() => formatToolPayload(props.message.toolResult));

const fullToolArgs = computed(() => toolArgsPayload.value.full);
const formattedToolArgs = computed(() => toolArgsPayload.value.display);
const fullToolResult = computed(() => toolResultPayload.value.full);
const formattedToolResult = computed(() => toolResultPayload.value.display);

const renderedToolArgs = computed(() => {
  if (!formattedToolArgs.value) return "";
  return renderToolPayload(
    formattedToolArgs.value,
    toolArgsPayload.value.language,
  );
});

const renderedToolResult = computed(() => {
  if (!formattedToolResult.value) return "";
  return renderToolPayload(
    formattedToolResult.value,
    toolResultPayload.value.language,
  );
});
</script>

<template>
  <div
    class="message"
    :class="[message.role, { highlight }]"
    :id="`message-${message.id}`"
  >
    <template v-if="message.role === 'tool'">
      <div
        class="tool-line"
        :class="{ expandable: hasToolDetails }"
        @click="hasToolDetails && (toolExpanded = !toolExpanded)"
      >
        <svg
          v-if="hasToolDetails"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="tool-chevron"
          :class="{ rotated: toolExpanded }"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <svg
          v-else
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="tool-icon"
        >
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          />
        </svg>
        <span class="tool-name">{{ message.toolName }}</span>
        <span
          v-if="message.toolPreview && !toolExpanded"
          class="tool-preview"
          >{{ message.toolPreview }}</span
        >
        <span
          v-if="message.toolStatus === 'running'"
          class="tool-spinner"
        ></span>
        <span v-if="message.toolStatus === 'error'" class="tool-error-badge">{{
          t("chat.error")
        }}</span>
      </div>
      <div v-if="toolExpanded && hasToolDetails" class="tool-details" @click="handleToolDetailClick">
        <div v-if="formattedToolArgs" class="tool-detail-section" data-copy-source="tool-args">
          <div class="tool-detail-label">{{ t("chat.arguments") }}</div>
          <div class="tool-detail-code-block" v-html="renderedToolArgs"></div>
        </div>
        <div v-if="formattedToolResult" class="tool-detail-section" data-copy-source="tool-result">
          <div class="tool-detail-label">{{ t("chat.result") }}</div>
          <div class="tool-detail-code-block" v-html="renderedToolResult"></div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="msg-body">
        <NPopover v-if="isAssistant && !message.isStreaming" trigger="click" placement="bottom-start" :raw="true">
          <template #trigger>
            <img
              :src="assistantAvatar"
              alt="Hermes"
              class="msg-avatar"
              :class="{ 'fav-active': isFav }"
              @dblclick="copyMessage"
            />
          </template>
          <div class="fav-popover" @click="toggleFavorite">
            <span class="fav-popover-icon">{{ isFav ? '⭐' : '☆' }}</span>
            <span>{{ favLabel }}</span>
          </div>
        </NPopover>
        <img
          v-else-if="message.role === 'assistant'"
          :src="assistantAvatar"
          alt="Hermes"
          class="msg-avatar"
          @dblclick="copyMessage"
        />
        <div class="msg-content" :class="message.role">
          <div class="message-bubble" :class="{ system: isSystem, 'is-streaming': message.isStreaming }">
            <div v-if="hasAttachments" class="msg-attachments">
              <div
                v-for="att in message.attachments"
                :key="att.id"
                class="msg-attachment"
                :class="{ image: isImage(att.type) }"
              >
                <template v-if="isImage(att.type) && att.url">
                  <img
                    v-if="!brokenImages.has(att.id)"
                    :src="att.url"
                    :alt="att.name"
                    class="msg-attachment-thumb"
                    @click="previewUrl = att.url"
                    @error="brokenImages.add(att.id)"
                  />
                  <div v-else class="msg-attachment-broken" :title="t('download.fileNotFound')">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                      <line x1="2" y1="2" x2="22" y2="22" />
                    </svg>
                    <span class="broken-label">{{ t('download.fileNotFound') }}</span>
                  </div>
                </template>
                <template v-else>
                  <div class="msg-attachment-file" @click="handleAttachmentDownload(att)" style="cursor: pointer;" :title="t('download.downloadFile')">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span class="att-name">{{ att.name }}</span>
                    <span class="att-size">{{ formatSize(att.size) }}</span>
                    <svg class="att-download-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                </template>
              </div>
            </div>
            <div
              v-if="hasThinking"
              class="thinking-block"
              :class="{ expanded: thinkingExpanded }"
            >
              <div class="thinking-header" @click="toggleThinking">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="thinking-chevron"
                  :class="{ rotated: thinkingExpanded }"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span class="thinking-icon">💭</span>
                <span class="thinking-label">
                  {{
                    thinkingStreamingNow
                      ? t('chat.thinkingInProgress')
                      : t('chat.thinkingLabel')
                  }}
                </span>
                <span v-if="thinkingDurationMs !== null && thinkingDurationMs > 0" class="thinking-meta">
                  · {{ t('chat.thinkingDuration', { duration: formatDuration(thinkingDurationMs) }) }}
                </span>
                <span class="thinking-meta">
                  · {{ t('chat.thinkingChars', { count: thinkingCharCount }) }}
                </span>
              </div>
              <div v-if="thinkingExpanded" class="thinking-body">
                <MarkdownRenderer :content="thinkingFullText" />
              </div>
            </div>
            <!-- Context compaction block -->
            <div v-if="isCompaction" class="compaction-block" :class="{ expanded: compactionExpanded }">
              <div class="compaction-header" @click="toggleCompaction">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="compaction-chevron"
                  :class="{ rotated: compactionExpanded }"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span class="compaction-icon">📦</span>
                <span class="compaction-label">{{ t('chat.compactionLabel') }}</span>
              </div>
              <div v-if="compactionExpanded && compactionBody" class="compaction-body">
                <MarkdownRenderer :content="compactionBody" />
              </div>
            </div>
            <MarkdownRenderer
              v-else-if="parsedThinking.body"
              :content="parsedThinking.body"
            />

            <span v-if="message.isStreaming && !message.content" class="streaming-dots">
              <span></span><span></span><span></span>
            </span>
          </div>
          <div class="message-meta">
            <button
              v-if="copyableContent"
              class="copy-bubble-btn"
              @click="copyBubbleContent"
              :title="t('chat.copyBubble')"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </button>
            <button
              v-if="copyableContent && isAssistant && !message.isStreaming"
              class="copy-bubble-btn"
              @click="downloadBubbleContent"
              :title="t('chat.downloadBubble')"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </button>
            <button
              v-if="isAssistant && !message.isStreaming"
              class="copy-bubble-btn"
              :class="{ 'fav-active': isFav }"
              :title="favLabel"
              @click="toggleFavorite"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" :fill="isFav ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
            <button
              v-if="canDelete"
              class="copy-bubble-btn delete-msg-btn"
              :title="t('chat.deleteMessage')"
              :disabled="deleteBusy"
              @click="handleDeleteMessage"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6"/>
                <path d="M14 11v6"/>
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
              </svg>
            </button>
            <span
              v-if="showCost && sessionCost && props.isLastAssistant && !message.isStreaming"
              class="message-cost"
            >{{ formatTokens(sessionCost.input) }} in · {{ formatTokens(sessionCost.output) }} out</span>
            <span class="message-time">{{ timeStr }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
  <Teleport to="body">
    <div v-if="previewUrl" class="image-preview-overlay" @click.self="previewUrl = null">
      <img :src="previewUrl" class="image-preview-img" @click="previewUrl = null" />
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@use "@/styles/variables" as *;

.message {
  display: flex;
  flex-direction: column;
  animation: msgFadeIn 0.3s ease-out;

@keyframes msgFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

  &.user {
    align-items: flex-end;

    .msg-body {
      max-width: 75%;
    }

    .msg-content.user {
      align-items: flex-end;
    }

    .message-bubble {
      background-color: $msg-user-bg;
      border-radius: $radius-md $radius-md 4px $radius-md;

      .dark & {
        background-color: rgba(var(--accent-primary-rgb), 0.08);
      }
    }
  }

  &.assistant {
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;

    .msg-body {
      max-width: 80%;
    }

    .msg-avatar {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      margin-top: 2px;
      cursor: pointer;
      transition: filter 0.2s;

      &.fav-active {
        filter: drop-shadow(0 0 4px rgba(255, 193, 7, 0.5));
      }
    }

    .message-bubble {
      background-color: transparent;
      border-radius: $radius-md $radius-md $radius-md 4px;
      padding: 4px 0 2px;
    }

    .dark & .message-bubble {
      background-color: transparent;
    }
  }

  &.tool {
    align-items: flex-start;
  }

  &.system {
    align-items: flex-start;

    .message-bubble.system {
      border-left: 3px solid $warning;
      border-radius: $radius-sm;
      max-width: 80%;
      background-color: rgba(var(--warning-rgb), 0.06);
    }
  }

  &.highlight {
    .message-bubble {
      box-shadow: 0 0 0 1px rgba(var(--accent-primary-rgb), 0.45);
    }
  }
}

.msg-body {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 85%;
}

.msg-content {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.message-bubble {
  padding: 10px 16px 8px;
  font-size: 14px;
  line-height: 1.7;
  word-break: break-word;
  border-radius: $radius-md;
  max-width: 100%;
}

.msg-attachments {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.msg-attachment {
  border-radius: $radius-sm;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.04);
  border: 1px solid $border-light;

  &.image {
    max-width: 200px;
  }
}

.msg-attachment-thumb {
  display: block;
  max-width: 200px;
  max-height: 160px;
  object-fit: contain;
  cursor: pointer;
}

.msg-attachment-broken {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border: 1px dashed rgba(var(--text-secondary-rgb, 150, 150, 150), 0.4);
  border-radius: 8px;
  background: rgba(var(--text-secondary-rgb, 150, 150, 150), 0.05);
  max-width: 240px;

  .broken-label {
    font-size: 12px;
    color: $text-muted;
  }
}

.msg-attachment-file {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 12px;
  color: $text-secondary;

  .att-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 160px;
  }

  .att-size {
    color: $text-muted;
    font-size: 11px;
    flex-shrink: 0;
  }
}

.thinking-block {
  margin-bottom: 8px;
  padding: 4px 0;
  border-bottom: 1px dashed $border-light;

  .thinking-header {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: $text-muted;
    cursor: pointer;
    padding: 2px 4px;
    border-radius: $radius-sm;
    user-select: none;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }
  }

  .thinking-chevron {
    flex-shrink: 0;
    transition: transform 0.15s ease;

    &.rotated {
      transform: rotate(90deg);
    }
  }

  .thinking-icon {
    font-size: 11px;
    flex-shrink: 0;
  }

  .thinking-label {
    font-weight: 500;
    flex-shrink: 0;
  }

  .thinking-meta {
    color: $text-muted;
    font-variant-numeric: tabular-nums;
  }

  .thinking-body {
    margin-top: 6px;
    padding: 6px 10px;
    border-left: 2px solid $border-light;
    font-size: 13px;
    opacity: 0.85;
    font-style: italic;

    :deep(p) { margin: 0.3em 0; }
  }
}

.compaction-block {
  margin-bottom: 4px;

  .compaction-header {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: $text-muted;
    cursor: pointer;
    padding: 1px 4px;
    border-radius: $radius-sm;
    user-select: none;
    line-height: 1.4;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }
  }

  .compaction-chevron {
    flex-shrink: 0;
    transition: transform 0.15s ease;

    &.rotated {
      transform: rotate(90deg);
    }
  }

  .compaction-icon {
    font-size: 11px;
    flex-shrink: 0;
  }

  .compaction-label {
    font-weight: 500;
    flex-shrink: 0;
  }

  .compaction-body {
    margin-top: 6px;
    padding: 6px 10px;
    border-left: 2px solid $border-light;
    font-size: 12px;
    opacity: 0.7;
    color: $text-muted;

    :deep(p) { margin: 0.3em 0; }
  }
}

.message-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
  padding-left: 0;
  opacity: 0;
  transition: opacity 0.15s ease;

  .message:hover & {
    opacity: 1;
  }
}

.message-model {
  font-size: 11px;
  color: $text-muted;
  user-select: text;
  white-space: nowrap;
}

.copy-bubble-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: $text-muted;
  cursor: pointer;
  border-radius: $radius-sm;
  padding: 0;
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: $text-secondary;
    background: rgba(0, 0, 0, 0.06);
  }

  .dark & {
    color: var(--text-muted);

    &:hover {
      color: var(--text-secondary);
      background: rgba(255, 255, 255, 0.08);
    }
  }
}

.copy-bubble-btn.fav-active {
  color: var(--accent-primary);

  .dark & {
    color: var(--accent-primary);

    &:hover {
      color: var(--accent-hover);
    }
  }

  &:hover {
    color: var(--accent-hover);
  }
}

.message-time {
  font-size: 11px;
  color: $text-muted;
  user-select: none;

  .dark & {
    color: var(--text-muted);
  }
}

.message-cost {
  font-size: 10px;
  color: $text-muted;
  font-family: $font-code;
  opacity: 0.7;
}

.tool-line {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: $text-muted;
  padding: 2px 4px;
  border-radius: $radius-sm;

  &.expandable {
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }
  }

  .tool-name {
    font-family: $font-code;
    flex-shrink: 0;
  }

  .tool-preview {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 400px;
  }
}

.tool-chevron {
  flex-shrink: 0;
  transition: transform 0.15s ease;

  &.rotated {
    transform: rotate(90deg);
  }
}

.tool-spinner {
  width: 10px;
  height: 10px;
  border: 1.5px solid $text-muted;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  flex-shrink: 0;
}

.tool-error-badge {
  font-size: 9px;
  color: $error;
  background: rgba(var(--error-rgb), 0.08);
  padding: 0 4px;
  border-radius: 3px;
  line-height: 14px;
  margin-left: 4px;
}

.tool-details {
  margin-left: 16px;
  margin-top: 2px;
  border-left: 2px solid $border-light;
  padding-left: 10px;
}

.tool-detail-section {
  margin-bottom: 6px;
}

.tool-detail-label {
  font-size: 10px;
  font-weight: 600;
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
}

.tool-detail-code-block {
  :deep(.hljs-code-block) {
    margin: 0;
  }

  :deep(.code-header) {
    background: rgba(0, 0, 0, 0.02);
  }

  :deep(code.hljs) {
    font-size: 11px;
    max-height: 300px;
    overflow-y: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.streaming-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: $text-muted;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 0.8s infinite;
}

.streaming-dots {
  display: flex;
  gap: 4px;
  padding: 4px 0;

  span {
    width: 6px;
    height: 6px;
    background-color: $text-muted;
    border-radius: 50%;
    animation: pulse 1.4s infinite ease-in-out;

    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

@keyframes pulse {
  0%,
  80%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}

.image-preview-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.image-preview-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
}

@media (max-width: $breakpoint-mobile) {
  .message.user .msg-body {
    max-width: 100%;
  }

  .message.assistant .msg-body {
    max-width: 100%;
  }

  .message.system .msg-body {
    max-width: 100%;
  }
}

.fav-popover {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  color: $text-primary;
  background: $bg-card;
  border-radius: $radius-sm;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
}

.fav-popover-icon {
  font-size: 15px;
  flex-shrink: 0;
}
</style>
