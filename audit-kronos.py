import os, json, pathlib
ROOT = pathlib.Path(".")
EXCLUDE = {".git","node_modules","dist",".vercel",".turbo","pnpm-lock.yaml"}

def rank_file(path: pathlib.Path):
    text = ""
    try:
        if path.stat().st_size < 500000: # no leer 572MB
            text = path.read_text(errors="ignore")[:5000].lower()
    except: pass

    score = 0
    checks = {
        "PLATINUM_base": 20,
        "no_legacy": 10 if "legacy" not in str(path) and "Pega esto" not in str(path) else -20,
        "en_apps_web_o_core": 15 if str(path).startswith(("apps/web","core-dsp","security","dsp","compliance")) else 0,
        "has_440hz_cymatic": 15 if any(k in text for k in ["440","cymatic","chladni","frequency"]) else 0,
        "has_crypto_gpg": 15 if any(k in text for k in ["gpg","crypto_seal","steganography","seal"]) else 0,
        "has_kronos_badge": 15 if "kronos" in text or "2607086319439" in text else 0,
        "is_light": 10 if path.stat().st_size < 100*1024 else 0,
    }
    total = sum(checks.values())
    if total >= 90: rank = "⬢ KRONOS"
    elif total >= 75: rank = "💎 DIAMOND"
    elif total >= 60: rank = "💿 PLATINUM 289"
    elif total >= 40: rank = "💿 PLATINUM"
    elif total >= 20: rank = "🥇 GOLD"
    else: rank = "🔴 LEGACY"
    return rank, total, checks

rows = []
for p in ROOT.rglob("*"):
    if any(e in str(p) for e in EXCLUDE): continue
    if p.is_file():
        rank, total, checks = rank_file(p)
        rows.append((str(p), rank, total))

rows.sort(key=lambda x: x[2], reverse=True)

print("| Archivo | Rango | Score |")
print("|---|---|---|")
for path, rank, score in rows[:120]:
    print(f"| {path} | {rank} | {score} |")

# guarda json
data = [{"file":p,"rank":r,"score":s} for p,s,r in rows]
pathlib.Path("compliance/MATRIZ_KRONOS_2026.json").write_text(json.dumps(data, indent=2), encoding="utf-8")
print(f"\nTotal auditados: {len(rows)}")
print(f"KRONOS: {sum(1 for _,r,_ in rows if 'KRONOS' in r)}")
print(f"PLATINUM: {sum(1 for _,r,_ in rows if 'PLATINUM' in r)}")
print(f"LEGACY: {sum(1 for _,r,_ in rows if 'LEGACY' in r)}")
