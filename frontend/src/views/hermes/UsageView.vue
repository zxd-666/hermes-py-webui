<script setup lang="ts">
import { NButton, NIcon, NModal } from 'naive-ui'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUsageStore } from '@/stores/hermes/usage'
import StatCards from '@/components/hermes/usage/StatCards.vue'
import SourceBreakdown from '@/components/hermes/usage/SourceBreakdown.vue'
import ModelBreakdown from '@/components/hermes/usage/ModelBreakdown.vue'
import TopSessions from '@/components/hermes/usage/TopSessions.vue'
import DailyTrend from '@/components/hermes/usage/DailyTrend.vue'
import HourlyActivity from '@/components/hermes/usage/HourlyActivity.vue'

const { t } = useI18n()
const usageStore = useUsageStore()
const showTips = ref(false)

onMounted(() => {
  usageStore.loadSessions()
})
</script>

<template>
  <div class="usage-view">
    <header class="page-header">
      <div class="header-title-row">
        <h2 class="header-title">{{ t('usage.title') }}</h2>
        <NIcon class="tips-icon" @click="showTips = true">ⓘ</NIcon>
      </div>
      <NButton size="small" quaternary :loading="usageStore.isLoading" @click="usageStore.loadSessions()">
        {{ t('usage.refresh') }}
      </NButton>
    </header>

    <NModal v-model:show="showTips" preset="card" :title="t('usage.tipsTitle')" class="tips-modal" :style="{ maxWidth: '520px' }">
      <div class="tips-list">
        <div class="tips-item">
          <b>{{ t('usage.allTokens') }}</b>
          <span>{{ t('usage.tipsAllTokens') }}</span>
        </div>
        <div class="tips-item">
          <b>{{ t('usage.recentTokens') }}</b>
          <span>{{ t('usage.tipsRecentTokens') }}</span>
        </div>
        <div class="tips-item">
          <b>{{ t('usage.inputTokens') }} / {{ t('usage.outputTokens') }}</b>
          <span>{{ t('usage.tipsInputOutput') }}</span>
        </div>
        <div class="tips-item">
          <b>{{ t('usage.cacheHitRate') }}</b>
          <span>{{ t('usage.tipsCacheHit') }}</span>
        </div>
        <div class="tips-item">
          <b>{{ t('usage.avgTokensPerSession') }}</b>
          <span>{{ t('usage.tipsAvgTokens') }}</span>
        </div>
        <div class="tips-item">
          <b>{{ t('usage.allSessions') }} / {{ t('usage.recentSessions') }}</b>
          <span>{{ t('usage.tipsSessions') }}</span>
        </div>
        <div class="tips-item">
          <b>{{ t('usage.allMessages') }} / {{ t('usage.recentMessages') }}</b>
          <span>{{ t('usage.tipsMessages') }}</span>
        </div>
      </div>
    </NModal>

    <div class="usage-content">
      <div v-if="usageStore.isLoading && !usageStore.hasData" class="usage-loading">
        {{ t('common.loading') }}
      </div>

      <template v-else-if="usageStore.hasData">
        <div class="usage-section"><StatCards /></div>
        <div class="usage-section"><SourceBreakdown /></div>
        <div class="usage-section"><ModelBreakdown /></div>
        <div class="usage-section"><DailyTrend /></div>
        <div class="usage-section"><HourlyActivity /></div>
        <div class="usage-section"><TopSessions /></div>
      </template>

      <div v-else class="usage-empty">
        {{ t('usage.noData') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.usage-view {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.usage-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.usage-section + .usage-section {
  margin-top: 10px;
}

.usage-loading,
.usage-empty {
  text-align: center;
  padding: 60px 0;
  color: $text-muted;
  font-size: 14px;
}

.header-title-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tips-icon {
  cursor: pointer;
  font-size: 16px;
  color: $text-muted;
  transition: color 0.2s;

  &:hover {
    color: $text-primary;
  }
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tips-item {
  display: flex;
  flex-direction: column;
  gap: 2px;

  b {
    font-size: 13px;
    color: $text-primary;
  }

  span {
    font-size: 12px;
    color: $text-muted;
    line-height: 1.5;
  }
}
</style>
