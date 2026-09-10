#!/bin/bash
G='\033[0;32m'; R='\033[0;31m'; Y='\033[1;33m'; B='\033[0;34m'; N='\033[0m'
E=0; M=0

check() {
  if [ -f "$1" ]; then echo -e "${G}✅ $1${N}"; E=$((E+1));
  else echo -e "${R}❌ $1${N}"; M=$((M+1)); fi
}

echo -e "${B}═══ VERIFICACIÓN 101-150 ═══${N}"

echo -e "\n${Y}▶ 101-110 Python DSP${N}"
for f in "chladni_plate.py" "influx.py" "metrics.py" "timeseries.py" "frequency_engine.py" "dsp/processor.py" "dsp/cymatic_math.py" "dsp/__init__.py" "influx_bridge.py" "gen_tokens.py"; do check "$f"; done

echo -e "\n${Y}▶ 111-120 Crypto + Trace${N}"
for f in "crypto_seal.js" "steganography.js" "trace.js" "security/trace.js" "security/crypto_seal.js" "security/steganography.js" "security/nom151_chain.json" "security/integrity.json" "security/license_check.js" "data/theft_log.json"; do check "$f"; done

echo -e "\n${Y}▶ 121-130 Data + Telemetry${N}"
for f in "data/theft_log.json.asc" "data/hardware_log.jsonl" "data/timeseries.js" "data/metrics.json" "theme.json" "theme.js" "tokens.json" "tokens.example.json" "apps/web/src/theme.js" "apps/web/src/cymaticFrequency.js"; do check "$f"; done

echo -e "\n${Y}▶ 131-140 Frontend Extra${N}"
for f in "apps/web/src/gold.js" "apps/web/src/index.js" "apps/web/src/shaders/gold.vert" "apps/web/src/shaders/gold.frag" "apps/web/src/security/trace.js" "apps/web/src/offline.html" "apps/web/src/manifest.webmanifest" "apps/web/src/sw.js" "apps/web/src/live.html" "apps/web/src/404.html"; do check "$f"; done

echo -e "\n${Y}▶ 141-150 Misc${N}"
for f in "404.html" "apps/web/Dockerfile" "apps/worker/Dockerfile" "apps/worker/src/batch-worker.js" "scripts/generate-icons.js" "Makefile" "openapi.yaml" "PRICING.md" "AUTHORS.md" "live.py"; do check "$f"; done

echo ""
echo -e "${G}✅ Existentes: $E${N}"
echo -e "${R}❌ Faltantes: $M${N}"
