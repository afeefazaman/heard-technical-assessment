exports.validation = (schema) => (req, res, next) =>
	schema
		.validate(req.body, { abortEarly: false })
		.then(() => next())
		.catch((err) => res.status(422).json({ message: err.errors }));
