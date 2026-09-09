// src/middleware/authInternal.js
const config = require('../config/env');

module.exports = async (request, reply) => {
  const token = request.headers['x-internal-token'];
  if (token !== config.internalToken) {
    reply.status(401).send({ error: 'Unauthorized' });
    return;
  }
};
