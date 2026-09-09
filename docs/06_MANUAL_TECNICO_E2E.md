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
