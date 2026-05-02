import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchGateways, startGateway, stopGateway, updateGatewaySettings, type GatewayStatus } from '@/api/hermes/gateways'

export const useGatewayStore = defineStore('gateways', () => {
  const gateways = ref<GatewayStatus[]>([])
  const loading = ref(false)

  async function fetchStatus() {
    loading.value = true
    try {
      const data = await fetchGateways()
      gateways.value = Array.isArray(data) ? data : Object.values(data || {})
    } finally {
      loading.value = false
    }
  }

  async function start(name: string): Promise<boolean> {
    loading.value = true
    try {
      await startGateway(name)
      for (let i = 0; i < 15; i++) {
        await new Promise(r => setTimeout(r, 500))
        const data = await fetchGateways()
        gateways.value = Array.isArray(data) ? data : Object.values(data || {})
        if (gateways.value.find(g => g.profile === name)?.running) return true
      }
      return false
    } finally {
      loading.value = false
    }
  }

  async function stop(name: string): Promise<boolean> {
    loading.value = true
    try {
      await stopGateway(name)
      for (let i = 0; i < 10; i++) {
        await new Promise(r => setTimeout(r, 500))
        const data = await fetchGateways()
        gateways.value = Array.isArray(data) ? data : Object.values(data || {})
        if (!gateways.value.find(g => g.profile === name)?.running) return true
      }
      return false
    } finally {
      loading.value = false
    }
  }

  async function updateSettings(name: string, values: Record<string, any>) {
    const updated = await updateGatewaySettings(name, values)
    const idx = gateways.value.findIndex(g => g.profile === name)
    if (idx >= 0) {
      gateways.value[idx] = updated
    }
  }

  return { gateways, loading, fetchStatus, start, stop, updateSettings }
})
