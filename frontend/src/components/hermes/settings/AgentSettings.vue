<script setup lang="ts">
import { NInputNumber, NSelect, NSwitch, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/hermes/settings'
import SettingRow from './SettingRow.vue'

const settingsStore = useSettingsStore()
const message = useMessage()
const { t } = useI18n()

async function saveAgent(values: Record<string, any>) {
  try {
    await settingsStore.saveSection('agent', values)
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}

async function saveDelegation(values: Record<string, any>) {
  try {
    await settingsStore.saveSection('delegation', values)
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}
</script>

<template>
  <section class="settings-section">
    <!-- Block 1: 基础 -->
    <div class="config-block">
      <h4 class="config-block-title">{{ t('settings.agent.basic', '基础') }}</h4>
      <SettingRow :label="t('settings.agent.maxTurns')" :hint="t('settings.agent.maxTurnsHint')">
        <NInputNumber
          :value="settingsStore.agent.max_turns"
          :min="1" :max="200" :step="5"
          size="small" class="input-sm"
          @update:value="v => v != null && saveAgent({ max_turns: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.agent.gatewayTimeout')" :hint="t('settings.agent.gatewayTimeoutHint')">
        <NInputNumber
          :value="settingsStore.agent.gateway_timeout"
          :min="60" :max="7200" :step="60"
          size="small" class="input-sm"
          @update:value="v => v != null && saveAgent({ gateway_timeout: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.agent.restartDrainTimeout')" :hint="t('settings.agent.restartDrainTimeoutHint')">
        <NInputNumber
          :value="settingsStore.agent.restart_drain_timeout"
          :min="10" :max="300" :step="10"
          size="small" class="input-sm"
          @update:value="v => v != null && saveAgent({ restart_drain_timeout: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.agent.toolEnforcement')" :hint="t('settings.agent.toolEnforcementHint')">
        <NSelect
          :value="settingsStore.agent.tool_use_enforcement || 'auto'"
          :options="[
            { label: t('settings.agent.auto'), value: 'auto' },
            { label: t('settings.agent.always'), value: 'always' },
            { label: t('settings.agent.never'), value: 'never' },
          ]"
          size="small" class="input-sm"
          :show-tooltip="true"
          @update:value="v => saveAgent({ tool_use_enforcement: v })"
        />
      </SettingRow>
    </div>

    <!-- Block 2: 委托 -->
    <div class="config-block">
      <h4 class="config-block-title">{{ t('settings.agent.delegation', '委托') }}</h4>
      <SettingRow :label="t('settings.agent.maxConcurrentChildren')" :hint="t('settings.agent.maxConcurrentChildrenHint')">
        <NInputNumber
          :value="settingsStore.delegation.max_concurrent_children"
          :min="1" :max="10" :step="1"
          size="small" class="input-sm"
          @update:value="v => v != null && saveDelegation({ max_concurrent_children: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.agent.maxSpawnDepth')" :hint="t('settings.agent.maxSpawnDepthHint')">
        <NInputNumber
          :value="settingsStore.delegation.max_spawn_depth"
          :min="1" :max="5" :step="1"
          size="small" class="input-sm"
          @update:value="v => v != null && saveDelegation({ max_spawn_depth: v })"
        />
      </SettingRow>
      <SettingRow :label="t('settings.agent.orchestratorEnabled')" :hint="t('settings.agent.orchestratorEnabledHint')">
        <NSwitch
          :value="settingsStore.delegation.orchestrator_enabled"
          @update:value="v => saveDelegation({ orchestrator_enabled: v })"
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
