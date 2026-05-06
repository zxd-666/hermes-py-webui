<script setup lang="ts">
import { NInputNumber, NSelect, NSwitch, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/hermes/settings'
import { useSessionBrowserPrefsStore } from '@/stores/hermes/session-browser-prefs'
import SettingRow from './SettingRow.vue'

const settingsStore = useSettingsStore()
const sessionBrowserPrefsStore = useSessionBrowserPrefsStore()
const message = useMessage()
const { t } = useI18n()

async function saveReset(values: Record<string, any>) {
  try {
    await settingsStore.saveSection('session_reset', values)
    message.success(t('settings.saved'))
  } catch (err: any) {
    message.error(t('settings.saveFailed'))
  }
}

async function saveRetention(values: Record<string, any>) {
  try {
    await settingsStore.saveSection('sessions', values)
    message.success(t('settings.saved'))
  } catch (err: any) {
    message.error(t('settings.saveFailed'))
  }
}
</script>

<template>
  <section class="settings-section">
    <!-- Block 1: 重置策略 -->
    <div class="config-block">
      <h4 class="config-block-title">{{ t('settings.session.resetPolicy', '重置策略') }}</h4>
      <SettingRow :label="t('settings.session.mode')" :hint="t('settings.session.modeHint')">
        <NSelect
          :value="settingsStore.sessionReset.mode || 'both'"
          :options="[
            { label: t('settings.session.modeBoth'), value: 'both' },
            { label: t('settings.session.modeIdle'), value: 'idle' },
            { label: t('settings.session.modeHourly'), value: 'hourly' },
          ]"
          size="small" class="input-md"
          @update:value="v => saveReset({ mode: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.session.idleMinutes')" :hint="t('settings.session.idleMinutesHint')">
        <NInputNumber
          :value="settingsStore.sessionReset.idle_minutes"
          :min="10" :max="10080" :step="30"
          size="small" class="input-sm"
          @update:value="v => v != null && saveReset({ idle_minutes: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.session.atHour')" :hint="t('settings.session.atHourHint')">
        <NInputNumber
          :value="settingsStore.sessionReset.at_hour"
          :min="0" :max="23" :step="1"
          size="small" class="input-sm"
          @update:value="v => v != null && saveReset({ at_hour: v })"
        />
      </SettingRow>
    </div>

    <!-- Block 2: 实时监看 -->
    <div class="config-block">
      <h4 class="config-block-title">{{ t('settings.session.liveMonitor', '实时监看') }}</h4>
      <SettingRow :label="t('settings.session.liveMonitorHumanOnly')" :hint="t('settings.session.liveMonitorHumanOnlyHint')">
        <NSwitch
          :value="sessionBrowserPrefsStore.humanOnly"
          @update:value="value => sessionBrowserPrefsStore.setHumanOnly(value)"
        />
      </SettingRow>
    </div>

    <!-- Block 3: 保留 -->
    <div class="config-block">
      <h4 class="config-block-title">{{ t('settings.session.retention', '保留') }}</h4>
      <SettingRow :label="t('settings.session.retentionDays')" :hint="t('settings.session.retentionDaysHint')">
        <NInputNumber
          :value="settingsStore.sessions.retention_days"
          :min="1" :max="365" :step="1"
          size="small" class="input-sm"
          @update:value="v => v != null && saveRetention({ retention_days: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.session.autoPrune')" :hint="t('settings.session.autoPruneHint')">
        <NSwitch
          :value="settingsStore.sessions.auto_prune"
          @update:value="v => saveRetention({ auto_prune: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.session.vacuumAfterPrune')" :hint="t('settings.session.vacuumAfterPruneHint')">
        <NSwitch
          :value="settingsStore.sessions.vacuum_after_prune"
          @update:value="v => saveRetention({ vacuum_after_prune: v })"
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
