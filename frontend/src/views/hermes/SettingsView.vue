<script setup lang="ts">
import { onMounted, ref, computed, provide } from "vue";
import {
  NSpin,
  NButton,
  NInput,
  NSpace,
  NModal,
  NEmpty,
  useMessage,
  useDialog,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { useSettingsStore } from "@/stores/hermes/settings";
import {
  fetchRawConfig,
  saveRawConfig,
  fetchConfigDefaults,
  fetchConfigSchema,
} from "@/api/hermes/config";
import type { ConfigSchema, ConfigFieldSchema } from "@/api/hermes/config";
import SchemaField from "@/components/hermes/settings/SchemaField.vue";
import AccountSettings from "@/components/hermes/settings/AccountSettings.vue";
import ModelSettings from "@/components/hermes/settings/ModelSettings.vue";

const settingsStore = useSettingsStore();
const { t, locale } = useI18n();
const message = useMessage();
const dialog = useDialog();

// ── Schema-driven config ──────────────────────────────
const schema = ref<ConfigSchema | null>(null);
const schemaLoading = ref(false);
const activeCategory = ref("display");
const searchQuery = ref("");
const collapsedGroups = ref<Set<string>>(new Set());

function toggleGroup(label: string) {
  const next = new Set(collapsedGroups.value);
  if (next.has(label)) next.delete(label);
  else next.add(label);
  collapsedGroups.value = next;
}

// ── Sidebar groups ──────────────────────────────────────
interface NavGroup {
  label: string
  items: { key: string; label: string }[]
}

const SIDEBAR_GROUPS: Record<string, string[]> = {
  '核心': ['general', 'display', 'agent', 'delegation', 'memory'],
  '会话': ['sessions', 'session_reset', 'compression', 'approvals'],
  '安全': ['security', 'browser', 'tool_loop_guardrails', 'tool_output'],
  '高级': ['auxiliary', 'tts', 'stt', 'voice', 'web', 'x_search', 'model_catalog', 'kanban', 'curator'],
  '系统': ['terminal', 'logging', 'lsp', 'human_delay', 'updates'],
};

// Special tabs that use custom components (not schema-driven)
const specialTabs = computed(() => [
  { key: "models", label: t("settings.tabs.model") },
  { key: "account", label: t("settings.tabs.account") },
]);

const sidebarGroups = computed<NavGroup[]>(() => {
  if (!schema.value) return [];
  const allCats = schema.value.category_order;
  const groups: NavGroup[] = [];

  for (const [groupLabel, catKeys] of Object.entries(SIDEBAR_GROUPS)) {
    const items = catKeys
      .filter(cat => allCats.includes(cat))
      .map(cat => ({
        key: cat,
        label: t(`settings.schemaCategory.${cat}`, cat),
      }));
    if (items.length > 0) {
      groups.push({ label: groupLabel, items });
    }
  }

  // Collect any uncategorized categories
  const grouped = new Set(Object.values(SIDEBAR_GROUPS).flat());
  const ungrouped = allCats
    .filter(cat => !grouped.has(cat))
    .map(cat => ({
      key: cat,
      label: t(`settings.schemaCategory.${cat}`, cat),
    }));
  if (ungrouped.length > 0) {
    groups.push({ label: '其他', items: ungrouped });
  }

  return groups;
});

// Flat tab list for search + activeFields logic
const allTabs = computed(() => {
  const flat: { key: string; label: string }[] = [];
  for (const group of sidebarGroups.value) {
    flat.push(...group.items);
  }
  flat.push(...specialTabs.value);
  return flat;
});

// Auxiliary sub-group labels (key → display name)
const AUX_SUBGROUP_LABELS: Record<string, string> = {
  vision: '视觉模型',
  approval: '审批模型',
  compression: '压缩模型',
  curator: '策展模型',
  kanban_decomposer: '看板分解模型',
  mcp: 'MCP 模型',
  profile_describer: '描述器模型',
  skills_hub: '技能中心模型',
  title_generation: '标题生成模型',
  triage_specifier: '分类模型',
  web_extract: '网页提取模型',
};

interface FieldEntry { key: string; field: ConfigFieldSchema }
interface SubGroup { label: string; slug: string; fields: FieldEntry[] }

const activeFields = computed<FieldEntry[]>(() => {
  if (!schema.value || activeCategory.value === 'auxiliary') return [];
  const q = searchQuery.value.trim().toLowerCase();
  return Object.entries(schema.value.fields)
    .filter(([_, field]) => {
      if (field.category !== activeCategory.value) return false;
      if (!q) return true;
      const label = t(field.label_i18n, "").toLowerCase();
      const hint = t(field.hint_i18n, "").toLowerCase();
      return label.includes(q) || hint.includes(q) || field.category.includes(q);
    })
    .map(([key, field]) => ({ key, field }));
});

const auxiliarySubGroups = computed<SubGroup[]>(() => {
  if (!schema.value || activeCategory.value !== 'auxiliary') return [];
  const q = searchQuery.value.trim().toLowerCase();
  const grouped = new Map<string, FieldEntry[]>();

  for (const [key, field] of Object.entries(schema.value.fields)) {
    if (field.category !== 'auxiliary') continue;
    if (q) {
      const label = t(field.label_i18n, "").toLowerCase();
      const hint = t(field.hint_i18n, "").toLowerCase();
      if (!label.includes(q) && !hint.includes(q) && !key.includes(q)) continue;
    }
    const parts = key.split('.');
    const slug = parts.length >= 3 ? parts[1] : '_other';
    if (!grouped.has(slug)) grouped.set(slug, []);
    grouped.get(slug)!.push({ key, field });
  }

  return Array.from(grouped.entries()).map(([slug, fields]) => ({
    label: AUX_SUBGROUP_LABELS[slug] || slug,
    slug,
    fields,
  }));
});

const isSpecialTab = computed(() =>
  specialTabs.value.some((tab) => tab.key === activeCategory.value)
);

const totalFieldCount = computed(() =>
  schema.value ? Object.keys(schema.value.fields).length : 0
);

// ── Config value getter ───────────────────────────────
function getFieldValue(key: string): any {
  const [section, ...rest] = key.split(".");
  const field = rest.join("_");
  const storeMap: Record<string, any> = {
    display: settingsStore.display,
    agent: settingsStore.agent,
    delegation: settingsStore.delegation,
    memory: settingsStore.memory,
    session_reset: settingsStore.sessionReset,
    sessions: settingsStore.sessions,
    approvals: settingsStore.approvals,
    human_delay: settingsStore.humanDelay,
    security: settingsStore.security,
  };
  const sectionData = storeMap[section];
  return sectionData?.[field] ?? undefined;
}

// ── Reset to defaults ─────────────────────────────────
const defaultsMap = ref<Record<string, Record<string, any>>>({});
let defaultsLoaded = false;

async function loadDefaults() {
  if (defaultsLoaded) return;
  try {
    const data = await fetchConfigDefaults();
    if (data && typeof data === "object" && !("error" in data)) {
      defaultsMap.value = data as Record<string, Record<string, any>>;
    }
    defaultsLoaded = true;
  } catch {
    // Silently ignore
  }
}

async function resetCategory(cat: string) {
  const defaults = defaultsMap.value[cat];
  if (!defaults) {
    message.warning(t("settings.noDefaults", { scope: cat }));
    return;
  }
  dialog.warning({
    title: t("settings.resetConfirmTitle", { scope: t(`settings.schemaCategory.${cat}`, cat) }),
    content: t("settings.resetConfirmContent"),
    positiveText: t("common.confirm"),
    negativeText: t("common.cancel"),
    onPositiveClick: async () => {
      try {
        await settingsStore.saveSection(cat, defaults);
        message.success(t("settings.resetDone", { scope: t(`settings.schemaCategory.${cat}`, cat) }));
        await settingsStore.fetchSettings();
      } catch (err: any) {
        message.error(err?.message || t("settings.saveFailed"));
      }
    },
  });
}

// ── Raw YAML ──────────────────────────────────────────
const rawYaml = ref("");
const rawYamlOriginal = ref("");
const rawYamlLoading = ref(false);
const rawYamlSaving = ref(false);
const rawYamlModified = ref(false);
const configPath = ref("");
const showRawModal = ref(false);
const yamlModalFullscreen = ref(false);
const yamlEditorRef = ref<HTMLTextAreaElement | null>(null);
const yamlPreRef = ref<HTMLPreElement | null>(null);

// ── YAML Syntax Highlighting ───────────────────────────
function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightYamlValue(raw: string): string {
  const trimmed = raw.trimEnd();
  if (!trimmed) return escapeHtml(raw);

  // Inline comment split (only if # preceded by whitespace)
  const cmtIdx = trimmed.search(/(?<=\s)#/);
  const main = cmtIdx >= 0 ? trimmed.slice(0, cmtIdx).trimEnd() : trimmed;
  const cmt = cmtIdx >= 0 ? trimmed.slice(cmtIdx) : '';

  let html: string;
  if ((main.startsWith('"') && main.endsWith('"')) || (main.startsWith("'") && main.endsWith("'"))) {
    html = `<span class="yhl-str">${escapeHtml(main)}</span>`;
  } else if (main === 'true' || main === 'false' || main === 'yes' || main === 'no' || main === 'on' || main === 'off') {
    html = `<span class="yhl-bool">${escapeHtml(main)}</span>`;
  } else if (main === 'null' || main === '~' || main === '') {
    html = `<span class="yhl-null">${escapeHtml(main || 'null')}</span>`;
  } else if (/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(main)) {
    html = `<span class="yhl-num">${escapeHtml(main)}</span>`;
  } else if (main.startsWith('[')) {
    html = `<span class="yhl-str">${escapeHtml(main)}</span>`;
  } else {
    html = `<span class="yhl-str">${escapeHtml(main)}</span>`;
  }

  if (cmt) html += ` <span class="yhl-cmt">${escapeHtml(cmt)}</span>`;
  const trailing = raw.slice(trimmed.length);
  return html + escapeHtml(trailing);
}

function highlightYamlLine(line: string): string {
  const indent = line.match(/^(\s*)/)?.[1] || '';
  const content = line.slice(indent.length);
  const ei = escapeHtml(indent);

  if (!content) return ei;
  if (content.startsWith('#')) return `${ei}<span class="yhl-cmt">${escapeHtml(content)}</span>`;

  // key: value pattern
  const m = content.match(/^([^:]+?)((\s*:\s*)(.*))$/);
  if (m) {
    const key = escapeHtml(m[1]);
    const colon = escapeHtml(m[3]);
    const val = m[4];
    return `${ei}<span class="yhl-key">${key}</span>${colon}${val ? highlightYamlValue(val) : ''}`;
  }

  // List item: "- value"
  if (content.startsWith('- ')) {
    return `${ei}<span class="yhl-dash">-</span> ${highlightYamlValue(content.slice(1))}`;
  }

  return escapeHtml(line);
}

const highlightedYaml = computed(() => {
  if (!rawYaml.value) return '';
  return rawYaml.value.split('\n').map(highlightYamlLine).join('\n');
});

function onEditorScroll() {
  if (yamlPreRef.value && yamlEditorRef.value) {
    yamlPreRef.value.scrollTop = yamlEditorRef.value.scrollTop;
    yamlPreRef.value.scrollLeft = yamlEditorRef.value.scrollLeft;
  }
}

function onEditorKeyDown(e: KeyboardEvent) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const ta = yamlEditorRef.value;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const val = rawYaml.value;
    rawYaml.value = val.slice(0, start) + '  ' + val.slice(end);
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = start + 2;
      onRawYamlChange();
    });
  }
}

