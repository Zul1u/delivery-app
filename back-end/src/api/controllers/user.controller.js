import userService from '../services/user.service';

export default {
  login: async (req, res) => {
    const { body: login } = req;
    const token = await userService.login(login);
    return res.status(200).json({ token });
  },

  create: async (req, res) => {
    const { body: newUser } = req;
    const token = await userService.create(newUser);
    res.status(201).json({ token });
  },

  findAll: async (_req, res) => {
    const users = await userService.findAll();
    res.status(200).json(users);
  },

  findOne: async (req, res) => {
    const { params: { id } } = req;
    const user = await userService.findOne(id);
    res.status(200).json(user);
  },

  deleteOne: async (req, res) => {
    const { params: { id } } = req;
    await userService.deleteOne(id);
    res.status(204).json();
  },
};
