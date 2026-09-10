#!/bin/bash
# KRONOS-28-ITZA - Verificador COMPLETO 1-150

G='\033[0;32m'; R='\033[0;31m'; Y='\033[1;33m'; B='\033[0;34m'; N='\033[0m'
E=0; M=0

check() {
  if [ -f "$1" ]; then echo -e "${G}[$E] ✅ $1${N}"; E=$((E+1));
  else echo -e "${R}[--] ❌ $1${N}"; M=$((M+1)); fi
}

echo -e "${B}═══ KRONOS-28-ITZA - VERIFICACIÓN 1-150 ═══${N}"

echo -e "\n${Y}▶ 051-060 CI/CD + Security${N}"
for f in ".github/workflows/ci.yml" ".github/workflows/security.yml" ".github/workflows/pages.yml" ".github/workflows/gpg-sign.yml" ".github/workflows/codeql.yml" ".pre-commit-config.yaml" ".nojekyll" "audit.py" "gpg_sign_engine.sh" "git-sign.sh"; do check "$f"; done

echo -e "\n${Y}▶ 061-070 API Backend${N}"
for f in "apps/api/Dockerfile" "apps/api/src/index.js" "apps/api/src/config/env.js" "apps/api/src/db/pool.js" "apps/api/src/middleware/authInternal.js" "apps/api/src/middleware/security.js" "apps/api/src/routes/api.routes.js" "apps/api/src/modules/audit/chain.js" "apps/api/src/modules/audit/hmac.js" "apps/api/migrations/001_initial.sql"; do check "$f"; done

echo -e "\n${Y}▶ 071-080 Packages + Shaders${N}"
for f in "packages/dsp/package.json" "packages/dsp/src/index.js" "packages/dsp/src/cymatic.js" "packages/utils/package.json" "packages/utils/src/index.js" "core-dsp/package.json" "core-dsp/frequency_engine.js" "core-dsp/cymatic_math.js" "shaders/gold.vert" "shaders/gold.frag"; do check "$f"; done

echo -e "\n${Y}▶ 081-090 Docs ISO/NOM${N}"
for f in "docs/00_MANIFIESTO_CO-CREATIVIDAD.md" "docs/01_MISION_VISION.md" "docs/02_POLITICA_CALIDAD_ISO9001.md" "docs/03_POLITICA_SEGURIDAD_ISO27001.md" "docs/04_AVISO_PRIVACIDAD_NOM024.md" "docs/05_MANUAL_USUARIO.md" "docs/06_MANUAL_TECNICO_E2E.md" "docs/07_POLITICA_ANTI_ROBO_CRYPTO.md" "docs/08_CODIGO_ETICA.md" "docs/09_MATEMATICAS_CYMATIC.md"; do check "$f"; done

echo -e "\n${Y}▶ 091-100 Tests + K8s${N}"
for f in "tests/test_api.py" "tests/test_cymatic.py" "tests/test_pwa.py" "tests/benchmarking_gpu.js" "infrastructure/k8s-deployment.yaml" "infrastructure/k8s-service.yaml" "infrastructure/k8s-configmap.yaml" "infrastructure/k8s-hpa.yaml" "infrastructure/docker-compose.prod.yml" "apps/api/test/audit.test.js"; do check "$f"; done

echo -e "\n${Y}▶ 101-110 Python DSP + Influx${N}"
for f in "chladni_plate.py" "influx.py" "metrics.py" "timeseries.py" "frequency_engine.py" "dsp/processor.py" "dsp/cymatic_math.py" "dsp/__init__.py" "influx_bridge.py" "gen_tokens.py"; do check "$f"; end 2>/dev/null

echo -e "\n${Y}▶ 111-120 Crypto + Traceability${N}"
for f in "crypto_seal.js" "steganography.js" "trace.js" "security/trace.js" "security/crypto_seal.js" "security/steganography.js" "security/nom151_chain.json" "security/integrity.json" "security/license_check.js" "data/theft_log.json"; do check "$f"; done

echo -e "\n${Y}▶ 121-130 Data + Telemetry${N}"
for f in "data/theft_log.json.asc" "data/hardware_log.jsonl" "data/timeseries.js" "data/metrics.json" "theme.json" "theme.js" "tokens.json" "tokens.example.json" "apps/web/src/theme.js" "apps/web/src/cymaticFrequency.js"; do check "$f"; done

echo -e "\n${Y}▶ 131-140 Frontend Extra${N}"
for f in "apps/web/src/gold.js" "apps/web/src/index.js" "apps/web/src/shaders/gold.vert" "apps/web/src/shaders/gold.frag" "apps/web/src/security/trace.js" "apps/web/src/offline.html" "apps/web/src/manifest.webmanifest" "apps/web/src/sw.js" "apps/web/src/live.html" "apps/web/src/404.html"; do check "$f"; done

echo -e "\n${Y}▶ 141-150 Misc + Final${N}"
for f in "404.html" "apps/web/Dockerfile" "apps/worker/Dockerfile" "apps/worker/src/batch-worker.js" "scripts/generate-icons.js" "Makefile" "openapi.yaml" "PRICING.md" "AUTHORS.md" "live.py"; do check "$f"; done

echo ""
echo -e "${B}═══ RESULTADO ═══${N}"
echo -e "${G}✅ Existentes: $E${N}"
echo -e "${R}❌ Faltantes: $M${N}"
T=$((E+M)); P=$((E*100/T))
echo -e "${Y}📊 Progreso: $E/$T ($P%)${N}"

if [ $P -ge 90 ]; then echo -e "${G}🎉 PLATINUM - Apto para auditoría internacional${N}"
elif [ $P -ge 60 ]; then echo -e "${Y}⚠️  GOLD - Faltan archivos clave${N}"
else echo -e "${R}🔴 BETA - Faltan demasiados archivos${N}"; fi