async function openRawYaml() {
  showRawModal.value = true;
  yamlModalFullscreen.value = false;
  rawYamlLoading.value = true;
  try {
    const res = await fetchRawConfig();
    rawYaml.value = res.yaml_text;
    rawYamlOriginal.value = res.yaml_text;
    configPath.value = res.config_path;
    rawYamlModified.value = false;
  } catch {
    message.error(t("settings.rawLoadFailed"));
  } finally {
    rawYamlLoading.value = false;
  }
}

function onRawYamlChange() {
  rawYamlModified.value = rawYaml.value !== rawYamlOriginal.value;
}

async function saveRawYaml() {
  rawYamlSaving.value = true;
  try {
    const res = await saveRawConfig(rawYaml.value);
    if (res.error) {
      message.error(res.error);
      return;
    }
    message.success(t("settings.rawSaved"));
    rawYamlModified.value = false;
    rawYamlOriginal.value = rawYaml.value;
    await settingsStore.fetchSettings();
  } catch (err: any) {
    message.error(err?.message || t("settings.saveFailed"));
  } finally {
    rawYamlSaving.value = false;
  }
}

// ── Export / Import JSON ───────────────────────────────
function downloadJson() {
  const config = settingsStore;
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hermes-config.json";
  a.click();
  URL.revokeObjectURL(url);
  message.success(t("settings.exported"));
}

