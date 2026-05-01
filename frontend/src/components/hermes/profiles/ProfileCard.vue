<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { NButton, NTag, NSpin, NSelect, NPopconfirm, useMessage, useDialog } from 'naive-ui'
import type { HermesProfile, HermesProfileDetail, ProfileProvider } from '@/api/hermes/profiles'
import { getProfileAvatarUrl } from '@/api/hermes/profiles'
import { updateProfileModel } from '@/api/hermes/profiles'
import { useProfilesStore } from '@/stores/hermes/profiles'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ profile: HermesProfile }>()
const emit = defineEmits<{ rename: [name: string] }>()

const { t } = useI18n()
const profilesStore = useProfilesStore()
const message = useMessage()
const dialog = useDialog()

const expanded = ref(false)
const detailLoading = ref(false)
const exporting = ref(false)
const switching = ref(false)
const savingModel = ref(false)
const uploadingAvatar = ref(false)
const detail = ref<HermesProfileDetail | null>(null)

// Profile-level providers (fetched per-card, not global)
const profileProviders = ref<ProfileProvider[]>([])
const providersLoading = ref(false)

const isDefault = computed(() => props.profile.name === 'default')

const avatarUrl = computed(() => {
  if (props.profile.hasAvatar) {
    return getProfileAvatarUrl(props.profile.name)
  }
  return null
})

const providerOptions = computed(() =>
  profileProviders.value.map(p => ({
    label: p.label,
    value: p.provider,
  })),
)

const currentProvider = computed(() => {
  if (detail.value?.provider) return detail.value.provider
  return ''
})

const currentModels = computed(() => {
  const prov = profileProviders.value.find(p => p.provider === currentProvider.value)
  return prov ? prov.models : []
})

const modelOptions = computed(() =>
  currentModels.value.map(m => ({
    label: m,
    value: m,
  })),
)

async function fetchProviders() {
  providersLoading.value = true
  try {
    profileProviders.value = await profilesStore.fetchProfileProviders(props.profile.name)
  } finally {
    providersLoading.value = false
  }
}

async function toggleDetail() {
  if (expanded.value) {
    expanded.value = false
    return
  }
  expanded.value = true
  detailLoading.value = true
  providersLoading.value = true
  try {
    const [det, provs] = await Promise.all([
      profilesStore.fetchProfileDetail(props.profile.name),
      profilesStore.fetchProfileProviders(props.profile.name),
    ])
    detail.value = det
    profileProviders.value = provs
  } finally {
    detailLoading.value = false
    providersLoading.value = false
  }
}

async function handleProviderChange(providerKey: string) {
  const prov = profileProviders.value.find(p => p.provider === providerKey)
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

// --- Avatar ---

const avatarInput = ref<HTMLInputElement | null>(null)

function triggerAvatarUpload() {
  avatarInput.value?.click()
}

async function handleAvatarChange(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  if (file.size > 512 * 1024) {
    message.error('Image too large (max 512KB)')
    return
  }

  uploadingAvatar.value = true
  try {
    const ok = await profilesStore.uploadAvatar(props.profile.name, file)
    if (ok) {
      message.success(t('common.done'))
      // Bust avatar cache by appending timestamp
      if (detail.value) {
        detail.value = { ...detail.value, hasAvatar: true }
      }
    } else {
      message.error(t('common.failed'))
    }
  } finally {
    uploadingAvatar.value = false
    input.value = ''
  }
}

async function handleAvatarDelete() {
  const ok = await profilesStore.deleteAvatar(props.profile.name)
  if (ok) {
    message.success(t('common.done'))
    if (detail.value) {
      detail.value = { ...detail.value, hasAvatar: false }
    }
  }
}
</script>

<template>
  <div class="profile-card" :class="{ active: profile.active }">
    <div class="card-header">
      <div class="profile-identity">
        <div
          class="profile-avatar"
          :class="{ 'has-image': avatarUrl }"
          @click="triggerAvatarUpload"
          :title="t('profiles.uploadAvatar')"
        >
          <img v-if="avatarUrl" :src="avatarUrl + '?t=' + Date.now()" alt="" class="avatar-img" />
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="avatar-placeholder">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span v-if="uploadingAvatar" class="avatar-loading">
            <NSpin size="12" />
          </span>
        </div>
        <h3 class="profile-name">{{ profile.name }}</h3>
      </div>
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
          :loading="savingModel || providersLoading"
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
          <div class="info-row">
            <span class="info-label">{{ t('profiles.avatar') }}</span>
            <span class="info-value">
              <NTag v-if="detail.hasAvatar" size="tiny" :bordered="false">
                ✓
                <template #avatar>
                  <NPopconfirm @positive-click="handleAvatarDelete">
                    <template #trigger>
                      <NButton text size="tiny" class="avatar-remove-btn">×</NButton>
                    </template>
                    {{ t('profiles.removeAvatar') }}
                  </NPopconfirm>
                </template>
              </NTag>
              <span v-else class="text-muted">{{ t('common.no') }}</span>
            </span>
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

    <!-- Hidden file input for avatar upload -->
    <input
      ref="avatarInput"
      type="file"
      accept="image/png,image/jpeg,image/webp"
      class="hidden-input"
      @change="handleAvatarChange"
    />
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

.profile-identity {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.profile-avatar {
  width: 32px;
  height: 32px;
  border-radius: $radius-sm;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-color: rgba(var(--accent-primary-rgb), 0.08);
  color: $text-muted;
  transition: background-color $transition-fast;

  &:hover {
    background-color: rgba(var(--accent-primary-rgb), 0.15);
  }

  &.has-image {
    background: none;
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar-placeholder {
    flex-shrink: 0;
  }

  .avatar-loading {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: $radius-sm;
  }
}

.hidden-input {
  display: none;
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

.text-muted {
  color: $text-muted;
}

.avatar-remove-btn {
  padding: 0 2px;
  color: $text-muted;

  &:hover {
    color: $error;
  }
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
