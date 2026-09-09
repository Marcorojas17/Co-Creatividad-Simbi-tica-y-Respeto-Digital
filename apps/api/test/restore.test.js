import test from 'node:test';
import assert from 'node:assert';
import { getFullChain } from '../src/modules/audit/audit.repository.js';

test('chain restore should return ordered events', async () => {
  const chain = await getFullChain();
  assert.ok(Array.isArray(chain));
  if (chain.length > 1) {
    assert.ok(chain[0].ts <= chain[1].ts);
  }
});
