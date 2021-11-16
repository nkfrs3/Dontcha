'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quizId:  {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:1,
        max: 5
      }
    }
  }, {});
  review.associate = function(models) {
    // associations can be defined here
    review.belongsTo(models.User, {forgeignKey: "id"})
    review.belongsTo(models.quiz, {forgeignKey: "id"})

  };
  return review;
};
