<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useMessage } from 'naive-ui'
import { useFavoritesStore } from '@/stores/hermes/favorites'
import { useChatStore } from '@/stores/hermes/chat'
import { fetchPrecedingUserMessage, type FavoriteItem } from '@/api/hermes/favorites'
import { getSourceLabel } from '@/shared/session-display'
import MarkdownRenderer from '@/components/hermes/chat/MarkdownRenderer.vue'

const { t } = useI18n()
const toast = useMessage()
const router = useRouter()
const favStore = useFavoritesStore()
const chatStore = useChatStore()

onMounted(() => { favStore.loadAll() })

const TRUNCATE_LEN = 280
const expandedIds = ref<Set<number>>(new Set())

function toggleExpand(id: number) {
  if (expandedIds.value.has(id)) expandedIds.value.delete(id)
  else expandedIds.value.add(id)
}

function isExpanded(id: number) { return expandedIds.value.has(id) }

const truncatedContent = (content: string) => {
  if (!content || content.length <= TRUNCATE_LEN) return content
  return content.slice(0, TRUNCATE_LEN) + '...'
}

async function handleRemove(item: any) {
  await favStore.toggle({
    message_id: item.message_id,
    session_id: item.session_id,
    role: item.role,
    content: item.content,
  })
  toast.success(t('favorites.canceledFavorite'))
}

function goToSession(item: any) {
  chatStore.switchSession(item.session_id, item.message_id)
  router.push({ name: 'hermes.chat' })
}

function formatTime(ts: string) {
  if (!ts) return ''
  const d = new Date(ts + 'Z')
  if (isNaN(d.getTime())) {
    // Try ISO format without Z suffix
    const d2 = new Date(ts)
    if (isNaN(d2.getTime())) return ts
    return d2.toLocaleString()
  }
  return d.toLocaleString()
}

async function copyContent(item: any) {
  try {
    await navigator.clipboard.writeText(item.content)
    toast.success(t('favorites.copied'))
  } catch {
    toast.error(t('common.operationFailed'))
  }
}

function sanitizeFilename(name: string): string {
  return name.replace(/[\\/:*?"<>|\n\r]/g, '_').replace(/\s+/g, ' ').trim().slice(0, 80) || 'untitled'
}

async function downloadMd(item: any) {
  // Try to get the preceding user message as filename
  let filename = sanitizeFilename(item.session_title || 'Favorites')
  try {
    const userContent = await fetchPrecedingUserMessage(item.message_id, item.session_id)
    if (userContent) {
      filename = sanitizeFilename(userContent)
    }
  } catch { /* fallback to session title */ }

  const lines = [
    `# ${item.session_title || 'Favorites'}`,
    `> ${formatTime(item.favorited_at)} · ${item.role === 'assistant' ? 'AI' : 'User'}`,
    '',
    item.content,
  ]
  const blob = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}.md`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="favorites-view">
    <header class="chat-header">
      <div class="header-left">
        <span class="header-session-title">{{ t('favorites.title') }}</span>
        <span v-if="favStore.total > 0" class="fav-count">{{ favStore.total }}</span>
      </div>
    </header>

    <div v-if="favStore.loading" class="fav-loading">{{ t('common.loading') }}...</div>

    <div v-else-if="favStore.items.length === 0" class="fav-empty">
      <div class="fav-empty-icon">⭐</div>
      <div class="fav-empty-text">{{ t('favorites.empty') }}</div>
      <div class="fav-empty-hint">{{ t('favorites.emptyHint') }}</div>
    </div>

    <div v-else class="fav-list-scroll">
      <div class="fav-list">
      <div v-for="item in favStore.items" :key="item.id" class="fav-card">
        <div class="fav-header">
          <span class="fav-badge">{{ getSourceLabel(item.source) || 'Hermes' }}</span>
          <span class="fav-session" @click="goToSession(item)">
            {{ item.session_title || item.session_id.slice(0, 12) }}
          </span>
          <span class="fav-time">{{ formatTime(item.favorited_at) }}</span>
          <div class="fav-card-actions">
            <button class="fav-action-btn" @click="copyContent(item)" :title="t('favorites.copy')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
            </button>
            <button class="fav-action-btn" @click="downloadMd(item)" :title="t('favorites.download')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </button>
            <button class="fav-action-btn fav-remove-btn" @click="handleRemove(item)" :title="t('favorites.cancelFavorite')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="fav-content" :class="{ expanded: isExpanded(item.id) }">
          <MarkdownRenderer :content="isExpanded(item.id) ? item.content : truncatedContent(item.content)" />
        </div>
        <button v-if="item.content && item.content.length > TRUNCATE_LEN" class="fav-expand-btn" @click="toggleExpand(item.id)">
          {{ isExpanded(item.id) ? '收起' : '展开全部' }}
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables" as *;

.favorites-view {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
}

.fav-count {
  font-size: 12px;
  color: $text-muted;
  background: rgba(var(--accent-primary-rgb), 0.1);
  padding: 2px 8px;
  border-radius: 10px;
}

.fav-loading {
  text-align: center;
  padding: 60px 0;
  color: $text-muted;
}

.fav-empty {
  text-align: center;
  padding: 80px 0;
  color: $text-muted;
}

.fav-empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.4;
}

.fav-empty-text {
  font-size: 16px;
  margin-bottom: 8px;
}

.fav-empty-hint {
  font-size: 13px;
  opacity: 0.7;
}

.fav-list-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
}

.fav-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fav-card {
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  padding: 16px;
  transition: border-color 0.15s;

  &:hover {
    border-color: rgba(var(--accent-primary-rgb), 0.3);
  }
}

.fav-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.fav-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: $radius-sm;
  background: rgba(var(--accent-primary-rgb), 0.1);
  color: $accent-primary;
  flex-shrink: 0;
}

.fav-session {
  font-size: 12px;
  color: $text-secondary;
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: $accent-primary;
  }
}

.fav-time {
  font-size: 11px;
  color: $text-muted;
  margin-left: auto;
}

.fav-card-actions {
  display: flex;
  align-items: center;
  gap: 2px;
}

.fav-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  background: transparent;
  color: $text-muted;
  cursor: pointer;
  border-radius: $radius-sm;
  padding: 0;
  transition: all 0.15s;

  &:hover {
    color: $text-secondary;
    background: rgba(var(--accent-primary-rgb), 0.08);
  }
}

.fav-remove-btn {
  &:hover {
    color: $error;
    background: rgba(var(--error-rgb), 0.08);
  }
}

.fav-content {
  font-size: 13px;
  line-height: 1.65;
  color: $text-primary;
  max-height: 120px;
  overflow: hidden;
  position: relative;

  &.expanded {
    max-height: none;
  }

  :deep(p) {
    margin: 0.3em 0;
  }

  :deep(pre) {
    margin: 6px 0;
    border-radius: $radius-sm;
    font-size: 12px;
    max-height: 200px;
    overflow: auto;
  }
}

.fav-expand-btn {
  margin-top: 8px;
  border: none;
  background: transparent;
  color: $accent-primary;
  font-size: 12px;
  cursor: pointer;
  padding: 2px 0;

  &:hover {
    text-decoration: underline;
  }
}
</style>
