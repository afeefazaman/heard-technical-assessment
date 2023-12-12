require('dotenv').config();

const { app } = require('./src/app');
const { dbConnect } = require('./src/db');

const PORT = process.env.PORT || 8000;

dbConnect();

app.listen(PORT);

module.exports = app;
