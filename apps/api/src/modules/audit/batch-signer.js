import crypto from 'crypto';
import { buildBatch, markBatch } from './batch-builder.js';
import { v4 as uuidv4 } from 'uuid';

export async function signBatch() {
  const events = await buildBatch(100);
  if (events.length === 0) return { signed: 0 };
  const batchId = uuidv4();
  const combined = events.map(e => e.hash).join('');
  const signature = crypto.createHash('sha512').update(combined + batchId).digest('hex');
  await markBatch(events.map(e => e.id), batchId);
  return { signed: events.length, batchId, signature };
}
