'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prompt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quizId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'quizzes', key: 'id' },
      },
        type: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW

      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};
