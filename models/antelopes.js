const { Sequelize } = require('sequelize/types');
const sequelize = require('../config/connection.js');

module.exports = sequelize.define('Antelopes', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  content: Sequelize.toString(300),
});
