#!/bin/bash
# Start uvicorn with stderr redirected to file
cd /Users/edy/Desktop/hermes-py-webui
.venv/bin/python3 -m uvicorn backend.main:app \
    --host 0.0.0.0 --port 9898 \
    --log-level debug \
    --access-log \
    2>/tmp/uvicorn_debug.log 1>&2 &

echo "PID: $!"
sleep 3
echo "=== Request profiles ==="
curl -s -D - http://localhost:9898/api/hermes/profiles 2>&1 | head -10
echo ""
echo "=== Request sessions ==="
curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:9898/api/hermes/sessions?limit=1
echo ""
echo "=== uvicorn log ==="
cat /tmp/uvicorn_debug.log 2>/dev/null
