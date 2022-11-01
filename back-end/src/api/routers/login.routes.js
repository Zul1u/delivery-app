const loginRouter = require('express').Router();
const userController = require('../controllers/user.controller');

loginRouter.post('/', userController.login);

module.exports = loginRouter;