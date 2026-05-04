<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { NSwitch, NModal, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { fetchServiceStatus, installService, uninstallService, fetchLanAccess, fetchLocalIp, setLanAccess } from '@/api/hermes/system'

const { t } = useI18n()
const message = useMessage()

const autoStart = ref(false)
const lanAccess = ref(false)
const autoStartLoading = ref(false)
const lanAccessLoading = ref(false)
const restarting = ref(false)
const showConfirm = ref(false)
const localIp = ref('')

const isLocalhost = computed(() => {
  const h = window.location.hostname
  return h === 'localhost' || h === '127.0.0.1' || h === '[::1]'
})

const lanUrl = computed(() => `http://${localIp.value}:9898`)

async function loadStatus() {
  try {
    const status = await fetchServiceStatus()
    autoStart.value = status.enabled
  } catch { /* ignore */ }
  try {
    const res = await fetchLanAccess()
    lanAccess.value = res.lan_access
  } catch { /* ignore */ }
  try {
    const res = await fetchLocalIp()
    localIp.value = res.ip
  } catch { /* ignore */ }
}

async function handleAutoStartToggle(value: boolean) {
  autoStartLoading.value = true
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
    autoStart.value = !value
    message.error(t('common.operationFailed'))
  } finally {
    autoStartLoading.value = false
  }
}

function handleLanAccessToggle(value: boolean) {
  if (value) {
    showConfirm.value = true
  } else {
    doSetLanAccess(false)
  }
}

async function doSetLanAccess(enabled: boolean) {
  showConfirm.value = false
  lanAccessLoading.value = true
  try {
    await setLanAccess(enabled)
    message.success(enabled ? t('systemSettings.lanAccessEnabled') : t('systemSettings.lanAccessDisabled'))
    // Wait for server restart, then poll
    restarting.value = true
    await waitForRestart()
    lanAccess.value = enabled
  } catch {
    message.error(t('common.operationFailed'))
  } finally {
    lanAccessLoading.value = false
  }
}

async function waitForRestart() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 1000))
    try {
      const res = await fetch('/health')
      if (res.ok) {
        await new Promise(r => setTimeout(r, 500))
        window.location.reload()
        return
      }
    } catch { /* not ready yet */ }
  }
  // Timeout — reload anyway
  window.location.reload()
}

function copyUrl() {
  navigator.clipboard.writeText(lanUrl.value).then(() => {
    message.success(t('systemSettings.copied'))
  })
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
        <NSwitch :value="autoStart" :loading="autoStartLoading" @update:value="handleAutoStartToggle" />
      </div>
      <div class="setting-row">
        <div class="setting-info">
          <span class="setting-label">{{ t('systemSettings.lanAccess') }}</span>
          <span class="setting-desc">{{ t('systemSettings.lanAccessDesc') }}</span>
        </div>
        <NSwitch
          :value="lanAccess"
          :loading="lanAccessLoading || restarting"
          :disabled="!isLocalhost"
          @update:value="handleLanAccessToggle"
        />
      </div>
    </div>

    <!-- Restarting overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="restarting" class="restart-overlay">
          <div class="restart-content">
            <div class="restart-spinner" />
            <span>{{ t('systemSettings.lanAccessRestarting') }}</span>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Confirm modal for enabling LAN access -->
    <NModal v-model:show="showConfirm" preset="dialog" :title="t('systemSettings.lanAccess')">
      <div class="confirm-body">
        <p class="confirm-text">{{ t('systemSettings.lanAccessConfirm') }}</p>
        <p class="confirm-url" @click="copyUrl">{{ lanUrl }}</p>
      </div>
      <template #action>
        <button class="btn btn-cancel" @click="showConfirm = false">
          {{ t('common.cancel') || '取消' }}
        </button>
        <button class="btn btn-confirm" @click="doSetLanAccess(true)">
          {{ t('common.confirm') || '确认' }}
        </button>
      </template>
    </NModal>
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

  & + & {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid $border-light;
  }
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

// Restart overlay
.restart-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
}

.restart-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: $text-primary;
}

.restart-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid $border-color;
  border-top-color: $accent-primary;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Confirm modal
.confirm-body {
  text-align: center;
  padding: 8px 0;
}

.confirm-text {
  font-size: 14px;
  color: $text-secondary;
  margin: 0 0 12px;
}

.confirm-url {
  font-size: 15px;
  font-weight: 500;
  color: #1677ff;
  cursor: pointer;
  word-break: break-all;
  margin: 0;
  user-select: all;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.7;
  }
}

.btn {
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 0.15s;

  &-cancel {
    background: $bg-secondary;
    color: $text-secondary;

    &:hover {
      background: $border-color;
    }
  }

  &-confirm {
    background: #1677ff;
    color: #fff;

    &:hover {
      background: #4096ff;
    }
  }
}
</style>
