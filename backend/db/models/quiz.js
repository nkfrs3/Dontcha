'use strict';
module.exports = (sequelize, DataTypes) => {
  const quiz = sequelize.define('quiz', {
    title: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    topic:{
      type: DataTypes.STRING,

    },
    timeLimit: {
      type: DataTypes.INTEGER,
      validate: {
        min: 3600
      }
    }
  }, {});
  quiz.associate = function(models) {
    // associations can be defined here
    quiz.belongsTo(models.User, {foreignKey: "id"})
    quiz.hasMany(models.question, {foreignKey: "quizId", onDelete: 'cascade', hooks:true} )
    quiz.hasMany(models.score, {foreignKey: "quizId", onDelete: 'cascade', hooks:true})
    quiz.hasMany(models.review, {foreignKey: "quizId", onDelete: 'cascade', hooks:true})

  };
  return quiz;
};
