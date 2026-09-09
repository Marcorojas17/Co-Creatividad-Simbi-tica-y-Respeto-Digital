// src/modules/audit/audit.routes.js
const service = require('./audit.service');

module.exports = async (fastify) => {
  fastify.post('/event', async (request, reply) => {
    const { payload } = request.body;
    const ip = request.ip || '0.0.0.0';
    const userAgent = request.headers['user-agent'] || 'unknown';
    try {
      const event = await service.createAuditEvent(payload, ip, userAgent);
      reply.send(event);
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });

  fastify.get('/last-hash', async (request, reply) => {
    const hash = await service.getLastHash();
    reply.send({ previous_hash: hash });
  });

  fastify.get('/verify', async (request, reply) => {
    const result = await service.verifyChain();
    reply.send(result);
  });
};
