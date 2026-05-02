<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'

// Provider presets loaded from CLI registry
import { NModal, NForm, NFormItem, NInput, NInputNumber, NButton, NSelect, NRadioGroup, NRadioButton, useMessage, useDialog } from 'naive-ui'
import type { AvailableModelGroup } from '@/api/hermes/system'
import { fetchProviderPresets, type ProviderPreset } from '@/api/hermes/system'
import { PROVIDER_PRESETS } from '@/shared/providers'
import { useModelsStore } from '@/stores/hermes/models'
import { useI18n } from 'vue-i18n'
import CodexLoginModal from './CodexLoginModal.vue'
import NousLoginModal from './NousLoginModal.vue'
import CopilotLoginModal from './CopilotLoginModal.vue'
import { checkCopilotToken, enableCopilot, type CopilotTokenSource } from '@/api/hermes/copilot-auth'

const { t } = useI18n()

const props = withDefaults(defineProps<{
  /** Existing provider data for edit mode */
  editProvider?: AvailableModelGroup
}>(), {
  editProvider: undefined,
})

const isEditMode = computed(() => !!props.editProvider)

const emit = defineEmits<{
  close: []
  saved: []
}>()

const modelsStore = useModelsStore()
const message = useMessage()
const dialog = useDialog()

const showModal = ref(true)
const loading = ref(false)
const fetchingModels = ref(false)
const showCodexLogin = ref(false)
const showNousLogin = ref(false)
const showCopilotLogin = ref(false)
const copilotChecking = ref(false)

const providerType = ref<'preset' | 'custom'>('preset')
const selectedPreset = ref<string | null>(null)
const presetList = ref<ProviderPreset[]>([])
const formData = ref({
  name: '',
  base_url: '',
  api_key: '',
  model: '',
  context_length: null as number | null,
})

const modelOptions = ref<Array<{ label: string; value: string }>>([])

const CODEX_KEY = 'openai-codex'
const NOUS_KEY = 'nous'
const COPILOT_KEY = 'copilot'
const ALIBABA_CODING_KEY = 'alibaba-coding-plan'
const ALIBABA_CODING_REGIONS = {
  intl: 'https://coding-intl.dashscope.aliyuncs.com/v1',
  cn: 'https://coding.dashscope.aliyuncs.com/v1',
} as const

const isCodex = computed(() => selectedPreset.value === CODEX_KEY)
const isNous = computed(() => selectedPreset.value === NOUS_KEY)
const isCopilot = computed(() => selectedPreset.value === COPILOT_KEY)
const isAlibabaCoding = computed(() => selectedPreset.value === ALIBABA_CODING_KEY)
const alibabaCodingRegion = ref<'intl' | 'cn'>('intl')

const presetOptions = computed(() =>
  presetList.value.map(p => ({ label: p.name, value: p.id })),
)

function autoGenerateName(url: string): string {
  const clean = url.replace(/^https?:\/\//, '').replace(/\/v1\/?$/, '')
  const host = clean.split('/')[0]
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return t('models.local', { host })
  }
  return host.charAt(0).toUpperCase() + host.slice(1)
}

watch(selectedPreset, (val) => {
  if (isEditMode.value) return
  formData.value.model = ''
  alibabaCodingRegion.value = 'intl'
  if (val) {
    const preset = presetList.value.find(p => p.id === val)
    if (preset) {
      formData.value.name = preset.name
      formData.value.base_url = preset.base_url
    }
    // Populate models from preset registry
    const presetDef = PROVIDER_PRESETS.find(p => p.value === val)
    if (presetDef && presetDef.models.length > 0) {
      modelOptions.value = presetDef.models.map(m => ({ label: m, value: m }))
      formData.value.model = presetDef.models[0]
    } else {
      // Fallback: if this provider already exists in the store, use its models
      const existing = modelsStore.allProviders.find(g => g.provider === val)
      if (existing) {
        modelOptions.value = existing.models.map(m => ({ label: m, value: m }))
        if (existing.models.length > 0) {
          formData.value.model = existing.models[0]
        }
      } else {
        modelOptions.value = []
      }
    }
    if (val === COPILOT_KEY) {
      void triggerCopilotAdd()
    }
  }
})

