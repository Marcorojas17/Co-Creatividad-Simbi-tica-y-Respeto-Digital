// src/routes/api.routes.js
const auditRoutes = require('../modules/audit/audit.routes');

module.exports = async (fastify) => {
  fastify.register(auditRoutes, { prefix: '/audit' });
};
