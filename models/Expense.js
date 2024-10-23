const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Define the Expense model
const Expense = sequelize.define('Expense', {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize.sync()
  .then(() => console.log('Expense table created successfully'))
  .catch((err) => console.log('Error creating table: ' + err));

module.exports = Expense;
