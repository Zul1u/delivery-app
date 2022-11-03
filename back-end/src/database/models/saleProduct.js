const SaleProduct = (sequelize, DataTypes) => {
  
  const SaleProduct = sequelize.define('SaleProduct', {
    sale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
  });

  SaleProduct.associate = (models) => {
    SaleProduct.belongsToMany(models.Sale, {
      as: 'sale',
      through: 'SalesProducts',
      foreignKey: 'saleId',
    });
    SaleProduct.belongsToMany(models.Product, {
      as: 'product',
      through: 'SalesProducts',
      foreignKey: 'productId',
    });
  };

  return SaleProduct;
};

module.exports = SaleProduct;
