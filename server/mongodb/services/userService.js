const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  JWT_SECRET_PRIVATE_KEY,
  JWT_COMMON_SIGN_OPTIONS,
  JWT_EXPIRATION,
} = require('config');
const User = require('../models/User');

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid Email!');

    const isEqual = await bcryptjs.compare(password, user.password);
    if (!isEqual) throw new Error('Invalid Password!');

    const tokenPayload = { userId: user.id, email: user.email };
    const token = jwt.sign(tokenPayload, JWT_SECRET_PRIVATE_KEY, {
      ...JWT_COMMON_SIGN_OPTIONS,
    });

    return { userId: user.id, token, tokenExpiration: JWT_EXPIRATION };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createUser = async userInput => {
  try {
    const { email, password } = userInput;

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('User already exists!');

    const passwordHash = bcryptjs.hashSync(password, 12);
    const user = new User({ email, password: passwordHash });
    const createdUser = await user.save();
    return {
      ...createdUser.toJSON(),
      password: null, // don't need to return the password
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  loginUser,
  createUser,
};
