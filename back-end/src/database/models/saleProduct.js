const SaleProduct = (sequelize, DataTypes) => {
  
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
  });

  return SaleProduct;
};

module.exports = SaleProduct;
