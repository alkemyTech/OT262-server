'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [{
      image: 'https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text: 'Imagen del slide 1',
      order: 1,
      organizationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      image: 'https://seekewa.com/public/front/images/blog-img-01.jpg',
      text: 'Imagen del slide 2',
      order: 2,
      organizationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      image: 'https://espaciopymes.com/wp-content/uploads/2018/12/shutterstock_511307368-p10869-m53827-800x533_w100.jpg',
      text: 'Imagen del slide 3',
      order: 3,
      organizationId: 1,
      createdAt: new Date,
      updatedAt: new Date
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
