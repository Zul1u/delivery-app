const { StatusCodes } = require('http-status-codes');
const productService = require('../services/product.service');

module.exports = {
  findAll: async (_req, res) => {
    const products = await productService.findAll();
    res.status(StatusCodes.OK).json(products);
  },

  findOne: async (req, res) => {
    const { params: { id } } = req;
    const product = await productService.findOne(id);
    res.status(StatusCodes.OK).json(product);
  },
};
