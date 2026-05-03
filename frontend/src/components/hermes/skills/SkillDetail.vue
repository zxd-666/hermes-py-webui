<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import MarkdownRenderer from '@/components/hermes/chat/MarkdownRenderer.vue'
import { fetchSkillContent, fetchSkillFiles, type SkillFileEntry } from '@/api/hermes/skills'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  category: string
  skill: string
}>()

const content = ref('')
const files = ref<SkillFileEntry[]>([])
const loading = ref(false)
const fileContent = ref('')
const viewingFile = ref<string | null>(null)
const fileLoading = ref(false)

interface SkillMeta {
  name: string
  description: string
  tags: string[]
  [key: string]: any
}

const meta = ref<SkillMeta>({ name: '', description: '', tags: [] })

/** Parse YAML frontmatter from SKILL.md content, return [meta, body] */
function parseFrontmatter(raw: string): { meta: SkillMeta; body: string } {
  if (!raw.startsWith('---')) return { meta: { name: '', description: '', tags: [] }, body: raw }
  const end = raw.indexOf('---', 3)
  if (end < 0) return { meta: { name: '', description: '', tags: [] }, body: raw }
  const fm = raw.slice(3, end).trim()
  const body = raw.slice(end + 3).trim()

  const result: SkillMeta = { name: '', description: '', tags: [] }

  // Simple YAML parser — handles key: value, key: |, key: >, key: "..."
  const lines = fm.split('\n')
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const m = line.match(/^(\w[\w.-]*)\s*:\s*(.*)/)
    if (!m) { i++; continue }
    const [, key, val] = m
    if (val === '|' || val === '|2' || val === '|+') {
      // Literal block: subsequent indented lines
      const blockLines: string[] = []
      i++
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].startsWith('\t') || lines[i] === '')) {
        blockLines.push(lines[i].replace(/^ {2}/, ''))
        i++
      }
      result[key] = blockLines.join('\n').trim()
    } else if (val === '>' || val === '>2' || val === '>+') {
      // Folded block
      const blockLines: string[] = []
      i++
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].startsWith('\t') || lines[i] === '')) {
        blockLines.push(lines[i].replace(/^ {2}/, ''))
        i++
      }
      result[key] = blockLines.join(' ').trim()
    } else if (val.startsWith('"') && val.endsWith('"')) {
      result[key] = val.slice(1, -1)
      i++
    } else if (val.startsWith('[')) {
      // Inline array like [a, b, c]
      result[key] = val.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean)
      i++
    } else if (val.trim() === '') {
      // Could be a nested mapping or block — skip (e.g. metadata:)
      i++
    } else {
      result[key] = val.trim()
      i++
    }
  }

  // Normalize tags
  if (typeof (result as Record<string, any>).tags === 'string') {
    (result as Record<string, any>).tags = (result as Record<string, any>).tags.split(',').map((s: string) => s.trim()).filter(Boolean)
  }

  return { meta: result, body }
}

const skillBody = computed(() => {
  if (!content.value || viewingFile.value) return content.value
  const { body } = parseFrontmatter(content.value)
  return body
})

async function loadSkill() {
  loading.value = true
  viewingFile.value = null
  fileContent.value = ''
  files.value = []
  content.value = ''
  meta.value = { name: '', description: '', tags: [] }
  try {
    const skillPath = `${props.category}/${props.skill}/SKILL.md`
    const [skillContent, skillFiles] = await Promise.all([
      fetchSkillContent(skillPath),
      fetchSkillFiles(props.category, props.skill),
    ])
    content.value = skillContent
    files.value = skillFiles
    const { meta: parsed } = parseFrontmatter(skillContent)
    meta.value = parsed
  } catch (err: any) {
    content.value = t('skills.loadFailed') + `: ${err.message}`
  } finally {
    loading.value = false
  }
}

async function viewFile(filePath: string) {
  fileLoading.value = true
  viewingFile.value = filePath
  try {
    // filePath is relative under category/skill/ (e.g. "references/api.md")
    const skillPath = `${props.category}/${props.skill}/${filePath}`
    fileContent.value = await fetchSkillContent(skillPath)
  } catch (err: any) {
    fileContent.value = t('skills.fileLoadFailed') + `: ${err.message}`
  } finally {
    fileLoading.value = false
  }
}

