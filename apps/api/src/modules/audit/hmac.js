// src/modules/audit/hmac.js
const CryptoJS = require('crypto-js');
const config = require('../../config/env');

function hmacSha256(data) {
  return CryptoJS.HmacSHA256(data, config.hmacSecret).toString(CryptoJS.enc.Hex);
}

module.exports = hmacSha256;
