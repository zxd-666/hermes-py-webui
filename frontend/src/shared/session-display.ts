import { i18n } from '@/i18n'

const SOURCE_LABELS: Record<string, string> = {
  telegram: 'Telegram',
  api_server: 'API Server',
  '9898': '9898',
  cli: 'CLI',
  discord: 'Discord',
  slack: 'Slack',
  matrix: 'Matrix',
  whatsapp: 'WhatsApp',
  signal: 'Signal',
  email: 'Email',
  sms: 'SMS',
  dingtalk: 'DingTalk',
  feishu: 'Feishu',
  wecom: 'WeCom',
  weixin: 'WeChat',
  bluebubbles: 'iMessage',
  mattermost: 'Mattermost',
  cron: 'Cron',
}

export function getSourceLabel(source?: string): string {
  if (!source) return ''
  return SOURCE_LABELS[source] || source
}

function currentLocale(): string {
  return (i18n.global.locale as unknown as { value: string }).value || 'en'
}

export function formatTimestampMs(timestamp: number): string {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  const now = new Date()
  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString(currentLocale(), { hour: '2-digit', minute: '2-digit' })
  }
  return date.toLocaleDateString(currentLocale(), { month: 'short', day: 'numeric' })
}

export function formatTimestampSeconds(timestamp: number): string {
  return formatTimestampMs(timestamp * 1000)
}
