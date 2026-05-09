<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { NSwitch, NModal, NInput, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { fetchServiceStatus, installService, uninstallService, fetchLanAccess, fetchLocalIp, setLanAccess } from '@/api/hermes/system'
import { fetchAuthStatus, setupPassword, removePassword } from '@/api/auth'
import { loginWithPassword } from '@/api/auth'
import { setApiKey, clearApiKey } from '@/api/client'

const { t } = useI18n()
const message = useMessage()
const router = useRouter()

const autoStart = ref(false)
const lanAccess = ref(false)
const accessPassword = ref(false)
const autoStartLoading = ref(false)
const lanAccessLoading = ref(false)
const passwordLoading = ref(false)
const restarting = ref(false)
const showLanConfirm = ref(false)
const showPasswordSetup = ref(false)
const showPasswordDisable = ref(false)
const showPublicAccess = ref(false)
const lanDisabling = ref(false)
const localIp = ref('')
const lanUrl = computed(() => {
  if (localIp.value) return `http://${localIp.value}:9898`
  // Fallback: use current hostname if accessed via LAN IP
  const host = window.location.hostname
  if (host !== 'localhost' && host !== '127.0.0.1') return `http://${host}:9898`
  return t('systemSettings.lanIpPlaceholder')
})
const newPassword = ref('')
const confirmPassword = ref('')

const isLocalhost = computed(() => {
  const h = window.location.hostname
  return h === 'localhost' || h === '127.0.0.1' || h === '[::1]'
})

const passwordValid = computed(() => {
  return newPassword.value.length >= 6 && newPassword.value === confirmPassword.value
})

async function loadStatus() {
  // local-ip is public (no auth needed), fetch first for LAN URL
  try {
    const res = await fetchLocalIp()
    localIp.value = res.ip
  } catch { /* ignore */ }
  try {
    const status = await fetchServiceStatus()
    autoStart.value = status.enabled
  } catch { /* ignore */ }
  try {
    const res = await fetchLanAccess()
    lanAccess.value = res.lan_access
  } catch { /* ignore */ }
  try {
    const status = await fetchAuthStatus()
    accessPassword.value = status.hasPassword
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
    showLanConfirm.value = true
  } else {
    // Show confirm before disabling
    showLanConfirm.value = true
    lanDisabling.value = true
  }
}

async function doSetLanAccess(enabled: boolean) {
  showLanConfirm.value = false
  lanDisabling.value = false
  lanAccessLoading.value = true
  try {
    await setLanAccess(enabled)
    message.success(enabled ? t('systemSettings.lanAccessEnabled') : t('systemSettings.lanAccessDisabled'))
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
  window.location.reload()
}

function copyUrl() {
  navigator.clipboard.writeText(lanUrl.value).then(() => {
    message.success(t('systemSettings.copied'))
  })
}

// ─── Access Password ──────────────────────────────────────

function handlePasswordToggle(value: boolean) {
  if (value) {
    newPassword.value = ''
    confirmPassword.value = ''
    showPasswordSetup.value = true
  } else {
    showPasswordDisable.value = true
  }
}

async function doSetupPassword() {
  if (!passwordValid.value) return
  passwordLoading.value = true
  try {
    await setupPassword(newPassword.value)
    // setup clears all tokens, so auto-login to get a fresh one
    const token = await loginWithPassword(newPassword.value)
    setApiKey(token)
    accessPassword.value = true
    showPasswordSetup.value = false
    message.success(t('systemSettings.passwordEnabled'))
  } catch (err: any) {
    message.error(err?.detail || t('common.operationFailed'))
  } finally {
    passwordLoading.value = false
  }
}

async function doDisablePassword() {
  passwordLoading.value = true
  showPasswordDisable.value = false
  try {
    await removePassword()
    accessPassword.value = false
    clearApiKey()
    message.success(t('systemSettings.passwordDisabled'))
  } catch {
    message.error(t('common.operationFailed'))
  } finally {
    passwordLoading.value = false
  }
}

onMounted(loadStatus)
</script>

<template>
  <div class="system-settings">
    <header class="page-header">
      <h2 class="header-title">{{ t('systemSettings.pageTitle') }}</h2>
    </header>

    <div class="settings-scroll">
    <div class="settings-section">
      <div class="setting-row">
        <div class="setting-info">
          <span class="setting-label">{{ t('systemSettings.accessPassword') }}</span>
          <span class="setting-desc">{{ t('systemSettings.accessPasswordDesc') }}</span>
        </div>
        <NSwitch :value="accessPassword" :loading="passwordLoading" @update:value="handlePasswordToggle" />
      </div>
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
      <div class="setting-row">
        <div class="setting-info">
          <span class="setting-label">{{ t('systemSettings.publicAccess') }}</span>
          <span class="setting-desc">{{ t('systemSettings.publicAccessDesc') }}</span>
        </div>
        <button class="btn-tutorial" @click="showPublicAccess = true">
          {{ t('systemSettings.tutorial') }}
        </button>
      </div>
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

    <!-- Confirm modal for toggling LAN access -->
    <NModal v-model:show="showLanConfirm" preset="dialog" :title="t('systemSettings.lanAccess')">
      <div class="confirm-body">
        <p v-if="!lanDisabling" class="confirm-text">{{ t('systemSettings.lanAccessConfirm') }}</p>
        <p v-if="!lanDisabling" class="confirm-url" @click="copyUrl">{{ lanUrl }}</p>
        <p v-if="lanDisabling" class="confirm-text">{{ t('systemSettings.lanDisableWarning') }} <span class="confirm-url" style="display:inline" @click="copyUrl">{{ lanUrl }}</span> {{ t('systemSettings.lanDisableWarningEnd') }}</p>
        <p class="confirm-text">{{ t('systemSettings.restartHint') }}</p>
      </div>
      <template #action>
        <button class="btn btn-cancel" @click="showLanConfirm = false; lanDisabling = false">
          {{ t('common.cancel') }}
        </button>
        <button class="btn btn-confirm" @click="doSetLanAccess(!lanDisabling)">
          {{ t('common.confirm') }}
        </button>
      </template>
    </NModal>

    <!-- Modal for setting password -->
    <NModal v-model:show="showPasswordSetup" preset="dialog" :title="t('systemSettings.setPasswordTitle')">
      <div class="password-form">
        <div class="password-field">
          <span class="password-label">{{ t('systemSettings.newPassword') }}</span>
          <NInput
            v-model:value="newPassword"
            type="password"
            show-password-on="click"
            :placeholder="t('systemSettings.passwordMinLength')"
          />
        </div>
        <div class="password-field">
          <span class="password-label">{{ t('systemSettings.confirmPassword') }}</span>
          <NInput
            v-model:value="confirmPassword"
            type="password"
            show-password-on="click"
            :placeholder="t('systemSettings.confirmPasswordHint')"
            @keyup.enter="doSetupPassword"
          />
        </div>
        <p v-if="newPassword && confirmPassword && newPassword !== confirmPassword" class="password-error">
          {{ t('systemSettings.passwordMismatch') }}
        </p>
        <p v-else-if="newPassword && newPassword.length < 6" class="password-error">
          {{ t('systemSettings.passwordMinLength') }}
        </p>
      </div>
      <template #action>
        <button class="btn btn-cancel" @click="showPasswordSetup = false">
          {{ t('common.cancel') }}
        </button>
        <button class="btn btn-confirm" :disabled="!passwordValid || passwordLoading" @click="doSetupPassword">
          {{ t('common.confirm') }}
        </button>
      </template>
    </NModal>

    <!-- Confirm modal for disabling password -->
    <NModal v-model:show="showPasswordDisable" preset="dialog" :title="t('systemSettings.disablePasswordTitle')">
      <p class="confirm-text">{{ t('systemSettings.disablePasswordConfirm') }}</p>
      <template #action>
        <button class="btn btn-cancel" @click="showPasswordDisable = false">
          {{ t('common.cancel') }}
        </button>
        <button class="btn btn-confirm btn-danger" @click="doDisablePassword">
          {{ t('common.confirm') }}
        </button>
      </template>
    </NModal>

    <!-- Tailscale tutorial modal -->
    <NModal v-model:show="showPublicAccess" preset="card" :title="t('systemSettings.publicAccess')" class="tutorial-modal" :style="{ width: '560px' }">
      <div class="tutorial-body">
        <div class="tutorial-section">
          <h4 class="tutorial-step">{{ t('systemSettings.tailscaleWhat') }}</h4>
          <p class="tutorial-text">{{ t('systemSettings.tailscaleWhatDesc') }}</p>
        </div>
        <div class="tutorial-section">
          <h4 class="tutorial-step">{{ t('systemSettings.tailscaleStep1Title') }}</h4>
          <p class="tutorial-text">{{ t('systemSettings.tailscaleStep1Desc') }}</p>
          <div class="tutorial-code">https://tailscale.com/download</div>
        </div>
        <div class="tutorial-section">
          <h4 class="tutorial-step">{{ t('systemSettings.tailscaleStep2Title') }}</h4>
          <p class="tutorial-text" v-html="t('systemSettings.tailscaleStep2Desc')" />
        </div>
        <div class="tutorial-section">
          <h4 class="tutorial-step">{{ t('systemSettings.tailscaleStep3Title') }}</h4>
          <p class="tutorial-text" v-html="t('systemSettings.tailscaleStep3Desc')" />
        </div>
        <div class="tutorial-section">
          <h4 class="tutorial-step">{{ t('systemSettings.tailscaleStep4Title') }}</h4>
          <p class="tutorial-text" v-html="t('systemSettings.tailscaleStep4Desc')" />
        </div>
      </div>
      <template #footer>
        <div class="tutorial-footer">
          <a href="https://tailscale.com/kb/1107/install" target="_blank" class="tutorial-link">
            {{ t('systemSettings.tailscaleLearnMore') }}
          </a>
          <button class="btn btn-confirm" @click="showPublicAccess = false">
            {{ t('common.confirm') }}
          </button>
        </div>
      </template>
    </NModal>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables" as *;

.system-settings {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
}

.settings-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.settings-section {
  background: $bg-card;
  border-radius: $radius-md;
  padding: 20px;
  border: 1px solid $border-color;
  max-width: 640px;
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
  color: var(--accent-primary);
  cursor: pointer;
  word-break: break-all;
  margin: 0 0 12px;
  user-select: all;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.7;
  }
}

// Password form
.password-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.password-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.password-label {
  font-size: 13px;
  color: $text-secondary;
}

.password-error {
  font-size: 12px;
  color: $error;
  margin: 0;
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
    background: var(--accent-primary);
    color: var(--text-on-accent);

    &:hover {
      background: var(--accent-hover);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &-danger {
    background: var(--error);
    color: var(--text-on-accent);

    &:hover {
      opacity: 0.85;
    }
  }
}

.btn-tutorial {
  font-size: 13px;
  color: $accent-primary;
  background: transparent;
  border: 1px solid $accent-primary;
  border-radius: $radius-sm;
  padding: 4px 12px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    background: $accent-primary;
    color: var(--text-on-accent);
  }
}

.tutorial-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tutorial-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tutorial-step {
  font-size: 13px;
  font-weight: 600;
  color: $text-primary;
  margin: 0;
}

.tutorial-text {
  font-size: 13px;
  color: $text-secondary;
  line-height: 1.6;
  margin: 0;

  code {
    background: $bg-secondary;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-family: 'SF Mono', Menlo, monospace;
  }
}

.tutorial-code {
  background: $bg-secondary;
  padding: 8px 12px;
  border-radius: $radius-sm;
  font-size: 12px;
  font-family: 'SF Mono', Menlo, monospace;
  color: $accent-primary;
  word-break: break-all;
}

.tutorial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tutorial-link {
  font-size: 13px;
  color: $accent-primary;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
