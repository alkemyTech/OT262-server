'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [{
      imageUrl: 'Imagen del slide 1',
      text: 'Texto del slide 2',
      order: 1,
      organizationId: 1
    },
    {
      imageUrl: 'Imagen del slide 2',
      text: 'Texto del slide 2',
      order: 2,
      organizationId: 1
    },
    {
      imageUrl: 'Imagen del slide 3',
      text: 'Texto del slide 3',
      order: 3,
      organizationId: 1
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
