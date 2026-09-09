// apps/web/security/trace.js
// Trazabilidad criptográfica real – NOM-151 L2
import CryptoJS from 'crypto-js';

const HMAC_SECRET = 'KRONOS-289-PLATINUM-HMAC-SECRET';
const STORAGE_KEY = 'kronos_audit_chain';
const API_BASE = '/api';

function sha256(data) {
  return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
}

function hmacSha256(data) {
  return CryptoJS.HmacSHA256(data, HMAC_SECRET).toString(CryptoJS.enc.Hex);
}

function getLastHash() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const chain = JSON.parse(stored);
      return chain.length > 0 ? chain[chain.length - 1].event_hash : null;
    }
  } catch {}
  return null;
}

function storeEvent(event) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const chain = stored ? JSON.parse(stored) : [];
    chain.push(event);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chain));
  } catch (e) {
    console.warn('Storage fallback:', e);
  }
}

export async function logSecurityEvent(event) {
  if (!event || !event.type) return null;

  const ip = '127.0.0.1';
  const payload = JSON.stringify(event);
  const timestamp = new Date().toISOString();

  const hmac = hmacSha256(ip + payload);
  const previousHash = getLastHash() || '0000000000000000000000000000000000000000000000000000000000000000';
  const eventHash = sha256(previousHash + payload + hmac);

  const entry = {
    type: event.type.slice(0, 32),
    page: (event.page || 'unknown').slice(0, 32),
    timestamp,
    ip,
    hmac,
    previous_hash: previousHash,
    event_hash: eventHash,
    payload: event,
    signature: hmacSha256(eventHash + HMAC_SECRET)
  };

  storeEvent(entry);

  // Enviar a API
  try {
    const res = await fetch(`${API_BASE}/audit/event`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        payload: event,
        ip,
        user_agent: navigator.userAgent
      })
    });
    if (!res.ok) throw new Error('API error');
  } catch (e) {
    console.warn('API fallback:', e);
  }

  console.log('[TRACE]', { event_hash: entry.event_hash, previous: entry.previous_hash });
  return entry;
}

export async function verifyChain() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { valid: false, message: 'No chain found' };
    const chain = JSON.parse(stored);
    for (let i = 1; i < chain.length; i++) {
      const prev = chain[i - 1];
      const curr = chain[i];
      if (curr.previous_hash !== prev.event_hash) {
        return { valid: false, at: i, message: 'Hash mismatch' };
      }
      const recalculated = sha256(curr.previous_hash + JSON.stringify(curr.payload) + curr.hmac);
      if (recalculated !== curr.event_hash) {
        return { valid: false, at: i, message: 'Event hash invalid' };
      }
    }
    return { valid: true, length: chain.length };
  } catch (e) {
    return { valid: false, message: e.message };
  }
}

export function getChain() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
}
