const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	fromAccount: {
		type: String,
		required: true,
	},
	toAccount: {
		type: String,
		required: true,
	},
	transactionDate: {
		type: Date,
		required: true,
	},
});

exports.Transaction = mongoose.model('Transaction', transactionSchema);
