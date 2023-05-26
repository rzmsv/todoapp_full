'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    await queryInterface.addColumn('todos', "userId", {
      type: Sequelize.INTEGER,
      allowNull: false
    }, { transaction });
    await transaction.commit();
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    await queryInterface.removeColumn('todos', "userId")
    { transaction }
  }
};
