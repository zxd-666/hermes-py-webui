<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { NButton, NTag, NSpin, NSelect, useMessage, useDialog } from 'naive-ui'
import type { HermesProfile, HermesProfileDetail } from '@/api/hermes/profiles'
import { useProfilesStore } from '@/stores/hermes/profiles'
import { useModelsStore } from '@/stores/hermes/models'
import { updateProfileModel } from '@/api/hermes/profiles'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ profile: HermesProfile }>()
const emit = defineEmits<{ rename: [name: string] }>()

const { t } = useI18n()
const profilesStore = useProfilesStore()
const modelsStore = useModelsStore()
const message = useMessage()
const dialog = useDialog()

const expanded = ref(false)
const detailLoading = ref(false)
const exporting = ref(false)
const switching = ref(false)
const savingModel = ref(false)
const detail = ref<HermesProfileDetail | null>(null)

const isDefault = computed(() => props.profile.name === 'default')

onMounted(() => {
  if (modelsStore.providers.length === 0) {
    modelsStore.fetchProviders()
  }
})

const providerOptions = computed(() =>
  modelsStore.providers.map(p => ({
    label: p.label,
    value: p.provider,
  }))
)

const currentProvider = computed(() => {
  if (detail.value?.provider) return detail.value.provider
  return modelsStore.providers.find(p => p.models.includes(props.profile.model))?.provider || ''
})

const currentModels = computed(() => {
  const prov = modelsStore.providers.find(p => p.provider === currentProvider.value)
  return prov ? prov.models : []
})

const modelOptions = computed(() =>
  currentModels.value.map(m => ({
    label: m,
    value: m,
  }))
)

async function toggleDetail() {
  if (expanded.value) {
    expanded.value = false
    return
  }
  expanded.value = true
  detailLoading.value = true
  try {
    detail.value = await profilesStore.fetchProfileDetail(props.profile.name)
  } finally {
    detailLoading.value = false
  }
}

async function handleProviderChange(providerKey: string) {
  const prov = modelsStore.providers.find(p => p.provider === providerKey)
  if (!prov || prov.models.length === 0) return
  const model = prov.models[0]
  await handleModelSave(model, providerKey)
}

async function handleModelChange(model: string) {
  await handleModelSave(model, currentProvider.value)
}

async function handleModelSave(model: string, provider: string) {
  savingModel.value = true
  try {
    const ok = await updateProfileModel(props.profile.name, model, provider)
    if (ok) {
      message.success(t('profiles.modelUpdated'))
      await profilesStore.fetchProfiles()
      if (detail.value) {
        detail.value = await profilesStore.fetchProfileDetail(props.profile.name)
      }
    } else {
      message.error(t('profiles.modelUpdateFailed'))
    }
  } finally {
    savingModel.value = false
  }
}

async function handleSwitch() {
  switching.value = true
  try {
    const ok = await profilesStore.switchProfile(props.profile.name)
    if (ok) {
      window.location.reload()
    } else {
      message.error(t('profiles.switchFailed'))
    }
  } finally {
    switching.value = false
  }
}

function handleDelete() {
  dialog.warning({
    title: t('profiles.delete'),
    content: t('profiles.deleteConfirm', { name: props.profile.name }),
    positiveText: t('common.delete'),
    negativeText: t('common.cancel'),
    onPositiveClick: async () => {
      const ok = await profilesStore.deleteProfile(props.profile.name)
      if (ok) {
        message.success(t('profiles.deleteSuccess'))
      } else {
        message.error(t('profiles.deleteFailed'))
      }
    },
  })
}

async function handleExport() {
  exporting.value = true
  try {
    const ok = await profilesStore.exportProfile(props.profile.name)
    if (ok) {
      message.success(t('profiles.exportSuccess'))
    } else {
      message.error(t('profiles.exportFailed'))
    }
  } finally {
    exporting.value = false
  }
}
</script>