function backToSkill() {
  viewingFile.value = null
  fileContent.value = ''
}

watch(() => `${props.category}/${props.skill}`, loadSkill, { immediate: true })
</script>

<template>
  <div class="skill-detail">
    <!-- Skill title -->
    <div class="detail-title">
      <span class="detail-category">{{ category }}</span>
      <span class="detail-separator">/</span>
      <span class="detail-name">{{ skill }}</span>
    </div>

    <div v-if="loading && !content" class="detail-loading">{{ t('common.loading') }}</div>

    <template v-else>
      <!-- Metadata card (SKILL.md frontmatter) -->
      <div v-if="!viewingFile && meta.description" class="meta-card">
        <div class="meta-description">{{ meta.description }}</div>
        <div v-if="meta.tags && meta.tags.length > 0" class="meta-tags">
          <span v-for="tag in meta.tags" :key="tag" class="meta-tag">{{ tag }}</span>
        </div>
        <div v-if="meta.license" class="meta-extra">
          <span class="meta-label">license</span>
          <span>{{ meta.license }}</span>
        </div>
      </div>

      <!-- Breadcrumb for file view -->
      <div v-if="viewingFile" class="detail-breadcrumb">
        <button class="back-btn" @click="backToSkill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {{ t('skills.backTo') }} {{ skill }}
        </button>
        <span class="breadcrumb-path">{{ viewingFile }}</span>
      </div>

      <!-- Skill content -->
      <div class="detail-content">
        <MarkdownRenderer v-if="viewingFile" :content="fileContent" />
        <MarkdownRenderer v-else :content="skillBody" />
      </div>

      <!-- Attached files -->
      <div v-if="!viewingFile && files.length > 0" class="detail-files">
        <div class="files-header">{{ t('skills.attachedFiles') }}</div>
        <div class="files-list">
          <button
            v-for="f in files"
            :key="f.path"
            class="file-item"
            @click="viewFile(f.path)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span>{{ f.path }}</span>
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.skill-detail {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.detail-title {
  flex-shrink: 0;
  padding-bottom: 12px;
  border-bottom: 1px solid $border-color;
  margin-bottom: 12px;
  font-size: 15px;
}

.detail-category {
  color: $text-muted;
  font-size: 13px;
}

.detail-separator {
  color: $text-muted;
  margin: 0 6px;
}

.detail-name {
  color: $text-primary;
  font-weight: 600;
}

.meta-card {
  flex-shrink: 0;
  padding: 10px 14px;
  margin-bottom: 12px;
  border-radius: $radius-sm;
  background: rgba(var(--accent-primary-rgb), 0.04);
  border: 1px solid rgba(var(--accent-primary-rgb), 0.08);
}

.meta-description {
  font-size: 13px;
  line-height: 1.6;
  color: $text-secondary;
  white-space: pre-line;
}

.meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
}

.meta-tag {
  font-size: 11px;
  color: $accent-primary;
  background: rgba(var(--accent-primary-rgb), 0.08);
  padding: 1px 8px;
  border-radius: 10px;
  font-weight: 500;
}

.meta-extra {
  margin-top: 6px;
  font-size: 12px;
  color: $text-muted;
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: $text-muted;
}

.detail-loading {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: $text-muted;
}

.detail-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0 12px;
  border-bottom: 1px solid $border-color;
  margin-bottom: 12px;
  flex-shrink: 0;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: none;
  color: $accent-primary;
  font-size: 13px;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;

  &:hover {
    background: rgba(var(--accent-primary-rgb), 0.06);
  }
}

.breadcrumb-path {
  font-size: 13px;
  color: $text-muted;
}

.detail-content {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding-bottom: 12px;

  :deep(hr) {
    border: none;
    margin: 12px 0;
  }
}

.detail-files {
  flex-shrink: 0;
  border-top: 1px solid $border-color;
  padding-top: 12px;
  margin-top: 12px;
}

.files-header {
  font-size: 12px;
  font-weight: 600;
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 6px;
}

.files-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid $border-color;
  border-radius: $radius-sm;
  background: $bg-secondary;
  color: $text-secondary;
  font-size: 12px;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    border-color: $accent-primary;
    color: $accent-primary;
  }
}

</style>
