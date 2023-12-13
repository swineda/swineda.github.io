'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class SeedReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SeedReview.belongsTo(models.Product, { foreignKey: 'productId' })
      SeedReview.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }

  
  SeedReview.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          min: 1,
          max: 5,
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [20, 800]
        },
      },
    },

    {
    sequelize,
    modelName: 'SeedReview',
    }
  );


  return SeedReview;
};
