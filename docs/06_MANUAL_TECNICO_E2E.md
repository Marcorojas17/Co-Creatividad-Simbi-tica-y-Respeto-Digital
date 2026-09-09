# Manual Técnico End-to-End

## Arquitectura
- **Frontend**: PWA con WebGL + Three.js (shaders gold).
- **Backend**: Fastify + PostgreSQL + HMAC/SHA-512.
- **Worker**: Firma de batches cada minuto.

## Flujo de datos
1. Usuario interactúa → `trace.js` genera hash encadenado.
2. Eventos se almacenan en `theft_log.json` y se firman con GPG.
3. API expone endpoints para auditoría (`/api/audit/verify`).

## Despliegue
```bash
make install
make test
make audit
make deploy

---

## 📄 122 – `docs/07_POLITICA_ANTI_ROBO_CRYPTO.md`

```markdown
# Política Anti-Robo Crypto

## Principio 04:40
Ningún fondo, seed o key sale del dispositivo sin firma GPG + 2FA.

## Custodia
- NO custodia centralizada.
- Keys en Secure Enclave o `tokens.json` (local, gitignored).
- Backup: Shamir 3/5 offline.

## Detección
- `checkBudget(ms)` + `trackFrame(ms)` detecta inyecciones que rompen 12.3ms.
- Si `frame > 12.3ms x 10 frames` → freeze de firmas.

## Transacciones
- Whitelist en `tokens.example.json`.
- Toda tx requiere `GPG-SIGN-REAL` + confirmación mandala 04:40.
