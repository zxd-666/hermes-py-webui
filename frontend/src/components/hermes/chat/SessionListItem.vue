<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Session } from '@/stores/hermes/chat'
import { useChatStore } from '@/stores/hermes/chat'
import { formatTimestampMs, getSourceLabel } from '@/shared/session-display'

const { t } = useI18n()

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
  selectChild: [childId: string]
  childContextmenu: [event: MouseEvent, childId: string]
}>()

const ancestorsExpanded = ref(false)

const ancestorCount = computed(() => Math.max(0, (props.session.lineageCount || 1) - 1))
const hasAncestors = computed(() => ancestorCount.value > 0)

// Auto-expand children list when requested (e.g. from favorites/search jump,
// or page refresh where the watch registers after the value is already set)
watch(
  () => chatStore.expandAncestorsForId,
  (targetId) => {
    if (targetId === props.session.id && hasAncestors.value) {
      ancestorsExpanded.value = true
    }
  },
  { immediate: true },
)
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
            :title="ancestorsExpanded ? t('chat.collapse') : t('chat.lineageSegments', { count: ancestorCount })"
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="ancestor-chevron" :class="{ rotated: ancestorsExpanded }">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            {{ ancestorCount }}{{ t('chat.segmentUnit') }}
          </span>
          <span>{{ session.lineageMessageCount ?? '--' }}{{ t('chat.messageUnit') }}</span>
          <span v-if="session.source">{{ getSourceLabel(session.source) }}</span>
          <span>{{ formatTimestampMs(session.updatedAt) }}</span>
        </span>
      </span>
    </div>
  </button>
  <!-- Children (related sessions in the same tree) -->
  <div v-if="hasAncestors && ancestorsExpanded" class="ancestor-list">
    <div
      v-for="c in (session.children || [])"
      :key="c.id"
      class="ancestor-item"
      :class="{ active: chatStore.activeSessionId === c.id }"
      @click.stop="emit('selectChild', c.id)"
      @contextmenu.stop="emit('childContextmenu', $event, c.id)"
    >
      <span class="ancestor-title">{{ c.title || 'Untitled' }}</span>
      <span class="ancestor-meta">{{ c.messageCount }}{{ t('chat.messageUnit') }}{{ c.source ? ` · ${getSourceLabel(c.source)}` : '' }} · {{ formatTimestampMs(c.lastMessageTs || c.endedAt || c.startedAt) }}</span>
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
  padding: 6px 10px;
  border: 1px solid transparent;
  background: var(--bg-card);
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  color: var(--text-secondary);
  margin-bottom: 2px;
  transition: all 0.15s ease;

  &:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-light);
    color: var(--text-primary);
  }

  &.active {
    background: rgba(var(--accent-primary-rgb), 0.08);
    border-color: rgba(var(--accent-primary-rgb), 0.25);
    color: var(--text-primary);
  }
}

.ancestor-title {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  line-height: 1.35;
}

.ancestor-meta {
  font-size: 10px;
  opacity: 0.7;
  line-height: 1.3;
}
</style>
