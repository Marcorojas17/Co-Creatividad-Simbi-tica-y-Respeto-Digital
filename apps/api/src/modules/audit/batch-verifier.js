import pool from '../../db/pool.js';

export async function verifyBatch(batchId) {
  const result = await pool.query(
    `SELECT * FROM audit_events WHERE batch_id = $1 ORDER BY ts`,
    [batchId]
  );
  if (result.rows.length === 0) return { ok: false, reason: 'Batch not found' };
  const combined = result.rows.map(e => e.hash).join('');
  const computed = crypto.createHash('sha512').update(combined + batchId).digest('hex');
  return { ok: computed === result.rows[0].batch_signature, count: result.rows.length };
}
