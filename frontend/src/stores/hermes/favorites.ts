import { defineStore } from 'pinia'
import { ref } from 'vue'
import { addFavorite, removeFavorite, checkFavorite, fetchFavorites, fetchFavoriteIds, type FavoriteItem } from '@/api/hermes/favorites'

export const useFavoritesStore = defineStore('favorites', () => {
  const items = ref<FavoriteItem[]>([])
  const total = ref(0)
  const favoritedIds = ref<Set<string>>(new Set())
  const loading = ref(false)

  async function loadAll() {
    loading.value = true
    try {
      const res = await fetchFavorites()
      items.value = res.items
      total.value = res.total
      favoritedIds.value = new Set(res.items.map(i => i.message_id))
    } finally {
      loading.value = false
    }
  }

  async function loadIds() {
    try {
      const ids = await fetchFavoriteIds()
      favoritedIds.value = new Set(ids)
    } catch { /* silent */ }
  }

  async function toggle(msg: {
    message_id: string; session_id: string; role: string; content: string
    session_title?: string; message_ts?: string
  }) {
    const isFav = favoritedIds.value.has(msg.message_id)
    if (isFav) {
      await removeFavorite(msg.message_id)
      favoritedIds.value.delete(msg.message_id)
      items.value = items.value.filter(i => i.message_id !== msg.message_id)
      total.value = Math.max(0, total.value - 1)
    } else {
      const item = await addFavorite(msg)
      favoritedIds.value.add(msg.message_id)
      items.value.unshift(item)
      total.value += 1
    }
    return !isFav
  }

  function isFavorited(messageId: string): boolean {
    return favoritedIds.value.has(messageId)
  }

  return { items, total, favoritedIds, loading, loadAll, loadIds, toggle, isFavorited }
})
