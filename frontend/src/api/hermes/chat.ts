import { request, getApiKey } from '../client'

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface StartRunRequest {
  input: string | ChatMessage[]
  conversation_history?: ChatMessage[]
  instructions?: string
  session_id?: string
  model?: string
  workspace?: string | null
}

export interface StartRunResponse {
  run_id: string
  status: string
}

// SSE event types from /api/chat/stream/{run_id}
export interface RunEvent {
  event: string
  run_id?: string
  delta?: string
  /** Payload text for `reasoning.delta` / `thinking.delta` / `reasoning.available` events. */
  text?: string
  tool?: string
  name?: string
  preview?: string
  timestamp?: number
  error?: string
  /** Final response text on `run.completed`. May be empty/null if the agent
   * silently swallowed an upstream error — see chat store for fallback. */
  output?: string | null
  usage?: {
    input_tokens: number
    output_tokens: number
    total_tokens: number
  }
  /** session_id tag added by server for client-side filtering */
  session_id?: string
}

// ============================
// SSE chat run (replaces Socket.IO)
// ============================

/**
 * Start a chat run via POST and return the run_id.
 * The caller then uses streamRunEvents() to subscribe to SSE events.
 */
export async function startRun(body: StartRunRequest): Promise<StartRunResponse> {
  const headers: Record<string, string> = {}
  if (body.workspace) {
    headers['X-Hermes-Workspace'] = body.workspace
  }
  return request('/api/chat/start', {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  })
}

/**
 * Stream events for a given run via Server-Sent Events (fetch + ReadableStream).
 * Compatible with the chat store's event callback signature.
 *
 * SSE event format from the Python backend:
 *   event: message.delta
 *   data: {"delta": "Hello", "session_id": "..."}
 *
 *   event: run.completed
 *   data: {"output": "...", "usage": {...}}
 */
export function streamRunEvents(
  runId: string,
  onEvent: (event: RunEvent) => void,
  onDone: () => void,
  onError: (err: Error) => void,
): { abort: () => void } {
  const controller = new AbortController()
  let closed = false

  async function run() {
    try {
      const token = getApiKey()
      const profile = localStorage.getItem('hermes_active_profile_name') || 'default'

      const res = await fetch(`/api/chat/stream/${runId}`, {
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'X-Hermes-Profile': profile !== 'default' ? profile : '',
          'Accept': 'text/event-stream',
        },
        signal: controller.signal,
      })

      if (!res.ok) {
        const text = await res.text().catch(() => '')
        onError(new Error(`Stream error ${res.status}: ${text || res.statusText}`))
        return
      }

      const reader = res.body!.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })

        // Parse SSE: lines are separated by \n, events by blank lines
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''  // keep incomplete last line

        let currentEvent = ''
        let currentData = ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (trimmed.startsWith('event:')) {
            currentEvent = trimmed.slice(6).trim()
          } else if (trimmed.startsWith('data:')) {
            currentData = trimmed.slice(5).trimStart()
          } else if (trimmed === '' && currentEvent && currentData) {
            try {
              const data: RunEvent = JSON.parse(currentData)
              onEvent(data)

              if (currentEvent === 'run.completed' || currentEvent === 'run.failed') {
                if (currentEvent === 'run.failed') {
                  onError(new Error(data.error || 'Run failed'))
                }
                closed = true
                onDone()
                return
              }
            } catch (e) {
              console.warn('Failed to parse SSE event:', currentEvent, currentData, e)
            }
            currentEvent = ''
            currentData = ''
          }
        }
      }

      // Stream ended without explicit completion event
      if (!closed) onDone()
    } catch (err: any) {
      if (err.name === 'AbortError') return
      onError(err)
    }
  }

  run()

  return {
    abort: () => {
      if (!closed) {
        controller.abort()
        // Notify backend to cancel the run
        fetch(`/api/chat/abort/${runId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }).catch(() => {})
        closed = true
      }
    },
  }
}

/**
 * Resume a session — fetch current state for a session that may have an in-flight run.
 * Used by the chat store for tmux-like resume after page refresh.
 */
export async function resumeSession(
  sessionId: string,
): Promise<{ session_id: string; messages: any[]; isWorking: boolean; events: any[]; inputTokens?: number; outputTokens?: number }> {
  return request(`/api/chat/resume/${sessionId}`)
}

export async function fetchModels(): Promise<{ data: Array<{ id: string }> }> {
  return request('/api/hermes/available-models')
}
