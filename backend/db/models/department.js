'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.hasMany(models.Product, { foreignKey: 'departmentId' , onDelete: 'CASCADE', hooks: true})
    }
  }


  Department.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 100],
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
  },


  {
    sequelize,
    modelName: 'Department',
  });


  return Department;
};
