// src/index.js
const Fastify = require('fastify');
const config = require('./config/env');
const security = require('./middleware/security');
const routes = require('./routes/api.routes');

const fastify = Fastify({ logger: true });

// Middleware
security(fastify);

// Rutas
fastify.register(routes, { prefix: '/api' });

fastify.get('/', (req, reply) => {
  reply.send({ status: 'KRONOS-28-ITZA API', version: '0.4.1' });
});

fastify.listen({ port: config.port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening on ${address}`);
});
