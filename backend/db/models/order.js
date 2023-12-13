'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: 'userId' })
      // join table
      Order.belongsToMany(models.Product, { through: models.OrderDetail, foreignKey: 'orderId', otherKey: 'productId' })
    }
  }


  Order.init(
  {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: "Fulfilled",
      // validate: {
      //   len: [5, 50],
      // }
    },
    total: {
      allowNull: false,
      type: DataTypes.FLOAT,
      validate: {
        min: 0
      },
    },
  },


  {
    sequelize,
    modelName: 'Order',
  });


  return Order;
};
