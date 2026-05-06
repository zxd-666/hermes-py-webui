<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { i18n } from '@/i18n'
import { useUsageStore } from '@/stores/hermes/usage'

const { t } = useI18n()
const router = useRouter()
const usageStore = useUsageStore()

function formatTokens(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return String(n)
}

function formatTime(ts: number): string {
  if (!ts) return '--'
  const d = new Date(ts * 1000)
  return d.toLocaleDateString(i18n.global.locale.value)
}

function goSession(id: string) {
  router.push({ name: 'hermes.chat', query: { session: id } })
}
</script>

<template>
  <div class="top-sessions">
    <h3 class="section-title">{{ t('usage.topSessions') }}</h3>

    <div v-if="usageStore.topSessions.length === 0" class="top-empty">
      {{ t('usage.noData') }}
    </div>

    <div v-else class="top-list">
      <div
        v-for="(s, idx) in usageStore.topSessions"
        :key="s.id"
        class="top-row"
        @click="goSession(s.id)"
      >
        <span class="top-rank">{{ idx + 1 }}</span>
        <div class="top-info">
          <div class="top-title">{{ s.title || t('usage.untitled') }}</div>
          <div class="top-meta">
            <span class="top-source">{{ s.source }}</span>
            <span v-if="s.model" class="top-model">{{ s.model }}</span>
            <span class="top-date">{{ formatTime(s.startedAt) }}</span>
          </div>
        </div>
        <div class="top-tokens">
          <div class="top-token-val">{{ formatTokens(s.inputTokens) }}</div>
          <div class="top-token-label">{{ t('usage.inputTokens') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.top-sessions {
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  padding: 16px;
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  color: $text-secondary;
  margin: 0 0 12px;
}

.top-empty {
  font-size: 12px;
  color: $text-muted;
  text-align: center;
  padding: 16px 0;
}

.top-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.top-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: $radius-md;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: $bg-card-hover;
  }
}

.top-rank {
  font-size: 13px;
  font-weight: 700;
  color: $text-muted;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}

.top-info {
  flex: 1;
  min-width: 0;
}

.top-title {
  font-size: 13px;
  color: $text-primary;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.3;
}

.top-meta {
  display: flex;
  gap: 8px;
  margin-top: 2px;
}

.top-source,
.top-model,
.top-date {
  font-size: 11px;
  color: $text-muted;
  font-family: $font-code;
}

.top-tokens {
  text-align: right;
  flex-shrink: 0;
}

.top-token-val {
  font-size: 13px;
  font-weight: 600;
  color: $text-secondary;
  font-family: $font-code;
}

.top-token-label {
  font-size: 10px;
  color: $text-muted;
}
</style>
