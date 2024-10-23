const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Routes for expense operations
router.post('/expenses', expenseController.createExpense);
router.get('/expenses', expenseController.getAllExpenses);
router.delete('/expenses/:id', expenseController.deleteExpense);
router.put('/expenses/:id', expenseController.updateExpense);

module.exports = router;
