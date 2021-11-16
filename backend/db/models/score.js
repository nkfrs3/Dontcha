'use strict';
module.exports = (sequelize, DataTypes) => {
  const score = sequelize.define('score', {
    quizId: {type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  score.associate = function(models) {
    // associations can be defined here
    score.belongsTo(models.quiz, {foreignKey: "id"} )
    score.belongsTo(models.User, {foreignKey: "id"} )
  };
  return score;
};
