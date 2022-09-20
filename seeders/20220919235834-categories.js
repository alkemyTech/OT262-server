'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Categoria 1',
        description: 'Lorem Ipsum is simply dummy text of the printing...',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 2,
        name: 'Categoria 2',
        description: 'Lorem Ipsum is simply dummy text of the printing...',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 3,
        name: 'Categoria 3',
        description: 'Lorem Ipsum is simply dummy text of the printing...',
        createdAt: new Date,
        updatedAt: new Date
      },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
