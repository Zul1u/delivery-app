const { Sale, Product, SaleProduct } = require('../../database/models');
const RequestError = require('../utils/RequestError');

module.exports = {
  create: async (newSale) => {
    const { userId, sellerId, deliveryAddress, deliveryNumber, products: bought } = newSale;
    const productsIds = Object.keys(bought);
    const products = await Product.findAll({ where: { id: productsIds }, raw: true });

    if (products.length !== productsIds.length) throw RequestError.productNotFound();

    const totalPrice = products
      .map((product) => product.price * bought[product.id])
      .reduce((acc, mult) => acc + mult, 0);

    const created = await Sale.create({
      userId, sellerId, deliveryAddress, deliveryNumber, totalPrice,
    });

    const salesProducts = products
      .map((prod) => ({ saleId: created.id, productId: prod.id, quantity: bought[prod.id] }));
    
    await SaleProduct.bulkCreate(salesProducts);

    return created;
  },

  findAll: async () => Sale.findAll({
    include: [
      {
        model: SaleProduct,
        as: 'products',
        attributes: { exclude: ['saleId', 'SaleId'] },
      },
    ],
  }),

  findOne: async (id) => {
    const sale = await Sale.findOne({
      where: { id },
      include: [
        {
          model: SaleProduct,
          as: 'products',
          attributes: { exclude: ['saleId', 'SaleId'] },
        },
      ],
    });

    if (!sale) throw RequestError.saleNotFound();

    return sale;
  },

  findByUserId: async (id) => {
    const allSales = await Sale.findAll();
    return allSales
      .filter((sale) => sale.userId === +id || sale.sellerId === +id);
  },

  updateStatus: async ({ id, status }) => {
    const sale = await Sale.findByPk(id);

    if (!sale) throw RequestError.saleNotFound();

    sale.set({ status });
    await sale.save();

    return sale;
  },
};
