const saleRouter = require('express').Router();
const saleController = require('../controllers/sale.controller');
const auth = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');

saleRouter.get('/', saleController.findAll);

saleRouter.get('/statuses', saleController.getStatuses);

saleRouter.get('/user/:id', auth.any, saleController.findByUserId);

saleRouter.get('/user', auth.any, saleController.findByToken);

saleRouter.get('/:id', saleController.findOne);

saleRouter.post('/', auth.any, validate.newSale, saleController.create);

saleRouter.patch('/:id/:status', auth.any, validate.saleStatus, saleController.updateStatus);

module.exports = saleRouter;
