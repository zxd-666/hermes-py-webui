# hermes-py-webui

Hermes Agent 的 Python WebUI — FastAPI 后端 + Vue 3 前端，直接 import AIAgent，不走 Gateway。

> 核心价值：**会话可绑定工作区** — AIAgent 实例化时传 workdir 生效，Gateway 代理模式做不到。

## 功能概览

Hermes Agent 的完整 Web 管理界面，运行在 `localhost:9898`，提供以下功能模块：

### 💬 聊天对话

- SSE 实时流式输出（文本 + 推理 + 工具调用事件）
- 支持单聊和群聊模式
- 会话列表：浏览、搜索、重命名、删除历史会话
- 会话数据直读 `~/.hermes/state.db`，与 CLI 会话互通

### 📊 用量统计

- 统计卡片：总会话数、总消息数、活跃天数
- 来源分布：按平台（飞书、Telegram、Discord 等）统计会话数
- 模型分布：按模型统计使用占比
- 每日趋势：过去 30 天的会话活跃度折线图
- 热门会话：消息数 Top 10 会话排行

### 🤖 模型与 Provider

- Provider 管理：添加、编辑、删除自定义模型供应商
- 预设 Provider 快速配置（OpenAI、Anthropic、Google 等）
- API Key 管理：查看、更新凭证（脱敏显示）
- Copilot / Codex / Nous 等 OAuth Provider 的 Token 登录

### 👤 Profiles（代理组）

- 创建、重命名、导入、删除 Profile
- 按 Profile 隔离配置：config.yaml、Skills、Memory、工作区
- Profile 卡片展示关键配置概览

### ⚙️ 设置

- **账号设置**：WebUI 登录密码、会话过期时间
- **平台配置**：飞书、Telegram、Discord 等连接平台的管理（Channels 视图展示活跃频道数和平台标签）
- **模型配置**：默认模型选择、可用模型列表
- **Agent 配置**：人格(Personality)、推理模式(Reasoning)
- **记忆配置**：记忆维护策略、自动晋升阈值
- **会话配置**：上下文窗口、压缩策略
- **工作区配置**：默认工作区路径、AGENTS.md 关联
- **隐私配置**：数据保留策略
- **显示配置**：界面语言、主题

### 🔧 技能与记忆

- Skill 列表浏览：按分类查看已安装技能
- Skill 详情：查看 SKILL.md 完整内容、关联文件
- Memory 查看：MEMORY.md / USER.md 实时读取
- Session Search：跨会话搜索历史对话

### 📁 文件管理

- 浏览工作区文件树
- 在线查看和编辑文件
- 文件上传/下载

### 🕐 定时任务（Cron）

- 查看、创建、编辑、暂停、删除定时任务
- Cron 执行历史记录
- 任务状态实时监控

### 🖥️ 终端

- WebSocket + PTY 的浏览器终端
- 实时命令执行，与本地 Shell 等效
- 自动重连机制，页面切换后恢复

### 🌐 Gateway 监控

- 查看各 Profile 下 Gateway 运行状态
- 会话重置策略配置（空闲超时、定时重置）

### 📋 日志

- 实时日志查看与搜索

## 架构

```
前端 (Vue 3 + Naive UI)  ←── SSE ──→  FastAPI 后端  ←── import ──→  AIAgent
       │                                        │
    Port 9898                              state.db (SQLite)
```

- **后端**：FastAPI，端口 9898，直接 `from run_agent import AIAgent`
- **前端**：Vue 3 + Pinia + Naive UI，复用 hermes-web-ui 源码（Socket.IO → SSE）
- **通信**：POST `/api/chat/start` → GET `/api/chat/stream/{run_id}` (SSE)
- **终端**：WebSocket + ptyprocess（ASGI 中间件绕过 Starlette WS 路由问题）
- **数据库**：直读 `~/.hermes/state.db`，与 CLI 会话互通

## 快速开始

```bash
# 1. 创建虚拟环境（需要 Python 3.11+）
cd ~/Desktop/hermes-py-webui
uv venv .venv --python 3.11
source .venv/bin/activate

# 2. 安装后端依赖
pip install -r requirements.txt

# 3. 安装前端依赖
cd frontend
npm install

# 4. 构建前端（输出到 backend/static/）
npm run build

# 5. 启动服务
cd ..
python -m backend.main
# 或
python -m uvicorn backend.main:app --host 127.0.0.1 --port 9898
```

打开 http://127.0.0.1:9898

### 开发模式

```bash
# 终端 1：后端
python -m uvicorn backend.main:app --host 127.0.0.1 --port 9898 --reload

# 终端 2：前端（Vite 代理 /api 到后端）
cd frontend
npm run dev
```

