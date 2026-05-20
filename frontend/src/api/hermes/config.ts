import { request } from '../client'

export interface DisplayConfig {
  compact?: boolean
  personality?: string
  resume_display?: string
  busy_input_mode?: string
  bell_on_complete?: boolean
  show_reasoning?: boolean
  streaming?: boolean
  show_cost?: boolean
  skin?: string
}

export interface AgentConfig {
  max_turns?: number
  gateway_timeout?: number
  restart_drain_timeout?: number
  service_tier?: string
  tool_use_enforcement?: string
}

export interface MemoryConfig {
  memory_enabled?: boolean
  user_profile_enabled?: boolean
  memory_char_limit?: number
  user_char_limit?: number
  nudge_interval?: number
  retrieval_threshold?: number
  max_memory_entries?: number
  flush_min_turns?: number
}

export interface SessionResetConfig {
  mode?: string
  idle_minutes?: number
  at_hour?: number
}

export interface PrivacyConfig {
  redact_pii?: boolean
}

export interface DelegationConfig {
  max_concurrent_children?: number
  max_spawn_depth?: number
  orchestrator_enabled?: boolean
  subagent_auto_approve?: boolean
  child_timeout_seconds?: number
  max_iterations?: number
}

export interface SessionsConfig {
  retention_days?: number
  auto_prune?: boolean
  vacuum_after_prune?: boolean
  min_interval_hours?: number
}

export interface CompressionConfig {
  enabled?: boolean
  threshold?: number
  target_ratio?: number
  keep_recent?: number
  protect_last_n?: number
  model?: string
  provider?: string
  summary_model?: string
}

export interface FallbackModelConfig {
  model?: string
  provider?: string
}

export interface AuxiliaryModelConfig {
  model?: string
  provider?: string
  base_url?: string
  api_key?: string
  timeout?: number
  max_concurrency?: number
  download_timeout?: number
  api_mode?: string
}

export interface ApprovalsConfig {
  mode?: string
  cron_mode?: string
  timeout?: number
}

export interface HumanDelayConfig {
  mode?: string
  min_ms?: number
  max_ms?: number
}

export interface SecurityConfig {
  redact_secrets?: boolean
  allow_private_urls?: boolean
  tirith_enabled?: boolean
}

export interface AppConfig {
  display?: DisplayConfig
  agent?: AgentConfig
  delegation?: DelegationConfig
  memory?: MemoryConfig
  session_reset?: SessionResetConfig
  sessions?: SessionsConfig
  privacy?: PrivacyConfig
  compression?: CompressionConfig
  fallback_model?: FallbackModelConfig
  auxiliary?: Record<string, AuxiliaryModelConfig>
  approvals?: ApprovalsConfig
  human_delay?: HumanDelayConfig
  security?: SecurityConfig
  telegram?: Record<string, any>
  discord?: Record<string, any>
  slack?: Record<string, any>
  whatsapp?: Record<string, any>
  matrix?: Record<string, any>
  weixin?: Record<string, any>
  wecom?: Record<string, any>
  feishu?: Record<string, any>
  dingtalk?: Record<string, any>
  platforms?: Record<string, any>
  [key: string]: any
}

export async function fetchConfig(sections?: string[]): Promise<AppConfig> {
  const query = sections ? `?sections=${sections.join(',')}` : ''
  return request<AppConfig>(`/api/hermes/config${query}`)
}

export async function updateConfigSection(
  section: string,
  values: Record<string, any>,
): Promise<{ ok?: boolean; needs_restart?: boolean }> {
  return request<{ ok?: boolean; needs_restart?: boolean }>('/api/hermes/config', {
    method: 'PUT',
    body: JSON.stringify({ section, values }),
  })
}

export async function saveCredentials(
  platform: string,
  values: Record<string, any>,
): Promise<{ ok?: boolean; needs_restart?: boolean }> {
  return request<{ ok?: boolean; needs_restart?: boolean }>('/api/hermes/config/credentials', {
    method: 'PUT',
    body: JSON.stringify({ platform, values }),
  })
}

export async function fetchCredentials(): Promise<Record<string, any>> {
  return request<Record<string, any>>('/api/hermes/config/credentials')
}

export interface WeixinQrCode {
  qrcode: string
  qrcode_url: string
  qrcode_image?: string
}

export interface WeixinQrStatus {
  status: 'wait' | 'scaned' | 'scaned_but_redirect' | 'expired' | 'confirmed'
  account_id?: string
  token?: string
  base_url?: string
}

export async function fetchWeixinQrCode(): Promise<WeixinQrCode> {
  return request<WeixinQrCode>('/api/hermes/weixin/qrcode')
}

export async function pollWeixinQrStatus(qrcode: string): Promise<WeixinQrStatus> {
  return request<WeixinQrStatus>(`/api/hermes/weixin/qrcode/status?qrcode=${encodeURIComponent(qrcode)}`)
}

export async function saveWeixinCredentials(data: {
  account_id: string
  token: string
  base_url?: string
}): Promise<void> {
  await request('/api/hermes/weixin/save', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

// ── Raw YAML ──────────────────────────────────────────

export interface RawConfigResponse {
  yaml_text: string
  config_path: string
}

export async function fetchRawConfig(): Promise<RawConfigResponse> {
  return request<RawConfigResponse>('/api/hermes/config/raw')
}

export async function saveRawConfig(yaml_text: string): Promise<{ ok?: boolean; error?: string; config?: AppConfig }> {
  return request('/api/hermes/config/raw', {
    method: 'PUT',
    body: JSON.stringify({ yaml_text }),
  })
}

// ── Defaults / Export / Import ────────────────────────

  export async function fetchConfigDefaults(): Promise<Record<string, any>> {
    return request<Record<string, any>>('/api/hermes/config/defaults')
  }

  export async function importConfigJson(data: Record<string, any>): Promise<{ ok?: boolean; needs_restart?: boolean }> {
    return request<{ ok?: boolean; needs_restart?: boolean }>('/api/hermes/config/json', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

// ── Config Schema ────────────────────────────────────

export interface ConfigFieldSchema {
  type: 'boolean' | 'number' | 'integer' | 'string' | 'select' | 'text' | 'list'
  category: string
  description?: string  // Agent API uses this instead of hint_i18n
  label_i18n?: string   // Kept for backward compat (py-webui own schema used this)
  hint_i18n?: string    // Kept for backward compat
  options?: (string | { value: string; label: string; label_i18n?: string })[]  // Can be string[] or object[]
  min?: number
  max?: number
  step?: number
  default?: any
}

export interface ConfigSchema {
  category_order: string[]
  fields: Record<string, ConfigFieldSchema>
}

export async function fetchConfigSchema(): Promise<ConfigSchema> {
  return request<ConfigSchema>('/api/hermes/config/schema')
}
