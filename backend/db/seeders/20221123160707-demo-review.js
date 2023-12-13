'use strict';
// /** @type {import('sequelize-cli').Migration} */

// {
//   productId: ,
//   userId: , //
//   rating: ,
//   title: "",
//   description: "",
// },


const demoReviews = [
  /********************** 1. Personal Care **********************/
  // ✅ 11. ibuprofen
  {
    productId: 11,
    userId: 1, // Demo User "Smart Shopper"
    rating: 5,
    title: "our go to pain relief",
    description: "Aleve is our brand we have been using for years. Aches and pains? Stiff back? Kids giving you a headache? Two of these and you are good as new for hours. Product has not changed since we started taking. Love the easy open bottle.",
  },
  // ✅ 42. Nutella
  {
    productId: 42,
    userId: 1, // Demo User "Smart Shopper"
    rating: 5,
    title: "I can’t live without this",
    description: "Omg this is so good. The texture is rich and thick and so creamy. You can put it on toast use as a filling for cake put on fruit it goes well with so much. I would recommend this to everyone.",
  },
]


let prodIds = [];
demoReviews.forEach(review => {
  if (!prodIds.includes(review.productId)) {
    prodIds.push(review.productId)
  }
})


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Reviews',
      demoReviews,
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'Reviews',
      { productId: { [Op.in]: prodIds } }
    )
  }
};
