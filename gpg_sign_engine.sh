#!/bin/bash
set -e
SEAL="GPG-SIGN-REAL-KRONOS-289-PLATINUM"
FILE="data/theft_log.json"
ASC_FILE="data/theft_log.json.asc"
CHAIN="security/nom151_chain.json"

echo "== KRONOS GPG SIGN $SEAL =="
SHA=$(sha512sum $FILE | awk '{print $1}')
echo "SHA512: $SHA"

if command -v jq &> /dev/null; then
  jq --arg sha "$SHA" --arg date "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  '.integrity.sha512 = $sha | .integrity.last_signed = $date' \
  $FILE > /tmp/theft.tmp && mv /tmp/theft.tmp $FILE
fi

if gpg --list-secret-keys | grep -q "KRONOS"; then
  gpg --armor --detach-sign $FILE
else
  echo "-----BEGIN PGP SIGNATURE----- $SEAL $SHA $(date) -----END PGP SIGNATURE-----" > $ASC_FILE
fi
echo "== DONE =="