watch(alibabaCodingRegion, (region) => {
  if (isAlibabaCoding.value) {
    formData.value.base_url = ALIBABA_CODING_REGIONS[region]
  }
})

watch(() => formData.value.base_url, (url) => {
  if (providerType.value === 'custom' && url.trim() && !formData.value.name) {
    formData.value.name = autoGenerateName(url.trim())
  }
})

watch(providerType, () => {
  if (isEditMode.value) return
  modelOptions.value = []
  formData.value = { name: '', base_url: '', api_key: '', model: '', context_length: null }
  selectedPreset.value = null
})

onMounted(async () => {
  if (modelsStore.providers.length === 0) {
    modelsStore.fetchProviders()
  }
  // Load preset provider list
  if (presetList.value.length === 0) {
    try {
      presetList.value = await fetchProviderPresets()
    } catch { /* ignore — presets are optional */ }
  }
  // Edit mode: pre-fill form with same layout as create
  if (props.editProvider) {
    const p = props.editProvider
    formData.value.name = p.label
    formData.value.base_url = p.base_url
    formData.value.api_key = p.api_key || ''
    formData.value.model = p.models.length > 0 ? p.models[0] : ''
    if (p.provider.startsWith('custom:')) {
      providerType.value = 'custom'
      modelOptions.value = p.models.map(m => ({ label: m, value: m }))
    } else {
      providerType.value = 'preset'
      selectedPreset.value = p.provider
      const presetDef = PROVIDER_PRESETS.find(pr => pr.value === p.provider)
      if (presetDef && presetDef.models.length > 0) {
        modelOptions.value = presetDef.models.map(m => ({ label: m, value: m }))
      } else if (p.models.length > 0) {
        modelOptions.value = p.models.map(m => ({ label: m, value: m }))
      }
    }
  }
})

async function fetchModels() {
  const { base_url } = formData.value
  if (!base_url.trim()) {
    message.warning(t('models.enterBaseUrl'))
    return
  }

  fetchingModels.value = true
  try {
    const base = base_url.replace(/\/+$/, '')
    const url = /\/v\d+\/?$/.test(base) ? `${base}/models` : `${base}/v1/models`
    const headers: Record<string, string> = {}
    if (formData.value.api_key.trim()) {
      headers['Authorization'] = `Bearer ${formData.value.api_key.trim()}`
    }
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json() as { data?: Array<{ id: string }> }
    if (!Array.isArray(data.data)) throw new Error(t('models.unexpectedFormat'))

    modelOptions.value = data.data.map(m => ({ label: m.id, value: m.id }))
    if (modelOptions.value.length > 0 && !formData.value.model) {
      formData.value.model = modelOptions.value[0].value
    }
    message.success(t('models.foundModels', { count: modelOptions.value.length }))
  } catch (e: any) {
    message.error(t('models.fetchFailed') + ': ' + e.message)
  } finally {
    fetchingModels.value = false
  }
}

