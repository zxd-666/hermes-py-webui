<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'

const props = defineProps<{
  label: string
  hint?: string
}>()

// Inject search query from SettingsView — fallback to empty string
const searchQuery = (inject<Ref<string>>('settingsSearchQuery', { value: '' })?.value ?? '') || ''

const visible = computed(() => {
  const q = (typeof searchQuery === 'string' ? searchQuery : '').trim().toLowerCase()
  if (!q) return true
  return (
    props.label.toLowerCase().includes(q) ||
    (props.hint || '').toLowerCase().includes(q)
  )
})
</script>

<template>
  <div v-if="visible" class="setting-row">
    <div class="setting-info">
      <label class="setting-label">{{ label }}</label>
      <p v-if="hint" class="setting-hint">{{ hint }}</p>
    </div>
    <div class="setting-control">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid $border-light;

  &:last-child {
    border-bottom: none;
  }
}

.setting-info {
  flex: 1;
  margin-right: 16px;
}

.setting-label {
  font-size: 13px;
  color: $text-primary;
  display: block;
}

.setting-hint {
  font-size: 12px;
  color: $text-muted;
  margin-top: 2px;
}

.setting-control {
  flex-shrink: 0;
}

@media (max-width: $breakpoint-mobile) {
  .setting-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .setting-info {
    margin-right: 0;
  }

  .setting-control {
    width: 100%;
  }
}
</style>
