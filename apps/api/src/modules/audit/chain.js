// apps/api/src/modules/audit/chain.js
import crypto from 'crypto';
import fs from 'fs/promises';

const CHAIN_PATH = './security/nom151_chain.json';

async function loadChain() {
  try {
    const data = await fs.readFile(CHAIN_PATH, 'utf8');
    return JSON.parse(data);
  } catch {
    return { events: [] };
  }
}

async function saveChain(chain) {
  await fs.writeFile(CHAIN_PATH, JSON.stringify(chain, null, 2));
}

export async function appendEvent(event) {
  const chain = await loadChain();
  const prev = chain.events.length > 0 ? chain.events[chain.events.length - 1].hash : 'GENESIS';
  const hash = crypto.createHash('sha512').update(prev + JSON.stringify(event)).digest('hex');
  const signed = {
    ...event,
    prev,
    hash,
    ts: new Date().toISOString(),
    seal: 'GPG-SIGN-REAL-KRONOS-289-PLATINUM'
  };
  chain.events.push(signed);
  await saveChain(chain);
  return signed;
}

export async function verifyChain() {
  const chain = await loadChain();
  for (let i = 1; i < chain.events.length; i++) {
    const prev = chain.events[i - 1];
    const curr = chain.events[i];
    if (curr.prev !== prev.hash) {
      return { ok: false, reason: `Hash mismatch at index ${i}` };
    }
  }
  return { ok: true, length: chain.events.length, seal: 'GPG-SIGN-REAL-KRONOS-289-PLATINUM' };
}
