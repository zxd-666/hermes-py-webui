<script setup lang="ts">
import { NSelect, NInputNumber, NSwitch, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/hermes/settings'
import SettingRow from './SettingRow.vue'

const settingsStore = useSettingsStore()
const message = useMessage()
const { t } = useI18n()

async function saveApprovals(values: Record<string, any>) {
  try {
    await settingsStore.saveSection('approvals', values)
    message.success(t('settings.saved'))
  } catch (err: any) {
    message.error(t('settings.saveFailed'))
  }
}

async function saveHumanDelay(values: Record<string, any>) {
  try {
    await settingsStore.saveSection('human_delay', values)
    message.success(t('settings.saved'))
  } catch (err: any) {
    message.error(t('settings.saveFailed'))
  }
}

async function saveSecurity(values: Record<string, any>) {
  try {
    await settingsStore.saveSection('security', values)
    message.success(t('settings.saved'))
  } catch (err: any) {
    message.error(t('settings.saveFailed'))
  }
}
</script>

<template>
  <section class="settings-section">
    <!-- Block 1: 审批模式 -->
    <div class="config-block">
      <h4 class="config-block-title">{{ t('settings.approvals.approvalMode') }}</h4>
      <SettingRow :label="t('settings.approvals.mode')" :hint="t('settings.approvals.modeHint')">
        <NSelect
          :value="settingsStore.approvals.mode || 'manual'"
          :options="[
            { label: t('settings.approvals.manual'), value: 'manual' },
            { label: t('settings.approvals.autoOff'), value: 'auto-off' },
          ]"
          size="small" class="input-sm"
          @update:value="v => saveApprovals({ mode: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.approvals.cronMode')" :hint="t('settings.approvals.cronModeHint')">
        <NSelect
          :value="settingsStore.approvals.cron_mode || 'deny'"
          :options="[
            { label: t('settings.approvals.deny'), value: 'deny' },
            { label: t('settings.approvals.allow'), value: 'allow' },
            { label: t('settings.approvals.manual'), value: 'manual' },
          ]"
          size="small" class="input-sm"
          @update:value="v => saveApprovals({ cron_mode: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.approvals.timeout')" :hint="t('settings.approvals.timeoutHint')">
        <NInputNumber
          :value="settingsStore.approvals.timeout"
          :min="10" :max="600" :step="10"
          size="small" class="input-sm"
          @update:value="v => v != null && saveApprovals({ timeout: v })"
        />
      </SettingRow>
    </div>

    <!-- Block 2: 模拟延迟 -->
    <div class="config-block">
      <h4 class="config-block-title">{{ t('settings.humanDelay.humanDelay') }}</h4>
      <SettingRow :label="t('settings.humanDelay.mode')" :hint="t('settings.humanDelay.modeHint')">
        <NSelect
          :value="settingsStore.humanDelay.mode || 'off'"
          :options="[
            { label: t('settings.humanDelay.off'), value: 'off' },
            { label: t('settings.humanDelay.random'), value: 'random' },
          ]"
          size="small" class="input-sm"
          @update:value="v => saveHumanDelay({ mode: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.humanDelay.minMs')" :hint="t('settings.humanDelay.minMsHint')">
        <NInputNumber
          :value="settingsStore.humanDelay.min_ms"
          :min="100" :max="5000" :step="100"
          size="small" class="input-sm"
          @update:value="v => v != null && saveHumanDelay({ min_ms: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.humanDelay.maxMs')" :hint="t('settings.humanDelay.maxMsHint')">
        <NInputNumber
          :value="settingsStore.humanDelay.max_ms"
          :min="100" :max="10000" :step="100"
          size="small" class="input-sm"
          @update:value="v => v != null && saveHumanDelay({ max_ms: v })"
        />
      </SettingRow>
    </div>

    <!-- Block 3: 安全 -->
    <div class="config-block">
      <h4 class="config-block-title">{{ t('settings.security.securityBlock') }}</h4>
      <SettingRow :label="t('settings.security.redactSecrets')" :hint="t('settings.security.redactSecretsHint')">
        <NSwitch
          :value="settingsStore.security.redact_secrets"
          @update:value="v => saveSecurity({ redact_secrets: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.security.allowPrivateUrls')" :hint="t('settings.security.allowPrivateUrlsHint')">
        <NSwitch
          :value="settingsStore.security.allow_private_urls"
          @update:value="v => saveSecurity({ allow_private_urls: v })"
        />
      </SettingRow>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.settings-section {
  margin-top: 16px;
}

.config-block {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid $border-light;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
}

.config-block-title {
  font-size: 13px;
  font-weight: 600;
  color: $text-secondary;
  margin: 0 0 10px;
}
</style>
