const express = require('express');

const router = express.Router();

const { addTransactionSchema, updateTransactionSchema } = require('../../validations/transaction');
const transactionController = require('../../controllers/transaction');
const { validation } = require('../../middlewares/validation');

router.post('/add', validation(addTransactionSchema), transactionController.addTransaction);
router.get('/', transactionController.findAllTransactions);
router.get('/:transactionId', transactionController.findTransactionById);
router.patch('/:transactionId', validation(updateTransactionSchema), transactionController.updateTransactionById);
router.delete('/:transactionId', transactionController.deleteTransactionById);

module.exports = router;
