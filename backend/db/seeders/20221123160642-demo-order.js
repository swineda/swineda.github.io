'use strict';
// /** @type {import('sequelize-cli').Migration} */

const demoOrders = [
  // Demo
  {
    userId: 1,
    status: "Fulfilled",
    total: 17.98,
  },
  // Bill
  {
    userId: 2,
    status: "Fulfilled",
    total: 1299.99,
  },
  // Jeff
  {
    userId: 3,
    status: "Fulfilled",
    total: 2499.99,
  },
  // Shane
  {
    userId: 4,
    status: "Fulfilled",
    total: 285.25,
  },
  // Geoffrey
  {
    userId: 5,
    status: "Fulfilled",
    total: 2569.97,
  },
  // Alec
  {
    userId: 6,
    status: "Fulfilled",
    total: 2499.99,
  },
  // Dan
  {
    userId: 7,
    status: "Fulfilled",
    total: 2552.47,
  },
  // Brad
  {
    userId: 8,
    status: "Fulfilled",
    total: 177.36,
  },
  // Hector
  {
    userId: 9,
    status: "Fulfilled",
    total: 253.78,
  },
  // Cody
  {
    userId: 10,
    status: "Fulfilled",
    total: 274.87,
  },
  // Cameron
  {
    userId: 11,
    status: "Fulfilled",
    total: 1320.98,
  },
  // Peter
  {
    userId: 12,
    status: "Fulfilled",
    total: 7.00,
  },
  // Braxton
  {
    userId: 13,
    status: "Fulfilled",
    total: 2525.98,
  },
  // Jesse
  {
    userId: 14,
    status: "Fulfilled",
    total: 26.48,
  },
  // Jojo
  {
    userId: 15,
    status: "Fulfilled",
    total: 18.48,
  },
  // Nick
  {
    userId: 16,
    status: "Fulfilled",
    total: 2897.96,
  },
  // Andrew
  {
    userId: 17,
    status: "Fulfilled",
    total: 525.98,
  },
  // Ari
  {
    userId: 18,
    status: "Fulfilled",
    total: 109.27,
  },
  // Sam
  {
    userId: 19,
    status: "Fulfilled",
    total: 10.97,
  },
  // Tanner
  {
    userId: 20,
    status: "Fulfilled",
    total: 139.99,
  },
  // Olivia
  {
    userId: 21,
    status: "Fulfilled",
    total: 279.98,
  },
  // Nate
  {
    userId: 22,
    status: "Fulfilled",
    total: 2879.34,
  },
  // Daniel Chin
  {
    userId: 23,
    status: "Fulfilled",
    total: 99.99,
  },
  // Alex Pezzati
  {
    userId: 24,
    status: "Fulfilled",
    total: 188.77,
  },
  // Sherry
  {
    userId: 25,
    status: "Fulfilled",
    total: 10.28,
  },
  // Rawaha
  {
    userId: 26,
    status: "Fulfilled",
    total: 1333.97,
  },
  // Whit
  {
    userId: 27,
    status: "Fulfilled",
    total: 22.99,
  },
  // Daniel Flores
  {
    userId: 28,
    status: "Fulfilled",
    total: 4299.97,
  },
  // David Nash
  {
    userId: 29,
    status: "Fulfilled",
    total: 1317.98,
  },
  // John Lee
  {
    userId: 30,
    status: "Fulfilled",
    total: 499.99,
  },
  // Andrew Tran
  {
    userId: 31,
    status: "Fulfilled",
    total: 2.89,
  },
  // Cesar
  {
    userId: 32,
    status: "Fulfilled",
    total: 1299.99,
  },
  // Ryan Schneider
  {
    userId: 33,
    status: "Fulfilled",
    total: 3799.98,
  },
  // Anthony
  {
    userId: 34,
    status: "Fulfilled",
    total: 82.47,
  },
  // Franco
  {
    userId: 35,
    status: "Fulfilled",
    total: 599.98,
  },
  // Kevin
  {
    userId: 36,
    status: "Fulfilled",
    total: 999.98,
  },
  // David DeHerrera
  {
    userId: 37,
    status: "Fulfilled",
    total: 239.98,
  },
  // Drew
  {
    userId: 38,
    status: "Fulfilled",
    total: 110.27,
  },
  // David Rogers
  {
    userId: 39,
    status: "Fulfilled",
    total: 111.76,
  },
  // Ryan Webster
  {
    userId: 40,
    status: "Fulfilled",
    total: 1399.99,
  },
  // Jair
  {
    userId: 41,
    status: "Fulfilled",
    total: 389.98,
  },
  // Tiffany
  {
    userId: 42,
    status: "Fulfilled",
    total: 46.99,
  },
  // Daniel Lam
  {
    userId: 43,
    status: "Fulfilled",
    total: 139.99,
  },
  // Connor Lam
  {
    userId: 44,
    status: "Fulfilled",
    total: 19.99,
  },
  // Gary
  {
    userId: 45,
    status: "Fulfilled",
    total: 370.97,
  },
  // Jake
  {
    userId: 46,
    status: "Fulfilled",
    total: 249.99,
  },
  // John
  {
    userId: 47,
    status: "Fulfilled",
    total: 105.38,
  },
  // Maliha
  {
    userId: 48,
    status: "Fulfilled",
    total: 559.99,
  },
  // Thenu
  {
    userId: 49,
    status: "Fulfilled",
    total: 199.98,
  },
  // Brennon
  {
    userId: 50,
    status: "Fulfilled",
    total: 30.48,
  },
  // Logan
  {
    userId: 51,
    status: "Fulfilled",
    total: 304.99,
  },
  // Alex Klivecka
  {
    userId: 52,
    status: "Fulfilled",
    total: 2499.99,
  },
  // Jackson
  {
    userId: 53,
    status: "Fulfilled",
    total: 27.98,
  },
  // Tom
  {
    userId: 54,
    status: "Fulfilled",
    total: 169.99,
  },
  // Andrew Kim
  {
    userId: 55,
    status: "Fulfilled",
    total: 21.00,
  },
  // Adam
  {
    userId: 56,
    status: "Fulfilled",
    total: 389.98,
  },
  // Chris P
  {
    userId: 57,
    status: "Fulfilled",
    total: 5329.91,
  },
  // Christo
  {
    userId: 58,
    status: "Fulfilled",
    total: 4359.97,
  },
  // Cindy
  {
    userId: 59,
    status: "Fulfilled",
    total: 20.99,
  },
  // David Burch
  {
    userId: 60,
    status: "Fulfilled",
    total: 55.99,
  },
  // Eliza
  {
    userId: 61,
    status: "Fulfilled",
    total: 1092.96,
  },
  // James
  {
    userId: 62,
    status: "Fulfilled",
    total: 20.99,
  },
  // Jason Kong
  {
    userId: 63,
    status: "Fulfilled",
    total: 313.97,
  },
  // Joanna
  {
    userId: 64,
    status: "Fulfilled",
    total: 24.88,
  },
  // Max
  {
    userId: 65,
    status: "Fulfilled",
    total: 699.99,
  },
  // Moran
  {
    userId: 66,
    status: "Fulfilled",
    total: 38.87,
  },
  // Yasha
  {
    userId: 67,
    status: "Fulfilled",
    total: 49.98,
  },
  // Yibo
  {
    userId: 68,
    status: "Fulfilled",
    total: 1561.85,
  },
  // Abel
  {
    userId: 69,
    status: "Fulfilled",
    total: 1399.99,
  },
  // Aijia
  {
    userId: 70,
    status: "Fulfilled",
    total: 60.00,
  },
  // Allen Pham
  {
    userId: 71,
    status: "Fulfilled",
    total: 79.95,
  },
  // Andrew W
  {
    userId: 72,
    status: "Fulfilled",
    total: 2499.99,
  },
  // Brad L
  {
    userId: 73,
    status: "Fulfilled",
    total:  59.99,
  },
  // Caleb
  {
    userId: 74,
    status: "Fulfilled",
    total: 105.98,
  },
  // Calvin
  {
    userId: 75,
    status: "Fulfilled",
    total: 99.99,
  },
  // Carmelino
  {
    userId: 76,
    status: "Fulfilled",
    total: 79.99,
  },
  // Jake Lamar
  {
    userId: 77,
    status: "Fulfilled",
    total: 49.99,
  },
  // Jason Arnold
  {
    userId: 78,
    status: "Fulfilled",
    total: 100.00,
  },
  // Jason Premo
  {
    userId: 79,
    status: "Fulfilled",
    total: 8.99,
  },
  // Jessie Baron
  {
    userId: 80,
    status: "Fulfilled",
    total: 399.99,
  },
  // Justin
  {
    userId: 81,
    status: "Fulfilled",
    total: 1409.98,
  },
  // Keerthana
  {
    userId: 82,
    status: "Fulfilled",
    total: 52.89,
  },
  // Kelly
  {
    userId: 83,
    status: "Fulfilled",
    total: 5.00,
  },
  // Kris
  {
    userId: 84,
    status: "Fulfilled",
    total: 119.99,
  },
  // Matt Hutter
  {
    userId: 85,
    status: "Fulfilled",
    total: 324.99,
  },
  // Na
  {
    userId: 86,
    status: "Fulfilled",
    total: 15.79,
  },
  // Nate
  {
    userId: 87,
    status: "Fulfilled",
    total: 6.00,
  },
  // Matt Baine
  {
    userId: 88,
    status: "Fulfilled",
    total: 2.59,
  },
  // Sam
  {
    userId: 89,
    status: "Fulfilled",
    total: 99.99,
  },
  // Schaeffer
  {
    userId: 90,
    status: "Fulfilled",
    total: 1299.99,
  },
  // Sean Kennedy
  {
    userId: 91,
    status: "Fulfilled",
    total: 81.00,
  },
  // Sebastian
  {
    userId: 92,
    status: "Fulfilled",
    total: 67.99,
  },
  // Simon
  {
    userId: 93,
    status: "Fulfilled",
    total: 59.99,
  },
  // Yasamine
  {
    userId: 94,
    status: "Fulfilled",
    total: 66,
  },
  // David Chou
  {
  userId: 95,
  status: "Fulfilled",
  total: 99.99,
  },
  // Gabe
  {
  userId: 96,
  status: "Fulfilled",
  total: 186.38,
  },
  // Erin
  {
  userId: 97,
  status: "Fulfilled",
  total: 220.15,
  },
  // Alex Auch
  {
  userId: 98,
  status: "Fulfilled",
  total: 249.99,
  },
  // Alexis West
  {
  userId: 99,
  status: "Fulfilled",
  total: 119.99,
  },
  // Kevin Longboy
  {
  userId: 100,
  status: "Fulfilled",
  total: 100.00,
  },

  /************************ SECOND ORDERS ************************/

  // Demo (second order)
  {
    // id: 101
    userId: 1,
    status: "Fulfilled",
    total: 1299.99,
  },
]




let userIds = [];
demoOrders.forEach(order => userIds.push(order.userId))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Orders',
      demoOrders,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Orders',
      { userId: { [Op.in]: userIds } },
      {}
    )
  }
};
