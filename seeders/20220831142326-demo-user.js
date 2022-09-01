'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [{
        firstName: 'Usuario1',
        lastName: 'Demo Standard',
        email: 'test1@test.com',
        // Important: Password not encrypted yet! 
        password: '1234',
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Usuario2',
        lastName: 'Demo Standard',
        email: 'test2@test.com',
        // Important: Password not encrypted yet! 
        password: '1234',
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Usuario3',
        lastName: 'Demo Standard',
        email: 'test3@test.com',
        // Important: Password not encrypted yet! 
        password: '1234',
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Usuario Admin',
        lastName: 'Demo Admin',
        email: 'test4@test.com',
        // Important: Password not encrypted yet! 
        password: '1234',
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
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
