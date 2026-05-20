<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import WorkspaceSettings from '@/components/hermes/settings/WorkspaceSettings.vue'

const { t } = useI18n()
</script>

<template>
  <div class="workspace-view">
    <header class="page-header">
      <h2 class="header-title">{{ t('sidebar.workspace') }}</h2>
    </header>
    <div class="workspace-content">
      <WorkspaceSettings />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.workspace-view {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
}

.workspace-content {
  flex: 1;
  overflow-y: auto;
  padding: 24px 20px;
  min-height: 0;
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
</style>
