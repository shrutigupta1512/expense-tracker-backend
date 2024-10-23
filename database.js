const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance to connect to the database
const sequelize = new Sequelize('expense_tracker', 'root', 'Shruti@1512', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

module.exports = sequelize;
