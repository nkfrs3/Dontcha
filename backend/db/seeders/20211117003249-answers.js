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
  {
    questionId: 5,
    value: "Ludacris",
    correct: false
  },
  {
    questionId: 5,
    value: "T.I.",
    correct: false
  },
  {
    questionId: 5,
    value: "Lil Wayne",
    correct: false
  },
  {
    questionId: 5,
    value: "Pharrell",
    correct: true
  },  {
    questionId: 6,
    value: "Low - Flo Rida",
    correct: true
  },
  {
    questionId: 6,
    value: "I Kissed a Girl - Katy Perry",
    correct: false
  },
  {
    questionId: 6,
    value: "Single Ladies - Beyonce",
    correct: false
  },
  {
    questionId: 6,
    value: "Bleeding Love - Leona Lewis",
    correct: false
  },
  {
    questionId: 7,
    value: "t",
    correct: true
  },
  {
    questionId: 7,
    value: "f",
    correct: false
  },
  {
    questionId: 8,
    value: "Toxic",
    correct: false
  },
  {
    questionId: 8,
    value: "Gimme More",
    correct: false
  },
  {
    questionId: 8,
    value: "Womanizer",
    correct: true
  },
  {
    questionId: 8,
    value: "Circus",
    correct: false
  },
    {
      questionId: 9,
      value: "Ray Charles",
      correct: true
    }


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