async function handleSave() {
  // Edit mode: simple update
  if (isEditMode.value) {
    if (!formData.value.base_url.trim()) {
      message.warning(t('models.baseUrlRequired'))
      return
    }
    loading.value = true
    try {
      const { updateProvider } = await import('@/api/hermes/system')
      await updateProvider(props.editProvider!.provider, {
        name: formData.value.name.trim(),
        base_url: formData.value.base_url.trim(),
        model: formData.value.model,
        ...(formData.value.api_key.trim() ? { api_key: formData.value.api_key.trim() } : {}),
      })
      message.success(t('models.providerUpdated'))
      emit('saved')
    } catch (e: any) {
      message.error(e.message)
    } finally {
      loading.value = false
    }
    return
  }

  if (providerType.value === 'preset' && !selectedPreset.value) {
    message.warning(t('models.selectProviderRequired'))
    return
  }

  // Codex: 弹出授权码弹窗
  if (isCodex.value) {
    showCodexLogin.value = true
    return
  }

  // Nous: 弹出 OAuth 设备码弹窗
  if (isNous.value) {
    showNousLogin.value = true
    return
  }

  // Copilot: 走 token-aware 的添加流程（已有 token → 确认窗；否则 device flow）
  if (isCopilot.value) {
    void triggerCopilotAdd()
    return
  }

  // Check if preset provider already exists
  if (providerType.value === 'preset' && selectedPreset.value) {
    const exists = modelsStore.allProviders.find(g => g.provider === selectedPreset.value)
    if (exists) {
      message.warning(t('models.providerAlreadyExists', { name: exists.label }))
      return
    }
  }

  if (!formData.value.base_url.trim()) {
    message.warning(t('models.baseUrlRequired'))
    return
  }
  if (!formData.value.api_key.trim()) {
    message.warning(t('models.apiKeyRequired'))
    return
  }

  loading.value = true
  try {
    const providerKey = providerType.value === 'preset'
      ? selectedPreset.value
      : null

    const contextLength = formData.value.context_length ?? undefined
    await modelsStore.addProvider({
      name: formData.value.name.trim(),
      base_url: formData.value.base_url.trim(),
      api_key: formData.value.api_key.trim(),
      model: formData.value.model,
      context_length: contextLength,
      providerKey,
    })
    message.success(t('models.providerAdded'))
    emit('saved')
  } catch (e: any) {
    message.error(e.message)
  } finally {
    loading.value = false
  }
}

async function handleCodexSuccess() {
  showCodexLogin.value = false
  message.success(t('models.providerAdded'))
  emit('saved')
}

async function handleNousSuccess() {
  showNousLogin.value = false
  message.success(t('models.providerAdded'))
  emit('saved')
}

async function handleCopilotSuccess() {
  showCopilotLogin.value = false
  message.success(t('models.providerAdded'))
  emit('saved')
}

function copilotSourceLabel(source: CopilotTokenSource): string {
  if (source === 'env') return t('models.copilotAddSourceEnv')
  if (source === 'gh-cli') return t('models.copilotAddSourceGhCli')
  if (source === 'apps-json') return t('models.copilotAddSourceAppsJson')
  return ''
}

async function triggerCopilotAdd() {
  if (copilotChecking.value) return
  copilotChecking.value = true
  try {
    const status = await checkCopilotToken()
    if (status.has_token) {
      // 已能解析到 token：弹确认窗，用户点 [添加] → enable + saved
      const sourceText = copilotSourceLabel(status.source)
      dialog.success({
        title: t('models.copilotAddDetectedTitle'),
        content: sourceText
          ? `${t('models.copilotAddDetected')}\n\n${sourceText}`
          : t('models.copilotAddDetected'),
        positiveText: t('common.add'),
        negativeText: t('common.cancel'),
        onPositiveClick: async () => {
          try {
            await enableCopilot()
            message.success(t('models.providerAdded'))
            emit('saved')
          } catch (e: any) {
            message.error(e?.message ?? String(e))
          }
        },
        onNegativeClick: () => {
          selectedPreset.value = null
        },
        onClose: () => {
          selectedPreset.value = null
        },
      })
    } else {
      // 无 token：device flow
      showCopilotLogin.value = true
    }
  } catch (e: any) {
    message.error(e?.message ?? String(e))
    selectedPreset.value = null
  } finally {
    copilotChecking.value = false
  }
}

function handleCopilotClose() {
  showCopilotLogin.value = false
  // 用户取消 Copilot 引导时，清空选择避免卡在无 api_key 状态
  selectedPreset.value = null
}

