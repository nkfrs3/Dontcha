'use strict';
module.exports = (sequelize, DataTypes) => {
  const submittedAnswer = sequelize.define('submittedAnswer', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  submittedAnswer.associate = function(models) {
    // associations can be defined here
    submittedAnswer.belongsTo(models.User, {foreignKey: "id"})
    submittedAnswer.belongsTo(models.question, {foreignKey: "id"})
  };
  return submittedAnswer;
};
