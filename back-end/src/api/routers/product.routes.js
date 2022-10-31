const productRouter = require('express').Router();
const productController = require('../controllers/product.controller');

productRouter.get('/', productController.findAll);

productRouter.get('/:id', productController.findOne);

module.exports = productRouter;