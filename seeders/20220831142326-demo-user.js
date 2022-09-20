'use strict';

const bcrypt = require("bcryptjs");
const encryptedPassword = bcrypt.hashSync('123456', 10);

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [{
        firstName: 'Usuario Normal',
        lastName: 'Demo Standard',
        email: 'user@test.com',
        password: encryptedPassword,
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Usuario ADministrador',
        lastName: 'Demo Admin',
        email: 'admin@test.com',
        password: encryptedPassword,
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
