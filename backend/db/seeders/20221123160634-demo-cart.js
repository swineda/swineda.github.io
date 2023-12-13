'use strict';
// /** @type {import('sequelize-cli').Migration} */

// const demoCart = [
//   { id: 1 }
// ]

const demoCart = [
  {
    userId: 1,
    productId: 42,
  },
  {
    userId: 1,
    productId: 36,
  },
  {
    userId: 1,
    productId: 84,
  },
  {
    userId: 1,
    productId: 52,
  },
  {
    userId: 1,
    productId: 62,
  },
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Carts',
      demoCart,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Carts',
      { userId: 1 },
      {}
    )
  }
};
