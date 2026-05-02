<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NSpin, NModal } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { readCronRun } from '@/api/hermes/cron-history'
import type { RunEntry, RunDetail } from '@/api/hermes/cron-history'
import MarkdownRenderer from '@/components/hermes/chat/MarkdownRenderer.vue'

const props = defineProps<{
  run: RunEntry
  jobNameMap: Record<string, string>
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()
const loading = ref(true)
const content = ref('')
const error = ref(false)

const title = `${props.jobNameMap[props.run.jobId] || props.run.jobId} — ${props.run.runTime}`

onMounted(async () => {
  try {
    const detail: RunDetail = await readCronRun(props.run.jobId, props.run.fileName)
    content.value = detail.content
  } catch (err) {
    content.value = ''
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <NModal
    :show="true"
    preset="card"
    :title="title"
    :style="{ width: '680px', maxWidth: '90vw' }"
    :bordered="false"
    :segmented="{ content: true, footer: true }"
    @close="emit('close')"
  >
    <div class="detail-content">
      <NSpin v-if="loading" size="small" />
      <div v-else-if="error" class="detail-error">
        {{ t('common.retry') }}
      </div>
      <MarkdownRenderer v-else :content="content" />
    </div>
  </NModal>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.detail-content {
  max-height: 60vh;
  overflow-y: auto;
}

.detail-error {
  color: $text-muted;
  text-align: center;
  padding: 20px;
}
</style>
