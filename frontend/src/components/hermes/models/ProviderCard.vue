<script setup lang="ts">
import { ref, computed } from 'vue'
import { NButton, useMessage, useDialog } from 'naive-ui'
import type { AvailableModelGroup } from '@/api/hermes/system'
import { useModelsStore } from '@/stores/hermes/models'
import { useAppStore } from '@/stores/hermes/app'
import { useChatStore } from '@/stores/hermes/chat'
import { checkCopilotToken, disableCopilot } from '@/api/hermes/copilot-auth'
import { useI18n } from 'vue-i18n'
import ProviderFormModal from './ProviderFormModal.vue'

const props = defineProps<{ provider: AvailableModelGroup }>()

const { t } = useI18n()
const modelsStore = useModelsStore()
const appStore = useAppStore()
const chatStore = useChatStore()
const message = useMessage()
const dialog = useDialog()

const isCustom = computed(() => props.provider.provider.startsWith('custom:'))
const isCopilot = computed(() => props.provider.provider === 'copilot')
const displayName = computed(() => props.provider.label)
const deleting = ref(false)
const settingDefault = ref(false)
const showEditModal = ref(false)
const hasKey = computed(() => !!props.provider.api_key)

async function handleEditSaved() {
  showEditModal.value = false
  await Promise.all([modelsStore.fetchProviders(), appStore.loadModels()])
}

async function handleSetDefault(modelId: string) {
  settingDefault.value = true
  try {
    await modelsStore.setDefaultModel(modelId, props.provider.provider)
    message.success(t('models.defaultSet', { model: modelId }))
  } catch (e: any) {
    message.error(e.message)
  } finally {
    settingDefault.value = false
  }
}

async function handleDelete() {
  let copilotMsg = ''
  if (isCopilot.value) {
    try {
      const status = await checkCopilotToken()
      if (status.source === 'env') copilotMsg = t('models.copilotDeleteHintEnv')
      else if (status.source === 'gh-cli') copilotMsg = t('models.copilotDeleteHintGhCli')
      else if (status.source === 'apps-json') copilotMsg = t('models.copilotDeleteHintAppsJson')
    } catch { /* ignore */ }
  }
  dialog.warning({
    title: t('models.deleteProvider'),
    content: isCopilot.value && copilotMsg
      ? `${t('models.deleteConfirm', { name: displayName.value })}\n\n${copilotMsg}`
      : t('models.deleteConfirm', { name: displayName.value }),
    positiveText: t('common.delete'),
    negativeText: t('common.cancel'),
    onPositiveClick: async () => {
      deleting.value = true
      try {
        if (isCopilot.value) {
          await disableCopilot()
          chatStore.clearProviderFromSessions('copilot')
          await Promise.all([modelsStore.fetchProviders(), appStore.loadModels()])
        } else {
          await modelsStore.removeProvider(props.provider.provider)
        }
        if (!appStore.selectedModel && appStore.modelGroups.length > 0) {
          const first = appStore.modelGroups.find(g => g.models.length > 0)
          if (first) {
            await appStore.switchModel(first.models[0], first.provider)
          }
        }
        message.success(t('models.providerDeleted'))
      } catch (e: any) {
        message.error(e.message)
      } finally {
        deleting.value = false
      }
    },
  })
}
</script>

<template>
  <div class="provider-card">
    <div class="card-header">
      <h3 class="provider-name">{{ displayName }}</h3>
      <span class="type-badge" :class="isCustom ? 'custom' : 'builtin'">
        {{ isCustom ? t('models.customType') : t('models.builtIn') }}
      </span>
    </div>

    <div class="card-body">
      <div class="info-row">
        <span class="info-label">{{ t('models.provider') }}</span>
        <code class="info-value mono">{{ provider.provider }}</code>
      </div>
      <div class="info-row">
        <span class="info-label">{{ t('models.baseUrl') }}</span>
        <code class="info-value mono">{{ provider.base_url }}</code>
      </div>
      <div class="info-row models-row">
        <span class="info-label">{{ t('models.models') }}</span>
        <span class="info-value models-count">{{ provider.models.length }} {{ t('models.count') }}</span>
      </div>
      <div class="models-list">
        <span
          v-for="model in provider.models.slice(0, 20)"
          :key="model"
          class="model-tag"
          :class="{ 'model-tag-default': model === modelsStore.defaultModel && provider.provider === modelsStore.defaultProvider }"
          :title="model === modelsStore.defaultModel && provider.provider === modelsStore.defaultProvider ? t('models.currentDefault') : t('models.clickToSetDefault')"
          @click="(model !== modelsStore.defaultModel || provider.provider !== modelsStore.defaultProvider) && handleSetDefault(model)"
        >{{ model }}</span>
        <span v-if="provider.models.length > 20" class="model-tag model-tag-more">
          +{{ provider.models.length - 20 }} {{ t('models.more') }}
        </span>
      </div>
    </div>

    <div class="card-actions">
      <NButton size="tiny" quaternary @click="showEditModal = true">{{ t('common.edit') }}</NButton>
      <NButton size="tiny" quaternary type="error" :loading="deleting" @click="handleDelete">{{ t('common.delete') }}</NButton>
    </div>
  </div>

  <ProviderFormModal
    v-if="showEditModal"
    :edit-provider="provider"
    @close="showEditModal = false"
    @saved="handleEditSaved"
  />
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.provider-card {
  background-color: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  padding: 10px 14px;
  transition: border-color $transition-fast;

  &:hover {
    border-color: rgba(var(--accent-primary-rgb), 0.3);
  }
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.provider-name {
  font-size: 15px;
  font-weight: 600;
  color: $text-primary;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70%;
}

.type-badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 500;

  &.builtin {
    background: rgba(var(--accent-primary-rgb), 0.12);
    color: $accent-primary;
  }

  &.custom {
    background: rgba(var(--success-rgb), 0.12);
    color: $success;
  }
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 8px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-label {
  font-size: 12px;
  color: $text-muted;
}

.info-value {
  font-size: 12px;
  color: $text-secondary;

  &.has-key {
    color: $success;
    font-family: $font-code;
  }
}

.mono {
  font-family: $font-code;
  font-size: 12px;
}

.models-row {
  margin-top: 4px;
}

.models-count {
  color: $text-muted;
  font-size: 12px;
}

.models-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  margin-top: 4px;
  max-height: 68px;
  overflow-y: auto;
  align-content: flex-start;
}

.model-tag {
  display: inline-flex;
  align-items: center;
  height: 20px;
  font-size: 10px;
  font-family: $font-code;
  padding: 2px 6px;
  border-radius: 3px;
  background: rgba(var(--accent-primary-rgb), 0.08);
  color: $text-secondary;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;

  &:hover:not(&-default) {
    background: rgba(var(--accent-primary-rgb), 0.16);
    cursor: pointer;
  }

  &-default {
    background: rgba(var(--success-rgb), 0.15);
    color: $success;
    font-weight: 600;
  }

  &-more {
    background: rgba(var(--accent-primary-rgb), 0.15);
    color: $accent-primary;
    font-weight: 500;
  }
}

.card-actions {
  display: flex;
  gap: 8px;
  border-top: 1px solid $border-light;
  padding-top: 6px;
}
</style>
