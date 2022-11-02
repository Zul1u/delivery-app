const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');

userRouter.get('/', userController.findAll);

userRouter.get('/:id', userController.findOne);

userRouter.get('/roles', userController.getRoles);

userRouter.post('/', validate.newUser, userController.create);

userRouter.delete('/:id', auth.admin, userController.deleteOne);

module.exports = userRouter;