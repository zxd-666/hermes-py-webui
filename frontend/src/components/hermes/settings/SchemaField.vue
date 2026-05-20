<script setup lang="ts">
import { NSwitch, NInputNumber, NInput, NSelect, NDynamicTags, useMessage } from 'naive-ui'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/hermes/settings'
import type { ConfigFieldSchema } from '@/api/hermes/config'

const props = defineProps<{
  fieldKey: string
  schema: ConfigFieldSchema
  value: any
}>()

const settingsStore = useSettingsStore()
const message = useMessage()
const { t } = useI18n()

const section = props.fieldKey.split('.')[0]
const fieldName = props.fieldKey.split('.').slice(1).join('_')

const label = t(props.schema.label_i18n, props.fieldKey)
const hint = t(props.schema.hint_i18n, '')

const selectOptions = computed(() =>
  (props.schema.options || []).map((opt) => ({
    label: t(opt.label_i18n, opt.value),
    value: opt.value,
  }))
)

const listValue = ref<string[]>(Array.isArray(props.value) ? [...props.value] : [])
const stringValue = ref(typeof props.value === 'string' ? props.value : '')

async function save(values: Record<string, any>) {
  try {
    await settingsStore.saveSection(section, values)
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}

</script>

<template>
  <div class="schema-field">
    <div class="field-info">
      <label class="field-label">{{ label }}</label>
      <p v-if="hint" class="field-hint">{{ hint }}</p>
    </div>
    <div class="field-control">
      <!-- Boolean -->
      <NSwitch
        v-if="schema.type === 'boolean'"
        :value="value"
        @update:value="(v: boolean) => save({ [fieldName]: v })"
      />

      <!-- Select -->
      <NSelect
        v-else-if="schema.type === 'select'"
        :value="value"
        :options="selectOptions"
        size="small"
        class="input-sm"
        :show-tooltip="true"
        @update:value="(v: string) => save({ [fieldName]: v })"
      />

      <!-- Number -->
      <NInputNumber
        v-else-if="schema.type === 'number'"
        :value="value"
        :min="schema.min"
        :max="schema.max"
        :step="schema.step"
        size="small"
        class="input-sm"
        @update:value="(v: number | null) => v != null && save({ [fieldName]: v })"
      />

      <!-- String -->
      <NInput
        v-else-if="schema.type === 'string'"
        :value="stringValue"
        size="small"
        class="input-sm"
        @update:value="(v: string) => { stringValue = v }"
        @keydown.enter="() => save({ [fieldName]: stringValue })"
        @blur="() => save({ [fieldName]: stringValue })"
      />

      <!-- List (dynamic tags) -->
      <NDynamicTags
        v-else-if="schema.type === 'list'"
        :value="listValue"
        size="small"
        class="input-sm"
        @update:value="(v: string[]) => { listValue = v; save({ [fieldName]: v }) }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.schema-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid $border-light;

  &:last-child {
    border-bottom: none;
  }
}

.field-info {
  flex: 1;
  margin-right: 16px;
  min-width: 0;
}

.field-label {
  font-size: 13px;
  color: $text-primary;
  display: block;
}

.field-hint {
  font-size: 12px;
  color: $text-muted;
  margin-top: 2px;
  line-height: 1.4;
}

.field-control {
  flex-shrink: 0;
}

.input-sm {
  width: 140px;
}

@media (max-width: $breakpoint-mobile) {
  .schema-field {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .field-info {
    margin-right: 0;
  }

  .field-control {
    width: 100%;
  }

  .input-sm {
    width: 100%;
  }
}
</style>
