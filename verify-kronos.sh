#!/bin/bash
# KRONOS-28-ITZA - Verificador de archivos
# Uso: bash verify-kronos.sh

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

EXIST=0
MISSING=0

check() {
  if [ -f "$1" ]; then
    echo -e "${GREEN}✅ $1${NC}"
    EXIST=$((EXIST+1))
  else
    echo -e "${RED}❌ FALTA: $1${NC}"
    MISSING=$((MISSING+1))
  fi
}

echo -e "${BLUE}═══════════════════════════════════════════════${NC}"
echo -e "${BLUE}  KRONOS-28-ITZA - VERIFICACIÓN DE ARCHIVOS${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════${NC}"

echo -e "\n${YELLOW}▶ BLOQUE 001-010 - CONFIGURACIÓN RAÍZ${NC}"
check ".devcontainer/devcontainer.json"
check ".editorconfig"
check ".gitattributes"
check ".gitignore"
check ".nvmrc"
check "requirements.txt"
check "package.json"
check "pnpm-workspace.yaml"
check "turbo.json"
check "tsconfig.base.json"

echo -e "\n${YELLOW}▶ BLOQUE 011-020 - TS + ESLINT + DOCKER${NC}"
check "tsconfig.json"
check ".eslintrc.cjs"
check ".prettierrc"
check ".prettierignore"
check "commitlint.config.cjs"
check "lint-staged.config.cjs"
check "Dockerfile"
check ".dockerignore"
check "docker-compose.yml"
check ".env.example"

echo -e "\n${YELLOW}▶ BLOQUE 021-030 - LICENSE + DOCS + FRONTEND${NC}"
check "LICENSE"
check "THIRD_PARTY_LICENSES.md"
check "CONTRIBUTING.md"
check ".github/PULL_REQUEST_TEMPLATE.md"
check "README.md"
check "apps/web/package.json"
check "apps/web/src/index.html"
check "apps/web/src/live3d.html"
check "apps/api/package.json"
check "compliance/preinstall-check.mjs"

echo -e "\n${YELLOW}▶ BLOQUE 031-040 - LEGAL Y SEGURIDAD${NC}"
check "legal/aviso-privacidad.html"
check "legal/terminos.html"
check "SECURITY.md"
check "ACCESSIBILITY.md"
check "PRIVACY.md"
check "CODE_OF_CONDUCT.md"
check "CHANGELOG.md"
check "sbom.json"
check "design-system/glass.css"
check "manifest.webmanifest"

echo -e "\n${YELLOW}▶ BLOQUE 041-050 - PWA + COMPLIANCE${NC}"
check "live.html"
check "apps/web/index.js"
check "sw.js"
check "offline.html"
check "compliance/MATRIZ_CUMPLIMIENTO.md"
check "compliance/SBOM.md"
check "compliance/AVISO_PRIVACIDAD.md"
check "compliance/LICENSES.md"
check "compliance/AUDITORIA.md"
check "compliance/CHECKLIST.md"

echo -e "\n${BLUE}═══════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Archivos existentes: $EXIST${NC}"
echo -e "${RED}❌ Archivos faltantes: $MISSING${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════${NC}"

TOTAL=$((EXIST+MISSING))
PERCENT=$((EXIST*100/TOTAL))
echo -e "\n${YELLOW}📊 Progreso: $EXIST/$TOTAL ($PERCENT%)${NC}"

if [ $PERCENT -ge 85 ]; then
  echo -e "${GREEN}🎉 Nivel PLATINUM alcanzado${NC}"
elif [ $PERCENT -ge 60 ]; then
  echo -e "${YELLOW}⚠️  Nivel GOLD - necesitas más archivos${NC}"
else
  echo -e "${RED}🔴 Nivel BETA - muchos archivos faltan${NC}"
fi
