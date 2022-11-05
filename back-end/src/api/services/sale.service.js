const { Sale, Product, SaleProduct } = require('../../database/models');
const RequestError = require('../utils/RequestError');

const formatSale = (sale) => ({
  ...sale,
  products: sale.products
    .map(({ id, name, price, urlImage, SaleProduct: { quantity } }) => ({
      id, name, price, urlImage, quantity,
  })),
});

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

  findAll: async () => {
    const sales = await Sale.findAll({
      include: [
        { model: Product, as: 'products' },
      ],
    });

    return sales
      .map((sale) => sale.get({ plain: true }))
      .map(formatSale);
  },

  findOne: async (id) => {
    const sale = await Sale.findOne({
      where: { id },
      include: [
        { model: Product, as: 'products' },
      ],
    });

    if (!sale) throw RequestError.saleNotFound();

    return formatSale(sale.get({ plain: true }));
  },

  findByUserId: async (id) => {
    const allSales = await Sale.findAll();
    return allSales
      .filter((sale) => sale.userId === +id || sale.sellerId === +id)
      .map((sale) => sale.get({ plain: true }))
      .map(formatSale);
  },

  updateStatus: async ({ id, status }) => {
    const sale = await Sale.findByPk(id);

    if (!sale) throw RequestError.saleNotFound();

    sale.set({ status });
    await sale.save();

    return formatSale(sale.get({ plain: true }));
  },
};
