const fs = require('fs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');
const OPTIONS = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

module.exports = {
  create: (payload) => jwt.sign(payload, SECRET, OPTIONS),
  verify: (token) => jwt.verify(token, SECRET),
};
