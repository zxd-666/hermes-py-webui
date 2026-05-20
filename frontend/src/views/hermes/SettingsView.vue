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

// Special tabs that use custom components (not schema-driven)
const specialTabs = computed(() => [
  { key: "models", label: t("settings.tabs.model") },
  { key: "account", label: t("settings.tabs.account") },
]);

const schemaTabs = computed(() => {
  if (!schema.value) return [];
  return schema.value.category_order.map((cat) => ({
    key: cat,
    label: t(`settings.schemaCategory.${cat}`, cat),
  }));
});

const allTabs = computed(() => [...schemaTabs.value, ...specialTabs.value]);

const activeFields = computed(() => {
  if (!schema.value) return [];
  const q = searchQuery.value.trim().toLowerCase();
  return Object.entries(schema.value.fields)
    .filter(([_, field]) => {
      const matchesCategory = field.category === activeCategory.value;
      if (!matchesCategory) return false;
      if (!q) return true;
      const label = t(field.label_i18n, "").toLowerCase();
      const hint = t(field.hint_i18n, "").toLowerCase();
      return label.includes(q) || hint.includes(q) || field.category.includes(q);
    })
    .map(([key, field]) => ({ key, field }));
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
const rawYamlLoading = ref(false);
const rawYamlSaving = ref(false);
const rawYamlModified = ref(false);
const configPath = ref("");
const showRawModal = ref(false);

async function openRawYaml() {
  showRawModal.value = true;
  rawYamlLoading.value = true;
  try {
    const res = await fetchRawConfig();
    rawYaml.value = res.yaml_text;
    configPath.value = res.config_path;
    rawYamlModified.value = false;
  } catch {
    message.error(t("settings.rawLoadFailed"));
  } finally {
    rawYamlLoading.value = false;
  }
}

function onRawYamlChange(val: string) {
  rawYamlModified.value = val !== rawYaml.value;
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
        <NSpace :size="8">
          <NButton size="small" quaternary @click="downloadJson">
            📥 {{ t("settings.exportJson") }}
          </NButton>
          <NButton size="small" quaternary @click="triggerImport">
            📤 {{ t("settings.importJson") }}
          </NButton>
          <NButton size="small" quaternary @click="openRawYaml">
            🔧 {{ t("settings.rawYaml") }}
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
          <div
            v-for="tab in allTabs"
            :key="tab.key"
            class="nav-item"
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

          <!-- Schema-driven -->
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
      style="width: 800px; max-width: 95vw;"
      :segmented="{ content: true, footer: true }"
    >
      <template #header-extra>
        <code class="config-path-code">{{ configPath }}</code>
      </template>
      <NSpin :show="rawYamlLoading">
        <NInput
          v-model:value="rawYaml"
          type="textarea"
          :autosize="{ minRows: 20, maxRows: 40 }"
          :placeholder="t('settings.rawYamlPlaceholder')"
          font="monospace"
          @update:value="onRawYamlChange"
          style="font-family: 'SF Mono', 'Monaco', 'Menlo', 'Consolas', monospace; font-size: 13px;"
        />
      </NSpin>
      <template #footer>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span v-if="rawYamlModified" style="color: var(--warning-text, #d4a017); font-size: 13px;">
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
  padding: 16px 20px;
  flex-shrink: 0;
  border-bottom: 1px solid $border-light;

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: $text-primary;
  }
}

.header-actions {
  flex-shrink: 0;
}

.settings-layout {
  flex: 1;
  display: flex;
  overflow: hidden;
}

// ── Sidebar ──────────────────────────────────────────
.settings-sidebar {
  width: 200px;
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
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 6px;
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
    background: var(--primary-color-hover, rgba(99, 102, 241, 0.1));
    color: var(--primary-color, #6366f1);
    font-weight: 500;
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
