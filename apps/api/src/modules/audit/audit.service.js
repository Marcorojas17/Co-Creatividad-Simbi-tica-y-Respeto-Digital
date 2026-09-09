// src/modules/audit/audit.service.js
const hmacSha256 = require('./hmac');
const { buildHash, sha256 } = require('./hash-chain');
const repo = require('./audit.repository');
const { v4: uuidv4 } = require('uuid');

async function createAuditEvent(payload, ip, userAgent) {
  const previousHash = await repo.getLastEventHash() || '0000000000000000000000000000000000000000000000000000000000000000';
  const timestamp = new Date().toISOString();
  const payloadStr = JSON.stringify(payload);
  const hmac = hmacSha256(ip + payloadStr);
  const eventHash = buildHash(previousHash, payloadStr, hmac);

  const event = {
    event_hash: eventHash,
    previous_hash: previousHash,
    hmac,
    ip,
    payload: payloadStr,
    user_agent: userAgent || 'unknown',
    timestamp,
    signature: null // será firmado en batch
  };

  await repo.insertEvent(event);
  return event;
}

async function getLastHash() {
  return await repo.getLastEventHash();
}

async function verifyChain() {
  const chain = await repo.getFullChain();
  for (let i = 1; i < chain.length; i++) {
    const prev = chain[i - 1];
    const curr = chain[i];
    if (curr.previous_hash !== prev.event_hash) {
      return { valid: false, at: i, message: 'Hash mismatch' };
    }
    const recalculated = buildHash(curr.previous_hash, curr.payload, curr.hmac);
    if (recalculated !== curr.event_hash) {
      return { valid: false, at: i, message: 'Event hash invalid' };
    }
  }
  return { valid: true, length: chain.length };
}

module.exports = { createAuditEvent, getLastHash, verifyChain };
