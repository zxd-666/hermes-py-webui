<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Session } from '@/stores/hermes/chat'
import { useChatStore } from '@/stores/hermes/chat'
import { formatTimestampMs } from '@/shared/session-display'

const props = defineProps<{
  session: Session
  active: boolean
  pinned: boolean
  streaming?: boolean
}>()

const chatStore = useChatStore()

const emit = defineEmits<{
  select: []
  contextmenu: [event: MouseEvent]
  selectAncestor: [ancestorId: string]
  ancestorContextmenu: [event: MouseEvent, ancestorId: string]
}>()

const ancestorsExpanded = ref(false)

const ancestorCount = computed(() => Math.max(0, (props.session.lineageCount || 1) - 1))
const hasAncestors = computed(() => ancestorCount.value > 0)
</script>

<template>
  <button
    class="session-item"
    :class="{ active }"
    :aria-current="active ? 'page' : undefined"
    @click="emit('select')"
    @contextmenu="emit('contextmenu', $event)"
  >
    <div class="session-item-content">
      <span class="session-item-title-row">
        <span v-if="pinned" class="session-item-pin" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 17v5" />
            <path d="M5 8l14 0" />
            <path d="M8 3l8 0 0 5 3 5-14 0 3-5z" />
          </svg>
        </span>
        <span class="session-item-title">
          <svg v-if="streaming" class="session-item-streaming" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          {{ session.title || 'New Chat' }}
        </span>
      </span>
      <span class="session-item-meta">
        <span class="session-item-meta-info">
          <span
            v-if="hasAncestors"
            class="ancestor-toggle"
            @click.stop="ancestorsExpanded = !ancestorsExpanded"
            :title="ancestorsExpanded ? '收起' : `${ancestorCount} 段历史会话`"
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="ancestor-chevron" :class="{ rotated: ancestorsExpanded }">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            {{ ancestorCount }}段
          </span>
          <span>{{ session.lineageMessageCount ?? '--' }}条</span>
          <span>{{ formatTimestampMs(session.updatedAt) }}</span>
        </span>
      </span>
    </div>
  </button>
  <!-- Ancestors (historical segments) -->
  <div v-if="hasAncestors && ancestorsExpanded" class="ancestor-list">
    <div
      v-for="a in (session.ancestors || [])"
      :key="a.id"
      class="ancestor-item"
      :class="{ active: chatStore.activeSessionId === a.id }"
      @click.stop="emit('selectAncestor', a.id)"
      @contextmenu.stop="emit('ancestorContextmenu', $event, a.id)"
    >
      <span class="ancestor-title">{{ a.title || 'Untitled' }}</span>
      <span class="ancestor-meta">{{ a.messageCount }}条 · {{ formatTimestampMs(a.endedAt || a.startedAt) }}</span>
    </div>
  </div>
</template>

<style scoped>
.ancestor-toggle {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
}

.ancestor-chevron {
  flex-shrink: 0;
  transition: transform 0.15s ease;

  &.rotated {
    transform: rotate(90deg);
  }
}

.ancestor-list {
  padding: 0 10px 2px 24px;
}

.ancestor-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 4px 8px;
  border: none;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  color: var(--text-3);
  margin-bottom: 1px;
  transition: background 0.12s ease, color 0.12s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
    color: var(--text-secondary);
  }

  &.active {
    background: rgba(var(--accent-primary-rgb), 0.1);
    color: var(--text-1);
  }
}

.ancestor-title {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  line-height: 1.3;
}

.ancestor-meta {
  font-size: 10px;
  opacity: 0.7;
  line-height: 1.3;
}
</style>
