'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     //Add seed commands here.

    await queryInterface.bulkInsert('Activities', [{
      name: 'Demo Activity 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed ante suscipit, molestie est sed, fringilla nulla. Etiam ultricies id ligula in bibendum. Suspendisse ullamcorper eget erat vel ullamcorper. Nulla eget efficitur massa. Vivamus gravida sollicitudin condimentum. Duis sodales vulputate ligula, vel pulvinar nunc auctor in. Vivamus ultrices tempor tortor pretium tristique. Nunc ultrices condimentum libero, eget viverra quam cursus nec. Praesent et mauris lacinia, feugiat lectus nec, elementum ante.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Demo Activity 2',
      content: 'Maecenas aliquam sapien dolor, in semper ligula commodo vitae. Vestibulum quis porta lectus. Aenean consectetur vitae mi non mollis. Vivamus in neque ante. Aenean venenatis maximus semper. Ut pretium mi in tortor sodales, non semper lacus hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Demo Activity 3',
      content: 'Praesent et mauris lacinia, feugiat lectus nec, elementum ante. Ut aliquet felis sagittis risus ullamcorper, eget consectetur felis cursus. Sed eros dolor, mollis in fringilla in, scelerisque a nibh. Fusce commodo lobortis sapien et ullamcorper. Donec nec mollis sapien. Aenean convallis suscipit purus, non ultrices leo elementum nec.',
      createdAt: new Date(),
      updatedAt: new Date()
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
