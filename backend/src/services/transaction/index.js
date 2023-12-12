const { Transaction } = require('../../db/models/transaction');

exports.createTransaction = async ({ title, description, amount, fromAccount, toAccount, transactionDate }) => {
	const transaction = new Transaction({
		title,
		description,
		amount,
		fromAccount,
		toAccount,
		transactionDate,
	});

	await transaction.save();
	return transaction;
};

exports.findTransactionById = async ({ transactionId }) => Transaction.findById(transactionId);

exports.findAllTransactions = async () => Transaction.find();

exports.findAllTransactionsForPagination = async ({ limit = 10, page = 1 }) =>
	Transaction.find()
		.skip((page - 1) * limit)
		.limit(limit)
		.exec();

exports.updateTransactionById = async ({
	transactionId,
	title,
	description,
	amount,
	fromAccount,
	toAccount,
	transactionDate,
}) => {
	const updateTransaction = await Transaction.findByIdAndUpdate(transactionId, {
		$set: {
			title,
			description,
			amount,
			fromAccount,
			toAccount,
			transactionDate,
		},
	});

	return updateTransaction == null ? 'Transaction not found' : 'Successfully updated transaction';
};

exports.deleteTransactionById = async ({ transactionId }) => {
	const message = await Transaction.deleteOne({ _id: transactionId });

	return message.deletedCount === 1 ? 'Successfully deleted transaction' : "Transaction doesn't exists";
};
