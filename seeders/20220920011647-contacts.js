'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [
      {
        id: 1,
        name: 'John Doe',
        phone: 1162548952,
        email: 'johnDoe@gmail.com',
        message: 'Lorem Ipsum is simply dummy text of the printing...',
        createdAt: new Date,
        updatedAt: new Date
    },
    {
      id: 2,
      name: 'Michele Dino',
      phone: 1152365198,
      email: 'michelledino@gmail.com',
      message: 'Lorem Ipsum is simply dummy text of the printing...',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      id: 3,
      name: 'Samuel Gonzalez',
      phone: 1165985203,
      email: 'samuelgonzalez@gmail.com',
      message: 'Lorem Ipsum is simply dummy text of the printing...',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
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
