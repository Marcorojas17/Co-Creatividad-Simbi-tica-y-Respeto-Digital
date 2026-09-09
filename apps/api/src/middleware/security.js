// src/middleware/security.js
const fastifyHelmet = require('@fastify/helmet');
const fastifyCors = require('@fastify/cors');

module.exports = async (fastify) => {
  await fastify.register(fastifyHelmet, {
    contentSecurityPolicy: false, // Permitir scripts locales
  });
  await fastify.register(fastifyCors, {
    origin: true,
    credentials: true,
  });
};
