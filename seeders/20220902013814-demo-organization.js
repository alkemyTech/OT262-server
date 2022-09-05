'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [{
      name: "SOMOS MAS",
      image: 'https://s3-alpha-sig.figma.com/img/04b2/8f97/5d293ac9516b935898d732ea2920bef1?Expires=1662940800&Signature=aWENNJ7ySEHbRo~Ms7oMMSaRbZkGKUZLtB1sE16FKct8t~03N8sk2NZhpepFnBZlPv7bn6SfQUknj294~CSc4HvltICOvFv4NZ5arUCUlKVRxDSdUW8Q91RrNtNz-ZfPRcFKcirg6gYZLat0oZ5Rw64VXFmQwORwmIyXmvTfbljHL8MyJX2If7CVOIjLBq5DUvJmNjjhuacVdaFa4ZC2vkCeTdVRftxPlN47zeluAfx~X2-fG39S~2duySCH1CHJIb1Odou8W~MA~bZYThEKefG7rUaocyLvHuThtirqGmz1~Eiex-5ejJi1MHhuKx1JF8VtrRvc3ScGhnHhVCC2SQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      phone: '+54 11-2233-4455',
      address: "Calle falsa 123",
      welcomeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet orci enim lectus porttitor ut.",
      createdAt: new Date(),
      updatedAt: new Date(),
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
