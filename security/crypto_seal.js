// security/crypto_seal.js
const SEAL = 'GPG-SIGN-REAL-KRONOS-289-PLATINUM';

async function sha512(data) {
  const encoder = new TextEncoder();
  const buffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-512', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function seal(data) {
  const payload = typeof data === 'string' ? data : JSON.stringify(data);
  const timestamp = new Date().toISOString();
  const hash = await sha512(payload + timestamp + SEAL);
  return {
    algorithm: 'SHA-512',
    seal: SEAL,
    hash,
    timestamp,
    payload: data,
    signature: `${SEAL}::${hash.slice(0, 32)}`
  };
}

export function sealSync(data) {
  // Fallback síncrono para entornos sin WebCrypto
  return {
    algorithm: 'SHA-512-SYNC',
    seal: SEAL,
    note: 'Usa seal() async para hash real'
  };
}
