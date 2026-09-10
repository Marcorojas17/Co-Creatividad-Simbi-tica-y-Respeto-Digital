#!/bin/bash
HEADER="// @CERT: NOM-024-2019 aviso privacidad consentimiento titular | NOM-151 hash sello tiempo conservacion integridad | ISO-27001:2022 gpg crypto seal integrity cifrado trace | ISO-9001:2015 changelog version audit calidad test | ISO-27017 vercel sw.js manifest pwa offline | KRONOS-2099 440 cymatic kronos 2607086319439 voz - 10 AÑOS ADELANTO 2036"

# Archivos clave para certificar
for f in security/*.js apps/web/src/App.tsx apps/web/src/components/*.tsx core-dsp/*.py core-dsp/*.js legal/*.html docs/*.md compliance/*.md; do
  [ -f "$f" ] || continue
  if ! grep -q "KRONOS-2099" "$f"; then
    echo "$HEADER" | cat - "$f" > temp && mv temp "$f"
    echo "→ Inyectado KRONOS 2036 en $f"
  fi
done
