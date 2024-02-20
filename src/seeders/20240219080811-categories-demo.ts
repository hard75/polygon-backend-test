/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('categories', [
      { name: "sound" },
      { name: "accesory" },
      { name: "computer" },
      { name: "console" }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('categories', {}, {});
  }
};