# EKKOLearnAI/hermes-web-ui 功能分析：模型管理与 Profile 切换

> **分析目标仓库**: https://github.com/EKKOLearnAI/hermes-web-ui (v0.4.3)
> **分析时间**: 2026-05-01
> **技术栈**: Vue 3 + TypeScript + Pinia + Naive UI (前端) / Koa + TypeScript (BFF 后端)

---

## 目录

- [一、项目架构概览](#一项目架构概览)
- [二、模型管理功能分析](#二模型管理功能分析)
  - [2.1 模型列表获取与展示](#21-模型列表获取与展示)
  - [2.2 模型切换实现](#22-模型切换实现)
  - [2.3 模型配置项](#23-模型配置项)
  - [2.4 多 Provider/多模型路由与选择逻辑](#24-多-provider多模型路由与选择逻辑)
  - [2.5 相关文件清单](#25-相关文件清单)
- [三、Profile 切换功能分析](#三profile-切换功能分析)
  - [3.1 Profile 数据结构与存储](#31-profile-数据结构与存储)
  - [3.2 Profile CRUD 操作](#32-profile-crud-操作)
  - [3.3 Profile 切换实现](#33-profile-切换实现)
  - [3.4 切换后对 Session/模型配置/Memory 的影响](#34-切换后对-session模型配置memory-的影响)
  - [3.5 Profile 之间隔离机制](#35-profile-之间隔离机制)
  - [3.6 相关文件清单](#36-相关文件清单)
- [四、数据流总览图](#四数据流总览图)
- [五、对我们项目的参考建议](#五对我们项目的参考建议)

---

## 一、项目架构概览

```
hermes-web-ui/
├── packages/
│   ├── client/src/                    # Vue 3 前端
│   │   ├── api/
│   │   │   ├── client.ts              # 统一 HTTP 请求封装（含 Profile Header 注入）
│   │   │   └── hermes/
│   │   │       ├── system.ts          # 系统 API：模型发现、配置读写、健康检查
│   │   │       ├── profiles.ts        # Profile API：CRUD、切换、导入导出
│   │   │       ├── chat.ts            # 聊天 API：Socket.IO 流式通信
│   │   │       └── sessions.ts        # 会话 API：CRUD
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── ModelSelector.vue  # 全局模型选择器（侧边栏）
│   │   │   └── hermes/
│   │   │       ├── models/
│   │   │       │   ├── ProvidersPanel.vue    # Provider 管理面板
│   │   │       │   ├── ProviderCard.vue      # 单个 Provider 卡片
│   │   │       │   └── ProviderFormModal.vue # 添加/编辑 Provider 表单
│   │   │       └── profiles/
│   │   │           ├── ProfilesPanel.vue     # Profile 列表面板
│   │   │           ├── ProfileCard.vue       # 单个 Profile 卡片
│   │   │           ├── ProfileCreateModal.vue
│   │   │           ├── ProfileRenameModal.vue
│   │   │           └── ProfileImportModal.vue
│   │   ├── stores/hermes/
│   │   │   ├── app.ts            # 应用全局状态（含模型选择）
│   │   │   ├── models.ts         # 模型 Provider 管理状态
│   │   │   ├── profiles.ts       # Profile 管理状态
│   │   │   └── chat.ts           # 聊天/会话状态
│   │   └── views/hermes/
│   │       ├── ModelsView.vue    # 模型管理页
│   │       └── ProfilesView.vue  # Profile 管理页
│   └── server/src/               # Koa BFF 后端
│       ├── routes/hermes/
│       │   ├── models.ts         # 模型路由
│       │   ├── config.ts         # 配置路由
│       │   └── profiles.ts       # Profile 路由
│       ├── controllers/hermes/
│       │   ├── models.ts         # 模型控制器（核心模型发现逻辑）
│       │   ├── config.ts         # 配置控制器
│       │   └── profiles.ts       # Profile 控制器
│       ├── services/
│       │   ├── config-helpers.ts # 配置读写辅助
│       │   └── hermes/
│       │       ├── hermes-cli.ts # Hermes CLI 封装（child_process）
│       │       └── hermes-profile.ts  # Profile 路径解析
│       └── shared/
│           └── providers.ts      # Provider 预设注册表（前后端共享）
```

### 架构模式

| 层级 | 职责 | 技术 |
|------|------|------|
| **前端 Store** (Pinia) | 状态管理、缓存 | Vue 3 + Pinia |
| **前端 API** | HTTP 请求封装 | fetch + 自定义 `request()` |
| **BFF Server** (Koa) | 代理、CLI 封装、文件操作 | Koa + Router |
| **Hermes CLI** | 底层操作（Profile/Session/Gateway） | `child_process.execFile` |
| **共享代码** | Provider 注册表 | TypeScript 常量导出 |

---

## 二、模型管理功能分析

### 2.1 模型列表获取与展示

#### 整体流程

```
用户打开页面/切换 Provider
    ↓
AppStore.loadModels()
    ↓
GET /api/hermes/available-models
    ↓
后端 models.controller.getAvailable()
    ├── 读取 config.yaml 获取当前默认模型
    ├── 扫描 .env 文件中的 API Key（PROVIDER_ENV_MAP）
    ├── 验证 OAuth 授权（auth.json）
    ├── 遍历所有 Provider，获取模型列表
    │   ├── 静态目录（PROVIDER_PRESETS）
    │   └── 动态拉取（/v1/models 端点）
    ├── 处理 custom_providers（用户自定义）
    └── 返回 AvailableModelsResponse
    ↓
前端 ModelsStore / AppStore 更新状态
    ↓
ModelSelector.vue 渲染模型列表
```

#### 前端 API 调用

**文件**: `packages/client/src/api/hermes/system.ts`

```typescript
// 获取所有可用模型
export async function fetchAvailableModels(): Promise<AvailableModelsResponse> {
  return request<AvailableModelsResponse>('/api/hermes/available-models')
}
```

#### 数据结构

**AvailableModelsResponse**（后端返回）:
```typescript
export interface AvailableModelsResponse {
  default: string                    // 当前默认模型 ID
  default_provider: string           // 当前默认 Provider Key
  groups: AvailableModelGroup[]      // 已授权且可用的 Provider 分组
  allProviders: AvailableModelGroup[] // 所有 Provider 分组（含未授权，用于展示）
}

export interface AvailableModelGroup {
  provider: string    // Provider Key（如 "anthropic", "custom:my-proxy"）
  label: string       // 显示名称（如 "Anthropic"）
  base_url: string    // API 基础 URL
  models: string[]    // 模型 ID 列表
  api_key: string     // API Key（已脱敏）
  model_meta?: Record<string, { preview?: boolean; disabled?: boolean }> // 模型元数据
}
```

#### 前端展示

**文件**: `packages/client/src/components/layout/ModelSelector.vue`

- 以 **Modal 弹窗** 形式展示，点击侧边栏的模型名称触发
- 按 Provider 分组展示，每组可折叠
- 每个模型显示名称，选中状态用 ✓ 标记
- 支持搜索过滤
- 特殊标记：
  - `preview` 橙色标签（预览模型）
  - `disabled` 灰色不可点击
  - `custom` 蓝色标签（用户手动输入的模型）
- 底部提供"自定义模型输入"区域

### 2.2 模型切换实现

#### 前端 Store 层

**文件**: `packages/client/src/stores/hermes/app.ts`

```typescript
async function switchModel(modelId: string, providerOverride?: string) {
  // 1. 找到模型所属的 Provider Group
  const group = modelGroups.value.find(g => g.models.includes(modelId))
  const provider = providerOverride || group?.provider || ''

  // 2. 调用 API 更新后端配置
  await updateDefaultModel({ default: modelId, provider })

  // 3. 更新前端状态
  selectedModel.value = modelId
  selectedProvider.value = provider || ''

  // 4. 如果是自定义模型（不在服务端列表中），记录到 customModels
  if (provider && !modelGroups.value.find(g => g.provider === provider)?.models.includes(modelId)) {
    if (!customModels.value[provider]) customModels.value[provider] = []
    if (!customModels.value[provider].includes(modelId)) {
      customModels.value[provider] = [...customModels.value[provider], modelId]
    }
  }
}
```

#### 后端处理

**文件**: `packages/server/src/controllers/hermes/models.ts` → `setConfigModel()`

```typescript
export async function setConfigModel(ctx: any) {
  const { default: defaultModel, provider: reqProvider } = ctx.request.body
  // 1. 读取 config.yaml
  const config = await readConfigYaml()
  // 2. 修改 model 段
  config.model = {}
  config.model.default = defaultModel
  if (reqProvider) { config.model.provider = reqProvider }
  // 3. 写回 config.yaml
  await writeConfigYaml(config)
  // 注意：此处不重启 gateway，模型切换通过下次请求自动生效
}
```

**API 路由**: `PUT /api/hermes/config/model`

```json
// Request Body
{ "default": "claude-sonnet-4-6", "provider": "anthropic" }
```

#### 切换后生效机制

**不需要重启 Gateway**。模型切换通过修改 `config.yaml` 的 `model.default` 和 `model.provider` 字段生效。Hermes Agent 在每次处理请求时读取最新配置，因此下一次对话请求自动使用新模型。

但在 **Platform 配置变更**（如 Telegram/Discord 凭证更新）时会触发 `restartGateway()`。

#### 跨 Session 模型切换

```typescript
// chat.ts 中
async function switchSessionModel(modelId: string, provider?: string) {
  if (!activeSession.value) return
  // 1. 更新当前 Session 的 model 属性
  activeSession.value.model = modelId
  activeSession.value.provider = provider || ''
  // 2. 如果 provider 改变，同步更新全局配置
  if (provider) {
    await useAppStore().switchModel(modelId, provider)
  }
}
```

### 2.3 模型配置项

#### App Store 中的配置

```typescript
// packages/client/src/stores/hermes/app.ts
const streamEnabled = ref(true)          // 是否启用流式输出
const sessionPersistence = ref(true)     // 是否持久化会话
const maxTokens = ref(4096)              // 最大 token 数
```

> **注意**：`maxTokens` 在 App Store 中定义但 **当前未暴露到 UI 界面**，`temperature` 等 LLM 参数同样不在前端可配置范围内。这些参数由 Hermes Agent 后端在 `config.yaml` 的 `model_config` 段控制，前端不提供调节入口。

#### 后端 config.yaml 中的模型配置段

```yaml
model:
  default: "claude-sonnet-4-6"
  provider: "anthropic"
  # base_url 和 api_key 通常通过 .env 或 auth.json 管理
```

#### custom_providers 段

```yaml
custom_providers:
  - name: "my-proxy"
    base_url: "https://my-proxy.example.com/v1"
    api_key: "sk-xxx"
    model: "gpt-4o"
```

### 2.4 多 Provider/多模型路由与选择逻辑

#### Provider 注册表（前后端共享）

**文件**: `packages/server/src/shared/providers.ts`

```typescript
export const PROVIDER_PRESETS: ProviderPreset[] = [
  { label: 'Anthropic', value: 'anthropic', base_url: 'https://api.anthropic.com', models: [...] },
  { label: 'Google AI Studio', value: 'gemini', base_url: '...', models: [...] },
  { label: 'DeepSeek', value: 'deepseek', base_url: '...', models: [...] },
  { label: 'Z.AI / GLM', value: 'zai', base_url: '...', models: [...] },
  // ... 共 25+ 内置 Provider
]
```

#### Provider 发现与验证逻辑

后端 `getAvailable()` 控制器的核心流程：

1. **静态目录查询**: 从 `PROVIDER_PRESETS` 获取所有内置 Provider 列表
2. **凭证验证**: 通过 `PROVIDER_ENV_MAP` 检查 `.env` 文件中是否有对应 API Key
3. **OAuth 验证**: 对于 Codex/Copilot 等 OAuth 类型，检查 `auth.json` 中的 token
4. **动态模型拉取**: 对于 OpenRouter/CLIProxyAPI 等支持 `/v1/models` 端点的 Provider，实时拉取模型列表
5. **自定义 Provider**: 从 `config.yaml` 的 `custom_providers` 段读取用户添加的 OpenAI 兼容 Provider
6. **去重**: 使用 `seenProviders` Set 防止重复
7. **分组**: 按 `providerKey` 分组返回

#### Provider 环境变量映射

```typescript
// packages/server/src/services/config-helpers.ts
export const PROVIDER_ENV_MAP: Record<string, { api_key_env: string; base_url_env: string }> = {
  openrouter: { api_key_env: 'OPENROUTER_API_KEY', base_url_env: '' },
  anthropic:  { api_key_env: 'ANTHROPIC_API_KEY', base_url_env: '' },
  gemini:     { api_key_env: 'GEMINI_API_KEY', base_url_env: '' },
  deepseek:   { api_key_env: 'DEEPSEEK_API_KEY', base_url_env: '' },
  zai:        { api_key_env: 'GLM_API_KEY', base_url_env: '' },
  copilot:    { api_key_env: '', base_url_env: '' },  // OAuth
  nous:       { api_key_env: '', base_url_env: '' },  // OAuth
  // ... 更多
}
```

#### 自定义 Provider 管理

**添加 Provider**:
```
POST /api/hermes/config/providers
Body: { name, base_url, api_key, model, context_length?, providerKey? }
```

**删除 Provider**:
```
DELETE /api/hermes/config/providers/:name
```

**更新 Provider**:
```
PUT /api/hermes/config/providers/:poolKey
Body: { name?, base_url?, api_key?, model? }
```

#### Provider 区分逻辑

```typescript
// 前端 Store 中的计算属性
const customProviders = computed(() =>
  providers.value.filter(g => g.provider.startsWith('custom:'))
)

const builtinProviders = computed(() =>
  providers.value.filter(g => !g.provider.startsWith('custom:'))
)
```

自定义 Provider 的 key 格式为 `custom:{name}`（name 经过小写和连字符标准化）。

### 2.5 相关文件清单

| 层级 | 文件路径 | 职责 |
|------|----------|------|
| **前端 API** | `packages/client/src/api/hermes/system.ts` | 模型相关 HTTP 请求封装 |
| **前端 API** | `packages/client/src/api/client.ts` | 统一请求工具（含 Profile Header 注入） |
| **前端 Store** | `packages/client/src/stores/hermes/app.ts` | 全局模型选择状态（`loadModels`, `switchModel`） |
| **前端 Store** | `packages/client/src/stores/hermes/models.ts` | Provider 管理状态（CRUD） |
| **前端组件** | `packages/client/src/components/layout/ModelSelector.vue` | 侧边栏全局模型选择器 |
| **前端组件** | `packages/client/src/components/hermes/models/ProvidersPanel.vue` | Provider 管理面板 |
| **前端组件** | `packages/client/src/components/hermes/models/ProviderCard.vue` | 单个 Provider 卡片 |
| **前端组件** | `packages/client/src/components/hermes/models/ProviderFormModal.vue` | 添加 Provider 表单 |
| **后端路由** | `packages/server/src/routes/hermes/models.ts` | 模型 API 路由 |
| **后端路由** | `packages/server/src/routes/hermes/config.ts` | 配置 API 路由 |
| **后端控制器** | `packages/server/src/controllers/hermes/models.ts` | 模型发现与配置控制器 |
| **后端控制器** | `packages/server/src/controllers/hermes/config.ts` | 配置读写控制器 |
| **后端服务** | `packages/server/src/services/config-helpers.ts` | YAML 配置读写、Provider 模型拉取 |
| **共享代码** | `packages/server/src/shared/providers.ts` | Provider 预设注册表（25+ Provider） |

---

## 三、Profile 切换功能分析

### 3.1 Profile 数据结构与存储

#### Profile 存储位置

```
~/.hermes/
├── active_profile              # 文本文件，内容为当前激活的 profile 名称
├── config.yaml                 # default profile 的配置
├── .env                        # default profile 的环境变量
├── auth.json                   # 凭证池
└── profiles/
    ├── my-work/
    │   ├── config.yaml         # 独立配置
    │   ├── .env                # 独立环境变量
    │   └── skills/             # 独立技能目录
    └── my-personal/
        ├── config.yaml
        ├── .env
        └── skills/
```

#### Profile 数据结构

**前端 HermesProfile**:
```typescript
// packages/client/src/api/hermes/profiles.ts
export interface HermesProfile {
  name: string     // Profile 名称
  active: boolean  // 是否为当前激活的 Profile
  model: string    // 当前使用的模型
  gateway: string  // Gateway 状态/端口
  alias: string    // 别名
}
```

**前端 HermesProfileDetail**:
```typescript
export interface HermesProfileDetail {
  name: string        // Profile 名称
  path: string        // 文件系统路径
  model: string       // 当前模型
  provider: string    // 当前 Provider
  gateway: string     // Gateway 信息
  skills: number      // 技能数量
  hasEnv: boolean     // 是否有 .env 文件
  hasSoulMd: boolean  // 是否有 soul.md 人格文件
}
```

**后端激活机制**:
```typescript
// packages/server/src/services/hermes/hermes-profile.ts
export function getActiveProfileDir(): string {
  // 读取 ~/.hermes/active_profile 文件
  const activeFile = join(HERMES_BASE, 'active_profile')
  const name = readFileSync(activeFile, 'utf-8').trim()
  // default → ~/.hermes/
  // other   → ~/.hermes/profiles/{name}/
  if (name && name !== 'default') {
    const dir = join(HERMES_BASE, 'profiles', name)
    if (existsSync(dir)) return dir
  }
  return HERMES_BASE
}
```

### 3.2 Profile CRUD 操作

#### API 端点

| 方法 | 端点 | 功能 |
|------|------|------|
| `GET` | `/api/hermes/profiles` | 列出所有 Profile |
| `POST` | `/api/hermes/profiles` | 创建 Profile（支持 `--clone`） |
| `GET` | `/api/hermes/profiles/:name` | 获取 Profile 详情 |
| `DELETE` | `/api/hermes/profiles/:name` | 删除 Profile |
| `POST` | `/api/hermes/profiles/:name/rename` | 重命名 Profile |
| `PUT` | `/api/hermes/profiles/active` | 切换激活 Profile |
| `POST` | `/api/hermes/profiles/:name/export` | 导出为 `.tar.gz` |
| `POST` | `/api/hermes/profiles/import` | 从 `.tar.gz` 导入 |

#### 创建 Profile

```typescript
// 后端 controller
async function create(ctx) {
  const { name, clone } = ctx.request.body
  // 1. 调用 Hermes CLI
  await hermesCli.createProfile(name, clone)

  // 2. 如果 clone=true，执行智能清理
  if (clone) {
    // 删除 .env 中的独占平台凭据（避免 bot token 冲突）
    // 禁用 config.yaml 中对应的平台节点
    const cleanup = smartCloneCleanup(name)
  }

  // 3. 自动启动新 Profile 的 Gateway
  const mgr = getGatewayManagerInstance()
  await mgr.start(name)
}
```

#### 克隆时的安全清理

克隆 Profile 时，系统会自动清理独占性凭据，防止多个 Profile 共享同一个 bot token：

```typescript
// 返回清理结果
{
  strippedCredentials: ['TELEGRAM_BOT_TOKEN'],   // 被清理的 .env 凭据
  disabledPlatforms: ['telegram'],                 // 被禁用的平台
  strippedConfigCredentials: ['platforms.telegram.token']  // 被清理的 config 凭据
}
```

#### 导入导出

- **导出**: 调用 `hermes profile export {name}` 生成 `.tar.gz` 归档
- **导入**: 接收 `multipart/form-data` 上传的归档文件，调用 `hermes profile import {path}`

### 3.3 Profile 切换实现

#### 前端切换流程

```
用户点击 ProfileCard 上的 "Switch To" 按钮
    ↓
handleSwitch() → profilesStore.switchProfile(name)
    ↓
PUT /api/hermes/profiles/active  { name: "my-work" }
    ↓
后端 switchProfile() 控制器
    ↓
window.location.reload()  ← 前端硬刷新
```

**文件**: `packages/client/src/components/hermes/profiles/ProfileCard.vue`
```typescript
async function handleSwitch() {
  switching.value = true
  try {
    const ok = await profilesStore.switchProfile(props.profile.name)
    if (ok) {
      window.location.reload()  // 切换成功后刷新整个页面
    } else {
      message.error(t('profiles.switchFailed'))
    }
  } finally {
    switching.value = false
  }
}
```

#### 后端切换逻辑

**文件**: `packages/server/src/controllers/hermes/profiles.ts`

```typescript
export async function switchProfile(ctx) {
  const { name } = ctx.request.body

  // 1. 调用 Hermes CLI 切换 Profile
  await hermesCli.useProfile(name)

  // 2. 等待 1 秒，确保文件系统变更完成
  await new Promise(r => setTimeout(r, 1000))

  // 3. 通知 Gateway Manager 切换 Profile
  const mgr = getGatewayManagerInstance()
  if (mgr) { mgr.setActiveProfile(name) }

  // 4. 确保 config.yaml 和 .env 存在
  const detail = await hermesCli.getProfile(name)
  if (!existsSync(join(detail.path, 'config.yaml'))) {
    await hermesCli.setupReset()
  }
  const profileEnv = join(detail.path, '.env')
  if (!existsSync(profileEnv)) {
    writeFileSync(profileEnv, '# Hermes Agent Environment Configuration\n', 'utf-8')
  }

  // 5. 处理待删除的会话
  const drainResult = await SessionDeleter.getInstance().drain(name)
  SessionDeleter.getInstance().switchProfile(name)
}
```

#### 前端 Store 状态管理

**文件**: `packages/client/src/stores/hermes/profiles.ts`

```typescript
const ACTIVE_PROFILE_STORAGE_KEY = 'hermes_active_profile_name'

export const useProfilesStore = defineStore('profiles', () => {
  // 初始化时同步读 localStorage，确保其他 store 启动时能拿到
  const activeProfileName = ref<string | null>(
    localStorage.getItem(ACTIVE_PROFILE_STORAGE_KEY)
  )
  const activeProfile = ref<HermesProfile | null>(null)

  async function fetchProfiles() {
    profiles.value = await profilesApi.fetchProfiles()
    activeProfile.value = profiles.value.find(p => p.active) ?? null
    // 同步到 localStorage
    if (activeProfile.value) {
      activeProfileName.value = activeProfile.value.name
      localStorage.setItem(ACTIVE_PROFILE_STORAGE_KEY, activeProfile.value.name)
    }
  }

  async function switchProfile(name: string) {
    switching.value = true
    try {
      const ok = await profilesApi.switchProfile(name)
      if (ok) await fetchProfiles()
      return ok
    } finally {
      switching.value = false
    }
  }
})
```

### 3.4 切换后对 Session/模型配置/Memory 的影响

#### Session 影响

切换 Profile 后，`window.location.reload()` 触发页面完全刷新，所有前端状态重置：

1. **Session 列表清空**: Chat Store 的 `sessions` 和 `activeSessionId` 重置
2. **Session 数据重新加载**: 刷新后 `AppStore.loadModels()` 和 `ChatStore.loadSessions()` 重新获取当前 Profile 下的数据
3. **Session 缓存隔离**: localStorage 中的活跃 session key 包含 profile name

```typescript
// chat.ts 中的缓存 key 包含 profile name
function storageKey(): string {
  return STORAGE_KEY_PREFIX + getProfileName()
}
// 例如: "hermes_active_session_my-work"

function inFlightKey(sid: string): string {
  return `hermes_in_flight_v1_${getProfileName()}_${sid}`
}
```

#### 模型配置影响

每个 Profile 有独立的 `config.yaml`，模型配置完全隔离：

- Profile A 使用 `claude-sonnet-4-6` (anthropic)
- Profile B 使用 `glm-5` (zai)

切换 Profile 后，`AppStore.loadModels()` 重新读取新 Profile 的配置和可用模型列表。

#### Memory 影响

每个 Profile 有独立的文件系统目录，Memory（记忆）存储在各自目录下：
- `~/.hermes/profiles/{name}/memory/` 或 `~/.hermes/memory/`
- 切换 Profile 后，Memory 页面会显示当前 Profile 的记忆条目

#### Gateway 影响

- **多 Gateway 管理**: 每个 Profile 可以有独立的 Gateway 进程
- **自动端口冲突解决**: Gateway Manager 在启动时自动处理端口冲突
- **切换时 Gateway 状态**: 切换 Profile 后通知 Gateway Manager 更新活跃 Profile

### 3.5 Profile 之间隔离机制

#### 文件系统级隔离

```
~/.hermes/
├── active_profile           # 全局：当前活跃 Profile 指针
├── auth.json                # 全局：共享凭证池
├── config.yaml              # default Profile 专属
├── .env                     # default Profile 专属
├── sessions/                # default Profile 专属
├── memory/                  # default Profile 专属
├── skills/                  # default Profile 专属
└── profiles/
    └── {name}/
        ├── config.yaml      # 独立配置
        ├── .env             # 独立环境变量
        ├── sessions/        # 独立会话
        ├── memory/          # 独立记忆
        └── skills/          # 独立技能
```

#### 凭证共享机制

`auth.json`（`~/.hermes/auth.json`）是 **全局共享** 的凭证池，所有 Profile 共用。这意味着：
- 一个 Profile 添加的 API Key 对所有 Profile 可用
- OAuth token（如 Copilot）同样全局共享

#### 前端请求中的 Profile 标识

```typescript
// packages/client/src/api/client.ts
export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  // ...
  // 注入 X-Hermes-Profile Header
  const profileName = localStorage.getItem('hermes_active_profile_name')
  if (profileName && profileName !== 'default') {
    headers['X-Hermes-Profile'] = profileName
  }
  // ...
}
```

后端通过读取 `~/.hermes/active_profile` 文件判断当前活跃 Profile，确保读写正确的目录。

#### 克隆时的凭据隔离

为避免多 Profile 共享同一个 bot token（导致 Telegram/Discord 消息路由冲突），克隆时执行智能清理：

```typescript
// smartCloneCleanup() 会：
// 1. 删除 .env 中的独占平台凭据（Weixin/Telegram/Slack 等 bot token）
// 2. 禁用 config.yaml 中对应的平台节点
// 3. 清理 config.yaml 中的内嵌凭据字段
```

### 3.6 相关文件清单

| 层级 | 文件路径 | 职责 |
|------|----------|------|
| **前端 API** | `packages/client/src/api/hermes/profiles.ts` | Profile HTTP 请求封装 |
| **前端 Store** | `packages/client/src/stores/hermes/profiles.ts` | Profile 状态管理 |
| **前端 Store** | `packages/client/src/stores/hermes/app.ts` | 全局状态（含 Profile 感知的模型加载） |
| **前端 Store** | `packages/client/src/stores/hermes/chat.ts` | 会话状态（Profile 隔离的缓存 key） |
| **前端组件** | `packages/client/src/components/hermes/profiles/ProfilesPanel.vue` | Profile 列表面板 |
| **前端组件** | `packages/client/src/components/hermes/profiles/ProfileCard.vue` | Profile 卡片（切换/删除/导出） |
| **前端组件** | `packages/client/src/components/hermes/profiles/ProfileCreateModal.vue` | 创建 Profile 弹窗 |
| **前端组件** | `packages/client/src/components/hermes/profiles/ProfileRenameModal.vue` | 重命名弹窗 |
| **前端组件** | `packages/client/src/components/hermes/profiles/ProfileImportModal.vue` | 导入弹窗 |
| **前端视图** | `packages/client/src/views/hermes/ProfilesView.vue` | Profile 管理页面 |
| **后端路由** | `packages/server/src/routes/hermes/profiles.ts` | Profile API 路由定义 |
| **后端控制器** | `packages/server/src/controllers/hermes/profiles.ts` | Profile 控制器（含克隆清理） |
| **后端服务** | `packages/server/src/services/hermes/hermes-cli.ts` | Hermes CLI 封装（Profile 子命令） |
| **后端服务** | `packages/server/src/services/hermes/hermes-profile.ts` | Profile 路径解析工具 |
| **后端服务** | `packages/server/src/services/hermes/profile-credentials.ts` | 克隆凭据清理逻辑 |

---

## 四、数据流总览图

### 模型管理数据流

```
┌─────────────────────────────────────────────────────────────────┐
│                        前端 (Vue 3)                              │
│                                                                  │
│  ModelSelector.vue ──→ AppStore.switchModel()                   │
│       │                    │                                      │
│       │                    ├── updateDefaultModel() [API]         │
│       │                    └── 更新 selectedModel/selectedProvider│
│       │                                                           │
│  ProvidersPanel.vue ──→ ModelsStore.addProvider()                │
│       │                    │                                      │
│       │                    ├── addCustomProvider() [API]          │
│       │                    └── fetchProviders() [API]             │
│                                                                  │
│  AppStore.loadModels() ──→ fetchAvailableModels() [API]          │
│                              │                                    │
└──────────────────────────────┼────────────────────────────────────┘
                               │  HTTP
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                     BFF Server (Koa)                             │
│                                                                  │
│  GET /api/hermes/available-models                               │
│    └── models.controller.getAvailable()                          │
│         ├── 读取 config.yaml (当前模型配置)                       │
│         ├── 读取 .env (API Keys)                                 │
│         ├── 读取 auth.json (OAuth tokens)                        │
│         ├── 查询 PROVIDER_PRESETS (静态模型目录)                  │
│         ├── fetchProviderModels() (动态拉取 /v1/models)           │
│         ├── 处理 custom_providers                                │
│         └── 返回 AvailableModelsResponse                         │
│                                                                  │
│  PUT /api/hermes/config/model                                   │
│    └── models.controller.setConfigModel()                        │
│         ├── 读取 config.yaml                                     │
│         ├── 修改 model.default / model.provider                  │
│         └── 写回 config.yaml                                     │
│                                                                  │
│  POST /api/hermes/config/providers                              │
│    └── 写入 config.yaml 的 custom_providers 段                   │
└─────────────────────────────────────────────────────────────────┘
```

### Profile 切换数据流

```
┌─────────────────────────────────────────────────────────────────┐
│                        前端 (Vue 3)                              │
│                                                                  │
│  ProfileCard.handleSwitch()                                      │
│    └── profilesStore.switchProfile(name)                         │
│         └── PUT /api/hermes/profiles/active { name }             │
│              │                                                   │
│              ├── 成功 ──→ fetchProfiles() 更新本地状态            │
│              │         ──→ window.location.reload() ← 硬刷新     │
│              │                                                   │
│              └── 失败 ──→ message.error()                       │
│                                                                  │
│  页面刷新后:                                                      │
│    ├── profilesStore.activeProfileName (从 localStorage 读取)    │
│    ├── AppStore.loadModels() → 读取新 Profile 的模型列表          │
│    └── ChatStore.loadSessions() → 读取新 Profile 的会话列表       │
└─────────────────────────────────────────────────────────────────┘
                               │  HTTP
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                     BFF Server (Koa)                             │
│                                                                  │
│  PUT /api/hermes/profiles/active                                │
│    └── profiles.controller.switchProfile()                       │
│         ├── hermesCli.useProfile(name)                           │
│         │   └── hermes profile use {name}                        │
│         │       └── 更新 ~/.hermes/active_profile 文件           │
│         ├── setTimeout(1000) 等待文件系统稳定                     │
│         ├── gatewayManager.setActiveProfile(name)                │
│         ├── 确保 config.yaml 和 .env 存在                        │
│         └── SessionDeleter.drain(name) 处理待删会话              │
└─────────────────────────────────────────────────────────────────┘
                               │  child_process
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Hermes CLI                                   │
│                                                                  │
│  hermes profile use {name}                                       │
│  hermes profile create {name} [--clone]                          │
│  hermes profile delete {name} [--yes]                            │
│  hermes profile rename {old} {new}                               │
│  hermes profile export {name} [--output path]                    │
│  hermes profile import {archive} [--name name]                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 五、对我们项目的参考建议

### 模型管理

| 特性 | Ekko 实现 | 建议参考 |
|------|-----------|----------|
| Provider 注册表 | `providers.ts` 前后端共享的常量数组 | ✅ 可直接借鉴，统一 Provider 定义 |
| 模型发现 | 混合模式：静态目录 + 动态拉取 `/v1/models` | ✅ 动态拉取更灵活 |
| 模型切换 | 写 config.yaml，不重启 | ✅ 热切换体验好 |
| 自定义 Provider | `custom:` 前缀区分 | ✅ 简洁的命名约定 |
| temperature/maxTokens | 仅后端配置，前端不暴露 | ⚠️ 建议我们暴露部分参数 |

### Profile 切换

| 特性 | Ekko 实现 | 建议参考 |
|------|-----------|----------|
| 文件系统隔离 | `~/.hermes/profiles/{name}/` | ✅ 清晰的目录结构 |
| 凭证共享 | `auth.json` 全局共享 | ✅ 减少重复配置 |
| 切换方式 | `window.location.reload()` 硬刷新 | ⚠️ 体验可优化为软切换 |
| 克隆清理 | 自动清理独占 bot token | ✅ 防冲突的好设计 |
| 前端缓存隔离 | localStorage key 包含 profile name | ✅ 简单有效 |
| Gateway 管理 | 多 Gateway + 自动端口分配 | ✅ 按需参考 |

### 设计模式参考

1. **BFF 模式**: Ekko 使用 Koa 作为 BFF 层封装 Hermes CLI，我们对 Python 后端可以直接调用 Python API
2. **前后端共享类型**: `providers.ts` 被 server 和 client 共享（通过 Vite alias），值得借鉴
3. **Profile Header 注入**: 所有请求自动注入 `X-Hermes-Profile` header，后端据此路由到正确目录
4. **智能克隆清理**: 避免多 Profile 共享 bot token 导致的消息冲突
