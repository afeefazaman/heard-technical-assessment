const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const allRoutes = require('./routes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (app.get('env') === 'dev') app.use(morgan('tiny'));

app.use('/api/', allRoutes);

app.get('/', (_req, res) => res.json({ message: 'Heard RESTful API' }));

app.use((_req, res) => {
	const error = new Error('Route not found');
	error.status = 404;
	res.status(error.status || 500).json({ error: error.message });
});

module.exports = { app };
