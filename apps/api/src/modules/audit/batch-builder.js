import pool from '../../db/pool.js';

export async function buildBatch(size = 100) {
  const result = await pool.query(
    `SELECT * FROM audit_events WHERE signature IS NOT NULL AND batch_id IS NULL ORDER BY ts LIMIT $1`,
    [size]
  );
  return result.rows;
}

export async function markBatch(ids, batchId) {
  await pool.query(
    `UPDATE audit_events SET batch_id = $1 WHERE id = ANY($2)`,
    [batchId, ids]
  );
}
