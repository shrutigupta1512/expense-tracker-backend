const Expense = require('../models/Expense');

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { amount, description, category } = req.body;
    const expense = await Expense.create({ amount, description, category });
    res.status(201).json({ message: 'Expense created successfully', data: expense });
  } catch (error) {
    res.status(500).json({ message: 'Error creating expense', error });
  }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.destroy({ where: { id } });
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting expense', error });
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, description, category } = req.body;
    await Expense.update({ amount, description, category }, { where: { id } });
    res.status(200).json({ message: 'Expense updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating expense', error });
  }
};
