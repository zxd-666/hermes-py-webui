import { fetchUsageStats, type UsageStatsResponse } from '@/api/hermes/sessions'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface DailyUsage {
  date: string
  tokens: number
  cache: number
  sessions: number
  cost: number
}

interface ModelUsage {
  model: string
  inputTokens: number
  outputTokens: number
  cacheTokens: number
  totalTokens: number
  sessions: number
}

interface SourceUsage {
  source: string
  sessions: number
  inputTokens: number
  outputTokens: number
  cacheTokens: number
  totalTokens: number
}

interface TopSession {
  id: string
  source: string
  title: string | null
  model: string
  inputTokens: number
  outputTokens: number
  cacheTokens: number
  startedAt: number
  lastActive: number
}

export const useUsageStore = defineStore('usage', () => {
  const stats = ref<UsageStatsResponse | null>(null)
  const isLoading = ref(false)

  async function loadSessions(days = 30) {
    isLoading.value = true
    try {
      stats.value = await fetchUsageStats(days)
    } catch (err) {
      console.error('Failed to load usage stats:', err)
    } finally {
      isLoading.value = false
    }
  }

  const hasData = computed(() => !!stats.value && stats.value.all_sessions > 0)

  // All-time
  const allInputTokens = computed(() => stats.value?.all_input_tokens ?? 0)
  const allOutputTokens = computed(() => stats.value?.all_output_tokens ?? 0)
  const allTokens = computed(() => allInputTokens.value + allOutputTokens.value)
  const allSessions = computed(() => stats.value?.all_sessions ?? 0)
  const allAvgSessionsPerDay = computed(() => {
    if (!stats.value) return 0
    const days = stats.value.all_active_days
    if (!days) return 0
    return allSessions.value / days
  })
  const allMessages = computed(() => stats.value?.all_messages ?? 0)
  const allUserMessages = computed(() => stats.value?.all_user_messages ?? 0)
  const allAssistantMessages = computed(() => stats.value?.all_assistant_messages ?? 0)

  // Recent N-day
  const recentInputTokens = computed(() => stats.value?.total_input_tokens ?? 0)
  const recentOutputTokens = computed(() => stats.value?.total_output_tokens ?? 0)
  const recentTokens = computed(() => recentInputTokens.value + recentOutputTokens.value)
  const recentSessions = computed(() => stats.value?.total_sessions ?? 0)
  const recentMessages = computed(() => stats.value?.recent_messages ?? 0)
  const recentUserMessages = computed(() => stats.value?.recent_user_messages ?? 0)
  const recentAssistantMessages = computed(() => stats.value?.recent_assistant_messages ?? 0)

  const totalCacheTokens = computed(() => stats.value?.total_cache_read_tokens ?? 0)

  const cacheHitRate = computed(() => {
    const total = recentInputTokens.value + totalCacheTokens.value
    if (total === 0) return null
    return ((totalCacheTokens.value / total) * 100)
  })

  const estimatedCost = computed(() => stats.value?.total_cost ?? 0)

  const modelUsage = computed<ModelUsage[]>(() => {
    if (!stats.value) return []
    return stats.value.model_usage.map(m => ({
      model: m.model || 'unknown',
      inputTokens: m.input_tokens,
      outputTokens: m.output_tokens,
      cacheTokens: m.cache_read_tokens,
      totalTokens: m.input_tokens + m.output_tokens,
      sessions: m.sessions,
    })).sort((a, b) => b.totalTokens - a.totalTokens)
  })

  const dailyUsage = computed<DailyUsage[]>(() => stats.value?.daily_usage ?? [])

  const sourceUsage = computed<SourceUsage[]>(() => {
    if (!stats.value?.source_usage) return []
    return stats.value.source_usage.map(s => ({
      source: s.source,
      sessions: s.sessions,
      inputTokens: s.input_tokens,
      outputTokens: s.output_tokens,
      cacheTokens: s.cache_read_tokens + s.cache_write_tokens,
      totalTokens: s.input_tokens + s.output_tokens,
    })).sort((a, b) => b.totalTokens - a.totalTokens)
  })

  const topSessions = computed<TopSession[]>(() => {
    if (!stats.value?.top_sessions) return []
    return stats.value.top_sessions.map(s => ({
      id: s.id,
      source: s.source,
      title: s.title,
      model: s.model,
      inputTokens: s.input_tokens,
      outputTokens: s.output_tokens,
      cacheTokens: s.cache_read_tokens,
      startedAt: s.started_at,
      lastActive: s.last_active,
    }))
  })

  const avgSessionsPerDay = computed(() => {
    if (!stats.value || stats.value.daily_usage.length === 0) return 0
    const daysWithActivity = stats.value.daily_usage.filter(d => d.sessions > 0).length
    const days = Math.max(1, daysWithActivity)
    return recentSessions.value / days
  })

  const avgTokensPerSession = computed(() => stats.value?.avg_tokens_per_session ?? 0)
  const recentAvgTokensPerSession = computed(() => {
    if (!stats.value || stats.value.total_sessions === 0) return 0
    return Math.floor(recentTokens.value / stats.value.total_sessions)
  })

  const allCost = computed(() => stats.value?.all_cost ?? 0)
  const allCacheTokens = computed(() => stats.value?.all_cache_read_tokens ?? 0)
  const allCacheHitRate = computed(() => {
    const total = allInputTokens.value + allCacheTokens.value
    if (total === 0) return null
    return ((allCacheTokens.value / total) * 100)
  })

  interface HourlyData { hour: number; sessions: number }
  const hourlyDistribution = computed<HourlyData[]>(() => {
    const raw = stats.value?.hourly_distribution ?? []
    if (raw.length === 0) return []
    // Fill gaps: ensure all 0-23 hours present
    const map = new Map(raw.map(r => [r.hour, r.sessions]))
    return Array.from({ length: 24 }, (_, h) => ({ hour: h, sessions: map.get(h) ?? 0 }))
  })

  return {
    stats,
    isLoading,
    hasData,
    loadSessions,
    allInputTokens,
    allOutputTokens,
    allTokens,
    allSessions,
    allAvgSessionsPerDay,
    allMessages,
    allUserMessages,
    allAssistantMessages,
    recentInputTokens,
    recentOutputTokens,
    recentTokens,
    recentSessions,
    recentMessages,
    recentUserMessages,
    recentAssistantMessages,
    totalCacheTokens,
    cacheHitRate,
    estimatedCost,
    modelUsage,
    dailyUsage,
    sourceUsage,
    topSessions,
    avgSessionsPerDay,
    avgTokensPerSession,
    recentAvgTokensPerSession,
    allCost,
    allCacheHitRate,
    hourlyDistribution,
  }
})
