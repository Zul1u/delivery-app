const Product = (sequelize, DataTypes) => {
  
  const Product = sequelize.define('Product', {
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

  Product.associate = (models) => {
    Product.belongsToMany(models.Sale, {
      through: models.SaleProduct,
      as: 'sales',
    });
  };

  return Product;
};

module.exports = Product;
