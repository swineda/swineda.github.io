'use strict';
// /** @type {import('sequelize-cli').Migration} */

const demoOrderDetails = [
  // Demo
  // total: 17.98
  {
    orderId: 1,
    productId: 42,
  },
  {
    orderId: 1,
    productId: 11,
  },
  // Bill
  // total: 1299.99
  {
    orderId: 2,
    productId: 50,
  },
  // Jeff
  // 2499.99
  {
    orderId: 3,
    productId: 49,
  },

  // Shane
  // 285.25
  {
    orderId: 4,
    productId: 1,
  },
  {
    orderId: 4,
    productId: 51,
  },
  {
    orderId: 4,
    productId: 88,
  },
  {
    orderId: 4,
    productId: 86,
  },
  {
    orderId: 4,
    productId: 40,
  },
  // Geoffrey
  // 2569.97
  {
    orderId: 5,
    productId: 49,
  },
  {
    orderId: 5,
    productId: 74,
  },
  {
    orderId: 5,
    productId: 34,
  },
  // Alec
  // 2499.99
  {
    orderId: 6,
    productId: 49,
  },
  // Dan
  // 2552.47
  {
    orderId: 7,
    productId: 45, // upd
  },
  {
    orderId: 7,
    productId: 49,
  },
  {
    orderId: 7,
    productId: 108,
  },
  // Brad
  // 177.36
  {
    orderId: 6,
    productId: 29,
  },
  {
    orderId: 6,
    productId: 52,
  },
  {
    orderId: 6,
    productId: 108,
  },
  {
    orderId: 6,
    productId: 17,
  },
  // Hector
  // 253.78
  {
    orderId: 7,
    productId: 44,
  },
  {
    orderId: 7,
    productId: 51,
  },
  // Cody
  // 274.87
  {
    orderId: 10,
    productId: 77,
  },
  {
    orderId: 10,
    productId: 78,
  },
  {
    orderId: 10,
    productId: 51,
  },
  // Cameron
  // 1320.98
  {
    orderId: 11,
    productId: 48,
  },
  {
    orderId: 11,
    productId: 50,
  },
  // Peter
  // 7.00
  {
    orderId: 12,
    productId: 18,
  },
  // Braxton
  // 2525.98
  {
    orderId: 13,
    productId: 73,
  },
  {
    orderId: 13,
    productId: 49,
  },
  // Jesse
  // 26.48
  {
    orderId: 14,
    productId: 86,
  },
  {
    orderId: 14,
    productId: 88,
  },
  // Jojo
  // 18.48
  {
    orderId: 15,
    productId: 10,
  },
  {
    orderId: 15,
    productId: 27,
  },
  {
    orderId: 15,
    productId: 43,
  },
  // Nick
  // 2897.96
  {
    orderId: 16,
    productId: 49,
  },
  {
    orderId: 16,
    productId: 57,
  },
  {
    orderId: 16,
    productId: 61,
  },
  {
    orderId: 16,
    productId: 69,
  },
  // Andrew Fava
  // 525.98
  {
    orderId: 17,
    productId: 73,
  },
  {
    orderId: 17,
    productId: 62,
  },
  // Ari
  // 109.27
  {
    orderId: 18,
    productId: 99,
  },
  {
    orderId: 18,
    productId: 47,
  },
  {
    orderId: 18,
    productId: 30,
  },
  // Sam
  // 10.97
  {
    orderId: 19,
    productId: 43,
  },
  {
    orderId: 19,
    productId: 46,
  },
  {
    orderId: 19,
    productId: 10,
  },
  // Tanner
  // 139.99
  {
    orderId: 20,
    productId: 67,
  },
  // Olivia
  // 279.98
  {
    orderId: 21,
    productId: 21,
  },
  {
    orderId: 21,
    productId: 51,
  },
  // Nate
  // 2879.34
  {
    orderId: 22,
    productId: 49,
  },
  {
    orderId: 22,
    productId: 69,
  },
  {
    orderId: 22,
    productId: 61,
  },
  {
    orderId: 22,
    productId: 37,
  },
  {
    orderId: 22,
    productId: 38,
  },
  {
    orderId: 22,
    productId: 46,
  },
  // Daniel Chin
  // 99.99
  {
    orderId: 23,
    productId: 52,
  },
  // Alex Pezzati
  // 188.77
  {
    orderId: 24,
    productId: 39,
  },
  {
    orderId: 24,
    productId: 108,
  },
  {
    orderId: 24,
    productId: 67,
  },
  // Sherry
  // 10.28
  {
    orderId: 25,
    productId: 105,
  },
  {
    orderId: 25,
    productId: 6,
  },
  {
    orderId: 25,
    productId: 9,
  },
  // Rawaha
  // 1333.97
  {
    orderId: 26,
    productId: 50,
  },
  {
    orderId: 26,
    productId: 85,
  },
  {
    orderId: 26,
    productId: 94,
  },
  // Whit
  // 22.99
  {
    orderId: 27,
    productId: 105,
  },
  {
    orderId: 27,
    productId: 27,
  },
  {
    orderId: 27,
    productId: 45, // UPD
  },
  // Daniel Flores
  // 4299.97
  {
    orderId: 28,
    productId: 49,
  },
  {
    orderId: 28,
    productId: 50,
  },
  {
    orderId: 28,
    productId: 63,
  },
  // David Nash
  // 1317.98
  {
    orderId: 29,
    productId: 5,
  },
  {
    orderId: 29,
    productId: 50,
  },
  // John Lee
  // 499.99
  {
    orderId: 30,
    productId: 63,
  },
  // Andrew Tran
  // 2.89
  {
    orderId: 31,
    productId: 77,
  },
  // Cesar
  // 1299.99
  {
    orderId: 32,
    productId: 50,
  },
  // Ryan Schneider
  // 3799.98
  {
    orderId: 33,
    productId: 49,
  },
  {
    orderId: 33,
    productId: 50,
  },
  // Anthony Lovern
  // 82.47
  {
    orderId: 34,
    productId: 45, // upd
  },
  {
    orderId: 34,
    productId: 108,
  },
  {
    orderId: 34,
    productId: 57,
  },
  // Franco
  // 599.98
  {
    orderId: 35,
    productId: 59,
  },
  {
    orderId: 35,
    productId: 62,
  },
  // Kevin
  // 999.98
  {
    orderId: 36,
    productId: 62,
  },
  {
    orderId: 36,
    productId: 63,
  },
  // David DeHerrera
  // 239.98
  {
    orderId: 37,
    productId: 59,
  },
  {
    orderId: 37,
    productId: 67,
  },
  // Drew
  // 110.27
  {
    orderId: 38,
    productId: 38,
  },
  {
    orderId: 38,
    productId: 40,
  },
  {
    orderId: 38,
    productId: 52,
  },
  // David Rogers
  // 111.76
  {
    orderId: 39,
    productId: 29,
  },
  {
    orderId: 39,
    productId: 87,
  },
  {
    orderId: 39,
    productId: 28,
  },
  {
    orderId: 39,
    productId: 30,
  },
  // Ryan Webster
  // 1399.99
  {
    orderId: 40,
    productId: 68,
  },
  // Jair
  // 389.98
  {
    orderId: 41,
    productId: 67,
  },
  {
    orderId: 41,
    productId: 51,
  },
  // Tiffany
  // 46.99
  {
    orderId: 42,
    productId: 48,
  },
  {
    orderId: 42,
    productId: 104,
  },
  {
    orderId: 42,
    productId: 105,
  },
  // Daniel Lam
  // 139.99
  {
    orderId: 43,
    productId: 67,
  },
  // Connor Lam
  // 19.99
  {
    orderId: 44,
    productId: 75,
  },

  // Gary
  // 370.97
  {
    orderId: 45,
    productId: 60,
  },
  {
    orderId: 45,
    productId: 48,
  },
  {
    orderId: 45,
    productId: 59,
  },
  // Jake M
  // 249.99
  {
    orderId: 46,
    productId: 51,
  },
  // John
  // 105.38
  {
    orderId: 47,
    productId: 41,
  },
  {
    orderId: 47,
    productId: 59,
  },
  // Maliha
  // 559.99
  {
    orderId: 48,
    productId: 98,
  },
  // Thenu
  // 199.98
  {
    orderId: 49,
    productId: 99,
  },
  {
    orderId: 49,
    productId: 52,
  },
  // Brennon
  // 30.48
  {
    orderId: 50,
    productId: 46,
  },
  {
    orderId: 50,
    productId: 73,
  },
  // Logan
  // 304.99
  {
    orderId: 51,
    productId: 70,
  },
  // Alex Klivecka
  // 2499.99
  {
    orderId: 52,
    productId: 49,
  },
  // Jackson
  // 27.98
  {
    orderId: 53,
    productId: 89,
  },
  {
    orderId: 53,
    productId: 48,
  },
  // Tom
  // 169.99
  {
    orderId: 54,
    productId: 96,
  },
  // Andrew Kim
  // 21.00
  {
    orderId: 55,
    productId: 104,
  },
  // Adam Selki
  // 389.98
  {
    orderId: 56,
    productId: 51,
  },
  {
    orderId: 56,
    productId: 67,
  },
  // Chris P
  // 5329.91
  {
    orderId: 57,
    productId: 49,
  },
  {
    orderId: 57,
    productId: 50, //
  },
  {
    orderId: 57,
    productId: 51, //
  },
  {
    orderId: 57,
    productId: 52, //
  },
  {
    orderId: 57,
    productId: 57, //
  },
  {
    orderId: 57,
    productId: 59, //
  },
  {
    orderId: 57,
    productId: 60, //
  },
  {
    orderId: 57,
    productId: 61, //
  },
  {
    orderId: 57,
    productId: 62, //
  },
  // Christo
  // 4359.97
  {
    orderId: 58,
    productId: 49,
  },
  {
    orderId: 58,
    productId: 50,
  },
  {
    orderId: 58,
    productId: 97,
  },
  // Cindy
  // 20.99
  {
    orderId: 59,
    productId: 48,
  },
  // David Burch
  // 55.99
  {
    orderId: 60,
    productId: 48,
  },
  {
    orderId: 60,
    productId: 100,
  },
  // Eliza
  // 1092.96
  {
    orderId: 61,
    productId: 27, //
  },
  {
    orderId: 61,
    productId: 35, //
  },
  {
    orderId: 61,
    productId: 48, //
  },
  {
    orderId: 61,
    productId: 97, //
  },
  {
    orderId: 61,
    productId: 99, //
  },
  // James Lee
  // 20.99
  {
    orderId: 62,
    productId: 48,
  },
  // Jason Kong
  // 313.97
  {
    orderId: 63,
    productId: 94, //
  },
  {
    orderId: 63,
    productId: 19, //
  },
  {
    orderId: 63,
    productId: 17, //
  },
  {
    orderId: 63,
    productId: 51, //
  },
  {
    orderId: 63,
    productId: 100, //
  },
  // Joanna
  // 24.88
  {
    orderId: 64,
    productId: 78,
  },
  {
    orderId: 64,
    productId: 77,
  },
  // Max
  // 699.99
  {
    orderId: 65,
    productId: 71,
  },
  // Moran
  // 38.87
  {
    orderId: 66,
    productId: 17,
  },
  {
    orderId: 66,
    productId: 48,
  },
  {
    orderId: 66,
    productId: 13,
  },
  {
    orderId: 66,
    productId: 14,
  },
  // Yasha
  // 49.98
  {
    orderId: 67,
    productId: 48,
  },
  {
    orderId: 67,
    productId: 27,
  },
  {
    orderId: 67,
    productId: 74,
  },
  // Yibo
  // 1561.85
  {
    orderId: 68,
    productId: 51, //
  },
  {
    orderId: 68,
    productId: 50, //
  },
  {
    orderId: 68,
    productId: 46, //
  },
  {
    orderId: 68,
    productId: 47, //
  },
  {
    orderId: 68,
    productId: 1, //
  },
  // Abel
  // 1399.99
  {
    orderId: 69,
    productId: 68,
  },
  // Aijia
  // 60.00
  {
   orderId: 70,
    productId: 26,
  },
  // Allen Pham
  // 79.95
  {
    orderId: 71,
    productId: 84,
  },
  // Andrew W
  // 2499.99
  {
    orderId: 72,
    productId: 49,
  },
  // Brad L
  //  59.99,
  {
    orderId: 73,
    productId: 65,
  },
  // Caleb
  // 105.98
  {
    orderId: 74,
    productId: 44,
  },
  {
    orderId: 64,
    productId: 44,
  },
  // Calvin
  // 99.99,
  {
    orderId: 75,
    productId: 66,
  },
  // Carmelino
  // 79.99,
  {
    orderId: 76,
    productId: 28,
  },
  // Jake Lamar
  {
    orderId: 77,
    productId: 24,
  },
  // Jason Arnold
  // 100.00
  {
    orderId: 78,
    productId: 72,
  },
  // Jason Premo
  // 8.99
  {
    orderId: 79,
    productId: 33,
  },
  // Jessie Baron
  // 399.99
  {
    orderId: 80,
    productId: 35,
  },
  // Justin
  // 1409.98
  {
    orderId: 81,
    productId: 90,
  },
  {
    orderId: 81,
    productId: 68,
  },
  // Keerthana
  // 52.89
  {
    orderId: 82,
    productId: 1,
  },
  {
    orderId: 82,
    productId: 50,
  },
  // Kelly
  // 5.00
  {
    orderId: 83,
    productId: 91,
  },
  // Kris
  // 119.99
  {
    orderId: 84,
    productId: 56,
  },
  // Matt Hutter
  // 324.99
  {
    orderId: 85,
    productId: 80,
  },
  // Na
  // 15.79
  {
    orderId: 86,
    productId: 36,
  },
  // Nate
  // 6.00
  {
    orderId: 87,
    productId: 20,
  },
  // Matt Baine
  // 2.59
  {
    orderId: 88,
    productId: 12,
  },
  // Sam
  // 99.99
  {
    orderId: 89,
    productId: 66,
  },
  // Schaeffer
  // 1299.99
  {
    orderId: 90,
    productId: 50,
  },
  // Sean Kennedy
  // 81.00
  {
    orderId: 91,
    productId: 101,
  },
  // Sebastian
  // 67.99,
  {
    orderId: 92,
    productId: 69,
  },
  // Simon
  // 59.99,
  {
    orderId: 93,
    productId: 65,
  },
  // Yasamine
  // 99.99,
  {
    orderId: 94,
    productId: 66,
  },
  // David Chou
  // 99.99,
  {
    orderId: 95,
    productId: 64,
  },
  // Gabe
  // 186.38
  {
    orderId: 96,
    productId: 96,
  },
  {
    orderId: 96,
    productId: 85,
  },
  // Erin
  // 220.15
  {
    orderId: 97,
    productId: 86,
  },
  {
    orderId: 97,
    productId: 88,
  },
  {
    orderId: 97,
    productId: 90,
  },
  {
    orderId: 97,
    productId: 92,
  },
  {
    orderId: 97,
    productId: 93,
  },
  {
    orderId: 97,
    productId: 96,
  },
  // Alex Auch
  // 249.99
  {
    orderId: 98,
    productId: 51,
  },
  // Alexis West
  // 119.99,
  {
    orderId: 99,
    productId: 56,
  },
  // Kevin Longboy
  // 100.00
  {
    orderId: 100,
    productId: 72,
  },

  /************************ SECOND ORDERS ************************/
  // Demo (second order)
  // 1299.99
  {
    orderId: 101,
    productId: 50,
  },
  // //
  // {
  //   orderId: ,
  //   productId: ,
  // },
]

let orderIds = [];
demoOrderDetails.forEach(order => {
  if (!orderIds.includes(order.orderId)) {
    orderIds.push(order.orderId)
  }
})

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'OrderDetails',
      demoOrderDetails
    )
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'OrderDetails',
      { orderId: { [Op.in]: orderIds } }
    )
  }
};
