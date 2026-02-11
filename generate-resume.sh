#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

INPUT="${SCRIPT_DIR}/resume.md"
STYLE="${SCRIPT_DIR}/resume-style.tex"
OUTPUT="${SCRIPT_DIR}/src/assets/shaun-smith-resume.pdf"

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
  -V geometry:margin=0.6in \
  -V fontsize=10pt \
  -V mainfont="Helvetica Neue" \
  -V colorlinks=true \
  -V pagestyle=empty \
  -M linkcolor=accent \
  -M urlcolor=accent

echo "Generated: $OUTPUT"
