<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { NSelect, useMessage } from 'naive-ui'
import { useProfilesStore } from '@/stores/hermes/profiles'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const message = useMessage()
const profilesStore = useProfilesStore()

const options = computed(() =>
  profilesStore.profiles.map(p => ({
    label: p.name === 'default' ? 'Hermes' : p.name,
    value: p.name,
  })),
)

const activeName = computed(() => profilesStore.activeProfile?.name ?? '')

function handleChange(value: string | number | Array<string | number>) {
  if (typeof value === 'string' && value !== activeName.value) {
    profilesStore.switchProfile(value).then(ok => {
      if (ok) {
        message.success(t('profiles.switchSuccess', { name: value }))
        window.location.reload()
      }
    })
  }
}

onMounted(() => {
  if (profilesStore.profiles.length === 0) {
    profilesStore.fetchProfiles()
  }
})
</script>

<template>
  <div class="profile-selector">
    <NSelect
      :value="activeName"
      :options="options"
      :loading="profilesStore.switching"
      size="small"
      :arrow="false"
      :consistent-menu-width="false"
      @update:value="handleChange"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.profile-selector {
  width: 95px;
  flex-shrink: 0;
}
</style>

<!-- Global styles to override NSelect internals -->
<style lang="scss">
.profile-selector .n-base-selection {
  --n-border: 1px solid transparent !important;
  --n-border-hover: 1px solid transparent !important;
  --n-border-focus: 1px solid transparent !important;
  --n-border-active: 1px solid transparent !important;
  --n-box-shadow-focus: none !important;
  --n-box-shadow-active: none !important;
  --n-box-shadow-hover: none !important;
  --n-color: transparent !important;
  --n-color-active: transparent !important;
  --n-color-hover: transparent !important;
  --n-arrow-color: transparent !important;
  --n-padding-single: 0 8px !important;
  font-size: 22px !important;
  font-weight: 700 !important;
  color: #0F1419 !important;

  .n-base-selection__border,
  .n-base-selection__state-border {
    display: none !important;
  }

  .n-base-selection__arrow {
    display: none !important;
  }

  .n-base-selection-input,
  .n-base-selection-input .n-base-selection-input__content {
    text-overflow: clip !important;
    overflow: visible !important;
    white-space: nowrap !important;
  }
}
</style>
