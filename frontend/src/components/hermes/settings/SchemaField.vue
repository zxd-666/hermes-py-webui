<script setup lang="ts">
import { NSwitch, NInputNumber, NInput, NSelect, NDynamicTags, NTag } from 'naive-ui'
import { computed, ref, watch } from 'vue'
import { SCHEMA_FIELD_I18N, SELECT_OPTION_I18N } from "@/i18n/schemaFieldI18n";
import { useI18n } from "vue-i18n";
import type { ConfigFieldSchema } from '@/api/hermes/config'

// ── Platform tags: mark fields that only work on specific clients ──
type PlatformTag = { label: string; type: 'warning' | 'info' }
const PLATFORM_MAP: Record<string, PlatformTag> = {
  // CLI / TUI only
  'display.skin':                  { label: 'CLI', type: 'warning' },
  'display.busy_input_mode':       { label: 'CLI', type: 'warning' },
  'display.copy_shortcut':         { label: 'CLI', type: 'warning' },
  'display.bell_on_complete':      { label: 'CLI', type: 'warning' },
  'display.compact':               { label: 'CLI', type: 'warning' },
  'display.tui_auto_resume_recent':{ label: 'CLI', type: 'warning' },
  'display.tui_status_indicator':  { label: 'CLI', type: 'warning' },
  'display.tool_progress_command': { label: 'CLI', type: 'warning' },
  'display.persistent_output':     { label: 'CLI', type: 'warning' },
  'display.persistent_output_max_lines': { label: 'CLI', type: 'warning' },
  'display.resume_display':        { label: 'CLI', type: 'warning' },
  'terminal.auto_source_bashrc':   { label: 'CLI', type: 'warning' },
  'terminal.backend':              { label: 'CLI', type: 'warning' },
  'terminal.container_cpu':        { label: 'CLI', type: 'warning' },
  'terminal.container_disk':       { label: 'CLI', type: 'warning' },
  'terminal.container_memory':     { label: 'CLI', type: 'warning' },
  'terminal.container_persistent': { label: 'CLI', type: 'warning' },
  'terminal.cwd':                  { label: 'CLI', type: 'warning' },
  'terminal.daytona_image':        { label: 'CLI', type: 'warning' },
  'terminal.docker_extra_args':    { label: 'CLI', type: 'warning' },
  'terminal.docker_forward_env':   { label: 'CLI', type: 'warning' },
  'terminal.docker_image':         { label: 'CLI', type: 'warning' },
  'terminal.docker_mount_cwd_to_workspace': { label: 'CLI', type: 'warning' },
  'terminal.docker_run_as_host_user': { label: 'CLI', type: 'warning' },
  'terminal.docker_volumes':       { label: 'CLI', type: 'warning' },
  'terminal.env_passthrough':       { label: 'CLI', type: 'warning' },
  'terminal.modal_image':          { label: 'CLI', type: 'warning' },
  'terminal.modal_mode':           { label: 'CLI', type: 'warning' },
  'terminal.persistent_shell':     { label: 'CLI', type: 'warning' },
  'terminal.shell_init_files':     { label: 'CLI', type: 'warning' },
  'terminal.singularity_image':    { label: 'CLI', type: 'warning' },
  'terminal.timeout':              { label: 'CLI', type: 'warning' },
  'terminal.vercel_runtime':       { label: 'CLI', type: 'warning' },
  'voice.auto_tts':                { label: 'CLI', type: 'warning' },
  'voice.beep_enabled':            { label: 'CLI', type: 'warning' },
  'voice.max_recording_seconds':   { label: 'CLI', type: 'warning' },
  'voice.record_key':              { label: 'CLI', type: 'warning' },
  'voice.silence_duration':        { label: 'CLI', type: 'warning' },
  'voice.silence_threshold':       { label: 'CLI', type: 'warning' },
  'agent.inline_shell':            { label: 'CLI', type: 'warning' },
  'agent.inline_shell_timeout':    { label: 'CLI', type: 'warning' },
  'agent.force_ipv4':              { label: 'CLI', type: 'warning' },
  'agent.mode':                    { label: 'CLI', type: 'warning' },
  'agent.service_tier':            { label: 'CLI', type: 'warning' },
  'human_delay.mode':              { label: 'CLI', type: 'warning' },
  'human_delay.min_ms':            { label: 'CLI', type: 'warning' },
  'human_delay.max_ms':            { label: 'CLI', type: 'warning' },
  'lsp.enabled':                   { label: 'CLI', type: 'warning' },
  'lsp.install_strategy':          { label: 'CLI', type: 'warning' },
  'lsp.wait_mode':                 { label: 'CLI', type: 'warning' },
  'lsp.wait_timeout':              { label: 'CLI', type: 'warning' },
  'updates.backup_keep':           { label: 'CLI', type: 'warning' },
  'updates.pre_update_backup':     { label: 'CLI', type: 'warning' },
  'security.destructive_slash_confirm': { label: 'CLI', type: 'warning' },
  // Dashboard only
  'display.show_token_analytics':  { label: 'Dashboard', type: 'info' },
}

const props = defineProps<{
  fieldKey: string
  schema: ConfigFieldSchema
  value: any
}>()

const { t } = useI18n()

