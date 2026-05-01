<script setup lang="ts">
import { NButton } from 'naive-ui'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUsageStore } from '@/stores/hermes/usage'
import StatCards from '@/components/hermes/usage/StatCards.vue'
import SourceBreakdown from '@/components/hermes/usage/SourceBreakdown.vue'
import ModelBreakdown from '@/components/hermes/usage/ModelBreakdown.vue'
import TopSessions from '@/components/hermes/usage/TopSessions.vue'
import DailyTrend from '@/components/hermes/usage/DailyTrend.vue'

const { t } = useI18n()
const usageStore = useUsageStore()

onMounted(() => {
  usageStore.loadSessions()
})
</script>

<template>
  <div class="usage-view">
    <header class="page-header">
      <h2 class="header-title">{{ t('usage.title') }}</h2>
      <NButton size="small" quaternary :loading="usageStore.isLoading" @click="usageStore.loadSessions()">
        {{ t('usage.refresh') }}
      </NButton>
    </header>

    <div class="usage-content">
      <div v-if="usageStore.isLoading && !usageStore.hasData" class="usage-loading">
        {{ t('common.loading') }}
      </div>

      <template v-else-if="usageStore.hasData">
        <div class="usage-section"><StatCards /></div>
        <div class="usage-section"><SourceBreakdown /></div>
        <div class="usage-section"><ModelBreakdown /></div>
        <div class="usage-section"><TopSessions /></div>
        <div class="usage-section"><DailyTrend /></div>
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
</style>
