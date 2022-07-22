'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.crateTable('usuarios', {
      id: Sequelize.INTEGER,
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      senha: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('usuarios');
  }
};