const section = props.fieldKey.split('.')[0]
const fieldRest = props.fieldKey.split('.').slice(1)  // ["sub1", "sub2", "field"]
const fieldName = fieldRest.join('_')  // For flat display

// Label: prefer flat i18n map, fallback to humanized field key
const fieldI18n = SCHEMA_FIELD_I18N[props.fieldKey]
const label = fieldI18n?.label || fieldName.replace(/_/g, ' ')
// Hint: prefer flat i18n map, fallback to agent description
const hint = fieldI18n?.description || (props.schema.description || '')
const platformTag = PLATFORM_MAP[props.fieldKey] ?? null

const selectOptions = computed(() =>
  (props.schema.options || []).map((opt: any) => {
    if (typeof opt === 'string') {
      return { label: SELECT_OPTION_I18N[opt] ?? opt, value: opt }
    }
    return { label: t(opt.label_i18n, opt.label || opt.value), value: opt.value }
  })
)

const listValue = ref<string[]>(Array.isArray(props.value) ? [...props.value] : [])
const stringValue = ref(typeof props.value === 'string' ? props.value : '')
const numberValue = ref(typeof props.value === 'number' ? props.value : null)

// Sync local refs when parent updates value (e.g. after reset or fetch)
watch(() => props.value, (newVal) => {
  if (Array.isArray(newVal)) listValue.value = [...newVal]
  else if (typeof newVal === 'string') stringValue.value = newVal
  else if (typeof newVal === 'number') numberValue.value = newVal
})

// Build nested dict: "tts.edge.voice" → { edge: { voice: value } }
function buildNested(value: any): Record<string, any> {
  const nested: any = {}
  let current = nested
  for (let i = 0; i < fieldRest.length - 1; i++) {
    current[fieldRest[i]] = {}
    current = current[fieldRest[i]]
  }
  current[fieldRest[fieldRest.length - 1]] = value
  return nested
}

function emitChange(value: any) {
  // Normalize empty values so undefined/null/'' are treated as equal
  const norm = (v: any) => (v === undefined || v === null || v === '') ? '' : v
  if (JSON.stringify(norm(value)) === JSON.stringify(norm(props.value))) return
  // Update local ref so input reflects the pending change immediately
  if (typeof value === 'number') numberValue.value = value
  else if (typeof value === 'string') stringValue.value = value
  else if (Array.isArray(value)) listValue.value = [...value]
  emit('change', { key: props.fieldKey, value, nested: buildNested(value) })
}

const emit = defineEmits<{
  change: [payload: { key: string; value: any; nested: Record<string, any> }]
}>()

</script>

<template>
  <div class="schema-field">
    <div class="field-info">
      <div class="field-label-row">
        <label class="field-label">{{ label }}</label>
        <NTag
          v-if="platformTag"
          :type="platformTag.type"
          size="tiny"
          round
          class="platform-tag"
          :bordered="false"
        >{{ platformTag.label }}</NTag>
      </div>
      <p v-if="hint" class="field-hint">{{ hint }}</p>
    </div>
    <div class="field-control">
      <!-- Boolean -->
      <NSwitch
        v-if="schema.type === 'boolean'"
        :value="value"
        @update:value="(v: boolean) => emitChange(v)"
      />

      <!-- Select -->
      <NSelect
        v-else-if="schema.type === 'select'"
        :value="value"
        :options="selectOptions"
        size="small"
        class="input-sm"
        :show-tooltip="true"
        @update:value="(v: string) => emitChange(v)"
      />

      <!-- Number -->
      <NInputNumber
        v-else-if="schema.type === 'number'"
        :value="numberValue"
        :min="schema.min"
        :max="schema.max"
        :step="schema.step"
        size="small"
        class="input-sm"
        :placeholder="t('settings.inputPlaceholder')"
        @update:value="(v: number | null) => v != null && emitChange(v)"
      />

      <!-- String -->
      <NInput
        v-else-if="schema.type === 'string'"
        :value="stringValue"
        size="small"
        class="input-sm"
        :placeholder="t('settings.inputPlaceholder')"
        @update:value="(v: string) => { stringValue = v }"
        @keydown.enter="() => emitChange(stringValue)"
        @blur="() => emitChange(stringValue)"
      />

      <!-- List (dynamic tags) -->
      <NDynamicTags
        v-else-if="schema.type === 'list'"
        :value="listValue"
        size="small"
        class="input-sm"
        :placeholder="t('settings.inputPlaceholder')"
        @update:value="(v: string[]) => { listValue = v; emitChange(v) }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.schema-field {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid $border-light;

  &:last-child {
    border-bottom: none;
  }

  // Non-list fields: vertically center
  &:not(:has(.input-sm .n-dynamic-tags)) {
    align-items: center;
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
  display: inline;
}

.field-label-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.platform-tag {
  font-size: 10px;
  line-height: 1;
  padding: 1px 6px;
  opacity: 0.85;
}

.field-hint {
  font-size: 12px;
  color: $text-muted;
  margin-top: 2px;
  line-height: 1.4;
}

.field-control {
  flex-shrink: 0;
  max-width: 65%;

  // List fields: wrap tags, allow wider but still bounded
  :deep(.n-dynamic-tags) {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    max-height: 160px;
    overflow-y: auto;
  }
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
