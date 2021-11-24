'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('quizzes', [{
     title: 'Scott Pilgrim',
     userId: 1,
     topic: 'movies',
     description: 'How well do you know Scott Pilgrim vs The World?!',
     timeLimit: 72000,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    title: 'Early 2000s',
    userId: 1,
    topic: 'music',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'League of Legends',
    userId: 2,
    topic: 'video games',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'WWII',
    userId: 2,
    topic: 'history',

    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Shrek',
    userId: 2,
    topic: 'movies',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'The Office',
    userId: 3,
    topic: 'tv-shows',

    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'How I Met Your Mother',
    userId: 1,
    topic: 'tv-shows',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Jazz Classics',
    userId: 1,
    topic: 'music',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Smite',
    userId: 1,
    topic: 'video games',

    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Friends',
    userId: 1,
    topic: 'tv-shows',
    timeLimit: 70000,
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
   return queryInterface.bulkDelete('quizzes', null, {});
  }
};
