'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.ProductImage, { foreignKey:'productId', onDelete: 'CASCADE', hooks: true })
      Product.hasMany(models.Review, { foreignKey:'productId', onDelete: 'CASCADE', hooks: true })
      Product.hasMany(models.SeedReview, { foreignKey:'productId', onDelete: 'CASCADE', hooks: true })
      Product.belongsTo(models.Department, { foreignKey: 'departmentId' })
      // join table
      Product.belongsToMany(models.User, { through: models.Cart, foreignKey: 'productId', otherKey: 'userId' })
      Product.belongsToMany(models.User, { through: models.Favorite, foreignKey: 'productId', otherKey: 'userId' })
      Product.belongsToMany(models.Order, { through: models.OrderDetail , foreignKey: 'productId', otherKey: 'orderId'})
    }
  }


  Product.init(
    {
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 150],
      }
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 70],
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 800],
      }
    }
  },


  {
    sequelize,
    modelName: 'Product',
  });


  return Product;
};
