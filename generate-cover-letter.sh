#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

INPUT="${SCRIPT_DIR}/cover-letter.md"
STYLE="${SCRIPT_DIR}/cover-letter-style.tex"
OUTPUT="${SCRIPT_DIR}/src/assets/shaun-smith-cover-letter.pdf"

if ! command -v pandoc &>/dev/null; then
  echo "Error: pandoc is not installed"
  exit 1
fi

if ! command -v xelatex &>/dev/null; then
  echo "Error: xelatex is not installed"
  exit 1
fi

pandoc "$INPUT" -o "$OUTPUT" \
  --pdf-engine=xelatex \
  -H "$STYLE" \
  -V geometry:margin=1in \
  -V fontsize=11pt \
  -V mainfont="Helvetica Neue" \
  -V colorlinks=true \
  -V pagestyle=empty \
  -M linkcolor=accent \
  -M urlcolor=accent

echo "Generated: $OUTPUT"
