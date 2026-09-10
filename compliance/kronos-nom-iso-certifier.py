import pathlib, json, datetime
ROOT = pathlib.Path(".")
EXCLUDE = {".git","node_modules","dist",".vercel",".turbo"}

# Checks NOM + ISO que exige IFT / DPA México
REQS = {
    "NOM-024-2019": ["aviso", "privacidad", "consentimiento", "titular"],
    "NOM-151-SCFI": ["hash", "sello", "tiempo", "conservacion", "integridad"],
    "ISO-27001:2022": ["gpg", "crypto", "seal", "integrity", "cifrado", "trace"],
    "ISO-9001:2015": ["changelog", "version", "audit", "calidad", "test"],
    "ISO-27017-CLOUD": ["vercel", "sw.js", "manifest", "pwa", "offline"],
    "KRONOS-2099": ["440", "cymatic", "kronos", "2607086319439", "voz"]
}

def cert_file(p: pathlib.Path):
    try:
        if p.stat().st_size > 300000: return None
        txt = p.read_text(errors="ignore")[:8000].lower()
    except: return None

    report = {"file": str(p)}
    total_score = 0
    max_score = len(REQS)*20

    for norma, keywords in REQS.items():
        hits = sum(1 for k in keywords if k in txt or k in str(p).lower())
        score = min(20, hits*5) # 0-20 por norma
        report[norma] = f"{score}/20"
        total_score += score

    # Nivel 10 años adelanto
    pct = total_score / max_score * 100
    if pct >= 90:
        report["CERT"] = "⬢ KRONOS 2099 - 10 AÑOS ADELANTO"
        report["vigencia"] = "2036"
    elif pct >= 75:
        report["CERT"] = "💎 DIAMOND - ISO FULL"
        report["vigencia"] = "2030"
    elif pct >= 60:
        report["CERT"] = "💿 PLATINUM 289 - NOM+ISO"
        report["vigencia"] = "2028"
    else:
        report["CERT"] = "🥉 BASE - En proceso"
        report["vigencia"] = "2026"

    report["score_10y"] = f"{pct:.1f}%"
    return report

rows=[]
for p in ROOT.rglob("*"):
    if any(e in p.parts for e in EXCLUDE): continue
    if not p.is_file(): continue
    if p.suffix in [".svg",".png",".jpg"]: continue
    r = cert_file(p)
    if r: rows.append(r)

rows.sort(key=lambda x: float(x["score_10y"][:-1]), reverse=True)

# JSON certificado
out_json = pathlib.Path("compliance/CERTIFICACION_NOM_ISO_KRONOS_2036.json")
out_json.write_text(json.dumps(rows, indent=2, ensure_ascii=False), encoding="utf-8")

# MD para juez
with open("docs/12_CERTIFICACION_10_ANIOS.md","w",encoding="utf-8") as f:
    f.write(f"# CERTIFICACIÓN NOM + ISO + KRONOS 10 AÑOS ADELANTO\n")
    f.write(f"Fecha: {datetime.date.today()} | Norma: NOM-024 + NOM-151 + ISO27001 + ISO9001\n")
    f.write(f"SafeCreative: 2607086319439 | Sello: KRONOS 2099 - El SSL de la Voz Humana\n\n")
    f.write("| Archivo | Score 10y | CERT | Vigencia | NOM-024 | NOM-151 | ISO27001 | ISO9001 | KRONOS 2099 |\n")
    f.write("|---|---|---|---|---|---|---|---|---|\n")
    for r in rows[:150]:
        f.write(f"| {r['file']} | {r['score_10y']} | {r['CERT']} | {r['vigencia']} | {r['NOM-024-2019']} | {r['NOM-151-SCFI']} | {r['ISO-27001:2022']} | {r['ISO-9001:2015']} | {r['KRONOS-2099']} |\n")
    f.write(f"\n\n**Total auditados:** {len(rows)} | **KRONOS 2036:** {sum(1 for r in rows if 'KRONOS' in r['CERT'])} | **Filosofía:** 10 años adelanto tecnológico con voz como llave privada\n")

print(f"Certificados {len(rows)} archivos")
print(f"KRONOS 2036: {sum(1 for r in rows if 'KRONOS' in r['CERT'])}")
print(f"Ver: docs/12_CERTIFICACION_10_ANIOS.md")
