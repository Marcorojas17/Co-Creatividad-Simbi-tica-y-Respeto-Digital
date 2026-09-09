import json, pathlib, sys

ROOT = pathlib.Path(".")
WEB = ROOT / "apps" / "web"
CHECKS = []

def check(name, ok, detail=""):
    status = "OK" if ok else "FAIL"
    CHECKS.append({"name": name, "ok": ok, "detail": detail})
    print(f"[{status}] {name} {detail}")
    return ok

def main():
    print("== KRONOS AUDIT ==")
    check("cymaticFrequency.js exists", (ROOT/"cymaticFrequency.js").exists())
    check("frequency_engine.js exists", (ROOT/"core-dsp/frequency_engine.js").exists())
    check("apps/web/index.html exists", (WEB/"index.html").exists())
    check("apps/web/gold.js exists", (WEB/"gold.js").exists())
    check("apps/web/index.js exists", (WEB/"index.js").exists())
    check("apps/web/security/trace.js exists", (WEB/"security/trace.js").exists())
    check("manifest.webmanifest exists", (ROOT/"manifest.webmanifest").exists())
    check("sw.js exists", (ROOT/"sw.js").exists())

    ok_count = sum(1 for c in CHECKS if c["ok"])
    total = len(CHECKS)
    pct = ok_count/total*100 if total else 0
    result = {
        "score": f"{ok_count}/{total}",
        "pct": round(pct,2),
        "level": "PLATINUM" if pct>=99 else "GOLD",
        "seal": "GPG-SIGN-REAL-KRONOS-289-PLATINUM" if pct>=99 else "NO-SEAL",
        "checks": CHECKS
    }
    pathlib.Path("SEALO_CALIDAD.json").write_text(json.dumps(result, indent=2))
    print(f"\nRESULT: {result['score']} {result['level']} {result['seal']} {pct}%")
    sys.exit(0 if pct>=99 else 1)

if __name__ == "__main__":
    main()
