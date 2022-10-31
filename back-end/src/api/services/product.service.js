const Product = require('../../database/models/product');
const RequestError = require('../utils/RequestError');

module.exports = {
  findAll: async () => Product.findAll(),

  findOne: async (id) => {
    const product = await Product.findOne({
      where: { id },
    });

    if (!product) throw RequestError.productNotFound();

    return product;
  },
};
