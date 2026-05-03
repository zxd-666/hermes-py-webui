<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUsageStore } from '@/stores/hermes/usage'

const { t } = useI18n()
const usageStore = useUsageStore()

const hourlyData = computed(() => usageStore.stats?.hourly_distribution ?? [])
const maxSessions = computed(() => {
  if (hourlyData.value.length === 0) return 1
  return Math.max(...hourlyData.value.map((d: { sessions: number }) => d.sessions), 1)
})
</script>

<template>
  <div class="hourly-activity">
    <h3 class="section-title">{{ t('usage.hourlyActivity') }}</h3>
    <div v-if="hourlyData.length === 0" class="empty-state">Loading...</div>
    <div v-else class="bar-chart">
      <div
        v-for="d in hourlyData"
        :key="d.hour"
        class="bar-col"
      >
        <div class="bar-track">
          <div
            class="bar-fill"
            :style="{ height: (d.sessions / maxSessions * 100) + '%' }"
          />
        </div>
        <div class="bar-tooltip">
          <div class="tooltip-hour">{{ String(d.hour).padStart(2, '0') }}:00</div>
          <div class="tooltip-row">{{ t('usage.sessions') }}: {{ d.sessions }}</div>
        </div>
        <div class="bar-label">{{ String(d.hour).padStart(2, '0') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.hourly-activity {
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

.empty-state {
  color: $text-muted;
  font-size: 13px;
  text-align: center;
  padding: 20px;
}

.bar-chart {
  display: flex;
  gap: 2px;
}

.bar-col {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.bar-track {
  width: 100%;
  height: 120px;
  background: $bg-secondary;
  border-radius: 2px 2px 0 0;
  display: flex;
  align-items: flex-end;
}

.bar-fill {
  width: 100%;
  background: linear-gradient(180deg, #60a5fa, #3b82f6);
  border-radius: 2px 2px 0 0;
  min-height: 0;
  transition: height 0.3s ease;
}

.bar-label {
  font-size: 10px;
  color: $text-muted;
  margin-top: 4px;
}

.bar-tooltip {
  display: none;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: $text-primary;
  color: var(--text-on-accent);
  padding: 6px 10px;
  border-radius: $radius-sm;
  font-size: 11px;
  white-space: nowrap;
  z-index: 10;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: $text-primary;
  }
}

.bar-col:hover .bar-tooltip {
  display: block;
}
</style>
