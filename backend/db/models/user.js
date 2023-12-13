'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {

  class User extends Model {

    toSafeObject() {
      const { id, username, email } = this; // context will be the User instance
      return { id, username, email };
    };

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    }

    // LOGIN
    static async login({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    };

    static async signup({ firstName, lastName, username, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        hashedPassword,
        url: 'linkedin.com/in/kevinlongboy/',
      });
      return await User.scope('currentUser').findByPk(user.id);
    };


    static associate(models) {
      // define association here
      User.hasMany(models.Order, { foreignKey: 'userId' , onDelete: 'CASCADE', hooks: true }),
      User.hasMany(models.Review, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }),
      User.hasMany(models.SeedReview, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }),
      // join table
      User.belongsToMany(models.Product, { through: models.Cart , foreignKey: 'userId', otherKey: 'productId'}),
      User.belongsToMany(models.Product, { through: models.Favorite , foreignKey: 'userId', otherKey: 'productId'})
    }
  };


  User.init(
    {
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isAlpha: true,
          len: [2, 50]
        }
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isAlpha: true,
          len: [2, 50]
        }
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [2, 50],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          len: [2, 150]
        }
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   isUrl: true,
        // }
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
        validate: {
          len: [60, 60]
        }
      }
    },


    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          // exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
          exclude: ["hashedPassword", "email", "updatedAt"]
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );
  return User;
};
