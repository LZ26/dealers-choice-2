const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE.URL || 'postgres://localhost:5432/cell_store'
);

module.exports = db;
