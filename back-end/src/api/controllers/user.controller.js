const { StatusCodes } = require('http-status-codes');
const userService = require('../services/user.service');
const { userRoles } = require('../utils/staticData');

module.exports = {
  login: async (req, res) => {
    const { body: login } = req;
    const result = await userService.login(login);
    return res.status(StatusCodes.OK).json(result);
  },

  create: async (req, res) => {
    const { body: newUser } = req;
    const created = await userService.create(newUser);
    res.status(StatusCodes.CREATED).json(created);
  },

  findAll: async (_req, res) => {
    const users = await userService.findAll();
    res.status(StatusCodes.OK).json(users);
  },

  findOne: async (req, res) => {
    const { params: { id } } = req;
    const user = await userService.findOne(id);
    res.status(StatusCodes.OK).json(user);
  },

  deleteOne: async (req, res) => {
    const { params: { id } } = req;
    await userService.deleteOne(id);
    res.status(StatusCodes.NO_CONTENT).json();
  },

  getRoles: async (_req, res) => {
    res.status(StatusCodes.OK).json(userRoles);
  },
};
