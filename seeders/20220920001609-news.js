'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('entries', [
      {
        id: 1,
        name: 'Novedad 1',
        content: 'CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac',
        image: 'https://www.vivetuempresa.com/wp-content/uploads/2018/01/8-consejos-para-las-reuniones-de-trabajo.jpg',
        type: 'Novedad',
        categoryId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 2,
        name: 'Novedad 2',
        content: 'CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac',
        image: 'https://s.libertaddigital.com/2021/01/13/954/637/voluntario-pobreza.jpg.webp',
        type: 'Novedad',
        categoryId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 3,
        name: 'Novedad 3',
        content: 'CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac',
        image: 'https://directivosygerentes.es/wp-content/uploads/2021/07/lograr-oficina-refleje-imagen-corporativa-empresa-681x454.jpg',
        type: 'Novedad',
        categoryId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 4,
        name: 'Novedad 4',
        content: 'CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac',
        image: 'https://jerseyenglishschool.com/wp-content/uploads/2021/02/Ingles-para-Negocios.jpg',
        type: 'Novedad',
        categoryId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 5,
        name: 'Novedad 5',
        content: 'CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac',
        image: 'https://www.ucr.ac.cr/medios/fotos/2007/Caroline_Stronberger-TCU_14_Dec_2007.JPG',
        type: 'Novedad',
        categoryId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: 6,
        name: 'Novedad 6',
        content: 'CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac CLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac',
        image: 'https://www.xerosdentaid.es/wp-content/uploads/2017/10/Imagen-blog_propuesta-2-1024x681.jpg',
        type: 'Novedad',
        categoryId: 1,
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
