<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NSpin } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/hermes/settings'
import { fetchChannelSummary, type ChannelSummaryResponse } from '@/api/hermes/channels'
import PlatformSettings from '@/components/hermes/settings/PlatformSettings.vue'

const settingsStore = useSettingsStore()
const { t } = useI18n()

const channelSummary = ref<ChannelSummaryResponse | null>(null)
const isLoadingChannels = ref(false)

onMounted(async () => {
  settingsStore.fetchSettings()
  isLoadingChannels.value = true
  try {
    channelSummary.value = await fetchChannelSummary()
  } catch (err) {
    console.error('Failed to load channel summary:', err)
  } finally {
    isLoadingChannels.value = false
  }
})

const activePlatforms = ref<string[]>([])
const totalActive = ref(0)

function refreshChannels() {
  // If channelSummary loaded, compute totals
  if (channelSummary.value?.summary) {
    activePlatforms.value = Object.keys(channelSummary.value.summary)
    totalActive.value = Object.values(channelSummary.value.summary).reduce((sum, p) => sum + p.count, 0)
  }
}

// Auto-compute on data load
import { watch } from 'vue'
watch(channelSummary, refreshChannels, { immediate: true })
</script>

<template>
  <div class="channels-view">
    <header class="page-header">
      <h2 class="header-title">{{ t('sidebar.channels') }}</h2>
      <div class="header-info" v-if="totalActive > 0">
        <span class="channel-badge">{{ totalActive }}</span>
        <span class="channel-label">{{ t('channels.activeChannels') }}</span>
      </div>
    </header>

    <div class="channels-content">
      <!-- Active Channels Overview -->
      <div v-if="channelSummary" class="channel-overview">
        <div
          v-for="(data, platform) in channelSummary.summary"
          :key="platform"
          class="platform-tag"
        >
          <span class="platform-tag-name">{{ platform }}</span>
          <span class="platform-tag-count">{{ data.count }}</span>
        </div>
        <div v-if="channelSummary.updated_at" class="channel-updated">
          {{ t('channels.lastUpdated') }}: {{ new Date(channelSummary.updated_at).toLocaleString() }}
        </div>
      </div>

      <NSpin :show="settingsStore.loading || settingsStore.saving || isLoadingChannels" size="large" :description="t('common.loading')">
        <PlatformSettings v-if="!settingsStore.loading" />
      </NSpin>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.channels-view {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
}

.channels-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  position: relative;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 6px;
}

.channel-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 10px;
  background: $text-primary;
  color: var(--text-on-accent);
  font-size: 11px;
  font-weight: 600;
}

.channel-label {
  font-size: 12px;
  color: $text-muted;
}

.channel-overview {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  margin-bottom: 16px;
}

.platform-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 12px;
  background: $bg-secondary;
  border: 1px solid $border-color;
  font-size: 12px;
}

.platform-tag-name {
  color: $text-secondary;
  font-family: $font-code;
}

.platform-tag-count {
  color: $text-muted;
  font-size: 11px;
  font-weight: 600;
}

.channel-updated {
  margin-left: auto;
  font-size: 11px;
  color: $text-muted;
}
</style>
