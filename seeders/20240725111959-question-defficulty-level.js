'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const levels = [
      { level_name: 'Very Easy'},
      { level_name: 'Easy'},
      { level_name: 'Moderate'},
      { level_name: 'Difficult'},
      { level_name: 'Very Difficult'},
      
    ];
    await queryInterface.bulkInsert('question_difficulty_levels', levels, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('question_difficulty_levels', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
