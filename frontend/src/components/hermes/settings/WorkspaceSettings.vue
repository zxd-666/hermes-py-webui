<script setup lang="ts">
import { NButton, NInput, NEmpty, NSpace, NPopconfirm, useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'
import { fetchWorkspaces, createWorkspace, updateWorkspace, deleteWorkspace } from '@/api/hermes/workspaces'
import type { WorkspacePreset } from '@/api/hermes/workspaces'

const { t } = useI18n()
const message = useMessage()

const workspaces = ref<WorkspacePreset[]>([])
const loading = ref(false)

// Add form
const showAddForm = ref(false)
const newName = ref('')
const newPath = ref('')
const editingId = ref<string | null>(null)

async function loadWorkspaces() {
  loading.value = true
  try {
    workspaces.value = await fetchWorkspaces()
  } finally {
    loading.value = false
  }
}

onMounted(loadWorkspaces)

function resetForm() {
  newName.value = ''
  newPath.value = ''
  showAddForm.value = false
  editingId.value = null
}

async function handleSave() {
  const name = newName.value.trim()
  const path = newPath.value.trim()
  if (!name || !path) return

  try {
    if (editingId.value) {
      const res = await updateWorkspace(editingId.value, { name, path })
      const idx = workspaces.value.findIndex(w => w.id === editingId.value)
      if (idx >= 0) workspaces.value[idx] = res
      message.success(t('common.saved'))
    } else {
      const res = await createWorkspace(name, path)
      workspaces.value.push(res)
      message.success(t('common.saved'))
    }
    resetForm()
  } catch (err: any) {
    const msg = err?.message || ''
    if (msg.includes('409') || msg.includes('already exists')) {
      message.error(t('settings.workspace.nameExists'))
    } else if (msg.includes('400') || msg.includes('does not exist')) {
      message.error(t('settings.workspace.pathNotExists'))
    } else {
      message.error(t('common.saveFailed'))
    }
  }
}

function startEdit(ws: WorkspacePreset) {
  editingId.value = ws.id
  newName.value = ws.name
  newPath.value = ws.path
  showAddForm.value = true
}

async function handleDelete(id: string) {
  const ok = await deleteWorkspace(id)
  if (ok) {
    workspaces.value = workspaces.value.filter(w => w.id !== id)
    message.success(t('common.saved'))
  } else {
    message.error(t('common.deleteFailed'))
  }
}
</script>

<template>
  <section class="workspace-settings">
    <div v-if="!showAddForm" class="workspace-list">
      <NEmpty v-if="workspaces.length === 0 && !loading" :description="t('settings.workspace.empty')" />
      <div v-for="ws in workspaces" :key="ws.id" class="workspace-item">
        <div class="workspace-info">
          <span class="workspace-name">{{ ws.name }}</span>
          <span class="workspace-path" :title="ws.path">{{ ws.path }}</span>
        </div>
        <NSpace size="small">
          <NButton size="tiny" quaternary @click="startEdit(ws)">{{ t('common.edit') }}</NButton>
          <NPopconfirm
            :positive-text="t('common.confirm')"
            :negative-text="t('common.cancel')"
            @positive-click="handleDelete(ws.id)"
          >
            <template #trigger>
              <NButton size="tiny" quaternary type="error">{{ t('common.delete') }}</NButton>
            </template>
            {{ t('settings.workspace.deleteConfirm') }}
          </NPopconfirm>
        </NSpace>
      </div>
      <NButton
        class="add-btn"
        dashed
        type="primary"
        size="small"
        @click="showAddForm = true; editingId = null"
      >
        + {{ t('settings.workspace.add') }}
      </NButton>
    </div>

    <div v-else class="workspace-form">
      <div class="form-row">
        <label>{{ t('settings.workspace.name') }}</label>
        <NInput
          v-model:value="newName"
          size="small"
          :placeholder="t('settings.workspace.namePlaceholder')"
          @keydown.enter="handleSave"
        />
      </div>
      <div class="form-row">
        <label>{{ t('settings.workspace.path') }}</label>
        <NInput
          v-model:value="newPath"
          size="small"
          :placeholder="t('settings.workspace.pathPlaceholder')"
          @keydown.enter="handleSave"
        />
      </div>
      <NSpace size="small">
        <NButton size="small" type="primary" :disabled="!newName.trim() || !newPath.trim()" @click="handleSave">
          {{ editingId ? t('common.update') : t('common.create') }}
        </NButton>
        <NButton size="small" @click="resetForm">{{ t('common.cancel') }}</NButton>
      </NSpace>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.workspace-settings {
  margin-top: 16px;
}

.workspace-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.workspace-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 8px;
  background: var(--n-color-modal);
}

.workspace-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.workspace-name {
  font-weight: 500;
  font-size: 13px;
}

.workspace-path {
  font-size: 12px;
  opacity: 0.6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.add-btn {
  margin-top: 4px;
}

.workspace-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: var(--n-color-modal);
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 12px;
    opacity: 0.7;
  }
}
</style>