function triggerImport() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (typeof data !== "object" || data === null || Array.isArray(data)) {
        message.error(t("settings.invalidJson"));
        return;
      }
      dialog.warning({
        title: t("settings.importConfirmTitle"),
        content: t("settings.importConfirmContent"),
        positiveText: t("common.confirm"),
        negativeText: t("common.cancel"),
        onPositiveClick: async () => {
          settingsStore.saving = true;
          try {
            const sections = Object.keys(data);
            for (const section of sections) {
              if (section === "platforms") continue;
              await settingsStore.saveSection(section, data[section]);
            }
            message.success(t("settings.imported"));
            await settingsStore.fetchSettings();
          } catch (err: any) {
            message.error(err?.message || t("settings.saveFailed"));
          } finally {
            settingsStore.saving = false;
          }
        },
      });
    } catch {
      message.error(t("settings.invalidJson"));
    }
  };
  input.click();
}

// ── Init ──────────────────────────────────────────────
onMounted(async () => {
  settingsStore.fetchSettings();
  loadDefaults();
  fetchRawConfig()
    .then((res) => {
      configPath.value = res.config_path;
    })
    .catch(() => {});

  schemaLoading.value = true;
  try {
    schema.value = await fetchConfigSchema();
  } catch (err) {
    console.error("Failed to load config schema:", err);
  } finally {
    schemaLoading.value = false;
  }
});
</script>

