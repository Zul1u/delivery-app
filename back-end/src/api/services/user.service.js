const md5 = require('md5');
const token = require('../utils/token');
const User = require('../../database/models/user');
const RequestError = require('../utils/RequestError');

module.exports = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw RequestError.invalidEmail();

    const encrypted = md5(password);
    if (encrypted !== user.password) throw RequestError.invalidPassword();

    return token.create({
      id: user.id,
      name: user.name,
      email: user.role,
      role: user.role,
    });
  },

  create: async (newUser) => {
    const { email } = newUser;
    const user = await User.findOne({ where: { email } });

    if (user) throw RequestError.userAlreadyRegistered();

    const createdUser = await User.create(newUser);

    return token.create({
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.role,
      role: createdUser.role,
    });
  },

  findAll: async () => User.findAll({ attributes: { exclude: ['password'] } }),

  findOne: async (id) => {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if (!user) throw RequestError.userNotFound();

    return user;
  },

  deleteOne: async (id) => User.destroy({ where: { id } }),
};
