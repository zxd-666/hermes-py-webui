"""SSE streaming engine: runs AIAgent in background thread, yields events."""
import asyncio
import json
import os
import queue
import re
import sys
import threading
import tempfile
import time
import traceback
from pathlib import Path
from typing import Optional

# Ensure hermes-agent is importable
sys.path.insert(0, str(os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes")) + "/hermes-agent"))

from .config import AGENT_DIR

# Lazy import with pre-warm support
_AIAgent = None
_AIAgent_loading = False
_AIAgent_loaded = False
_AIAgent_ready = threading.Event()  # signaled once import completes (success or fail)


def _get_ai_agent():
    """Get AIAgent class, blocking if pre-warm is still in progress."""
    global _AIAgent, _AIAgent_loading, _AIAgent_loaded
    if _AIAgent is not None:
        return _AIAgent
    if _AIAgent_loaded:
        return None  # already tried and failed
    # If pre-warm thread is running, wait for it
    if _AIAgent_loading:
        _AIAgent_ready.wait(timeout=60)
        return _AIAgent
    # Fallback: import on demand
    _AIAgent_loading = True
    try:
        print("[9898] Importing AIAgent on demand...", flush=True)
        from run_agent import AIAgent
        _AIAgent = AIAgent
        _AIAgent_loaded = True
        print("[9898] AIAgent imported OK", flush=True)
    except ImportError as e:
        print(f"[9898] WARNING: Cannot import AIAgent: {e}", flush=True)
        _AIAgent_loaded = True  # don't retry
    finally:
        _AIAgent_loading = False
        _AIAgent_ready.set()
    return _AIAgent


def prewarm_ai_agent():
    """Start AIAgent import in background thread. Call at app startup."""
    def _do_import():
        _get_ai_agent()
    threading.Thread(target=_do_import, daemon=True, name="aiagent-prewarm").start()


# In-memory stream queues: stream_id -> queue
_streams: dict[str, queue.Queue] = {}
_streams_lock = threading.Lock()
# session_id -> stream_id mapping for resume isWorking detection
_session_stream_map: dict[str, str] = {}

_cancel_flags: dict[str, threading.Event] = {}
_agent_instances: dict[str, object] = {}
# Track run completion time for TTL cleanup
_stream_completed_at: dict[str, float] = {}
_STREAM_TTL_AFTER_DONE = 60  # seconds to keep queue alive after run completes
_STREAM_TTL_MAX = 600        # absolute max lifetime


def create_stream() -> str:
    """Create a new SSE stream, return stream_id."""
    stream_id = f"run_{int(time.time()*1000)}_{id(threading.current_thread())%10000}"
    with _streams_lock:
        _streams[stream_id] = queue.Queue(maxsize=500)
        _cancel_flags[stream_id] = threading.Event()
        _stream_completed_at[stream_id] = 0  # 0 = not yet completed
    return stream_id


def get_stream(stream_id: str) -> Optional[queue.Queue]:
    return _streams.get(stream_id)


def detach_stream_consumer(stream_id: str):
    """Mark that the SSE consumer has disconnected, but keep the queue alive
    so the agent thread can still push events (they won't be lost).
    The queue will be cleaned up after TTL expires."""
    with _streams_lock:
        if stream_id in _stream_completed_at:
            _stream_completed_at[stream_id] = time.time()  # start TTL countdown


def is_stream_alive(stream_id: str) -> bool:
    """Check if a stream exists and hasn't expired."""
    q = _streams.get(stream_id)
    if q is None:
        return False
    with _streams_lock:
        completed_at = _stream_completed_at.get(stream_id, 0)
    if completed_at > 0:
        return time.time() - completed_at < _STREAM_TTL_AFTER_DONE
    return True


def cancel_stream(stream_id: str) -> bool:
    with _streams_lock:
        if stream_id in _cancel_flags:
            _cancel_flags[stream_id].set()
            # Also interrupt the agent if possible
            agent = _agent_instances.get(stream_id)
            if agent and hasattr(agent, 'interrupt'):
                try:
                    agent.interrupt("Cancelled by user")
                except Exception:
                    pass
            return True
    return False


def cleanup_stream(stream_id: str):
    with _streams_lock:
        expired = [k for k, v in _session_stream_map.items() if v == stream_id]
        for k in expired:
            del _session_stream_map[k]
        _streams.pop(stream_id, None)
        _cancel_flags.pop(stream_id, None)
        _agent_instances.pop(stream_id, None)
        _stream_completed_at.pop(stream_id, None)


def mark_stream_completed(stream_id: str):
    """Mark the run as completed — starts the TTL countdown."""
    with _streams_lock:
        _stream_completed_at[stream_id] = time.time()


def expire_old_streams():
    """Clean up streams that have exceeded their TTL. Call periodically."""
    now = time.time()
    to_cleanup = []
    with _streams_lock:
        for sid, completed_at in list(_stream_completed_at.items()):
            if completed_at > 0 and now - completed_at > _STREAM_TTL_AFTER_DONE:
                to_cleanup.append(sid)
    for sid in to_cleanup:
        cleanup_stream(sid)


def put_event(stream_id: str, event: str, data: dict):
    """Thread-safe event push."""
    # Inject event type into data so frontend can use data.event
    data["event"] = event
    q = _streams.get(stream_id)
    if q:
        try:
            q.put_nowait((event, data))
        except queue.Full:
            pass

def register_session_stream(session_id: str, stream_id: str):
    """Register a session_id → stream_id mapping so resume can detect active runs."""
    with _streams_lock:
        _session_stream_map[session_id] = stream_id


def get_active_stream_id(session_id: str) -> str | None:
    """Return the stream_id for a session with an in-flight run, or None."""
    with _streams_lock:
        return _session_stream_map.get(session_id)


_FILE_LINK_RE = re.compile(r'\[File:\s*([^\]]+)\]\(([^)]+)\)')
_IMAGE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp', '.svg'}


def _preprocess_image_attachments(msg_text: str) -> str:
    """Download image attachments from download URLs and pre-analyze with vision.

    Frontend sends images as ``[File: name](/api/hermes/download?path=...&token=...)``.
    The agent only sees this as plain text and cannot view the image.  This function
    downloads image files to a local temp directory, runs vision_analyze to generate
    a text description, and replaces the [File:...] markers with the description +
    a local path the agent can re-examine later.
    """
    import urllib.request
    import urllib.parse
    import asyncio

    matches = _FILE_LINK_RE.findall(msg_text)
    if not matches:
        return msg_text

    cleaned_parts = []
    image_enriched = []
    for name, url in matches:
        ext = Path(name).suffix.lower()
        if ext in _IMAGE_EXTENSIONS:
            # Download to temp file
            local_path = None
            try:
                # Ensure URL is absolute (it should start with /api/hermes/download...)
                if url.startswith('/'):
                    url = f'http://127.0.0.1:9898{url}'
                local_path = Path(tempfile.mkdtemp(prefix='hermes_img_')) / name
                req = urllib.request.Request(url)
                with urllib.request.urlopen(req, timeout=15) as resp:
                    data = resp.read()
                local_path.write_bytes(data)
                print(f'[9898] Downloaded image attachment: {name} ({len(data)//1024}KB) -> {local_path}', flush=True)

                # Run vision_analyze to get a text description
                try:
                    from tools.vision_tools import vision_analyze_tool
                    loop = asyncio.new_event_loop()
                    try:
                        result_json = loop.run_until_complete(
                            vision_analyze_tool(image_url=str(local_path), user_prompt=(
                                "Describe everything visible in this image in thorough detail. "
                                "Include any text, code, data, objects, people, layout, colors, "
                                "and any other notable visual information."
                            ))
                        )
                        result = json.loads(result_json)
                        if result.get("success"):
                            desc = result.get("analysis", "")
                            image_enriched.append(
                                f"[The user attached an image. Here's what it contains:\n{desc}]\n"
                                f"[If you need a closer look, use vision_analyze with image_url: {local_path}]"
                            )
                        else:
                            image_enriched.append(
                                f"[The user attached an image but vision analysis failed. "
                                f"You can try examining it with vision_analyze using image_url: {local_path}]"
                            )
                    finally:
                        loop.close()
                except Exception as ve:
                    print(f'[9898] Vision analysis failed for {name}: {ve}', flush=True)
                    image_enriched.append(
                        f"[The user attached an image but vision analysis failed ({ve}). "
                        f"You can try examining it with vision_analyze using image_url: {local_path}]"
                    )
                # Remove the original [File:...] marker
                continue
            except Exception as de:
                print(f'[9898] Failed to download image {name}: {de}', flush=True)
                # Keep the original marker if download failed
                cleaned_parts.append(f'[File: {name}]({url})')
                continue
        else:
            # Non-image attachment — keep as-is
            cleaned_parts.append(f'[File: {name}]({url})')

    # Rebuild: original text (with image markers removed) + vision descriptions + non-image markers
    stripped_text = _FILE_LINK_RE.sub('', msg_text).strip()
    parts = [stripped_text] if stripped_text else []
    parts.extend(image_enriched)
    parts.extend(cleaned_parts)
    return '\n\n'.join(parts)


def run_agent_in_thread(
    stream_id: str,
    session_id: str,
    msg_text: str,
    model: str,
    workspace: str,
    profile: str | None = None,
    conversation_history: list[dict] | None = None,
    provider: str | None = None,
):
    """Run AIAgent in a background thread, pushing SSE events to the stream queue."""
    AIAgent = _get_ai_agent()
    if AIAgent is None:
        put_event(stream_id, "run.failed", {
            "error": "AIAgent not available -- check hermes-agent installation",
            "session_id": session_id,
        })
        return

    cancel_event = _cancel_flags.get(stream_id)
    if cancel_event and cancel_event.is_set():
        put_event(stream_id, "cancel", {"message": "Cancelled before start", "session_id": session_id})
        return

    old_cwd = os.environ.get("TERMINAL_CWD")
    old_session_key = os.environ.get("HERMES_SESSION_KEY")
    old_exec_ask = os.environ.get("HERMES_EXEC_ASK")
    old_hermes_home = os.environ.get("HERMES_HOME")
    agent = None

    try:
        # Resolve workspace
        workspace_path = str(Path(workspace).expanduser().resolve())

        # Resolve HERMES_HOME for the given profile
        hermes_home = os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes"))
        if profile and profile != "default":
            hermes_home = str(Path(os.path.expanduser("~/.hermes")) / "profiles" / profile)

        # Set env for agent
        os.environ["TERMINAL_CWD"] = workspace_path
        os.environ["HERMES_SESSION_KEY"] = session_id
        os.environ["HERMES_EXEC_ASK"] = "1"
        os.environ["HERMES_HOME"] = hermes_home

        # MCP discovery
        try:
            from tools.mcp_tool import discover_mcp_tools
            discover_mcp_tools()
        except Exception:
            pass

        # Resolve model/provider/config — single pass, cached
        resolved_model = model
        resolved_provider = None
        resolved_base_url = None
        resolved_api_key = None
        resolved_api_mode = None
        enabled_toolsets = None
        try:
            from hermes_cli.runtime_provider import resolve_runtime_provider
            from hermes_cli.config import load_config
            rt = resolve_runtime_provider(requested=provider)
            cfg = load_config()
            if rt:
                resolved_provider = rt.get("provider")
                resolved_base_url = rt.get("base_url")
                resolved_api_key = rt.get("api_key")
                resolved_api_mode = rt.get("api_mode")
                if not resolved_model:
                    resolved_model = rt.get("model", "")
            if not resolved_model:
                resolved_model = cfg.get("model", {}).get("default", "glm-5-turbo")
                if not resolved_provider:
                    resolved_provider = cfg.get("model", {}).get("provider")
            # Resolve toolsets from same config
            ts_cfg = cfg.get("tools", {})
            if isinstance(ts_cfg, dict):
                enabled_toolsets = [k for k, v in ts_cfg.items() if v is True and k != "enabled"]
        except Exception as e:
            print(f"[9898] config resolution failed: {e}", flush=True)
            if not resolved_model:
                resolved_model = "glm-5-turbo"

        # Initialize SessionDB for session_search — must pass db_path explicitly
        # because DEFAULT_DB_PATH is computed at module-load time (before HERMES_HOME
        # is overridden for profile isolation), so it always points to the default home.
        session_db = None
        try:
            from hermes_state import SessionDB
            profile_db_path = Path(hermes_home) / "state.db"
            session_db = SessionDB(db_path=profile_db_path)
        except Exception as e:
            print(f"[9898] SessionDB init failed: {e}", flush=True)

        # Resolve the active (leaf) session by walking down compression continuations.
        # After context compaction, Hermes writes to a child session; if we loaded
        # history from the original session we'd miss everything after compression.
        effective_session_id = session_id
        if session_db:
            try:
                _cur = session_id
                for _ in range(50):
                    row = session_db._conn.execute(
                        "SELECT id FROM sessions WHERE parent_session_id = ? "
                        "ORDER BY rowid DESC LIMIT 1",
                        (_cur,),
                    ).fetchone()
                    if row is None:
                        break
                    _cur = row[0]
                if _cur != session_id:
                    effective_session_id = _cur
                    print(f"[9898] Session continuation: {session_id} -> {_cur}", flush=True)
            except Exception as e:
                print(f"[9898] Continuation walk failed: {e}", flush=True)

        # Build agent kwargs
        _token_sent = False
        _reasoning_text = ""
        _live_tool_calls = []

        def on_token(text):
            nonlocal _token_sent
            if text is None:
                return
            _token_sent = True
            put_event(stream_id, "message.delta", {"delta": text, "session_id": session_id})

        def on_reasoning(text):
            nonlocal _reasoning_text
            if text is None:
                return
            _reasoning_text += str(text)
            put_event(stream_id, "reasoning.delta", {"text": str(text), "session_id": session_id})

        def on_tool(*args, **kwargs):
            event_type = None
            name = None
            preview = None
            args_data = {}

            if len(args) >= 4:
                event_type, name, preview, args_data = args[:4]
            elif len(args) == 3:
                name, preview, args_data = args
                event_type = "tool.started"
            elif len(args) == 2:
                event_type, name = args
            elif len(args) == 1:
                name = args[0]
                event_type = "tool.started"

            # Handle reasoning events from tool callback
            if event_type in ("reasoning.available", "_thinking"):
                reason_text = preview if event_type == "reasoning.available" else name
                if reason_text:
                    put_event(stream_id, "reasoning.delta", {"text": str(reason_text), "session_id": session_id})
                return

            # Truncate args for display
            args_snap = {}
            if isinstance(args_data, dict):
                for k, v in list(args_data.items())[:4]:
                    s = str(v)
                    args_snap[k] = s[:120] + ("..." if len(s) > 120 else "")

            if event_type in (None, "tool.started"):
                _live_tool_calls.append({"name": name, "args": args_data if isinstance(args_data, dict) else {}})
                put_event(stream_id, "tool.started", {
                    "tool": name or "",
                    "name": name or "",
                    "preview": preview or "",
                    "args": args_snap,
                    "session_id": session_id,
                })
            elif event_type == "tool.completed":
                for tc in reversed(_live_tool_calls):
                    if tc.get("done"):
                        continue
                    if not name or tc.get("name") == name:
                        tc["done"] = True
                        break
                put_event(stream_id, "tool.completed", {
                    "tool": name or "",
                    "name": name or "",
                    "preview": preview or "",
                    "session_id": session_id,
                })

        import inspect
        _agent_params = set(inspect.signature(AIAgent.__init__).parameters)

        # --- Status callback: capture compression/continuation lifecycle events ---
        def on_status(category: str, message: str):
            """AIAgent calls status_callback(category, message) for lifecycle events.
            We intercept compression-related messages to push SSE events to the frontend."""
            if not message:
                return
            msg_lower = message.lower()
            if "compressing" in msg_lower or "compression started" in msg_lower or "compressing context" in msg_lower:
                put_event(stream_id, "compression.started", {
                    "message_count": 0,
                    "token_count": 0,
                    "session_id": session_id,
                })
            elif "compressed" in msg_lower and ("session" in msg_lower or "context" in msg_lower):
                put_event(stream_id, "compression.completed", {
                    "compressed": True,
                    "session_id": session_id,
                    "message": message,
                })
            elif "continuation" in msg_lower:
                if hasattr(agent, 'session_id') and agent.session_id != session_id:
                    put_event(stream_id, "compression.completed", {
                        "compressed": True,
                        "new_session_id": agent.session_id,
                        "session_id": session_id,
                        "message": message,
                    })

        agent_kwargs = dict(
            model=resolved_model,
            provider=resolved_provider,
            base_url=resolved_base_url,
            api_key=resolved_api_key,
            api_mode=resolved_api_mode,
            platform="9898",
            quiet_mode=True,
            session_id=effective_session_id,
            session_db=session_db,
            stream_delta_callback=on_token,
            reasoning_callback=on_reasoning,
            tool_progress_callback=on_tool,
            status_callback=on_status,
        )

        if enabled_toolsets:
            agent_kwargs["enabled_toolsets"] = enabled_toolsets

        # Newer agent params — re-resolve with specific provider for api_mode/credential_pool
        if "api_mode" in _agent_params:
            try:
                from hermes_cli.runtime_provider import resolve_runtime_provider as _rrp
                # Use original provider hint (e.g. "custom:minimax"), not the
                # resolved "custom" label, so the correct custom provider is found.
                rt2 = _rrp(requested=provider)
                if rt2.get("api_mode"):
                    agent_kwargs["api_mode"] = rt2["api_mode"]
            except Exception:
                pass
        if "credential_pool" in _agent_params:
            try:
                from hermes_cli.runtime_provider import resolve_runtime_provider as _rrp
                rt3 = _rrp(requested=provider)
                if rt3.get("credential_pool"):
                    agent_kwargs["credential_pool"] = rt3["credential_pool"]
            except Exception:
                pass

        # Check cancel before creating agent
        if cancel_event and cancel_event.is_set():
            put_event(stream_id, "cancel", {"message": "Cancelled", "session_id": session_id})
            return

        agent = AIAgent(**agent_kwargs)

        # Store agent for cancel support
        with _streams_lock:
            _agent_instances[stream_id] = agent

        # Check cancel after agent init
        if cancel_event and cancel_event.is_set():
            if hasattr(agent, 'interrupt'):
                try:
                    agent.interrupt("Cancelled")
                except Exception:
                    pass
            put_event(stream_id, "cancel", {"message": "Cancelled", "session_id": session_id})
            return

        # Workspace context
        workspace_ctx = f"[Workspace: {workspace_path}]\n"
        workspace_system_msg = (
            f"Active workspace: {workspace_path}\n"
            "Every user message is prefixed with [Workspace: /absolute/path] indicating the "
            "workspace the user has selected. Use the most recent [Workspace: ...] tag as your "
            "default working directory for ALL file operations."
        )

        # Load conversation history from SessionDB (same as gateway's load_transcript)
        # The frontend never sends conversation_history (always None), so we load
        # it ourselves from the session's stored messages.
        safe_history = []
        try:
            if session_db:
                safe_history = session_db.get_messages_as_conversation(effective_session_id)
                print(f"[9898] Loaded {len(safe_history)} history messages for session {effective_session_id}", flush=True)
        except Exception as e:
            print(f"[9898] Failed to load conversation history: {e}", flush=True)

        # Run the agent — effective_session_id ensures new messages (and any
        # further compression continuations) land in the correct leaf session.

        # Preprocess image attachments: download + vision analysis
        # so the agent can "see" images sent from the WebUI.
        enriched_text = _preprocess_image_attachments(msg_text)

        result = agent.run_conversation(
            user_message=workspace_ctx + enriched_text,
            system_message=workspace_system_msg,
            conversation_history=safe_history,
            task_id=effective_session_id,
            persist_user_message=msg_text,
        )

        # Extract usage
        # Use last_prompt_tokens (actual context window usage) instead of
        # session_prompt_tokens (cumulative sum that inflates with tool calls).
        compressor = getattr(agent, "context_compressor", None)
        if compressor:
            input_tokens = getattr(compressor, "last_prompt_tokens", 0) or 0
        else:
            input_tokens = getattr(agent, "session_prompt_tokens", 0) or 0
        output_tokens = getattr(agent, "session_completion_tokens", 0) or 0
        estimated_cost = getattr(agent, "session_estimated_cost_usd", None)

        # Get final response text
        output_text = ""
        messages = result.get("messages") or []
        for m in reversed(messages):
            if m.get("role") == "assistant":
                output_text = str(m.get("content") or "")
                break

        put_event(stream_id, "run.completed", {
            "output": output_text,
            "usage": {
                "input_tokens": input_tokens,
                "output_tokens": output_tokens,
                "total_tokens": input_tokens + output_tokens,
                "context_length": getattr(compressor, "context_length", None),
                "estimated_cost": estimated_cost,
            },
            "session_id": session_id,
        })
        mark_stream_completed(stream_id)

    except Exception as e:
        err_msg = str(e)
        print(f"[9898] Agent error: {err_msg}\n{traceback.format_exc()}", flush=True)
        put_event(stream_id, "run.failed", {
            "error": err_msg,
            "session_id": session_id,
        })
        mark_stream_completed(stream_id)
    finally:
        # Restore env
        if old_cwd is not None:
            os.environ["TERMINAL_CWD"] = old_cwd
        else:
            os.environ.pop("TERMINAL_CWD", None)
        if old_session_key is not None:
            os.environ["HERMES_SESSION_KEY"] = old_session_key
        else:
            os.environ.pop("HERMES_SESSION_KEY", None)
        if old_exec_ask is not None:
            os.environ["HERMES_EXEC_ASK"] = old_exec_ask
        else:
            os.environ.pop("HERMES_EXEC_ASK", None)
        if old_hermes_home is not None:
            os.environ["HERMES_HOME"] = old_hermes_home
        else:
            os.environ.pop("HERMES_HOME", None)

        # Cleanup
        with _streams_lock:
            _agent_instances.pop(stream_id, None)
