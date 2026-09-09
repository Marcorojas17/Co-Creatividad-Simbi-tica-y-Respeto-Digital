import test from 'node:test';
import assert from 'node:assert';
import { signBatch } from '../src/modules/audit/batch-signer.js';
import { verifyBatch } from '../src/modules/audit/batch-verifier.js';

test('batch signing and verification', async () => {
  const result = await signBatch();
  assert.ok(result.signed >= 0);
  if (result.signed > 0) {
    const verified = await verifyBatch(result.batchId);
    assert.ok(verified.ok);
  }
});
