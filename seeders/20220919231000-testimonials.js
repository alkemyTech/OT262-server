'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Testimonials', [
      {
        id: 1,
        name: 'Joann Osinski',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://pbs.twimg.com/profile_images/1088972665757421568/oi7t7GQ-_400x400.jpg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 2,
        name: 'Vladimir Milosevic',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://pbs.twimg.com/media/FRxCUFOWUAAzQvQ.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 3,
        name: 'Erica Moore',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://www.brandeis.edu/global/images/alumni/headshots/msf-melina-reyes-square.jpg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 4,
        name: 'Maria May',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://pbs.twimg.com/profile_images/1552212933119197184/4HZaEIb6_400x400.jpg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 5,
        name: 'Michelle Cherry',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://pbs.twimg.com/profile_images/1565836474423050241/fl8t2_iM_400x400.jpg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 6,
        name: 'Mayra Jehn',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://www.lse.ac.uk/media-and-communications/assets/images/people/research-staff/mariya-Stoilova.jpg',
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