function handleClose() {
  showModal.value = false
  setTimeout(() => emit('close'), 200)
}
</script>

<template>
  <NModal
    v-model:show="showModal"
    preset="card"
    :title="isEditMode ? t('models.editProvider') : t('models.addProvider')"
    :style="{ width: 'min(520px, calc(100vw - 32px))' }"
    :mask-closable="!loading && !showCodexLogin && !showNousLogin && !showCopilotLogin"
    @after-leave="emit('close')"
  >
    <NForm label-placement="top">
      <NFormItem :label="t('models.providerType')">
        <div style="display: flex; gap: 12px">
          <NButton
            :type="providerType === 'preset' ? 'primary' : 'default'"
            size="small"
            :disabled="isEditMode"
            @click="providerType = 'preset'"
          >
            {{ t('models.preset') }}
          </NButton>
          <NButton
            :type="providerType === 'custom' ? 'primary' : 'default'"
            size="small"
            :disabled="isEditMode"
            @click="providerType = 'custom'"
          >
            {{ t('models.custom') }}
          </NButton>
        </div>
      </NFormItem>

      <NFormItem v-if="providerType === 'preset'" :label="t('models.selectProvider')" required>
        <NSelect
          v-model:value="selectedPreset"
          :options="presetOptions"
          :placeholder="t('models.chooseProvider')"
          :disabled="isEditMode"
          filterable
                         :show-tooltip="true"
        />
      </NFormItem>

      <NFormItem v-if="providerType === 'custom' && !isCodex && !isNous" :label="t('models.name')">
        <NInput
          v-model:value="formData.name"
          :placeholder="t('models.autoGeneratedName')"
        />
      </NFormItem>

      <NFormItem v-if="isAlibabaCoding" :label="t('models.region')">
        <NRadioGroup v-model:value="alibabaCodingRegion">
          <NRadioButton value="intl">{{ t('models.regionIntl') }}</NRadioButton>
          <NRadioButton value="cn">{{ t('models.regionCn') }}</NRadioButton>
        </NRadioGroup>
      </NFormItem>

      <NFormItem v-if="!isCodex && !isNous" :label="t('models.baseUrl')" required>
        <NInput
          v-model:value="formData.base_url"
          :placeholder="t('models.baseUrlPlaceholder')"
          :disabled="providerType === 'preset'"
        />
      </NFormItem>

      <NFormItem v-if="!isCodex && !isNous" :label="t('models.apiKey')">
        <NInput
          v-model:value="formData.api_key"
          type="password"
          show-password-on="click"
          :placeholder="t('models.apiKeyPlaceholder')"
          autocomplete="off"
        />
      </NFormItem>

      <NFormItem v-if="providerType === 'custom' && !isEditMode" :label="t('models.contextLength')">
        <NInputNumber
          v-model:value="formData.context_length as number | null"
          :placeholder="t('models.contextLengthPlaceholder')"
          :min="0"
          clearable
          style="width: 100%"
        />
      </NFormItem>
    </NForm>

    <template #footer>
      <div class="modal-footer">
        <NButton @click="handleClose">{{ t('common.cancel') }}</NButton>
        <NButton type="primary" :loading="loading" @click="handleSave">
          {{ isEditMode ? t('common.save') : t('common.add') }}
        </NButton>
      </div>
    </template>

    <CodexLoginModal
      v-if="showCodexLogin"
      @close="showCodexLogin = false"
      @success="handleCodexSuccess"
    />

    <NousLoginModal
      v-if="showNousLogin"
      @close="showNousLogin = false"
      @success="handleNousSuccess"
    />

    <CopilotLoginModal
      v-if="showCopilotLogin"
      @close="handleCopilotClose"
      @success="handleCopilotSuccess"
    />
  </NModal>
</template>

<style scoped lang="scss">
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
