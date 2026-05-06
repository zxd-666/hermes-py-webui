<script setup lang="ts">
import { NSwitch, NInputNumber, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/hermes/settings'
import SettingRow from './SettingRow.vue'

const settingsStore = useSettingsStore()
const message = useMessage()
const { t } = useI18n()

async function save(values: Record<string, any>) {
  try {
    await settingsStore.saveSection('memory', values)
    message.success(t('settings.saved'))
  } catch (err: any) {
    message.error(t('settings.saveFailed'))
  }
}
</script>

<template>
  <section class="settings-section">
    <!-- Block 1: 基础 -->
    <div class="config-block">
      <div class="config-block-title">{{ t('settings.memory.basic', '基础') }}</div>
      <SettingRow :label="t('settings.memory.enabled')" :hint="t('settings.memory.enabledHint')">
        <NSwitch :value="settingsStore.memory.memory_enabled" @update:value="v => save({ memory_enabled: v })" />
      </SettingRow>
      <SettingRow :label="t('settings.memory.userProfile')" :hint="t('settings.memory.userProfileHint')">
        <NSwitch :value="settingsStore.memory.user_profile_enabled" @update:value="v => save({ user_profile_enabled: v })" />
      </SettingRow>
      <SettingRow :label="t('settings.memory.charLimit')" :hint="t('settings.memory.charLimitHint')">
        <NInputNumber
          :value="settingsStore.memory.memory_char_limit"
          :min="100" :max="10000" :step="100"
          size="small" class="input-sm"
          @update:value="v => v != null && save({ memory_char_limit: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.memory.userCharLimit')" :hint="t('settings.memory.userCharLimitHint')">
        <NInputNumber
          :value="settingsStore.memory.user_char_limit"
          :min="100" :max="10000" :step="100"
          size="small" class="input-sm"
          @update:value="v => v != null && save({ user_char_limit: v })"
        />
      </SettingRow>
    </div>

    <!-- Block 2: 高级 -->
    <div class="config-block">
      <div class="config-block-title">{{ t('settings.memory.advanced', '高级') }}</div>
      <SettingRow :label="t('settings.memory.nudgeInterval')" :hint="t('settings.memory.nudgeIntervalHint')">
        <NInputNumber
          :value="settingsStore.memory.nudge_interval"
          :min="1" :max="50" :step="1"
          size="small" class="input-sm"
          @update:value="v => v != null && save({ nudge_interval: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.memory.retrievalThreshold')" :hint="t('settings.memory.retrievalThresholdHint')">
        <NInputNumber
          :value="settingsStore.memory.retrieval_threshold"
          :min="0" :max="1" :step="0.05"
          size="small" class="input-sm"
          @update:value="v => v != null && save({ retrieval_threshold: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.memory.maxMemoryEntries')" :hint="t('settings.memory.maxMemoryEntriesHint')">
        <NInputNumber
          :value="settingsStore.memory.max_memory_entries"
          :min="100" :max="10000" :step="100"
          size="small" class="input-sm"
          @update:value="v => v != null && save({ max_memory_entries: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.memory.flushMinTurns')" :hint="t('settings.memory.flushMinTurnsHint')">
        <NInputNumber
          :value="settingsStore.memory.flush_min_turns"
          :min="1" :max="50" :step="1"
          size="small" class="input-sm"
          @update:value="v => v != null && save({ flush_min_turns: v })"
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
}

.config-block:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.config-block-title {
  font-size: 13px;
  font-weight: 600;
  color: $text-secondary;
  margin: 0 0 10px;
}
</style>
