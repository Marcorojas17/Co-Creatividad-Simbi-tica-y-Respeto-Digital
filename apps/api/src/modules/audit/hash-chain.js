// src/modules/audit/hash-chain.js
const CryptoJS = require('crypto-js');

function sha256(data) {
  return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
}

function buildHash(previousHash, payload, hmac) {
  return sha256(previousHash + payload + hmac);
}

module.exports = { sha256, buildHash };