<template>
  <div class="settings-view">
    <header class="page-header">
      <h2 class="header-title">{{ t("settings.title") }}</h2>
      <div class="header-actions">
        <NSpace :size="4">
          <NButton size="small" quaternary @click="downloadJson">
            <template #icon><span class="btn-icon">↓</span></template>
            {{ t("settings.exportJson") }}
          </NButton>
          <NButton size="small" quaternary @click="triggerImport">
            <template #icon><span class="btn-icon">↑</span></template>
            {{ t("settings.importJson") }}
          </NButton>
          <NButton size="small" quaternary @click="openRawYaml">
            <template #icon><span class="btn-icon">⟨⟩</span></template>
            {{ t("settings.rawYaml") }}
          </NButton>
        </NSpace>
      </div>
    </header>

    <div class="settings-layout">
      <!-- ── Sidebar ─────────────────────────────── -->
      <aside class="settings-sidebar">
        <div class="sidebar-search">
          <NInput
            v-model:value="searchQuery"
            size="small"
            clearable
            :placeholder="t('settings.searchPlaceholder')"
          />
        </div>
        <nav class="sidebar-nav">
          <template v-for="group in sidebarGroups" :key="group.label">
            <div
              class="nav-group-header"
              @click="toggleGroup(group.label)"
            >
              <span class="group-chevron" :class="{ collapsed: collapsedGroups.has(group.label) }">▸</span>
              <span class="group-label">{{ group.label }}</span>
              <span class="group-count">{{ group.items.length }}</span>
            </div>
            <div v-show="!collapsedGroups.has(group.label)" class="nav-group-items">
              <div
                v-for="tab in group.items"
                :key="tab.key"
                class="nav-item"
                :class="{ active: activeCategory === tab.key }"
                @click="activeCategory = tab.key"
              >
                <span class="nav-label">{{ tab.label }}</span>
              </div>
            </div>
          </template>
          <div class="sidebar-divider" />
          <div
            v-for="tab in specialTabs"
            :key="tab.key"
            class="nav-item nav-item--special"
            :class="{ active: activeCategory === tab.key }"
            @click="activeCategory = tab.key"
          >
            <span class="nav-label">{{ tab.label }}</span>
          </div>
        </nav>
        <div v-if="configPath" class="sidebar-footer">
          <code class="config-path-code">{{ configPath }}</code>
          <span class="field-count">{{ totalFieldCount }} {{ t('settings.fieldCount') }}</span>
        </div>
      </aside>

      <!-- ── Main content ───────────────────────── -->
      <main class="settings-main">
        <NSpin :show="settingsStore.loading || settingsStore.saving || schemaLoading" size="large">
          <!-- Special: Models -->
          <div v-if="activeCategory === 'models'" class="settings-content">
            <ModelSettings />
          </div>

          <!-- Special: Account -->
          <div v-else-if="activeCategory === 'account'" class="settings-content">
            <AccountSettings />
          </div>

          <!-- Schema-driven: Auxiliary (sub-grouped) -->
          <div v-else-if="activeCategory === 'auxiliary'" class="settings-content">
            <div class="content-header">
              <h3 class="content-title">
                {{ t(`settings.schemaCategory.auxiliary`, 'auxiliary') }}
              </h3>
              <NButton
                size="tiny"
                quaternary
                @click="resetCategory('auxiliary')"
              >
                ↺ {{ t("settings.resetDefaults") }}
              </NButton>
            </div>
            <template v-if="auxiliarySubGroups.length > 0">
              <div
                v-for="sub in auxiliarySubGroups"
                :key="sub.slug"
                class="aux-subgroup"
              >
                <div class="aux-subgroup-title">{{ sub.label }}</div>
                <SchemaField
                  v-for="{ key, field } in sub.fields"
                  :key="key"
                  :field-key="key"
                  :schema="field"
                  :value="getFieldValue(key)"
                />
              </div>
            </template>
            <NEmpty v-else :description="t('settings.noFields')" />
          </div>

          <!-- Schema-driven: Regular -->
          <div v-else class="settings-content">
            <div class="content-header">
              <h3 class="content-title">
                {{ t(`settings.schemaCategory.${activeCategory}`, activeCategory) }}
              </h3>
              <NButton
                size="tiny"
                quaternary
                @click="resetCategory(activeCategory)"
              >
                ↺ {{ t("settings.resetDefaults") }}
              </NButton>
            </div>
            <NEmpty v-if="activeFields.length === 0" :description="t('settings.noFields')" />
            <SchemaField
              v-for="{ key, field } in activeFields"
              :key="key"
              :field-key="key"
              :schema="field"
              :value="getFieldValue(key)"
            />
          </div>
        </NSpin>
      </main>
    </div>

    <!-- Raw YAML Modal -->
    <NModal
      v-model:show="showRawModal"
      preset="card"
      :title="t('settings.rawYamlTitle')"
      :style="{ width: yamlModalFullscreen ? '95vw' : '920px', maxHeight: '92vh' }"
      :segmented="{ content: true, footer: true }"
      :class="{ 'yaml-modal--fullscreen': yamlModalFullscreen }"
    >
      <template #header-extra>
        <span class="yaml-modal-header-extra">
          <code class="config-path-code">{{ configPath }}</code>
          <button class="yaml-fullscreen-toggle" @click="yamlModalFullscreen = !yamlModalFullscreen" :title="yamlModalFullscreen ? '退出全屏' : '全屏'">
            {{ yamlModalFullscreen ? '⊡' : '⊡' }}
          </button>
        </span>
      </template>
      <NSpin :show="rawYamlLoading">
        <div class="yaml-editor-container">
          <pre
            ref="yamlPreRef"
            class="yaml-highlight-layer"
            v-html="highlightedYaml"
          />
          <textarea
            ref="yamlEditorRef"
            v-model="rawYaml"
            class="yaml-editor"
            :placeholder="t('settings.rawYamlPlaceholder')"
            spellcheck="false"
            @input="onRawYamlChange"
            @scroll="onEditorScroll"
            @keydown="onEditorKeyDown"
          />
        </div>
      </NSpin>
      <template #footer>
        <div class="yaml-modal-footer">
          <span v-if="rawYamlModified" class="yaml-modified-hint">
            {{ t("settings.unsavedChanges") }}
          </span>
          <span v-else />
          <NSpace>
            <NButton @click="showRawModal = false">{{ t("common.cancel") }}</NButton>
            <NButton
              type="primary"
              :loading="rawYamlSaving"
              :disabled="!rawYamlModified"
              @click="saveRawYaml"
            >
              {{ t("common.save") }}
            </NButton>
          </NSpace>
        </div>
      </template>
    </NModal>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables" as *;

