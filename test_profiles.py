"""Test profiles endpoint directly via ASGI."""
import asyncio

async def test():
    from backend.main import app
    from starlette.testclient import TestClient
    
    # But we need the actual wrapped app (TerminalWSMiddleware)
    # Use raw ASGI call instead
    scope = {
        "type": "http",
        "method": "GET",
        "path": "/api/hermes/profiles",
        "query_string": b"",
        "headers": [],
        "server": ("localhost", 9898),
        "scheme": "http",
        "root_path": "",
        "asgi": {"version": "3.0"},
    }
    
    received = []
    sent = []
    
    async def receive():
        return {"type": "http.request", "body": b""}
    
    async def send(message):
        sent.append(message)
        if message["type"] == "http.response.body":
            body = message.get("body", b"")
            print(f"Status: {sent[0].get('status', 'N/A')}")
            print(f"Headers: {[h for h in sent[0].get('headers', []) if h[0] == b'content-type']}")
            print(f"Body: {body[:500]}")
    
    try:
        await app(scope, receive, send)
    except Exception as e:
        import traceback
        traceback.print_exc()

asyncio.run(test())
