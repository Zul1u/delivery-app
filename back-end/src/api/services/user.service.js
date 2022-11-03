const md5 = require('md5');
const token = require('../utils/token');
const { User } = require('../../database/models');
const RequestError = require('../utils/RequestError');
const { userRoles } = require('../utils/staticData');

module.exports = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    const encrypted = md5(password);

    if (!user || encrypted !== user.password) {
      throw RequestError.userNotFound();
    }

    delete user.dataValues.password;

    const { id, role } = user;
    return {
      token: token.create({ id, role }),
      ...user,
    };
  },

  create: async (newUser) => {
    const { name, email, password, role: newRole } = newUser;

    const user = await User.findOne({ where: { email } });

    if (user) throw RequestError.emailAlreadyRegistered();

    const createdUser = await User.create({
      name,
      email,
      password: md5(password),
      role: newRole || userRoles.customer,
    });

    delete createdUser.dataValues.password;

    const { id, role } = createdUser;
    return {
      token: token.create({ id, role }),
      user: createdUser,
    };
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
