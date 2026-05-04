<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NSwitch, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { fetchServiceStatus, installService, uninstallService } from '@/api/hermes/system'

const { t } = useI18n()
const message = useMessage()

const autoStart = ref(false)
const loading = ref(false)

async function loadStatus() {
  try {
    const status = await fetchServiceStatus()
    autoStart.value = status.enabled
  } catch { /* ignore */ }
}

async function handleToggle(value: boolean) {
  loading.value = true
  try {
    if (value) {
      const res = await installService()
      if (res.ok) {
        autoStart.value = true
        message.success(t('systemSettings.autoStartEnabled'))
      } else {
        autoStart.value = false
        message.error(res.error || t('systemSettings.autoStartFailed'))
      }
    } else {
      await uninstallService()
      autoStart.value = false
      message.success(t('systemSettings.autoStartDisabled'))
    }
  } catch {
    // Revert on error
    autoStart.value = !value
    message.error(t('common.operationFailed'))
  } finally {
    loading.value = false
  }
}

onMounted(loadStatus)
</script>

<template>
  <div class="system-settings">
    <div class="settings-section">
      <h3 class="section-title">{{ t('systemSettings.title') }}</h3>
      <div class="setting-row">
        <div class="setting-info">
          <span class="setting-label">{{ t('systemSettings.autoStart') }}</span>
          <span class="setting-desc">{{ t('systemSettings.autoStartDesc') }}</span>
        </div>
        <NSwitch :value="autoStart" :loading="loading" @update:value="handleToggle" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables" as *;

.system-settings {
  padding: 24px;
  max-width: 640px;
}

.settings-section {
  background: $bg-card;
  border-radius: $radius-md;
  padding: 20px;
  border: 1px solid $border-color;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: $text-primary;
  margin: 0 0 16px;
}

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.setting-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.setting-label {
  font-size: 14px;
  color: $text-primary;
}

.setting-desc {
  font-size: 12px;
  color: $text-muted;
}
</style>
