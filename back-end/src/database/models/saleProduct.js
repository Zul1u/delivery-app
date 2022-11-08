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
    tableName: 'sales_products',
  });

  SaleProduct.associate = (models) => {
    SaleProduct.belongsToMany(models.Sale, {
      as: 'sale',
      through: 'SaleProducts',
      foreignKey: 'saleId',
    });
    SaleProduct.belongsToMany(models.Product, {
      as: 'product',
      through: 'SaleProducts',
      foreignKey: 'productId',
    });
  };

  return SaleProduct;
};

module.exports = SaleProduct;
