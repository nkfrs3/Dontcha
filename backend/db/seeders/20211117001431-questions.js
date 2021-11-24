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
  {
    prompt: `What artist was featured on Snoop Doggs 2004 hit "Drop It Like It's Hot"?`,
    quizId: 2,
    type: 'mc',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    prompt: "What song spent the most weeks at No.1 in the year 2008?",
    quizId: 2,
    type: 'mc',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    prompt: "Save A Horse by Big & Rich was the most popular Country song in the first decade of 2000.",
    quizId: 2,
    type: 'tf',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    prompt: "In 2008 Brittney Spears released what track to become her first No. 1 since Baby One More Time - 1998?",
    quizId: 2,
    type: 'mc',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    prompt: `Kanye West's "Gold Digger" features a sample from what classic jazz singer?`,
    quizId: 2,
    type: 'mw',
    createdAt: new Date(),
    updatedAt: new Date()
  }


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
