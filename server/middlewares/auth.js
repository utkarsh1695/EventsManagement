const jwt = require('jsonwebtoken');
const { JWT_SECRET_PUBLIC_KEY, JWT_COMMON_VERIFY_OPTIONS } = require('config');

const auth = (req, res, next) => {
  const tokenHeader = req.get('Authorization');
  if (!tokenHeader) {
    req.auth = false;
    return next();
  }

  const token = tokenHeader.split(' ')[1]; // Authorization: Bearer <token>
  if (!token) {
    req.auth = false;
    return next();
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, JWT_SECRET_PUBLIC_KEY, {
      ...JWT_COMMON_VERIFY_OPTIONS,
    });
  } catch (err) {
    req.auth = false;
    return next();
  }

  if (!decodedToken) {
    req.auth = false;
    return next();
  }

  req.auth = true;
  req.userId = decoded.userId;
  next();
};

module.exports = auth;
