import { request } from '../client'

export interface HealthResponse {
  status: string
  version?: string
  webui_version?: string
  webui_latest?: string
  webui_update_available?: boolean
  node_version?: string
}

// Config-based model types
export interface ModelInfo {
  id: string
  label: string
}

export interface ModelGroup {
  provider: string
  models: ModelInfo[]
}

export interface ConfigModelsResponse {
  default: string
  groups: ModelGroup[]
}

export interface AvailableModelGroup {
  provider: string   // credential pool key (e.g. "zai", "custom:subrouter.ai")
  label: string      // display name (e.g. "zai", "subrouter.ai")
  base_url: string
  models: string[]
  api_key: string
  /** 可选：模型 ID -> 元数据（preview/disabled）。目前仅 Copilot 提供。 */
  model_meta?: Record<string, { preview?: boolean; disabled?: boolean }>
}

export interface AvailableModelsResponse {
  default: string
  default_provider: string
  groups: AvailableModelGroup[]
  allProviders: AvailableModelGroup[]
}

export interface CustomProvider {
  name: string
  base_url: string
  api_key: string
  model: string
  context_length?: number
  providerKey?: string | null
}

export async function checkHealth(): Promise<HealthResponse> {
  return request<HealthResponse>('/health')
}

export async function triggerUpdate(): Promise<{ success: boolean; message: string }> {
  return request<{ success: boolean; message: string }>('/api/hermes/update', { method: 'POST' })
}

export async function fetchConfigModels(): Promise<ConfigModelsResponse> {
  return request<ConfigModelsResponse>('/api/hermes/config/models')
}

export async function fetchAvailableModels(): Promise<AvailableModelsResponse> {
  return request<AvailableModelsResponse>('/api/hermes/available-models')
}

export async function updateDefaultModel(data: {
  default: string
  provider?: string
  base_url?: string
  api_key?: string
}): Promise<void> {
  await request('/api/hermes/config/model', {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export async function addCustomProvider(data: CustomProvider): Promise<void> {
  await request('/api/hermes/config/providers', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function removeCustomProvider(name: string): Promise<void> {
  await request(`/api/hermes/config/providers/${encodeURIComponent(name)}`, {
    method: 'DELETE',
  })
}

export async function updateProvider(poolKey: string, data: {
  name?: string
  base_url?: string
  api_key?: string
  model?: string
}): Promise<void> {
  await request(`/api/hermes/config/providers/${encodeURIComponent(poolKey)}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export interface ProviderPreset {
  id: string
  name: string
  base_url: string
}

export async function fetchProviderPresets(): Promise<ProviderPreset[]> {
  return request<ProviderPreset[]>('/api/hermes/config/provider-presets')
}

// Launchd auto-start service
export interface ServiceStatus {
  enabled: boolean
  loaded: boolean
  plist_path: string
}

export async function fetchServiceStatus(): Promise<ServiceStatus> {
  return request<ServiceStatus>('/api/hermes/service')
}

export async function installService(): Promise<{ ok: boolean; error?: string }> {
  return request<{ ok: boolean; error?: string }>('/api/hermes/service/install', { method: 'POST' })
}

export async function uninstallService(): Promise<{ ok: boolean }> {
  return request<{ ok: boolean }>('/api/hermes/service/uninstall', { method: 'POST' })
}

// LAN access
export async function fetchLanAccess(): Promise<{ lan_access: boolean }> {
  return request<{ lan_access: boolean }>('/api/hermes/lan-access')
}

export async function setLanAccess(lan_access: boolean): Promise<{ ok: boolean; lan_access: boolean; requires_restart?: boolean }> {
  return request<{ ok: boolean; lan_access: boolean; requires_restart?: boolean }>('/api/hermes/lan-access', {
    method: 'PUT',
    body: JSON.stringify({ lan_access }),
  })
}
