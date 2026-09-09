// seed_anchor.js – Crear evento raíz (hash = 000...)
const { v4: uuidv4 } = require('uuid');

exports.up = async (pgm) => {
  const anchorEvent = {
    event_hash: '0000000000000000000000000000000000000000000000000000000000000000',
    previous_hash: null,
    hmac: 'anchor',
    ip: '0.0.0.0',
    payload: JSON.stringify({ type: 'ANCHOR' }),
    timestamp: new Date().toISOString(),
    signature: 'anchor'
  };
  await pgm.sql(`
    INSERT INTO audit_events (event_hash, previous_hash, hmac, ip, payload, timestamp, signature)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `, Object.values(anchorEvent));
};
