# hermes-py-webui

**[Hermes Agent](https://github.com/NousResearch/hermes-agent) 的 WebUI** — FastAPI 后端 + Vue 3 前端，直接 import AIAgent，不走 Gateway。

> 本项目是 Hermes Agent 的附属 Web 管理界面，**不能独立运行**。使用前需先安装 Hermes Agent。

**为什么做这个项目？**

| | Gateway 模式 (hermes-web-ui) | **本项目** |
|---|---|---|
| 架构 | Node.js → HTTP → Gateway → AIAgent | **FastAPI → import → AIAgent** |
| 延迟 | 额外经过 Gateway 的 HTTP 转发 | **直接函数调用，零开销** |
| 工作区 | 全局共享，所有会话同一目录 | **按会话绑定独立工作区** |
| 运行时 | 需要 Node.js + Python | **仅 Python**（前端预构建） |
| 流式通信 | Socket.IO | **SSE — 更轻量，无状态** |

一句话：本项目用 Gateway 的解耦换取了 **对 AIAgent 内部的直接访问能力** — 最核心的是为每个会话绑定独立的工作区目录。如果你需要多节点或远程部署，用 Gateway；如果你在本地或单机使用，追求最大控制力，用这个。

中文 | [**English**](README.md)

## 截图预览

<table>
<tr>
<td><img src="docs/images/chat.png" width="400"></td>
<td><img src="docs/images/jobs.png" width="400"></td>
</tr>
<tr>
<td align="center">💬 聊天对话</td>
<td align="center">🕐 定时任务</td>
</tr>
<tr>
<td><img src="docs/images/memory.png" width="400"></td>
<td><img src="docs/images/models.png" width="400"></td>
</tr>
<tr>
<td align="center">🧠 技能与记忆</td>
<td align="center">🤖 模型与 Provider</td>
</tr>
<tr>
<td><img src="docs/images/channels.png" width="400"></td>
<td><img src="docs/images/skills.png" width="400"></td>
</tr>
<tr>
<td align="center">📡 频道管理</td>
<td align="center">⚡ 技能查看</td>
</tr>
<tr>
<td><img src="docs/images/usage.png" width="400"></td>
<td><img src="docs/images/user-management.png" width="400"></td>
</tr>
<tr>
<td align="center">📊 用量统计</td>
<td align="center">👤 用户管理</td>
</tr>
</table>

## 📱 移动端访问

响应式设计，开箱即用 — 在任何移动浏览器中访问完整的 Hermes 工作区，无需安装 App。

<table>
<tr>
<td><img src="docs/images/mobile/登录.PNG" width="240"></td>
<td><img src="docs/images/mobile/页面导航.PNG" width="240"></td>
<td><img src="docs/images/mobile/会话.PNG" width="240"></td>
</tr>
<tr>
<td align="center">🔐 登录</td>
<td align="center">🧭 导航</td>
<td align="center">💬 会话</td>
</tr>
<tr>
<td><img src="docs/images/mobile/模型.PNG" width="240"></td>
<td><img src="docs/images/mobile/定时任务.PNG" width="240"></td>
<td><img src="docs/images/mobile/统计.PNG" width="240"></td>
</tr>
<tr>
<td align="center">🤖 模型</td>
<td align="center">🕐 定时任务</td>
<td align="center">📊 统计</td>
</tr>
<tr>
<td colspan="3" align="center"><img src="docs/images/mobile/设置.PNG" width="360"></td>
</tr>
<tr>
<td colspan="3" align="center">⚙️ 设置</td>
</tr>
</table>

## 功能概览

Hermes Agent 的完整 Web 管理界面，运行在 `localhost:9898`：

### ✨ 特色亮点

- **自定义用户头像** — 上传并设置个人头像，在侧边栏和聊天界面中显示
- **默认模型快捷设置** — 在模型页面直接将常用模型设为默认，无需手动编辑配置文件
- **完善的中文翻译** — 支持中/英/日/韩/法/德/西/葡共 8 种语言，侧边栏一键切换
- **深色/浅色主题** — 跟随系统主题，支持手动切换
- **侧边栏分组折叠** — 导航分组可展开/收起，保持界面整洁
- **多配置隔离** — 每个代理组的配置、技能、记忆和工作区完全独立

### 💬 聊天对话

- SSE 实时流式输出（文本 + 推理 + 工具调用事件）
- 会话压缩分段合并展示，支持按需加载历史记录
- 会话可选择模型与工作区
- 会话列表：浏览、搜索、重命名、删除历史会话
- 会话数据直读 `~/.hermes/state.db`，与 CLI 会话互通

### 📊 用量统计

- 统计卡片：总会话/近期会话数、消息数、活跃天数、缓存命中率、平均会话 Token 数
- 来源分布：按平台（飞书、Telegram、Discord 等）统计会话数
- 模型分布：按模型统计 Token 使用占比
- 每日趋势：过去 30 天的 Token、缓存、会话、费用明细表
- 活跃时段：24 小时活跃分布热力图
- 热门会话：按输入 Token 数 Top 10 会话排行

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

**系统级控制：**

- **🔐 访问密码** — 为 Hermes 实例启用登录页，防止未授权访问
- **🚀 开机自启** — 系统启动时自动运行 WebUI（macOS launchd / systemd）
- **🏠 内网访问** — 允许同一局域网内的设备通过 IP 地址访问
- **🌍 远程访问** — 内置 Tailscale 配置教程，无需端口转发即可安全地从任何网络访问

**应用级设置：**

- **账号设置**：WebUI 登录密码、会话过期时间
- **平台配置**：飞书、Telegram、Discord 等连接平台的管理，微信扫码登录
- **Agent 配置**：人格(Personality)、推理模式(Reasoning)、紧凑模式、完成提示音
- **记忆配置**：记忆维护策略、自动晋升阈值
- **显示配置**：流式输出开关、费用显示、繁忙输入模式、主题与语言
- **工作区配置**：默认工作区路径、AGENTS.md 关联

### 🔧 技能与记忆

- Skill 列表浏览：按分类查看已安装技能
- Skill 详情：查看 SKILL.md 完整内容、关联文件
- Memory 查看：MEMORY.md / USER.md 实时读取

### 📁 文件管理

- 浏览工作区文件树
- 在线查看和编辑文件
- 文件上传/下载

### 🕐 定时任务（Cron）

- 查看、创建、编辑、暂停、删除定时任务
- Cron 执行历史记录

### 🖥️ 终端

- WebSocket + PTY 的浏览器终端
- 实时命令执行，与本地 Shell 等效

### 🌐 Gateway 监控

- 查看各 Profile 下 Gateway 运行状态
- 按网关独立设置会话重置和 PII 脱敏

### 📋 日志

- 实时日志查看与搜索

## 前置条件

| 依赖 | 版本 | 说明 |
|------|------|------|
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | 最新 | 必须先安装，本项目通过 `from run_agent import AIAgent` 直接调用 |
| Python | 3.11+ | 后端运行时 |

确保 Hermes Agent 已安装到 `~/.hermes/hermes-agent/`（含 `run_agent.py`），且已在 Hermes CLI 中完成初始化（至少配置了一个 Model Provider）。

## 快速开始

```bash
# 1. 克隆到 ~/.hermes/
git clone https://github.com/zxd-666/hermes-py-webui.git ~/.hermes/hermes-py-webui
cd ~/.hermes/hermes-py-webui

# 2. 创建虚拟环境
python -m venv .venv
source .venv/bin/activate

# 3. 安装依赖
pip install -r requirements.txt

# 4. 启动
python -m backend.main
```

打开 http://127.0.0.1:9898

> 前端已预构建（`backend/static/`），除非需要修改 UI 源码，否则无需 Node.js。

### 一键安装（通过 Hermes Agent）

如果你已经在运行 Hermes Agent，直接发送以下提示即可自动完成安装和配置：

```
帮我安装 hermes-py-webui，项目地址：https://github.com/zxd-666/hermes-py-webui

安装到 ~/.hermes/hermes-py-webui，创建虚拟环境，安装依赖，最后启动服务。启动成功后帮我配置开机自启。
```

### macOS 开机自启（launchd）

```bash
# 将 /Users/edy 替换为你的用户目录
cat > ~/Library/LaunchAgents/com.hermes.py-webui.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.hermes.py-webui</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/edy/.hermes/hermes-py-webui/.venv/bin/python3</string>
        <string>-m</string>
        <string>uvicorn</string>
        <string>backend.main:app</string>
        <string>--host</string>
        <string>0.0.0.0</string>
        <string>--port</string>
        <string>9898</string>
    </array>
    <key>WorkingDirectory</key>
    <string>/Users/edy/.hermes/hermes-py-webui</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/Users/edy/.hermes/logs/hermes-py-webui.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/edy/.hermes/logs/hermes-py-webui.err.log</string>
</dict>
</plist>
EOF
launchctl load ~/Library/LaunchAgents/com.hermes.py-webui.plist
```

### 开发模式

```bash
# 终端 1：后端（热重载）
python -m uvicorn backend.main:app --host 127.0.0.1 --port 9898 --reload

# 终端 2：前端（Vite dev server）
cd frontend && npm run dev
```

## 架构

```
前端 (Vue 3 + Naive UI)  ←── SSE ──→  FastAPI 后端  ←── import ──→  AIAgent
       │                                        │
    Port 9898                              state.db (SQLite)
```

- **后端**：FastAPI，端口 9898，直接 `from run_agent import AIAgent`
- **前端**：Vue 3 + Pinia + Naive UI
- **通信**：POST `/api/chat/start` → GET `/api/chat/stream/{run_id}` (SSE)
- **终端**：WebSocket + ptyprocess
- **数据库**：直读 `~/.hermes/state.db`，与 CLI 会话互通

## 项目结构

```
hermes-py-webui/
├── backend/
│   ├── main.py              # FastAPI app，路由注册，启动预热
│   ├── config.py            # 常量：端口、路径
│   ├── db.py                # state.db 读写
│   ├── streaming.py         # SSE 引擎：AIAgent 后台线程 + 事件队列
│   └── routes/
│       ├── chat.py          # 聊天：start + SSE stream
│       ├── sessions.py      # 会话管理
│       ├── auth.py          # 认证：密码 + Bearer token
│       ├── terminal.py      # WebSocket 终端
│       ├── config_route.py  # config.yaml + Provider/模型管理
│       ├── skills.py        # Skills + Memory
│       ├── files.py         # 文件管理
│       ├── jobs.py          # Cron Job
│       ├── cron_history.py  # Cron 执行历史
│       ├── logs.py          # 日志
│       ├── profiles.py      # Profile 管理
│       ├── gateways.py      # Gateway 监控
│       ├── channels.py      # Channel 目录
│       ├── workspaces.py    # 工作区预设
│       ├── weixin.py        # 微信扫码登录
│       └── system.py        # 健康检查
│   └── static/              # 前端构建产物
├── frontend/                # Vue 3 源码
│   ├── src/
│   │   ├── api/hermes/      # API 客户端
│   │   ├── views/hermes/    # 页面视图
│   │   ├── components/      # 组件
│   │   ├── stores/hermes/   # Pinia stores
│   │   └── i18n/            # 多语言（中/英/日/韩/法/德/西/葡）
│   └── vite.config.ts
├── requirements.txt
├── LICENSE
├── README.md
└── README_zh.md
```

## API 概览

| 模块 | 前缀 | 功能 |
|------|------|------|
| Chat | `/api/chat` | 开始对话 + SSE 流 |
| Sessions | `/api/hermes/sessions` | 会话管理 |
| Config | `/api/hermes/config` | config.yaml 读写 |
| Models | `/api/hermes/models` | Provider/模型管理 |
| Credentials | `/api/hermes/credentials` | API Key 管理 |
| Skills | `/api/hermes/skills` | Skill 列表/详情 |
| Memory | `/api/hermes/memory` | MEMORY.md / USER.md |
| Files | `/api/hermes/files` | 文件浏览/编辑 |
| Jobs | `/api/hermes/jobs` | Cron 任务 |
| Cron History | `/api/hermes/cron-history` | 执行历史 |
| Logs | `/api/hermes/logs` | 日志 |
| Profiles | `/api/hermes/profiles` | Profile 管理 |
| Gateways | `/api/hermes/gateways` | Gateway 监控 |
| Channels | `/api/hermes/channels` | Channel 目录 |
| Workspaces | `/api/hermes/workspaces` | 工作区预设 |
| Weixin | `/api/hermes/weixin` | 微信扫码登录 |
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

## 致谢

本项目借鉴并受益于以下开源项目：

- [hermes-webui](https://github.com/nesquena/hermes-webui) — **nesquena** 开发的原始 Hermes WebUI，为本项目奠定了基础
- [hermes-web-ui](https://github.com/EKKOLearnAI/hermes-web-ui) — **EKKOLearnAI** 开发的 Hermes WebUI，其前端组件和设计模式在开发过程中被参考

感谢两位作者对 Hermes 生态的开源贡献。

## License

[MIT](LICENSE)