## 前置依赖

- **Hermes Agent** 已安装（`~/.hermes/hermes-agent/`，含 `run_agent.py`）
- **Python** 3.11+
- **Node.js** 18+

## 项目结构

```
hermes-py-webui/
├── backend/
│   ├── main.py              # FastAPI app，路由注册，启动预热
│   ├── config.py            # 常量：端口、路径
│   ├── db.py                # state.db 读写（会话/消息/搜索/统计）
│   ├── streaming.py         # SSE 引擎：AIAgent 后台线程 + 事件队列
│   ├── routes/
│   │   ├── chat.py          # 聊天：start + SSE stream
│   │   ├── sessions.py      # 会话：列表/详情/删除/重命名/搜索
│   │   ├── auth.py          # 认证：密码 + Bearer token
│   │   ├── auth_providers.py # OAuth 登录（Codex/Copilot/Nous）
│   │   ├── terminal.py      # WebSocket 终端（PTY）
│   │   ├── config_route.py  # config.yaml 读写 + Provider/模型管理
│   │   ├── skills.py        # Skills + Memory 查看
│   │   ├── files.py         # 文件管理
│   │   ├── jobs.py          # Cron Job CRUD
│   │   ├── cron_history.py  # Cron 执行历史
│   │   ├── logs.py          # 日志查看
│   │   ├── profiles.py      # Profile 管理
│   │   ├── gateways.py      # Gateway 状态
│   │   ├── channels.py      # Channel 目录查看
│   │   ├── workspaces.py    # 工作区预设管理
│   │   ├── weixin.py        # 微信 QR 登录
│   │   └── system.py        # 健康检查 / 状态
│   └── static/              # 前端构建产物
├── frontend/                # Vue 3 前端源码
│   ├── src/
│   │   ├── api/hermes/      # API 客户端
│   │   ├── views/hermes/    # 页面视图（Chat/Models/Profiles/Settings 等）
│   │   ├── components/      # 组件（chat/files/jobs/models/profiles/settings/skills/usage）
│   │   ├── stores/hermes/   # Pinia stores
│   │   └── i18n/            # 多语言
│   ├── vite.config.ts       # 构建输出到 ../backend/static
│   └── package.json
├── requirements.txt
└── README.md
```

## API 概览

| 模块 | 前缀 | 功能 |
|------|------|------|
| Chat | `/api/chat` | 开始对话 + SSE 流 |
| Sessions | `/api/hermes/sessions` | 会话管理 |
| Config | `/api/hermes/config` | 读取/写入 config.yaml |
| Models | `/api/hermes/models` | Provider/模型管理 |
| Credentials | `/api/hermes/credentials` | API Key 管理 |
| Skills | `/api/hermes/skills` | Skill 列表/详情 |
| Memory | `/api/hermes/memory` | MEMORY.md / USER.md |
| Files | `/api/hermes/files` | 文件浏览/编辑 |
| Jobs | `/api/hermes/jobs` | Cron 任务 |
| Cron History | `/api/hermes/cron-history` | 执行历史 |
| Logs | `/api/hermes/logs` | 日志查看 |
| Profiles | `/api/hermes/profiles` | Profile 管理 |
| Gateways | `/api/hermes/gateways` | Gateway 监控 |
| Channels | `/api/hermes/channels` | Channel 目录 |
| Workspaces | `/api/hermes/workspaces` | 工作区预设 |
| Terminal | `/api/hermes/terminal/ws` | WebSocket 终端 |
| Auth | `/api/auth` | 登录/登出/状态 |

## SSE 事件类型

| 事件 | 说明 |
|------|------|
| `message.delta` | 文本增量 |
| `reasoning.delta` | 推理/思考增量 |
| `tool.started` | 工具调用开始 |
| `tool.completed` | 工具调用完成 |
| `tool.output` | 工具输出片段 |
| `run.completed` | 对话完成 |
| `run.failed` | 对话失败 |
| `compression.started` | 上下文压缩开始 |
| `compression.completed` | 上下文压缩完成 |
| `cancel` | 用户取消 |

## 注意事项

- 前端 build 产物在 `backend/static/`，修改前端后需 `npm run build`
- GitHub 仓库：[zxd-666/hermes-py-webui](https://github.com/zxd-666/hermes-py-webui)
- Auth 默认关闭（无密码时），设置密码后所有 `/api/` 路由需 Bearer token
- 与 hermes-web-ui（8648）前端同源但 API 协议不同（SSE vs Socket.IO）
