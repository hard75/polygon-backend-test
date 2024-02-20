/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Portable waterproof JBL',
        description: 'Portable waterproof speaker with built-in battery',
        imageUrl: 'waterproof.png',
        price: 754308,
        availableStock: 3,
        categoryId: 1
      },
      {
        name: 'JBL Tune 500',
        description: 'Over-ear wireless headphones',
        imageUrl: 'headphones.png',
        price: 94905,
        availableStock: 2,
        categoryId: 1
      },
      {
        name: 'JBL Quantum Stream',
        description: 'Premium dual USB microphone for streaming, recording, and gaming',
        imageUrl: 'microphone.png',
        price: 489900,
        availableStock: 2,
        categoryId: 1
      },
      {
        name: 'Smart Watch',
        description: 'Smart Watch Fitness Tracker Heart Rate Monitor, Pedometer,123 Sport Modes',
        imageUrl: 'smart-watch.png',
        price: 400000,
        availableStock: 3,
        categoryId: 2
      },
      {
        name: 'Laptop Computer',
        description: 'Windows 11 Laptop with IntelN95 Processor, 16GB DDR4 512GB SSD',
        imageUrl: 'laptop.png',
        price: 4000000,
        availableStock: 1,
        categoryId: 3
      },
      {
        name: 'PS5',
        description: 'PlayStation 5 Console -  Marvel’s Spider-Man 2 Bundle',
        imageUrl: 'ps5.png',
        price: 4200991,
        availableStock: 3,
        categoryId: 4
      },
      {
        name: 'Retro game console',
        description: 'Video Games and 2 Controllers, Mini Video Game 8-Bit Video Game System',
        imageUrl: 'nintendo.png',
        price: 113427,
        availableStock: 3,
        categoryId: 4
      },
      {
        name: 'Desk Chair',
        description: 'Desk Chair with Footrest, Lumbar Support Swivel Recliner Task Chair Video Game Chair.',
        imageUrl: 'chair.png',
        price: 113427,
        availableStock: 3,
        categoryId: 2
      }
    ], {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('products', {}, {});
  }
};
