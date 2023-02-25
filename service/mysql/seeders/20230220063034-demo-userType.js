'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usertypes', [{
      id: 1,
      name: 'Super Admin',
      isActive: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Admin',
      isActive: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Normal User',
      isActive: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usertypes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
