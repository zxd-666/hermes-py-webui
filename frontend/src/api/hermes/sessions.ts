import { request } from '../client'

export interface SessionSummary {
  id: string
  source: string
  model: string
  title: string | null
  preview?: string
  started_at: number
  ended_at: number | null
  last_active?: number
  message_count: number
  tool_call_count: number
  input_tokens: number
  output_tokens: number
  cache_read_tokens: number
  cache_write_tokens: number
  reasoning_tokens: number
  billing_provider: string | null
  estimated_cost_usd: number
  actual_cost_usd: number | null
  cost_status: string
  workspace?: string | null
  pinned?: boolean
  parent_session_id?: string | null
  lineage_count?: number
  lineage_message_count?: number
  children?: Array<{
    id: string
    title: string
    message_count: number
    started_at: number
    ended_at: number | null
    last_message_ts?: number | null
    source?: string
  }>
}

export interface SessionDetail extends SessionSummary {
  messages: HermesMessage[]
}

export interface SessionSearchResult extends SessionSummary {
  matched_message_id: number | null
  snippet: string
  rank: number
}

export interface HermesMessage {
  id: number
  session_id: string
  role: 'user' | 'assistant' | 'system' | 'tool'
  content: string
  tool_call_id: string | null
  tool_calls: any[] | null
  tool_name: string | null
  timestamp: number
  token_count: number | null
  finish_reason: string | null
  reasoning: string | null
}

export async function fetchSessions(source?: string, limit?: number, offset?: number): Promise<SessionSummary[]> {
  const params = new URLSearchParams()
  if (source) params.set('source', source)
  if (limit) params.set('limit', String(limit))
  if (offset) params.set('offset', String(offset))
  const query = params.toString()
  const res = await request<{ sessions: SessionSummary[] }>(`/api/hermes/sessions${query ? `?${query}` : ''}`)
  return res.sessions
}

export async function fetchSourceCounts(): Promise<Record<string, number>> {
  return request<Record<string, number>>('/api/hermes/sessions/count-by-source')
}

export async function searchSessions(q: string, source?: string, limit?: number): Promise<SessionSearchResult[]> {
  const params = new URLSearchParams()
  params.set('q', q)
  if (source) params.set('source', source)
  if (limit) params.set('limit', String(limit))
  const query = params.toString()
  const res = await request<{ results: SessionSearchResult[] }>(`/api/hermes/search/sessions?${query}`)
  return res.results
}

export async function fetchSession(id: string): Promise<SessionDetail | null> {
  try {
    const res = await request<{ session: SessionDetail }>(`/api/hermes/sessions/${id}`)
    return res.session
  } catch {
    return null
  }
}

export async function fetchSessionMessageCount(id: string): Promise<{ session_id: string; message_count: number }> {
  return request<{ session_id: string; message_count: number }>(`/api/hermes/sessions/${id}/message-count`)
}

export async function deleteSession(id: string): Promise<boolean> {
  try {
    await request(`/api/hermes/sessions/${id}`, { method: 'DELETE' })
    return true
  } catch {
    return false
  }
}

export async function renameSession(id: string, title: string): Promise<{ ok: boolean; targetId: string | null; reason?: string }> {
  try {
    const res = await request<{ renamed: boolean; target_id: string; reason?: string }>(`/api/hermes/sessions/${id}/rename`, {
      method: 'POST',
      body: JSON.stringify({ title }),
    })
    return { ok: !!res?.renamed, targetId: res?.target_id ?? null, reason: res?.reason }
  } catch {
    return { ok: false, targetId: null }
  }
}

export async function setSessionWorkspace(id: string, workspace: string | null): Promise<boolean> {
  try {
    await request(`/api/hermes/sessions/${id}/workspace`, {
      method: 'POST',
      body: JSON.stringify({ workspace: workspace || '' }),
    })
    return true
  } catch {
    return false
  }
}

export async function setSessionPin(id: string, pinned: boolean): Promise<boolean> {
  try {
    await request(`/api/hermes/sessions/${id}/pin`, {
      method: 'POST',
      body: JSON.stringify({ pinned }),
    })
    return true
  } catch {
    return false
  }
}

export interface UsageStatsResponse {
  // All-time stats
  all_input_tokens: number
  all_output_tokens: number
  all_cache_read_tokens: number
  all_cache_write_tokens: number
  all_cost: number
  all_sessions: number
  all_active_days: number
  all_messages: number
  all_user_messages: number
  all_assistant_messages: number
  // Recent N-day stats
  total_input_tokens: number
  total_output_tokens: number
  total_cache_read_tokens: number
  total_cache_write_tokens: number
  total_reasoning_tokens: number
  total_sessions: number
  total_cost: number
  total_api_calls?: number
  period_days?: number
  recent_messages: number
  recent_user_messages: number
  recent_assistant_messages: number
  model_usage: Array<{
    model: string
    input_tokens: number
    output_tokens: number
    cache_read_tokens: number
    cache_write_tokens: number
    reasoning_tokens: number
    sessions: number
  }>
  daily_usage: Array<{
    date: string
    tokens: number
    cache: number
    sessions: number
    cost: number
  }>
  source_usage?: Array<{
    source: string
    sessions: number
    input_tokens: number
    output_tokens: number
    cache_read_tokens: number
    cache_write_tokens: number
    reasoning_tokens: number
  }>
  top_sessions?: Array<{
    id: string
    source: string
    title: string | null
    model: string
    sessions: number
    input_tokens: number
    output_tokens: number
    cache_read_tokens: number
    started_at: number
    last_active: number
  }>
  avg_tokens_per_session: number
  hourly_distribution: Array<{ hour: number; sessions: number }>
}

export async function fetchUsageStats(days = 30): Promise<UsageStatsResponse> {
  const safeDays = Number.isFinite(days) ? Math.max(1, Math.floor(days)) : 30
  const params = new URLSearchParams()
  params.set('days', String(safeDays))
  return request<UsageStatsResponse>(`/api/hermes/usage/stats?${params}`)
}

export async function fetchSessionUsage(ids: string[]): Promise<Record<string, { input_tokens: number; output_tokens: number }>> {
  if (ids.length === 0) return {}
  const params = new URLSearchParams()
  params.set('ids', ids.join(','))
  return request(`/api/hermes/sessions/usage?${params}`)
}

export async function fetchSessionUsageSingle(id: string): Promise<{ input_tokens: number; output_tokens: number } | null> {
  try {
    return await request<{ input_tokens: number; output_tokens: number }>(`/api/hermes/sessions/${id}/usage`)
  } catch {
    return null
  }
}

export async function fetchContextLength(profile?: string): Promise<number> {
  const params = new URLSearchParams()
  if (profile) params.set('profile', profile)
  const query = params.toString()
  const res = await request<{ context_length: number }>(`/api/hermes/sessions/context-length${query ? `?${query}` : ''}`)
  return res.context_length
}

export interface SessionLineage {
  root_id: string
  chain: SessionSummary[]
  messages: HermesMessage[]
  chain_ids: string[]
}

export async function fetchSessionLineage(sessionId: string): Promise<SessionLineage> {
  return request(`/api/hermes/sessions/${sessionId}/lineage`)
}
