<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { NSpin, NButton, NTag, NSwitch, NModal, NForm, NFormItem, NSelect, NInputNumber, NInputGroup, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useGatewayStore } from '@/stores/hermes/gateways'

const { t } = useI18n()
const message = useMessage()
const gatewayStore = useGatewayStore()

const sessionModal = ref(false)
const sessionModalProfile = ref('')
const sessionForm = reactive({
  mode: 'both',
  idle_minutes: 1440,
  at_hour: 4,
})

function openSessionSettings(gw: any) {
  sessionModalProfile.value = gw.profile
  sessionForm.mode = gw.session_reset?.mode || 'both'
  sessionForm.idle_minutes = gw.session_reset?.idle_minutes || 1440
  sessionForm.at_hour = gw.session_reset?.at_hour ?? 4
  sessionModal.value = true
}

async function saveSessionSettings() {
  try {
    await gatewayStore.updateSettings(sessionModalProfile.value, {
      session_reset: {
        mode: sessionForm.mode,
        idle_minutes: sessionForm.idle_minutes,
        at_hour: sessionForm.at_hour,
      },
    })
    message.success(t('settings.saved'))
    sessionModal.value = false
  } catch (err: any) {
    message.error(t('settings.saveFailed'))
  }
}

onMounted(() => {
  gatewayStore.fetchStatus()
})

async function handleToggle(name: string, running: boolean) {
  try {
    if (running) {
      const ok = await gatewayStore.stop(name)
      if (ok) {
        message.success(`${t('gateways.stopped')}: ${name}`)
      } else {
        message.error(`${name} ${t('gateways.stopFailed')}`)
      }
    } else {
      const ok = await gatewayStore.start(name)
      if (ok) {
        message.success(`${t('gateways.started')}: ${name}`)
      } else {
        message.error(`${name} ${t('gateways.startFailed')}`)
      }
    }
  } catch (err: any) {
    message.error(err.message)
  }
}

async function toggleRedactPii(name: string, value: boolean) {
  try {
    await gatewayStore.updateSettings(name, { privacy: { redact_pii: value } })
  } catch (err: any) {
    message.error(err.message)
  }
}
</script>

<template>
  <div class="gateways-view">
    <header class="page-header">
      <h2 class="header-title">{{ t('gateways.title') }}</h2>
    </header>

    <div class="gateways-content">
      <NSpin :show="gatewayStore.loading" size="large">
        <div v-if="gatewayStore.gateways.length === 0" class="empty-state">
          {{ t('common.noData') }}
        </div>

        <div v-else class="gateway-list">
          <div v-for="gw in gatewayStore.gateways" :key="gw.profile" class="gateway-card">
            <div class="gateway-info">
              <div class="gateway-name">
                {{ gw.profile }}
                <NTag :type="gw.running ? 'success' : 'default'" size="tiny" round class="status-tag">
                  {{ gw.running ? t('gateways.running') : t('gateways.stopped') }}
                </NTag>
              </div>
              <div class="gateway-meta">
                <span class="meta-item">{{ gw.host }}:{{ gw.port }}</span>
                <span v-if="gw.pid" class="meta-item">PID: {{ gw.pid }}</span>
              </div>
            </div>
            <div class="gateway-actions">
              <div class="pii-toggle" title="自动检测并隐藏敏感信息（密码、密钥等）">
                <span class="pii-label">{{ t('settings.privacy.redactPii') }}</span>
                <NSwitch
                  size="small"
                  :value="gw.redact_pii"
                  @update:value="v => toggleRedactPii(gw.profile, v)"
                />
              </div>
              <NButton
                size="small"
                quaternary
                @click="openSessionSettings(gw)"
              >
                {{ t('gateways.sessionSettings') }}
              </NButton>
              <NButton
                size="small"
                :type="gw.running ? 'warning' : 'primary'"
                round
                @click="handleToggle(gw.profile, gw.running)"
              >
                {{ gw.running ? t('common.stop') : t('common.start') }}
              </NButton>
            </div>
          </div>
        </div>
      </NSpin>
    </div>

    <NModal
      v-model:show="sessionModal"
      preset="dialog"
      :title="t('gateways.sessionSettings')"
      :show-icon="false"
      style="width: 420px"
    >
      <NForm label-placement="left" label-width="110">
        <NFormItem :label="t('settings.session.mode')">
          <NSelect
            v-model:value="sessionForm.mode"
            :options="[
              { label: t('settings.session.modeBoth'), value: 'both' },
              { label: t('settings.session.modeIdle'), value: 'idle' },
              { label: t('settings.session.modeHourly'), value: 'hourly' },
            ]"
            size="small"
          />
        </NFormItem>
        <NFormItem :label="t('settings.session.idleMinutes')">
          <NInputNumber
            v-model:value="sessionForm.idle_minutes"
            :min="10" :max="10080" :step="30"
            size="small"
            style="width: 100%"
          />
        </NFormItem>
        <NFormItem :label="t('settings.session.atHour')">
          <NInputGroup>
            <NInputNumber
              v-model:value="sessionForm.at_hour"
              :min="0" :max="23" :step="1"
              size="small"
              style="width: 100%"
            />
          </NInputGroup>
        </NFormItem>
      </NForm>
      <template #action>
        <NButton size="small" @click="sessionModal = false">{{ t('common.cancel') }}</NButton>
        <NButton size="small" type="primary" @click="saveSessionSettings">{{ t('common.save') }}</NButton>
      </template>
    </NModal>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.gateways-view {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
}

.gateways-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.empty-state {
  text-align: center;
  color: $text-muted;
  padding: 40px 0;
}

.gateway-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.gateway-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  transition: border-color $transition-fast;

  &:hover {
    border-color: $text-muted;
  }
}

.gateway-name {
  font-size: 14px;
  font-weight: 600;
  color: $text-primary;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-tag {
  font-size: 11px;
}

.gateway-meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.meta-item {
  font-size: 12px;
  color: $text-muted;
}

.session-summary {
  color: $text-secondary;
  font-style: italic;
}

.gateway-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pii-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pii-label {
  font-size: 12px;
  color: $text-secondary;
  white-space: nowrap;
}
</style>
