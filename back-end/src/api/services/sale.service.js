const { Sale } = require('../../database/models');
const RequestError = require('../utils/RequestError');

module.exports = {
  create: async (newSale) => Sale.create(newSale),

  findAll: async () => Sale.findAll(),

  findOne: async (id) => {
    const sale = await Sale.findOne({
      where: { id },
    });

    if (!sale) throw RequestError.saleNotFound();

    return sale;
  },

  findByUserId: async (userId) => {
    const allSales = await Sale.findAll();
    return allSales
      .filter((sale) => sale.clientId === userId || sale.sellerId === userId);
  },

  updateStatus: async ({ id, status }) => {
    const sale = await Sale.findByPk(id);

    if (!sale) throw RequestError.saleNotFound();

    sale.set({ status });
    await sale.save();

    return sale;
  },
};
