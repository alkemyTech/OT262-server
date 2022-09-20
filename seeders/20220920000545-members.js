'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', [
      {
        id: 1,
        name: 'Julian Fernandez',
        rol: 'CEO / Funder',
        image: 'https://simpliusados.com/wp-content/uploads/2020/07/Rect%C3%A1ngulo-610-300x300.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 2,
        name: 'Moria Fich',
        rol: 'CEO / Funder',
        image: 'https://simpliusados.com/wp-content/uploads/2020/07/Rect%C3%A1ngulo-609-300x300.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 3,
        name: 'Abril Gonzalez',
        rol: 'CEO / CoFunder',
        image: 'https://simpliusados.com/wp-content/uploads/2020/06/Rect%C3%A1ngulo-1542-300x300.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 4,
        name: 'Kevin Kourch',
        rol: 'Developer',
        image: 'https://simpliusados.com/wp-content/uploads/2020/07/Rect%C3%A1ngulo-603-300x300.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 5,
        name: 'Nicolas Marquez',
        rol: 'Developer',
        image: 'https://simpliusados.com/wp-content/uploads/2020/06/Rect%C3%A1ngulo-1547-300x300.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 6,
        name: 'Fiorena Altamira',
        rol: 'Developer',
        image: 'https://wsi-prod.s3.amazonaws.com/image/654/large.jpg?1563291140',
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
