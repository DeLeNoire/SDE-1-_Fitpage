// authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = { verifyToken };
