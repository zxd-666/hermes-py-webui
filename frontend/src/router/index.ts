import { createRouter, createWebHashHistory } from 'vue-router'
import { hasApiKey } from '@/api/client'
import { i18n } from '@/i18n'

const SITE_TITLE = 'Hermes'

const routeTitleKeys: Record<string, string> = {
  'hermes.chat': 'sidebar.chat',
  'hermes.favorites': 'sidebar.favorites',
  'hermes.jobs': 'sidebar.jobs',
  'hermes.models': 'sidebar.models',
  'hermes.profiles': 'sidebar.profiles',
  'hermes.skills': 'sidebar.skills',
  'hermes.memory': 'sidebar.memory',
  'hermes.logs': 'sidebar.logs',
  'hermes.usage': 'sidebar.usage',
  'hermes.channels': 'sidebar.channels',
  'hermes.gateways': 'sidebar.gateways',
  'hermes.settings': 'settings.title',
  'hermes.systemSettings': 'sidebar.systemSettings',
  'hermes.files': 'sidebar.files',
  'hermes.groupChat': 'sidebar.groupChat',
}

function setPageTitle(routeName: string | symbol | null | undefined) {
  const key = routeTitleKeys[routeName as string]
  const { t } = i18n.global
  document.title = key ? `${t(key)} - ${SITE_TITLE}` : SITE_TITLE
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { public: true },
    },
    {
      path: '/hermes/chat',
      name: 'hermes.chat',
      component: () => import('@/views/hermes/ChatView.vue'),
    },
    {
      path: '/hermes/jobs',
      name: 'hermes.jobs',
      component: () => import('@/views/hermes/JobsView.vue'),
    },
    {
      path: '/hermes/profiles',
      name: 'hermes.profiles',
      component: () => import('@/views/hermes/ProfilesView.vue'),
    },
    {
      path: '/hermes/logs',
      name: 'hermes.logs',
      component: () => import('@/views/hermes/LogsView.vue'),
    },
    {
      path: '/hermes/usage',
      name: 'hermes.usage',
      component: () => import('@/views/hermes/UsageView.vue'),
    },
    {
      path: '/hermes/skills',
      name: 'hermes.skills',
      component: () => import('@/views/hermes/SkillsView.vue'),
    },
    {
      path: '/hermes/memory',
      name: 'hermes.memory',
      component: () => import('@/views/hermes/MemoryView.vue'),
    },
    {
      path: '/hermes/settings',
      name: 'hermes.settings',
      component: () => import('@/views/hermes/SettingsView.vue'),
    },
    {
      path: '/hermes/gateways',
      name: 'hermes.gateways',
      component: () => import('@/views/hermes/GatewaysView.vue'),
    },
    {
      path: '/hermes/channels',
      name: 'hermes.channels',
      component: () => import('@/views/hermes/ChannelsView.vue'),
    },
    {
      name: 'hermes.groupChat',
      path: '/hermes/group-chat',
      component: () => import('@/views/hermes/GroupChatView.vue'),
    },
    {
      path: '/hermes/models',
      name: 'hermes.models',
      component: () => import('@/views/hermes/ModelsView.vue'),
    },
    {
      path: '/hermes/files',
      name: 'hermes.files',
      component: () => import('@/views/hermes/FilesView.vue'),
    },
    {
      path: '/hermes/system-settings',
      name: 'hermes.systemSettings',
      component: () => import('@/views/hermes/SystemSettingsView.vue'),
    },
    {
      path: '/hermes/favorites',
      name: 'hermes.favorites',
      component: () => import('@/views/hermes/FavoritesView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  setPageTitle(to.name)
})

export default router
