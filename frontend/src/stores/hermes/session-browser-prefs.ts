import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useProfilesStore } from './profiles'

const HUMAN_ONLY_KEY_PREFIX = 'hermes_human_only_v1_'

function currentProfileName(): string {
  try {
    return useProfilesStore().activeProfileName || localStorage.getItem('hermes_active_profile_name') || 'default'
  } catch {
    return localStorage.getItem('hermes_active_profile_name') || 'default'
  }
}

function humanOnlyKey(profileName: string): string {
  return `${HUMAN_ONLY_KEY_PREFIX}${profileName}`
}

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) as T : fallback
  } catch {
    return fallback
  }
}

function saveJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // ignore quota/storage errors — fall back to in-memory only
  }
}

export const useSessionBrowserPrefsStore = defineStore('session-browser-prefs', () => {
  const profileName = ref(currentProfileName())
  const humanOnly = ref<boolean>(loadJson<boolean>(humanOnlyKey(profileName.value), true))

  function reload() {
    profileName.value = currentProfileName()
    humanOnly.value = loadJson<boolean>(humanOnlyKey(profileName.value), true)
  }

  function persistHumanOnly() {
    saveJson(humanOnlyKey(profileName.value), humanOnly.value)
  }

  function setHumanOnly(value: boolean) {
    if (humanOnly.value === value) return
    humanOnly.value = value
    persistHumanOnly()
  }

  watch(
    () => useProfilesStore().activeProfileName,
    () => reload(),
  )

  return {
    profileName,
    humanOnly,
    reload,
    setHumanOnly,
  }
})
