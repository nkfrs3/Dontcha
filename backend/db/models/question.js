'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prompt: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  question.associate = function(models) {
    // associations can be defined here
    question.belongsTo(models.quiz, {foreignKey: "id"})
    question.hasMany(models.answer, {foreignKey: "questionId", onDelete: 'cascade', hooks:true})
    question.hasMany(models.submittedAnswer, {foreignKey: "questionId", onDelete: 'cascade', hooks:true})


  };
  return question;
};
