<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUsageStore } from '@/stores/hermes/usage'

const { t } = useI18n()
const usageStore = useUsageStore()

function fmt(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return String(n)
}

function fmtCost(n: number): string {
  if (n === 0) return '$0.00'
  if (n < 0.01) return '<$0.01'
  return '$' + n.toFixed(2)
}
</script>

<template>
  <div class="stat-cards">
    <!-- Row 1: 累计 Token / 近30天 Token -->
    <div class="stat-card">
      <div class="stat-label">{{ t('usage.allTokens') }}</div>
      <div class="stat-value">{{ fmt(usageStore.allTokens) }}</div>
      <div class="stat-sub">
        {{ fmt(usageStore.allInputTokens) }} {{ t('usage.inputTokens') }} /
        {{ fmt(usageStore.allOutputTokens) }} {{ t('usage.outputTokens') }}
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-label">{{ t('usage.recentTokens') }}</div>
      <div class="stat-value">{{ fmt(usageStore.recentTokens) }}</div>
      <div class="stat-sub">
        {{ fmt(usageStore.recentInputTokens) }} {{ t('usage.inputTokens') }} /
        {{ fmt(usageStore.recentOutputTokens) }} {{ t('usage.outputTokens') }}
      </div>
    </div>

    <!-- Row 2: 缓存命中率 / 平均会话 Token -->
    <div class="stat-card">
      <div class="stat-label">{{ t('usage.cacheHitRate') }}</div>
      <div class="stat-value">{{ usageStore.allCacheHitRate !== null ? usageStore.allCacheHitRate.toFixed(1) + '%' : '--' }}</div>
      <div class="stat-sub" v-if="usageStore.cacheHitRate !== null">
        {{ t('usage.recentLabel') }} {{ usageStore.cacheHitRate.toFixed(1) }}%
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-label">{{ t('usage.avgTokensPerSession') }}</div>
      <div class="stat-value">{{ fmt(usageStore.avgTokensPerSession) }}</div>
      <div class="stat-sub">{{ t('usage.recentLabel') }} {{ fmt(usageStore.recentAvgTokensPerSession) }}</div>
    </div>

    <!-- Row 3: 总会话 / 近30天会话 -->
    <div class="stat-card">
      <div class="stat-label">{{ t('usage.allSessions') }}</div>
      <div class="stat-value">{{ usageStore.allSessions }}</div>
      <div class="stat-sub">{{ t('usage.avgPerDay', { n: usageStore.allAvgSessionsPerDay.toFixed(1) }) }}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">{{ t('usage.recentSessions') }}</div>
      <div class="stat-value">{{ usageStore.recentSessions }}</div>
      <div class="stat-sub">{{ t('usage.avgPerDay', { n: usageStore.avgSessionsPerDay.toFixed(1) }) }}</div>
    </div>

    <!-- Row 4: 总消息 / 近30天消息 -->
    <div class="stat-card">
      <div class="stat-label">{{ t('usage.allMessages') }}</div>
      <div class="stat-value">{{ usageStore.allMessages }}</div>
      <div class="stat-sub">
        {{ usageStore.allUserMessages }} {{ t('usage.userMsg') }} /
        {{ usageStore.allAssistantMessages }} {{ t('usage.aiMsg') }}
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-label">{{ t('usage.recentMessages') }}</div>
      <div class="stat-value">{{ usageStore.recentMessages }}</div>
      <div class="stat-sub">
        {{ usageStore.recentUserMessages }} {{ t('usage.userMsg') }} /
        {{ usageStore.recentAssistantMessages }} {{ t('usage.aiMsg') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.stat-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.stat-card {
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  padding: 16px;
}

.stat-label {
  font-size: 12px;
  color: $text-muted;
  margin-bottom: 6px;
}

.stat-value {
  font-size: 22px;
  font-weight: 600;
  color: $text-primary;
  line-height: 1.2;
}

.stat-sub {
  font-size: 11px;
  color: $text-muted;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .stat-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stat-cards {
    grid-template-columns: 1fr;
  }
}
</style>