.settings-view {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  flex-shrink: 0;
  border-bottom: 1px solid $border-light;

  h2 {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: $text-primary;
    letter-spacing: -0.01em;
  }
}

.header-actions {
  flex-shrink: 0;
}

.btn-icon {
  font-size: 14px;
  line-height: 1;
  opacity: 0.6;
}

.settings-layout {
  flex: 1;
  display: flex;
  overflow: hidden;
}

// ── Sidebar ──────────────────────────────────────────
.settings-sidebar {
  width: $sidebar-width + 40px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid $border-light;
  padding: 0 0 12px 0;
  margin-left: 20px;
}

.sidebar-search {
  padding: 12px 12px 10px 0;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-right: 12px;

  // Thin scrollbar
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border-color, #e0e0e0);
    border-radius: 2px;
  }
}

// Group header
.nav-group-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 10px 4px;
  cursor: pointer;
  user-select: none;

  .group-chevron {
    font-size: 10px;
    color: var(--text-tertiary, #aaa);
    transition: transform 0.2s ease;
    display: inline-block;

    &.collapsed {
      transform: rotate(-90deg);
    }
  }

  .group-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--text-tertiary, #aaa);
  }

  .group-count {
    font-size: 10px;
    color: var(--text-tertiary, #bbb);
    margin-left: auto;
  }
}

