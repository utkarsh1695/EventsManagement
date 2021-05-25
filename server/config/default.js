const { publicKey, privateKey } = require('./keys');
const MONGO_USER = 'root';
const MONGO_PASSWORD = 'root_password';
const MONGO_EVENTS_DB = 'events-db';

module.exports = {
  BACKEND_SERVICE_PORT: '8080',
  MONGO_CONNECTION_STRING: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.wo7vs.mongodb.net/${MONGO_EVENTS_DB}?retryWrites=true&w=majority`,

  // JWT constants
  JWT_SECRET_PRIVATE_KEY: privateKey,
  JWT_SECRET_PUBLIC_KEY: publicKey,
  JWT_EXPIRATION: 1, // 1 hour
  JWT_COMMON_SIGN_OPTIONS: {
    expiresIn: '1h',
    algorithm: 'RS256',
  },
  JWT_COMMON_VERIFY_OPTIONS: {
    expiresIn: '1h',
    algorithm: ['RS256'],
  },
};
