const yup = require('yup');

exports.addTransactionSchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().required(),
	amount: yup.number().required(),
	fromAccount: yup.string().required(),
	toAccount: yup.string().required(),
	transactionDate: yup.date().required(),
});

exports.updateTransactionSchema = yup.object().shape({
	title: yup.string(),
	description: yup.string(),
	amount: yup.number(),
	fromAccount: yup.string(),
	toAccount: yup.string(),
	transactionDate: yup.date(),
});
