exports.promise = (handler) => (req, res, next) =>
	handler(req, res, next)
		.then(() => {})
		.catch((err) => {
			let message = 'Server Error';
			let statusCode = 500;
			res.status(statusCode).send({ message, error: err.message });
		});
