'use strict';

const department = require("../models/department");

// /** @type {import('sequelize-cli').Migration} */

const demoDepartments = [
  {
    id: 1,
    name: "Personal Care",
    url: 'https://target.scene7.com/is/image/Target/_PersonalCare-210211-1613075597693?wid=315&hei=315&qlt=60&fmt=pjpeg', // razor
    // url: 'https://target.scene7.com/is/image/Target/Beauty181103-190722_1563828945271?wid=315&hei=315&qlt=60&fmt=webp', // cosmetics
    // url: 'https://target.scene7.com/is/image/Target/CatNav_Health224023-200414_1586881894467?wid=315&hei=315&qlt=60&fmt=pjpeg' // first aid
  },
  {
    id: 2,
    name: "Home",
    url: 'https://target.scene7.com/is/image/Target/HouseholdEssentials_Tide-200519-1589915606672?wid=315&hei=315&qlt=60&fmt=webp', // name brand detergent
    // url: 'https://target.scene7.com/is/image/Target/HouseholdEssentials_Everspring-210913-1631563963197?wid=315&hei=315&qlt=60&fmt=pjpeg' // store brand detergent
  },
  {
    id: 3,
    name: "Kitchen & Dining",
    url: 'https://target.scene7.com/is/image/Target/KitchenDining-210913-1631564122569?wid=315&hei=315&qlt=60&fmt=webp' // stand mixer
  },
  {
    id: 4,
    name: "Grocery",
    url: 'https://target.scene7.com/is/image/Target/Grocery219475-200305_1583423555572?wid=315&hei=315&qlt=60&fmt=webp' // avocado
  },
  {
    id: 5,
    name: "Electronics",
    url: 'https://target.scene7.com/is/image/Target/GUEST_e3b11a2a-a085-4693-853f-c19e52073c94?wid=315&hei=315&qlt=60&fmt=webp', // iPhone
    // url: 'https://target.scene7.com/is/image/Target/Electronics219475-200305_1583423525490?wid=315&hei=315&qlt=60&fmt=pjpeg', // headphones
  },
  {
    id: 6,
    name: "Video Games",
    url: 'https://target.scene7.com/is/image/Target/Sept_Wk5-0930-Video_Games-Nintendo-CB-Consoles143381-180910_1536591280324?wid=315&hei=315&qlt=60&fmt=webp' // console
  },
  {
    id: 7,
    name: "Sports & Outdoors",
    url: 'https://target.scene7.com/is/image/Target/Sports_Outdoors219475-200305_1583425943604?wid=315&hei=315&qlt=60&fmt=webp' // bike
  },
  {
    id: 8,
    name: "Pets",
    url: 'https://target.scene7.com/is/image/Target/Pets219475-200305_1583423545822?wid=315&hei=315&qlt=60&fmt=pjpeg', // dog
    // url: 'https://target.scene7.com/is/image/Target/Toys219475-200305_1583423532760?wid=315&hei=315&qlt=60&fmt=webp' // toys
  },
  {
    id: 9,
    name: "Furniture",
    url: 'https://target.scene7.com/is/image/Target/Furniture-210913-1631566212856?wid=315&hei=315&qlt=60&fmt=webp', // chair
    // url: "https://target.scene7.com/is/image/Target/Home-210913-1631565727228?wid=315&hei=315&qlt=60&fmt=pjpeg", // lamp
    // url: 'https://target.scene7.com/is/image/Target/PatioGarden-210913-1631564082284?wid=315&hei=315&qlt=60&fmt=webp' // patio
    // url: 'https://target.scene7.com/is/image/Target/5xto8-storageorg-QUIVER-190331-1554085362525?wid=315&hei=315&qlt=60&fmt=webp' // storage
  },
  // {
  //   id: 10,
  //   name: "Clearance",
  //   url: 'https://target.scene7.com/is/image/Target/clearance97188-171020_1508525411214?wid=315&hei=315&qlt=60&fmt=webp' // clearance
  // },
  {
    id: 10,
    name: "Holiday",
    url: 'https://target.scene7.com/is/image/Target/Gift_Ideas1-211006-1633537219287?wid=315&hei=315&qlt=60&fmt=webp', // holiday gifting
    // url: 'https://target.scene7.com/is/image/Target/GUEST_1e9c2dae-e2d0-4ad6-bfe3-34101faf1da4?wid=315&hei=315&qlt=60&fmt=webp', // valentine's
    // url: 'https://target.scene7.com/is/image/Target/CatNav_EvergreenGifting-200831-1598899914929?wid=315&hei=315&qlt=60&fmt=pjpeg', // general gifting
    // url: 'https://target.scene7.com/is/image/Target/top_deals_03120050-180328_1522253536879?wid=315&hei=315&qlt=60&fmt=pjpeg', // top deals
    // url: 'https://target.scene7.com/is/image/Target/Electronics_Circle-210302-1614721527363?wid=315&hei=315&qlt=60&fmt=pjpeg', // mascot + car
    // url: 'https://target.scene7.com/is/image/Target/finds105040-171025_1508959860693?wid=315&hei=315&qlt=60&fmt=pjpeg', // finds
    // url: 'https://target.scene7.com/is/image/Target/GUEST_fffb3f0c-2cea-4853-b1fb-2cf9c3849484?wid=315&hei=315&qlt=60&fmt=webp' // men
  },
]

let names = [];
demoDepartments.forEach(department => names.push(department.name))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Departments',
      demoDepartments,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Departments',
      { name: { [Op.in]: names } },
      {}
    )
  }
};
