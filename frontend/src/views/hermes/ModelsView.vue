<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { NButton, NSpin, NSelect, NInputNumber, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import ProvidersPanel from '@/components/hermes/models/ProvidersPanel.vue'
import ProviderFormModal from '@/components/hermes/models/ProviderFormModal.vue'
import SettingRow from '@/components/hermes/settings/SettingRow.vue'
import { useModelsStore } from '@/stores/hermes/models'
import { useSettingsStore } from '@/stores/hermes/settings'
import { useAppStore } from '@/stores/hermes/app'
import { checkCopilotToken } from '@/api/hermes/copilot-auth'

const { t } = useI18n()
const modelsStore = useModelsStore()
const settingsStore = useSettingsStore()
const appStore = useAppStore()
const message = useMessage()
const showModal = ref(false)

// Auxiliary model keys
const auxiliaryKeys = [
  { key: 'compression', icon: '📦' },
  { key: 'flush_memories', icon: '🧹' },
  { key: 'mcp', icon: '🔌' },
  { key: 'session_search', icon: '🔍' },
  { key: 'skills_hub', icon: '📚' },
  { key: 'title_generation', icon: '✏️' },
  { key: 'vision', icon: '👁️' },
  { key: 'web_extract', icon: '🌐' },
  { key: 'approval', icon: '✅' },
] as const

const expandedKeys = ref<Set<string>>(new Set())

function toggleExpand(key: string) {
  if (expandedKeys.value.has(key)) expandedKeys.value.delete(key)
  else expandedKeys.value.add(key)
}

function getAuxConfig(key: string) {
  return settingsStore.auxiliary[key] || {}
}

const configuredCount = computed(() => {
  return auxiliaryKeys.filter(k => settingsStore.auxiliary[k.key]?.model).length
})

// Provider → Model options
const providerOptions = computed(() =>
  appStore.modelGroups.map(g => ({ label: g.label, value: g.provider }))
)

function getModelsForProvider(provider: string): string[] {
  const g = appStore.modelGroups.find(p => p.provider === provider)
  return g ? g.models : []
}

async function handleAuxProviderChange(taskKey: string, provider: string) {
  const models = getModelsForProvider(provider)
  const model = models[0] || ''
  try {
    await settingsStore.saveSection('auxiliary', {
      [taskKey]: { provider, model, base_url: '', api_key: '' },
    })
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}

async function handleAuxModelChange(taskKey: string, model: string) {
  const cfg = getAuxConfig(taskKey)
  try {
    await settingsStore.saveSection('auxiliary', {
      [taskKey]: { provider: cfg.provider || '', model },
    })
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}

async function saveAuxiliary(key: string, field: string, value: any) {
  try {
    await settingsStore.saveSection('auxiliary', { [key]: { [field]: value } })
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}

// Fallback
const fallbackModelOptions = computed(() => {
  const p = settingsStore.fallbackModel?.provider
  if (!p) return []
  return getModelsForProvider(p).map(m => ({ label: m, value: m }))
})

async function handleFallbackProviderChange(provider: string) {
  const models = getModelsForProvider(provider)
  const model = models[0] || ''
  try {
    await settingsStore.saveSection('fallback_model', { provider, model })
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}

async function handleFallbackModelChange(model: string) {
  try {
    await settingsStore.saveSection('fallback_model', { model })
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}

onMounted(async () => {
  try { await checkCopilotToken() } catch { /* ignore */ }
  modelsStore.fetchProviders()
  if (appStore.modelGroups.length === 0) appStore.loadModels()
})

function openCreateModal() {
  showModal.value = true
}

function handleModalClose() {
  showModal.value = false
}

async function handleSaved() {
  await modelsStore.fetchProviders()
  appStore.loadModels()
  handleModalClose()
}
</script>

<template>
  <div class="models-view">
    <header class="page-header">
      <h2 class="header-title">{{ t('models.title') }}</h2>
      <NButton type="primary" size="small" @click="openCreateModal">
        <template #icon>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </template>
        {{ t('models.addProvider') }}
      </NButton>
    </header>

    <div class="models-content">
      <!-- Provider 管理 -->
      <div class="config-block">
        <h4 class="section-title">{{ t('settings.models.providerManagement') }}</h4>
        <NSpin :show="modelsStore.loading && modelsStore.providers.length === 0">
          <ProvidersPanel />
        </NSpin>
      </div>

      <!-- 辅助模型 -->
      <div class="config-block">
        <h4 class="section-title">
          {{ t('settings.auxiliary.title') }}
          <span v-if="configuredCount > 0" class="configured-badge">{{ configuredCount }}/{{ auxiliaryKeys.length }}</span>
        </h4>
        <div class="auxiliary-list">
          <div
            v-for="item in auxiliaryKeys"
            :key="item.key"
            class="auxiliary-card"
            :class="{ expanded: expandedKeys.has(item.key) }"
          >
            <div class="auxiliary-card-header" @click="toggleExpand(item.key)">
              <span class="auxiliary-icon">{{ item.icon }}</span>
              <span class="auxiliary-label">{{ t(`settings.auxiliary.${item.key}`) }}</span>
              <span class="auxiliary-model-preview">
                {{ getAuxConfig(item.key).model || '—' }}
              </span>
              <svg
                class="chevron"
                :class="{ rotated: expandedKeys.has(item.key) }"
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              >
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
            <div v-if="expandedKeys.has(item.key)" class="auxiliary-card-body">
              <SettingRow :label="t('settings.auxiliary.provider')">
                <NSelect
                  :value="getAuxConfig(item.key).provider || undefined"
                  :options="providerOptions"
                  size="small" :filterable="true" :show-tooltip="true" clearable
                  :placeholder="t('settings.auxiliary.selectProvider')"
                  style="max-width: 200px"
                  @update:value="v => v && handleAuxProviderChange(item.key, v)"
                  @clear="() => saveAuxiliary(item.key, 'provider', '')"
                />
              </SettingRow>
              <SettingRow :label="t('settings.auxiliary.model')">
                <NSelect
                  :value="getAuxConfig(item.key).model || undefined"
                  :options="getModelsForProvider(getAuxConfig(item.key).provider || '').map(m => ({ label: m, value: m }))"
                  size="small" :filterable="true" :show-tooltip="true" clearable
                  :disabled="!getAuxConfig(item.key).provider"
                  :placeholder="getAuxConfig(item.key).provider ? t('settings.auxiliary.selectModel') : t('settings.auxiliary.selectProviderFirst')"
                  style="max-width: 200px"
                  @update:value="v => v && handleAuxModelChange(item.key, v)"
                  @clear="() => saveAuxiliary(item.key, 'model', '')"
                />
              </SettingRow>
              <SettingRow :label="t('settings.auxiliary.timeout')" :hint="t('settings.auxiliary.timeoutHint')">
                <NInputNumber
                  :value="getAuxConfig(item.key).timeout"
                  :min="5" :max="300" :step="5"
                  size="small" class="input-sm"
                  @update:value="v => v != null && saveAuxiliary(item.key, 'timeout', v)"
                />
              </SettingRow>
              <SettingRow
                v-if="item.key === 'session_search'"
                :label="t('settings.auxiliary.maxConcurrency')"
                :hint="t('settings.auxiliary.maxConcurrencyHint')"
              >
                <NInputNumber
                  :value="getAuxConfig(item.key).max_concurrency"
                  :min="1" :max="10" :step="1"
                  size="small" class="input-sm"
                  @update:value="v => v != null && saveAuxiliary(item.key, 'max_concurrency', v)"
                />
              </SettingRow>
              <SettingRow
                v-if="item.key === 'vision'"
                :label="t('settings.auxiliary.downloadTimeout')"
                :hint="t('settings.auxiliary.downloadTimeoutHint')"
              >
                <NInputNumber
                  :value="getAuxConfig(item.key).download_timeout"
                  :min="5" :max="120" :step="5"
                  size="small" class="input-sm"
                  @update:value="v => v != null && saveAuxiliary(item.key, 'download_timeout', v)"
                />
              </SettingRow>
              <SettingRow
                v-if="item.key === 'approval'"
                :label="t('settings.auxiliary.apiMode')"
                :hint="t('settings.auxiliary.apiModeHint')"
              >
                <NSelect
                  :value="getAuxConfig(item.key).api_mode || 'chat_completions'"
                  :options="[
                    { label: t('settings.auxiliary.chatCompletions'), value: 'chat_completions' },
                    { label: t('settings.auxiliary.responses'), value: 'responses' },
                  ]"
                  size="small" class="input-sm"
                  :show-tooltip="true"
                  @update:value="v => saveAuxiliary(item.key, 'api_mode', v)"
                />
              </SettingRow>
            </div>
          </div>
        </div>
      </div>

      <!-- 备用模型 -->
      <div class="config-block">
        <h4 class="section-title">{{ t('settings.fallback.title') }}</h4>
        <SettingRow :label="t('settings.fallback.provider')">
          <NSelect
            :value="settingsStore.fallbackModel?.provider || undefined"
            :options="providerOptions"
            size="small" :filterable="true" :show-tooltip="true" clearable
            :placeholder="t('settings.auxiliary.selectProvider')"
            style="max-width: 200px"
            @update:value="v => v && handleFallbackProviderChange(v)"
            @clear="async () => { try { await settingsStore.saveSection('fallback_model', { provider: '', model: '' }); message.success(t('settings.saved')) } catch { message.error(t('settings.saveFailed')) } }"
          />
        </SettingRow>
        <SettingRow :label="t('settings.fallback.model')">
          <NSelect
            :value="settingsStore.fallbackModel?.model || undefined"
            :options="fallbackModelOptions"
            size="small" :filterable="true" :show-tooltip="true" clearable
            :disabled="!settingsStore.fallbackModel?.provider"
            :placeholder="settingsStore.fallbackModel?.provider ? t('settings.auxiliary.selectModel') : t('settings.auxiliary.selectProviderFirst')"
            style="max-width: 200px"
            @update:value="v => v && handleFallbackModelChange(v)"
            @clear="async () => { try { await settingsStore.saveSection('fallback_model', { model: '' }); message.success(t('settings.saved')) } catch { message.error(t('settings.saveFailed')) } }"
          />
        </SettingRow>
      </div>
    </div>

    <ProviderFormModal
      v-if="showModal"
      @close="handleModalClose"
      @saved="handleSaved"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.models-view {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
}

.models-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.config-block {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid $border-light;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  color: $text-secondary;
  margin: 0 0 12px;
}

.section-hint {
  font-size: 12px;
  color: var(--n-warning-color, #e0a020);
  margin: -8px 0 12px;
}

.configured-badge {
  font-size: 11px;
  font-weight: 400;
  color: $text-muted;
  margin-left: 8px;
}

.auxiliary-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.auxiliary-card {
  background: $bg-secondary;
  border-radius: $radius-sm;
  overflow: hidden;

  &.expanded {
    .auxiliary-card-header {
      border-radius: $radius-sm $radius-sm 0 0;
    }
  }
}

.auxiliary-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background $transition-fast;

  &:hover {
    background: $bg-card-hover;
  }
}

.auxiliary-icon {
  font-size: 14px;
  flex-shrink: 0;
}

.auxiliary-label {
  font-size: 13px;
  color: var(--text-primary, $text-primary);
  flex-shrink: 0;
}

.auxiliary-model-preview {
  font-size: 12px;
  color: $text-muted;
  flex: 1;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chevron {
  color: $text-muted;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  &.rotated {
    transform: rotate(90deg);
  }
}

.auxiliary-card-body {
  padding: 4px 12px 12px;
  border-top: 1px solid $border-light;
}
</style>
