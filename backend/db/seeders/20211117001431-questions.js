'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('questions', [
   {
    prompt: 'Who is the actress that played Ramona Flowers?',
    quizId: 1,
    type: 'mc',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    prompt: 'Does Michael Cera actually play the bass?',
    quizId: 1,
    type: 'tf',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    prompt: 'Who is the first Evil Ex that Scott fights in the film?',
    quizId: 1,
    type: 'mc',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    prompt: "Scott Pilgrim was a box office bomb and didn't recover its budget",
    quizId: 1,
    type: 'tf',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('questions', null, {});
  }
};
