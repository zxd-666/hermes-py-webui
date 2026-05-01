<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NButton, NSpin, NEmpty } from 'naive-ui'
import { useModelsStore } from '@/stores/hermes/models'
import { useI18n } from 'vue-i18n'
import ProvidersPanel from '@/components/hermes/models/ProvidersPanel.vue'
import ProviderFormModal from '@/components/hermes/models/ProviderFormModal.vue'
import { useAppStore } from '@/stores/hermes/app'
import { checkCopilotToken } from '@/api/hermes/copilot-auth'

const { t } = useI18n()
const modelsStore = useModelsStore()
const appStore = useAppStore()
const showModal = ref(false)

onMounted(async () => {
  try { await checkCopilotToken() } catch { /* ignore */ }
  if (modelsStore.providers.length === 0) {
    modelsStore.fetchProviders()
  }
})

function openCreateModal() {
  showModal.value = true
}

function handleModalClose() {
  showModal.value = false
}

async function handleSaved() {
  await modelsStore.fetchProviders()
  appStore.loadModels()
  handleModalClose()
}
</script>

<template>
  <section class="settings-section">
    <div class="section-header">
      <h3 class="section-title">{{ t('settings.models.providerManagement') }}</h3>
      <NButton type="primary" size="small" @click="openCreateModal">
        <template #icon>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </template>
        {{ t('models.addProvider') }}
      </NButton>
    </div>
    <NSpin :show="modelsStore.loading && modelsStore.providers.length === 0">
      <div v-if="modelsStore.providers.length === 0" class="empty-hint">
        <NEmpty :description="t('settings.models.noProviders')" />
      </div>
      <ProvidersPanel />
    </NSpin>
  </section>

  <ProviderFormModal
    v-if="showModal"
    @close="handleModalClose"
    @saved="handleSaved"
  />
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.settings-section {
  margin-top: 16px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary, $text-primary);
  margin: 0;
}

.empty-hint {
  padding: 40px 0;
}
</style>
