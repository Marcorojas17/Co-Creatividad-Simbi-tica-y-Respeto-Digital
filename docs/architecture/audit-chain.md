# Cadena de Auditoría – KRONOS-28-ITZA

## Flujo
1. Cada evento se registra con `event_hash = SHA256(previous_hash + payload + HMAC(ip+payload))`
2. El `previous_hash` es el `event_hash` del evento anterior.
3. El HMAC se calcula con una clave secreta (HMAC-SHA256).
4. Los eventos se agrupan en batches (100 eventos) y se firman con Ed25519.
5. La firma se almacena en `batch_signature` para verificación posterior.

## Verificación
- `verifyChain()` recorre toda la cadena y verifica cada eslabón.
- `verifyBatch()` verifica la firma del batch.
