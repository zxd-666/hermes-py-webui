import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as configApi from '@/api/hermes/config'
import type {
  DisplayConfig, AgentConfig, MemoryConfig, SessionResetConfig,
  PrivacyConfig, DelegationConfig, SessionsConfig, CompressionConfig,
  FallbackModelConfig, AuxiliaryModelConfig, ApprovalsConfig,
  HumanDelayConfig, SecurityConfig,
} from '@/api/hermes/config'

export const useSettingsStore = defineStore('settings', () => {
  const loading = ref(false)
  const saving = ref(false)

  const display = ref<DisplayConfig>({})
  const agent = ref<AgentConfig>({})
  const delegation = ref<DelegationConfig>({})
  const memory = ref<MemoryConfig>({})
  const sessionReset = ref<SessionResetConfig>({})
  const sessions = ref<SessionsConfig>({})
  const privacy = ref<PrivacyConfig>({})
  const compression = ref<CompressionConfig>({})
  const fallbackModel = ref<FallbackModelConfig>({})
  const auxiliary = ref<Record<string, AuxiliaryModelConfig>>({})
  const approvals = ref<ApprovalsConfig>({})
  const humanDelay = ref<HumanDelayConfig>({})
  const security = ref<SecurityConfig>({})
  const telegram = ref<Record<string, any>>({})
  const discord = ref<Record<string, any>>({})
  const slack = ref<Record<string, any>>({})
  const whatsapp = ref<Record<string, any>>({})
  const matrix = ref<Record<string, any>>({})
  const wecom = ref<Record<string, any>>({})
  const feishu = ref<Record<string, any>>({})
  const dingtalk = ref<Record<string, any>>({})
  const weixin = ref<Record<string, any>>({})
  const platforms = ref<Record<string, any>>({})

  async function fetchSettings() {
    loading.value = true
    try {
      const [data, creds] = await Promise.all([
        configApi.fetchConfig(),
        configApi.fetchCredentials().catch(() => ({})),
      ])
      display.value = data.display || {}
      agent.value = data.agent || {}
      delegation.value = data.delegation || {}
      memory.value = data.memory || {}
      sessionReset.value = data.session_reset || {}
      sessions.value = data.sessions || {}
      privacy.value = data.privacy || {}
      compression.value = data.compression || {}
      fallbackModel.value = data.fallback_model || {}
      auxiliary.value = data.auxiliary || {}
      approvals.value = data.approvals || {}
      humanDelay.value = data.human_delay || {}
      security.value = data.security || {}
      telegram.value = data.telegram || {}
      discord.value = data.discord || {}
      slack.value = data.slack || {}
      whatsapp.value = data.whatsapp || {}
      matrix.value = data.matrix || {}
      wecom.value = data.wecom || {}
      feishu.value = data.feishu || {}
      dingtalk.value = data.dingtalk || {}
      weixin.value = data.weixin || {}
      platforms.value = creds
    } catch (err) {
      console.error('Failed to fetch settings:', err)
    } finally {
      loading.value = false
    }
  }

  async function saveSection(section: string, values: Record<string, any>): Promise<{ needs_restart?: boolean }> {
    saving.value = true
    try {
      const res = await configApi.updateConfigSection(section, values) as any
    switch (section) {
      case 'display': display.value = { ...display.value, ...values }; break
      case 'agent': agent.value = { ...agent.value, ...values }; break
      case 'delegation': delegation.value = { ...delegation.value, ...values }; break
      case 'memory': memory.value = { ...memory.value, ...values }; break
      case 'session_reset': sessionReset.value = { ...sessionReset.value, ...values }; break
      case 'sessions': sessions.value = { ...sessions.value, ...values }; break
      case 'privacy': privacy.value = { ...privacy.value, ...values }; break
      case 'compression': compression.value = { ...compression.value, ...values }; break
      case 'fallback_model': fallbackModel.value = { ...fallbackModel.value, ...values }; break
      case 'auxiliary':
        // values should be { key: { ...fields } }
        for (const [key, val] of Object.entries(values)) {
          auxiliary.value = { ...auxiliary.value, [key]: { ...(auxiliary.value[key] || {}), ...(val as Record<string, any>) } }
        }
        break
      case 'approvals': approvals.value = { ...approvals.value, ...values }; break
      case 'human_delay': humanDelay.value = { ...humanDelay.value, ...values }; break
      case 'security': security.value = { ...security.value, ...values }; break
      case 'telegram': telegram.value = { ...telegram.value, ...values }; break
      case 'discord': discord.value = { ...discord.value, ...values }; break
      case 'slack': slack.value = { ...slack.value, ...values }; break
      case 'whatsapp': whatsapp.value = { ...whatsapp.value, ...values }; break
      case 'matrix': matrix.value = { ...matrix.value, ...values }; break
      case 'wechat': case 'wecom': wecom.value = { ...wecom.value, ...values }; break
      case 'feishu': feishu.value = { ...feishu.value, ...values }; break
      case 'dingtalk': dingtalk.value = { ...dingtalk.value, ...values }; break
      case 'weixin': weixin.value = { ...weixin.value, ...values }; break
      case 'platforms': {
        // Deep-merge each platform's credentials
        for (const [key, val] of Object.entries(values)) {
          platforms.value = {
            ...platforms.value,
            [key]: { ...(platforms.value[key] || {}), ...(val as Record<string, any>) },
          }
        }
        break
      }
    }
    return { needs_restart: !!res?.needs_restart }
    } finally {
      saving.value = false
    }
  }

  return {
    loading, saving,
    display, agent, delegation, memory, sessionReset, sessions,
    privacy, compression, fallbackModel, auxiliary,
    approvals, humanDelay, security,
    telegram, discord, slack, whatsapp, matrix, wecom, feishu, dingtalk, weixin, platforms,
    fetchSettings, saveSection,
  }
})
