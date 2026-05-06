<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { NSpin, NEmpty } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { listCronRuns } from '@/api/hermes/cron-history'
import type { RunEntry } from '@/api/hermes/cron-history'

const props = defineProps<{
  selectedJobId: string | null
  jobNameMap: Record<string, string>
}>()

const emit = defineEmits<{
  runClick: [run: RunEntry]
}>()

const { t } = useI18n()
const loading = ref(false)
const runs = ref<RunEntry[]>([])
const collapsedGroups = ref<Set<string>>(new Set())

defineExpose({ refresh: fetchRuns })

async function fetchRuns() {
  loading.value = true
  try {
    runs.value = await listCronRuns(props.selectedJobId ?? undefined)
    // Sort by runTime descending (globally)
    runs.value.sort((a, b) => b.runTime.localeCompare(a.runTime))
    // Default all groups collapsed
    const ids = new Set(runs.value.map(r => r.jobId))
    collapsedGroups.value = ids
  } catch (err) {
    console.error('Failed to fetch cron runs:', err)
    runs.value = []
  } finally {
    loading.value = false
  }
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`
}

function getJobName(jobId: string): string {
  return props.jobNameMap[jobId] || jobId
}

function getRunJobName(run: RunEntry): string {
  return run.jobName || props.jobNameMap[run.jobId] || run.jobId
}

function formatRunTime(time: string): string {
  if (!time) return ''
  // "2026-05-03T00:49:28" → "05-03 00:49:28"
  return time.replace('T', ' ').slice(5)
}

// Group runs by jobName (for display), keep first run's jobId as key
const groupedRuns = computed(() => {
  if (props.selectedJobId) return null // single job mode, no grouping
  const groups: Record<string, { name: string; deleted: boolean; runs: RunEntry[] }> = {}
  for (const run of runs.value) {
    const displayName = getRunJobName(run)
    if (!groups[run.jobId]) {
      groups[run.jobId] = { name: displayName, deleted: run.jobDeleted, runs: [] }
    }
    groups[run.jobId].runs.push(run)
  }
  return groups
})

// For grouped mode: job IDs sorted by their latest run time
const sortedGroupKeys = computed(() => {
  if (!groupedRuns.value) return []
  return Object.keys(groupedRuns.value).sort((a, b) => {
    const aTime = groupedRuns.value![a].runs[0]?.runTime || ''
    const bTime = groupedRuns.value![b].runs[0]?.runTime || ''
    return bTime.localeCompare(aTime)
  })
})

function toggleGroup(jobId: string) {
  const next = new Set(collapsedGroups.value)
  if (next.has(jobId)) next.delete(jobId)
  else next.add(jobId)
  collapsedGroups.value = next
}

watch(() => props.selectedJobId, () => {
  fetchRuns()
}, { immediate: true })
</script>

<template>
  <div class="run-history">
    <!-- Single job mode: flat list (same as before) -->
    <template v-if="selectedJobId">
      <div class="history-header">
        <span class="history-count">{{ runs.length }} {{ t('jobs.runHistory.runs') }}</span>
      </div>
      <div class="history-body">
        <NSpin :show="loading">
          <NEmpty v-if="!loading && runs.length === 0" :description="t('jobs.runHistory.noRuns')" />
          <div v-else class="run-list">
            <div
              v-for="run in runs"
              :key="`${run.jobId}/${run.fileName}`"
              class="run-item"
              @click="emit('runClick', run)"
            >
              <div class="run-info">
                <span class="run-time">{{ formatRunTime(run.runTime) }}</span>
                <span class="run-size">{{ formatSize(run.size) }}</span>
              </div>
            </div>
          </div>
        </NSpin>
      </div>
    </template>

    <!-- All jobs mode: grouped by job name -->
    <template v-else>
      <div class="history-header">
        <span class="history-count">{{ runs.length }} {{ t('jobs.runHistory.runs') }}</span>
      </div>
      <div class="history-body">
        <NSpin :show="loading">
          <NEmpty v-if="!loading && runs.length === 0" :description="t('jobs.runHistory.noRuns')" />
          <div v-else class="grouped-list">
            <div
              v-for="jobId in sortedGroupKeys"
              :key="jobId"
              class="job-group"
            >
              <div class="group-header" @click="toggleGroup(jobId)">
                <span class="group-toggle">{{ collapsedGroups.has(jobId) ? '▸' : '▾' }}</span>
                <span class="group-name">{{ groupedRuns![jobId].name }}<span v-if="groupedRuns![jobId].deleted" class="group-deleted">{{ t('jobs.deleted') }}</span></span>
                <span class="group-count">{{ groupedRuns![jobId].runs.length }}</span>
              </div>
              <div v-if="!collapsedGroups.has(jobId)" class="group-runs">
                <div
                  v-for="run in groupedRuns![jobId].runs"
                  :key="`${run.jobId}/${run.fileName}`"
                  class="run-item"
                  @click="emit('runClick', run)"
                >
                  <div class="run-info">
                    <span class="run-time">{{ formatRunTime(run.runTime) }}</span>
                    <span class="run-size">{{ formatSize(run.size) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NSpin>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.run-history {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.history-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 8px;
  flex-shrink: 0;
}

.history-count {
  font-size: 12px;
  color: $text-muted;
}

.history-body {
  flex: 1;
  overflow-y: auto;
}

.grouped-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.job-group {
  display: flex;
  flex-direction: column;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: $radius-sm;
  cursor: pointer;
  user-select: none;
  transition: background-color $transition-fast;

  &:hover {
    background-color: rgba(var(--accent-primary-rgb), 0.06);
  }
}

.group-toggle {
  font-size: 11px;
  color: $text-muted;
  width: 12px;
  flex-shrink: 0;
}

.group-name {
  font-size: 13px;
  font-weight: 500;
  color: $text-primary;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.group-deleted {
  font-size: 11px;
  font-weight: 400;
  color: $text-muted;
  margin-left: 4px;
}

.group-count {
  font-size: 11px;
  color: $text-muted;
  background: rgba(var(--accent-primary-rgb), 0.08);
  padding: 1px 6px;
  border-radius: 8px;
  flex-shrink: 0;
}

.group-runs {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding-left: 20px;
}

.run-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.run-item {
  padding: 10px 12px;
  border-radius: $radius-sm;
  cursor: pointer;
  transition: background-color $transition-fast;

  &:hover {
    background-color: rgba(var(--accent-primary-rgb), 0.06);
  }

  &:active {
    background-color: rgba(var(--accent-primary-rgb), 0.1);
  }
}

.run-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.run-time {
  font-size: 13px;
  color: $text-primary;
  font-family: $font-code;
}

.run-size {
  font-size: 11px;
  color: $text-muted;
  font-family: $font-code;
}
</style>
