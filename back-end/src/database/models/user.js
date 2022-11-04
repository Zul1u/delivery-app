const User = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      as: 'purchases',
      foreignKey: 'userId',
    });

    User.hasMany(models.Sale, {
      as: 'sales',
      foreignKey: 'sellerId',
    });
  };

  return User;
};

module.exports = User;
