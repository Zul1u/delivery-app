const SaleProduct = (sequelize, DataTypes) => {
  
  const SaleProduct = sequelize.define('SaleProduct', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
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
