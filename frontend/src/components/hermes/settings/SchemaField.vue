<script setup lang="ts">
import { NSwitch, NInputNumber, NInput, NSelect, NDynamicTags, NTag, useMessage } from 'naive-ui'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/hermes/settings'
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

const settingsStore = useSettingsStore()
const message = useMessage()
const { t } = useI18n()

const section = props.fieldKey.split('.')[0]
const fieldRest = props.fieldKey.split('.').slice(1)  // ["sub1", "sub2", "field"]
const fieldName = fieldRest.join('_')  // For flat display

// Label: prefer i18n key, fallback to field key (humanized)
const rawLabel = props.schema.label_i18n
  ? t(props.schema.label_i18n, '')
  : fieldName.replace(/_/g, ' ')
const label = rawLabel || fieldName
// Hint: prefer i18n, fallback to agent description
const hint = props.schema.hint_i18n
  ? t(props.schema.hint_i18n, '')
  : (props.schema.description || '')
const platformTag = PLATFORM_MAP[props.fieldKey] ?? null

const selectOptions = computed(() =>
  (props.schema.options || []).map((opt: any) => {
    // Agent API returns string[]; py-webui used { value, label_i18n }[]
    if (typeof opt === 'string') return { label: opt, value: opt }
    return { label: t(opt.label_i18n, opt.label || opt.value), value: opt.value }
  })
)

const listValue = ref<string[]>(Array.isArray(props.value) ? [...props.value] : [])
const stringValue = ref(typeof props.value === 'string' ? props.value : '')

async function save(value: any) {
  try {
    // Build nested object from fieldRest: ["compression", "provider"] → { compression: { provider: value } }
    const nested: any = {}
    let current = nested
    for (let i = 0; i < fieldRest.length - 1; i++) {
      current[fieldRest[i]] = {}
      current = current[fieldRest[i]]
    }
    current[fieldRest[fieldRest.length - 1]] = value
    await settingsStore.saveSection(section, nested)
    message.success(t('settings.saved'))
  } catch {
    message.error(t('settings.saveFailed'))
  }
}

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
        @update:value="(v: boolean) => save(v)"
      />

      <!-- Select -->
      <NSelect
        v-else-if="schema.type === 'select'"
        :value="value"
        :options="selectOptions"
        size="small"
        class="input-sm"
        :show-tooltip="true"
        @update:value="(v: string) => save(v)"
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
        @update:value="(v: number | null) => v != null && save(v)"
      />

      <!-- String -->
      <NInput
        v-else-if="schema.type === 'string'"
        :value="stringValue"
        size="small"
        class="input-sm"
        @update:value="(v: string) => { stringValue = v }"
        @keydown.enter="() => save(stringValue)"
        @blur="() => save(stringValue)"
      />

      <!-- List (dynamic tags) -->
      <NDynamicTags
        v-else-if="schema.type === 'list'"
        :value="listValue"
        size="small"
        class="input-sm"
        @update:value="(v: string[]) => { listValue = v; save(v) }"
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
