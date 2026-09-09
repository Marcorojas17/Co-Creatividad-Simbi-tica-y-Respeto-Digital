// apps/worker/src/batch-worker.js
const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid');

const config = {
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/kronos'
};
const pool = new Pool(config);

async function batchSign() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    // Obtener eventos sin batch
    const res = await client.query(
      `SELECT * FROM audit_events WHERE batch_id IS NULL ORDER BY timestamp ASC LIMIT 100`
    );
    if (res.rows.length === 0) {
      console.log('No pending events');
      return;
    }

    const batchId = uuidv4();
    const events = res.rows;
    const hashes = events.map(e => e.event_hash);
    const combined = hashes.join('');
    // Simular firma (en producción usar Ed25519)
    const signature = `ed25519-${combined.substring(0, 32)}`;

    await client.query(
      `UPDATE audit_events SET batch_id = $1, batch_signature = $2 WHERE id = ANY($3)`,
      [batchId, signature, events.map(e => e.id)]
    );
    await client.query('COMMIT');
    console.log(`Batch ${batchId} signed with ${events.length} events`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Batch error:', err);
  } finally {
    client.release();
  }
}

setInterval(batchSign, 60000); // Cada minuto
batchSign();
