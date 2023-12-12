const transactionService = require('../../services/transaction');
const { promise } = require('../../middlewares/promise');

exports.addTransaction = promise(async (req, res) => {
	const { title, description, amount, fromAccount, toAccount, transactionDate } = req.body;

	const transaction = await transactionService.createTransaction({
		title,
		description,
		amount,
		fromAccount,
		toAccount,
		transactionDate,
	});

	res.status(200).json({ message: 'Successfully created transaction', transaction });
});

exports.findAllTransactions = promise(async (req, res) => {
	const { limit, page } = req.query;

	const transactions = await transactionService.findAllTransactions({ limit, page });

	const paginatedTransactions = await transactionService.findAllTransactionsForPagination({ limit, page });

	res.status(200).json({ count: transactions?.length, rows: transformTransactionsArray(paginatedTransactions) });
});

exports.findTransactionById = promise(async (req, res) => {
	const { transactionId } = req.params;

	const transaction = await transactionService.findTransactionById({
		transactionId,
	});

	res.status(200).json({ transaction: transformTransactionObject(transaction) });
});

exports.updateTransactionById = promise(async (req, res) => {
	const { transactionId } = req.params;
	const { title, description, amount, fromAccount, toAccount, transactionDate } = req.body;

	const message = await transactionService.updateTransactionById({
		transactionId,
		title,
		description,
		amount,
		fromAccount,
		toAccount,
		transactionDate,
	});

	res.status(200).json({ message });
});

exports.deleteTransactionById = promise(async (req, res) => {
	const { transactionId } = req.params;

	const message = await transactionService.deleteTransactionById({
		transactionId,
	});

	res.status(200).json({ message });
});

const transformTransactionObject = (obj) => (obj ? { transactionId: obj._id, ...obj._doc } : obj);

const transformTransactionsArray = (array) => array.map(({ _id, ...rest }) => ({ transactionId: _id, ...rest._doc }));
