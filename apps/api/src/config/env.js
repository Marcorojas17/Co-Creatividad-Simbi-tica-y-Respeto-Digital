// src/config/env.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/kronos',
  hmacSecret: process.env.HMAC_SECRET || 'dev-secret-change-me',
  ed25519PrivateKey: process.env.ED25519_PRIVATE_KEY || null,
  nodeEnv: process.env.NODE_ENV || 'development'
};
