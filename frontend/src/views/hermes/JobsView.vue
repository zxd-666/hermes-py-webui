<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { NButton, NSpin, NDrawer, NDrawerContent } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import JobsPanel from '@/components/hermes/jobs/JobsPanel.vue'
import JobRunHistory from '@/components/hermes/jobs/JobRunHistory.vue'
import JobRunDetailModal from '@/components/hermes/jobs/JobRunDetailModal.vue'
import JobFormModal from '@/components/hermes/jobs/JobFormModal.vue'
import { useJobsStore } from '@/stores/hermes/jobs'
import type { RunEntry } from '@/api/hermes/cron-history'

const { t } = useI18n()
const jobsStore = useJobsStore()
const showModal = ref(false)
const editingJob = ref<string | null>(null)
const selectedJobId = ref<string | null>(null)
const drawerOpen = ref(false)
const detailRun = ref<RunEntry | null>(null)
const runHistoryRef = ref<InstanceType<typeof JobRunHistory> | null>(null)

const jobNameMap = computed(() => {
  const map: Record<string, string> = {}
  for (const job of jobsStore.jobs) {
    const id = job.job_id || job.id
    map[id] = job.name
  }
  return map
})

onMounted(() => {
  jobsStore.fetchJobs()
})

function openCreateModal() {
  editingJob.value = null
  showModal.value = true
}

function openEditModal(jobId: string) {
  editingJob.value = jobId
  showModal.value = true
}

function handleModalClose() {
  showModal.value = false
  editingJob.value = null
}

async function handleSave() {
  await jobsStore.fetchJobs()
  handleModalClose()
}

function openRunHistory(jobId?: string) {
  selectedJobId.value = jobId || null
  drawerOpen.value = true
}

function getJobName(jobId: string): string {
  return jobNameMap.value[jobId] || jobId
}

function handleDrawerClose() {
  drawerOpen.value = false
  selectedJobId.value = null
}

function handleRunClick(run: RunEntry) {
  detailRun.value = run
}

function handleDetailClose() {
  detailRun.value = null
}

function handleJobRun() {
  // Trigger a delayed refresh: the cron run needs a moment to produce output
  setTimeout(() => runHistoryRef.value?.refresh(), 2000)
  setTimeout(() => runHistoryRef.value?.refresh(), 10000)
}
</script>

<template>
  <div class="jobs-view">
    <header class="page-header">
      <h2 class="header-title">{{ t('jobs.title') }}</h2>
      <div class="header-actions">
        <NButton size="small" quaternary @click="openRunHistory()">
          <template #icon>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </template>
          {{ t('jobs.runHistory.title') }}
        </NButton>
        <NButton type="primary" size="small" @click="openCreateModal">
          <template #icon>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </template>
          {{ t('jobs.createJob') }}
        </NButton>
      </div>
    </header>

    <div class="jobs-content">
      <NSpin :show="jobsStore.loading && jobsStore.jobs.length === 0">
        <JobsPanel
          @edit="openEditModal"
          @select="openRunHistory"
          @run="handleJobRun"
        />
      </NSpin>
    </div>

    <NDrawer
      v-model:show="drawerOpen"
      :width="480"
      placement="right"
      @after-leave="handleDrawerClose"
    >
      <NDrawerContent
        :title="selectedJobId ? getJobName(selectedJobId) : t('jobs.runHistory.title')"
        closable
        @close="handleDrawerClose"
      >
        <JobRunHistory
          ref="runHistoryRef"
          :selected-job-id="selectedJobId"
          :job-name-map="jobNameMap"
          @run-click="handleRunClick"
        />
      </NDrawerContent>
    </NDrawer>

    <JobRunDetailModal
      v-if="detailRun"
      :run="detailRun"
      :job-name-map="jobNameMap"
      @close="handleDetailClose"
    />

    <JobFormModal
      v-if="showModal"
      :job-id="editingJob"
      @close="handleModalClose"
      @saved="handleSave"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.jobs-view {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
}

.jobs-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  min-height: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
