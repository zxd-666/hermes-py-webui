<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUsageStore } from '@/stores/hermes/usage'

const { t } = useI18n()
const usageStore = useUsageStore()
const maxTokens = computed(() => Math.max(usageStore.sourceUsage[0]?.totalTokens || 0, 1))

function formatTokens(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return String(n)
}
</script>

<template>
  <div class="source-breakdown">
    <h3 class="section-title">{{ t('usage.sourceBreakdown') }}</h3>
    <div v-if="usageStore.sourceUsage.length === 0" class="source-empty">
      {{ t('usage.noData') }}
    </div>
    <div v-else class="source-list">
      <div v-for="s in usageStore.sourceUsage" :key="s.source" class="source-row">
        <span class="source-name">{{ s.source }}</span>
        <span class="source-sessions">{{ s.sessions }} {{ t('usage.sessions') }}</span>
        <div class="source-bar-wrap">
          <div
            class="source-bar"
            :style="{ width: (s.totalTokens / maxTokens * 100) + '%' }"
          />
        </div>
        <span class="source-tokens">{{ formatTokens(s.totalTokens) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.source-breakdown {
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

.source-empty {
  font-size: 12px;
  color: $text-muted;
  text-align: center;
  padding: 16px 0;
}

.source-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.source-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.source-name {
  font-size: 12px;
  font-family: $font-code;
  color: $text-secondary;
  width: 80px;
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.source-sessions {
  font-size: 11px;
  color: $text-muted;
  width: 60px;
  flex-shrink: 0;
  text-align: right;
}

.source-bar-wrap {
  flex: 1;
  height: 16px;
  background: $bg-secondary;
  border-radius: 3px;
  overflow: hidden;
}

.source-bar {
  height: 100%;
  background: linear-gradient(90deg, #7c9ef5, #a78bfa);
  border-radius: 3px;
  min-width: 2px;
  transition: width 0.3s ease;

  .dark & {
    background: linear-gradient(90deg, #7c9ef5, #a78bfa);
  }
}

.source-tokens {
  font-size: 12px;
  color: $text-muted;
  width: 60px;
  text-align: right;
  flex-shrink: 0;
}
</style>
