# hermes-py-webui

FastAPI 后端 + Vue 3 前端的 Hermes Agent WebUI。直接 import AIAgent，不走 Gateway。

核心价值：**会话可绑定工作区** — AIAgent 实例化时传 workdir 生效，Gateway 代理模式做不到。

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
│   ├── main.py            # FastAPI app，路由注册，启动预热
│   ├── config.py          # 常量：端口、路径
│   ├── db.py              # state.db 读写（会话/消息/搜索/统计）
│   ├── streaming.py       # SSE 引擎：AIAgent 后台线程 + 事件队列
│   ├── routes/
│   │   ├── chat.py        # 聊天：start + SSE stream
│   │   ├── sessions.py    # 会话：列表/详情/删除/重命名/搜索
│   │   ├── auth.py        # 认证：密码 + Bearer token
│   │   ├── terminal.py    # WebSocket 终端（PTY）
│   │   ├── config_route.py# config.yaml 读写
│   │   ├── skills.py      # Skills + Memory 查看
│   │   ├── files.py       # 文件管理
│   │   ├── jobs.py        # Cron Job CRUD
│   │   ├── logs.py        # 日志查看
│   │   ├── profiles.py    # Profile 管理
│   │   ├── gateways.py    # Gateway 状态
│   │   ├── cron_history.py# Cron 历史记录
│   │   ├── auth_providers.py # OAuth stubs（Codex/Copilot/Nous）
│   │   ├── weixin.py      # 微信 QR 登录 stub
│   │   └── system.py      # 健康检查 / 状态
│   └── static/            # 前端构建产物
├── frontend/              # Vue 3 前端源码
│   ├── src/
│   │   ├── api/hermes/    # API 客户端（SSE 聊天、会话等）
│   │   ├── views/hermes/  # 页面视图
│   │   ├── components/    # 组件
│   │   ├── stores/hermes/ # Pinia stores
│   │   └── i18n/          # 多语言
│   ├── vite.config.ts     # 构建输出到 ../backend/static
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
| Skills | `/api/hermes/skills` | Skill 列表/详情 |
| Memory | `/api/hermes/memory` | MEMORY.md / USER.md |
| Files | `/api/hermes/files` | 文件浏览/编辑 |
| Jobs | `/api/hermes/jobs` | Cron 任务 |
| Logs | `/api/hermes/logs` | 日志查看 |
| Profiles | `/api/hermes/profiles` | Profile 管理 |
| Gateways | `/api/hermes/gateways` | Gateway 监控 |
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
- 无 GitHub remote，本地 git 管理
- Auth 默认关闭（无密码时），设置密码后所有 `/api/` 路由需 Bearer token
- 与 hermes-web-ui（8648）前端同源但 API 协议不同（SSE vs Socket.IO）
