#!/bin/bash
echo "[KRONOS MILITARY TRACE]"

# SLSA L3 - Attestation in-toto
npx @sigstore/cli sign-blob --bundle compliance/evidencias/attestation.sigstore apps/web/dist/index.html

# OpenTimestamps - Anclaje a Bitcoin (prueba legal global)
ots stamp compliance/evidencias/nom151/hash-chain.txt

# SBOM CycloneDX militar
npx @cyclonedx/cyclonedx-npm --output-file compliance/evidencias/sbom.cyclonedx.json

# Scorecard OpenSSF
npx @ossf/scorecard --repo=github.com/Marcorojas17/Co-Creatividad-Simbi-tica-y-Respeto-Digital --format json > compliance/evidencias/scorecard.json

# GPG Sign todo
gpg --detach-sign --armor compliance/AUTOAUDITORIA_KRONOS_2036.md
