'use strict';
module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define('answer', {
    questionId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {type: DataTypes.STRING,
      allowNull: false,
    },
    correct: {
      type:DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  answer.associate = function(models) {
    // associations can be defined here
    answer.belongsTo(models.question, {foreignKey: "id"})

  };
  return answer;
};
