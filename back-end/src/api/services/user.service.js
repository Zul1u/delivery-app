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
    
    const { id, name, role } = user;
    return {
      token: token.create({ id, role }),
      user: { id, name, email, role },
    };
  },

  create: async (newUser) => {
    const { email, password, role: newRole } = newUser;
    const user = await User.findOne({ where: { email } });

    if (user) throw RequestError.emailAlreadyRegistered();

    newUser.role = newRole || userRoles.customer;
    newUser.password = md5(password);

    const createdUser = await User.create(newUser);

    const { id, name, role } = createdUser;
    return {
      token: token.create({ id, role }),
      user: { id, name, email, role },
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
