#!/usr/bin/env bash
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/print"

mkdir -p "$OUT"

for page in church firedepartment gruenow-wrong school watermill; do
    echo "Generating $page"
    "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
        --print-to-pdf="$OUT/history-$page.pdf" \
        "file://$ROOT/page/qrc-print/$page.html"
done

echo "Done -> $OUT"