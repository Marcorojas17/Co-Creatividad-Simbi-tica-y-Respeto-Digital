import test from 'node:test';
import assert from 'node:assert';
import { createAuditEvent } from '../src/modules/audit/audit.service.js';

test('concurrent events should not collide', async () => {
  const results = await Promise.all([
    createAuditEvent({ type: 'test1' }, '127.0.0.1'),
    createAuditEvent({ type: 'test2' }, '127.0.0.2')
  ]);
  assert.ok(results[0].hash !== results[1].hash);
});
