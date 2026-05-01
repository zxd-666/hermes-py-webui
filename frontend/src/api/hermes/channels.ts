import { request } from '../client'

export interface ChannelInfo {
  name: string
  id: string
  type: string
  platform: string
}

export interface ChannelsResponse {
  updated_at: string | null
  platforms: Record<string, number>
  channels: ChannelInfo[]
  total: number
}

export interface ChannelByPlatformResponse {
  updated_at: string | null
  platform: string
  channels: ChannelInfo[]
  total: number
}

export interface ChannelSummaryResponse {
  updated_at: string | null
  summary: Record<string, {
    count: number
    channels: ChannelInfo[]
  }>
}

export async function fetchChannels(): Promise<ChannelsResponse> {
  return request<ChannelsResponse>('/api/hermes/channels')
}

export async function fetchChannelsByPlatform(platform: string): Promise<ChannelByPlatformResponse> {
  return request<ChannelByPlatformResponse>(`/api/hermes/channels/${platform}`)
}

export async function fetchChannelSummary(): Promise<ChannelSummaryResponse> {
  return request<ChannelSummaryResponse>('/api/hermes/channels/summary')
}
