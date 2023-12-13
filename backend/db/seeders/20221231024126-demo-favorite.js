'use strict';
/** @type {import('sequelize-cli').Migration} */

  // {
  //   userId: 1,
  //   productId: ,
  // },

const demoFavorites = [
  // row 1
  {
    userId: 1,
    productId: 6, // SoftLips
  },
  {
    userId: 1,
    productId: 42, // Nutella
  },
  {
    userId: 1,
    productId: 40, // Kerrygold
  },
  {
    userId: 1,
    productId: 48, // Meiomi
  },
  // row 2
  {
    userId: 1,
    productId: 27, // Wine glasses
  },
  {
    userId: 1,
    productId: 75, // Tennis racket
  },
  {
    userId: 1,
    productId: 60, // Eufy robovac
  },
  {
    userId: 1,
    productId: 59, // Hue lights
  },
  // row 3
  {
    userId: 1,
    productId: 51, // Airpods
  },
  {
    userId: 1,
    productId: 52, // HomePod
  },
  {
    userId: 1,
    productId: 72, // Steam
  },
  {
    userId: 1,
    productId: 61, // Xbox
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Favorites',
      demoFavorites,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Favorites',
      { userId: 1 },
      {}
    )
  }
};
