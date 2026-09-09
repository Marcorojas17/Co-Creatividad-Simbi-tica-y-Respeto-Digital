// src/modules/audit/audit.repository.js
const pool = require('../../db/pool');

async function insertEvent(event) {
  const { event_hash, previous_hash, hmac, ip, payload, user_agent, timestamp, signature } = event;
  const result = await pool.query(
    `INSERT INTO audit_events (event_hash, previous_hash, hmac, ip, payload, user_agent, timestamp, signature)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING id`,
    [event_hash, previous_hash, hmac, ip, payload, user_agent, timestamp, signature]
  );
  return result.rows[0].id;
}

async function getLastEventHash() {
  const result = await pool.query(
    `SELECT event_hash FROM audit_events ORDER BY timestamp DESC LIMIT 1`
  );
  return result.rows.length ? result.rows[0].event_hash : null;
}

async function getChainFromHash(hash) {
  const result = await pool.query(
    `SELECT * FROM audit_events WHERE event_hash = $1`,
    [hash]
  );
  return result.rows[0] || null;
}

async function getFullChain() {
  const result = await pool.query(
    `SELECT * FROM audit_events ORDER BY timestamp ASC`
  );
  return result.rows;
}

module.exports = { insertEvent, getLastEventHash, getChainFromHash, getFullChain };
