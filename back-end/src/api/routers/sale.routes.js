const saleRouter = require('express').Router();
const saleController = require('../controllers/sale.controller');

saleRouter.get('/', saleController.findAll);

saleRouter.get('/:id', saleController.findOne);

saleRouter.get('/statuses', saleController.getStatuses);

saleRouter.get('/user/:id', saleController.findByUserId);

saleRouter.post('/', saleController.create);

saleRouter.patch('/:id/:status', saleController.updateStatus);

module.exports = saleRouter;