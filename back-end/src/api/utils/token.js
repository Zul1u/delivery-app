const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;
const OPTIONS = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

module.exports = {
  create: (payload) => jwt.sign(payload, SECRET, OPTIONS),
  verify: (token) => jwt.verify(token, SECRET),
};