.nav-group-items {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.sidebar-divider {
  height: 1px;
  background: $border-light;
  margin: 8px 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: $radius-sm;
  cursor: pointer;
  font-size: 13px;
  color: var(--text-secondary, #999);
  transition: all 0.15s ease;
  user-select: none;

  &:hover {
    background: var(--bg-tertiary, rgba(128, 128, 128, 0.08));
    color: var(--text-primary, #333);
  }

  &.active {
    background: var(--primary-color-hover, rgba(98, 70, 234, 0.08));
    color: var(--primary-color, #6246ea);
    font-weight: 500;
  }

  &--special {
    color: var(--text-secondary, #888);
    font-size: 12.5px;
  }
}

.nav-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-footer {
  padding: 8px 10px 0;
  border-top: 1px solid $border-light;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.config-path-code {
  font-size: 11px;
  color: var(--text-tertiary, #999);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.field-count {
  font-size: 11px;
  color: var(--text-tertiary, #999);
}

// ── Main Content ─────────────────────────────────────
.settings-main {
  flex: 1;
  overflow-y: auto;
  padding: 12px 20px 20px 20px;
}

.settings-content {
  min-height: 200px;
}

.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.content-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary, #333);
  margin: 0;
  letter-spacing: -0.01em;
}

// ── Auxiliary sub-groups ─────────────────────────────
.aux-subgroup {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color, #f0f0f0);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
}

.aux-subgroup-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary, #999);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px dashed var(--border-color, #eee);
}

@media (max-width: $breakpoint-mobile) {
  .settings-layout {
    flex-direction: column;
  }

  .settings-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid $border-light;
    margin-left: 0;
    margin-right: 20px;
    padding-bottom: 0;
  }

  .sidebar-nav {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 0;
    padding-right: 0;
    padding-bottom: 8px;

    .nav-group-header {
      display: none;
    }

    .nav-group-items {
      flex-direction: row;
      gap: 0;
    }

    .sidebar-divider {
      display: none;
    }
  }

  .nav-item {
    white-space: nowrap;
    padding: 5px 10px;
    font-size: 12px;
  }

  .sidebar-footer {
    display: none;
  }

  .settings-main {
    padding: 12px 20px 20px;
  }
}
</style>

<!-- YAML Modal uses unscoped styles to override NModal internals -->
<style lang="scss">
.yaml-modal--fullscreen {
  .n-card__content {
    height: calc(92vh - 120px) !important;
    overflow: hidden !important;
  }
}

.yaml-modal-header-extra {
  display: flex;
  align-items: center;
  gap: 8px;
}

.yaml-fullscreen-toggle {
  background: none;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 2px 6px;
  color: var(--text-tertiary, #999);
  transition: all 0.15s ease;

  &:hover {
    color: var(--text-primary, #333);
    border-color: var(--text-tertiary, #bbb);
  }
}

.yaml-editor-container {
  position: relative;
  width: 100%;
  height: calc(80vh - 200px);
  min-height: 300px;
  border: 1px solid var(--border-color, #e8e8e8);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &:focus-within {
    border-color: var(--primary-color, #6246ea);
    box-shadow: 0 0 0 2px rgba(98, 70, 234, 0.1);
  }

  // Scrollbar (shared by both layers)
  textarea::-webkit-scrollbar,
  pre::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  textarea::-webkit-scrollbar-thumb,
  pre::-webkit-scrollbar-thumb {
    background: var(--border-color, #d0d0d0);
    border-radius: 3px;
    &:hover {
      background: var(--text-tertiary, #aaa);
    }
  }
}

.yaml-highlight-layer,
.yaml-editor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 16px;
  box-sizing: border-box;
  font-family: 'SF Mono', 'Monaco', 'Menlo', 'Consolas', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  tab-size: 2;
  white-space: pre;
  overflow: auto;
  border: none;
  outline: none;
}

.yaml-highlight-layer {
  // Highlighted text underneath
  pointer-events: none;
  z-index: 1;
  background: var(--body-color, #fafafa);
  color: var(--text-primary, #333);
}

.yaml-editor {
  // Transparent textarea on top
  z-index: 2;
  resize: vertical;
  color: transparent;
  caret-color: var(--text-primary, #333);
  background: transparent;
  -webkit-text-fill-color: transparent;

  &::placeholder {
    -webkit-text-fill-color: var(--text-tertiary, #ccc);
    color: var(--text-tertiary, #ccc);
  }
}

// ── YAML Token Colors ───────────────────────────────
.yhl-key {
  color: #6246ea;
  font-weight: 500;
}

.yhl-str {
  color: #0d9488;
}

.yhl-num {
  color: #d97706;
}

.yhl-bool {
  color: #2563eb;
  font-weight: 500;
}

.yhl-null {
  color: var(--text-tertiary, #aaa);
  font-style: italic;
}

.yhl-cmt {
  color: var(--text-tertiary, #aaa);
  font-style: italic;
}

.yhl-dash {
  color: var(--text-tertiary, #aaa);
  font-weight: 600;
}

.yaml-modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.yaml-modified-hint {
  color: var(--warning-text, #d4a017);
  font-size: 13px;
}

.yaml-modal--fullscreen .yaml-editor {
  height: calc(92vh - 200px);
  min-height: 500px;
}
</style>