<template>
  <div class="profile-card" :class="{ active: profile.active }">
    <div class="card-header">
      <h3 class="profile-name">{{ profile.name }}</h3>
      <NTag v-if="profile.active" size="tiny" type="success" :bordered="false">
        {{ t('profiles.active') }}
      </NTag>
    </div>

    <div class="card-body">
      <div class="info-row">
        <span class="info-label">{{ t('profiles.provider') }}</span>
        <NSelect
          :value="currentProvider"
          :options="providerOptions"
          size="tiny"
          :loading="savingModel"
          style="max-width: 180px"
          @update:value="handleProviderChange"
        />
      </div>
      <div class="info-row">
        <span class="info-label">{{ t('profiles.model') }}</span>
        <NSelect
          :value="profile.model"
          :options="modelOptions"
          size="tiny"
          :loading="savingModel"
          :placeholder="currentProvider ? t('profiles.selectModel') : t('profiles.selectProviderFirst')"
          style="max-width: 180px"
          @update:value="handleModelChange"
        />
      </div>
      <div class="info-row">
        <span class="info-label">{{ t('profiles.gateway') }}</span>
        <code class="info-value mono">{{ profile.gateway }}</code>
      </div>
    </div>

    <div class="card-detail-toggle" @click="toggleDetail">
      <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="toggle-icon"
        :class="{ expanded }"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
      <span class="toggle-text">{{ expanded ? t('common.collapse') : t('common.expand') }}</span>
    </div>

    <div v-if="expanded" class="card-detail">
      <NSpin :show="detailLoading" size="small">
        <template v-if="detail">
          <div class="info-row">
            <span class="info-label">{{ t('profiles.path') }}</span>
            <code class="info-value mono detail-path">{{ detail.path }}</code>
          </div>
          <div class="info-row">
            <span class="info-label">{{ t('profiles.skills') }}</span>
            <span class="info-value">{{ detail.skills }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">{{ t('profiles.hasEnv') }}</span>
            <span class="info-value">{{ detail.hasEnv ? t('common.yes') : t('common.no') }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">{{ t('profiles.hasSoulMd') }}</span>
            <span class="info-value">{{ detail.hasSoulMd ? t('common.yes') : t('common.no') }}</span>
          </div>
        </template>
      </NSpin>
    </div>

    <div class="card-actions">
      <NButton
        v-if="!profile.active"
        size="tiny"
        quaternary
        :loading="switching"
        type="primary"
        @click="handleSwitch"
      >
        {{ t('profiles.switchTo') }}
      </NButton>
      <NButton
        size="tiny"
        quaternary
        @click="emit('rename', profile.name)"
      >
        {{ t('profiles.rename') }}
      </NButton>
      <NButton
        size="tiny"
        quaternary
        type="error"
        :disabled="isDefault || profile.active"
        @click="handleDelete"
      >
        {{ t('common.delete') }}
      </NButton>
      <NButton size="tiny" quaternary :loading="exporting" @click="handleExport">
        {{ t('profiles.export') }}
      </NButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.profile-card {
  background-color: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  padding: 16px;
  transition: border-color $transition-fast;

  &:hover {
    border-color: rgba(var(--accent-primary-rgb), 0.3);
  }

  &.active {
    border-color: rgba(var(--success-rgb), 0.4);
  }
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.profile-name {
  font-size: 15px;
  font-weight: 600;
  color: $text-primary;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70%;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
}

.card-detail-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0;
  cursor: pointer;
  color: $text-muted;
  font-size: 12px;
  user-select: none;

  &:hover {
    color: $text-secondary;
  }
}

.toggle-icon {
  transition: transform 0.2s;

  &.expanded {
    transform: rotate(180deg);
  }
}

.card-detail {
  padding: 8px 0;
  border-top: 1px solid $border-light;
  margin-bottom: 8px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
}

.info-label {
  font-size: 12px;
  color: $text-muted;
  flex-shrink: 0;
  margin-right: 12px;
}

.info-value {
  font-size: 12px;
  color: $text-secondary;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mono {
  font-family: $font-code;
  font-size: 12px;
}

.detail-path {
  max-width: 260px;
}

.card-actions {
  display: flex;
  gap: 8px;
  border-top: 1px solid $border-light;
  padding-top: 10px;
  flex-wrap: wrap;
}
</style>
