'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('answers', [
     {
     questionId: 1,
     value: "Anna Kendrick",
     correct: false
   },
   {
    questionId: 1,
    value: "Mary Elizabeth Winstead",
    correct: true
  },
  {
    questionId: 1,
    value: "Aubrey Plaza",
    correct: false
  },
  {
    questionId: 1,
    value: "Ellen Wong",
    correct: false
  },
  {
    questionId: 2,
    value: "t",
    correct: true
  },
  {
    questionId: 2,
    value: "f",
    correct: false
  },
  {
    questionId: 3,
    value: "Katayanagi Twins",
    correct: false
  },
  {
    questionId: 3,
    value: "Todd Ingram",
    correct: false
  },
  {
    questionId: 3,
    value: "Lucas Lee",
    correct: false
  },
  {
    questionId: 3,
    value: "Matthew Patel",
    correct: true
  },
  {
    questionId: 4,
    value: "t",
    correct: true
  },
  {
    questionId: 4,
    value: "f",
    correct: false
  },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('answers', null, {});
  }
};
