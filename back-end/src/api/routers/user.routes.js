const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');

userRouter.get('/', userController.findAll);

userRouter.get('/:id', userController.findOne);

userRouter.post('/', userController.create);

userRouter.delete('/:id', userController.deleteOne);

module.exports = userRouter;