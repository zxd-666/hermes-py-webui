import { request } from '../client'

export interface FavoriteItem {
  id: number
  message_id: string
  session_id: string
  role: string
  content: string
  session_title: string
  message_ts: string
  source: string
  favorited_at: string
}

export interface FavoriteListResponse {
  items: FavoriteItem[]
  total: number
}

export async function addFavorite(data: {
  message_id: string; session_id: string; role: string; content: string
  session_title?: string; message_ts?: string
}): Promise<FavoriteItem> {
  return request<FavoriteItem>('/api/favorites/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

export async function removeFavorite(messageId: string): Promise<{ ok: boolean; removed: boolean }> {
  return request(`/api/favorites/${encodeURIComponent(messageId)}`, { method: 'DELETE' })
}

export async function checkFavorite(messageId: string): Promise<{ favorited: boolean }> {
  return request(`/api/favorites/check/${encodeURIComponent(messageId)}`)
}

export async function fetchFavorites(limit = 100, offset = 0): Promise<FavoriteListResponse> {
  return request(`/api/favorites/?limit=${limit}&offset=${offset}`)
}

export async function fetchFavoriteIds(): Promise<string[]> {
  return request<{ ids: string[] }>('/api/favorites/ids').then(r => r.ids)
}

export async function fetchPrecedingUserMessage(messageId: string, sessionId: string): Promise<string> {
  return request<{ content: string }>(
    `/api/favorites/preceding-user/${encodeURIComponent(messageId)}?session_id=${encodeURIComponent(sessionId)}`
  ).then(r => r.content)
}
