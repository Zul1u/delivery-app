const { Sale } = require('../../database/models');
const RequestError = require('../utils/RequestError');

module.exports = {
  create: async (newSale) => Sale.create(newSale),

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
      .filter((sale) => sale.clientId === +id || sale.sellerId === +id);
  },

  updateStatus: async ({ id, status }) => {
    const sale = await Sale.findByPk(id);

    if (!sale) throw RequestError.saleNotFound();

    sale.set({ status });
    await sale.save();

    return sale;
  },
};
