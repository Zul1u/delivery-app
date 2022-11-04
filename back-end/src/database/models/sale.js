const { saleStatuses } = require("../../api/utils/staticData");

const Sale = (sequelize, DataTypes) => {
  
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.STRING,
    sellerId: DataTypes.STRING,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: saleStatuses.pendente,
    },
  }, {
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as: 'customer',
      foreignKey: 'userId',
    });
    Sale.belongsTo(models.User, {
      as: 'seller',
      foreignKey: 'sellerId',
    });
    Sale.hasMany(models.SaleProduct, {
      as: 'products',
    })
  };

  return Sale;
};

module.exports = Sale;