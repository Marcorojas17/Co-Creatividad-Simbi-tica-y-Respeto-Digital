#!/usr/bin/env python3
import json, hashlib, os
from pathlib import Path

TOKEN_PATH = Path("tokens.json")
EXAMPLE_PATH = Path("tokens.example.json")
HASH_PATH = Path("tokens.sha3")

def load_tokens():
    if not TOKEN_PATH.exists():
        print("❌ tokens.json no encontrado. Copia tokens.example.json y llena tus valores.")
        return None
    with open(TOKEN_PATH) as f:
        return json.load(f)

def validate_tokens(t):
    required = ["influx", "github", "pwa"]
    for key in required:
        if key not in t:
            print(f"❌ Falta clave '{key}'")
            return False
    if t["influx"]["token"] == "REPLACE_WITH_INFLUX_TOKEN":
        print("⚠️ Reemplaza el token de Influx")
        return False
    return True

def generate_sha3(tokens):
    data = json.dumps(tokens, sort_keys=True, indent=2).encode()
    sha3 = hashlib.sha3_256(data).hexdigest()
    with open(HASH_PATH, 'w') as f:
        f.write(f"SHA3-256: {sha3}\n")
    print(f"✅ Hash generado: {sha3}")

if __name__ == "__main__":
    t = load_tokens()
    if t and validate_tokens(t):
        generate_sha3(t)
