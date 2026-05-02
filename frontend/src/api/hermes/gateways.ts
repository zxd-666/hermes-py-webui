import { request } from '../client'

export interface GatewayStatus {
  profile: string
  port: number
  host: string
  url: string
  running: boolean
  pid?: number
  redact_pii: boolean
}

export async function fetchGateways(): Promise<GatewayStatus[]> {
  const res = await request<{ gateways: GatewayStatus[] }>('/api/hermes/gateways')
  return res.gateways
}

export async function startGateway(name: string): Promise<GatewayStatus> {
  const res = await request<{ success: boolean; gateway: GatewayStatus }>(`/api/hermes/gateways/${name}/start`, { method: 'POST' })
  return res.gateway
}

export async function stopGateway(name: string): Promise<void> {
  await request(`/api/hermes/gateways/${name}/stop`, { method: 'POST' })
}

export async function checkGatewayHealth(name: string): Promise<GatewayStatus> {
  const res = await request<{ gateway: GatewayStatus }>(`/api/hermes/gateways/${name}/health`)
  return res.gateway
}

export async function updateGatewaySettings(name: string, values: Record<string, any>): Promise<GatewayStatus> {
  const res = await request<{ gateway: GatewayStatus }>(`/api/hermes/gateways/${name}/settings`, {
    method: 'PUT',
    body: JSON.stringify(values),
  })
  return res.gateway
}
