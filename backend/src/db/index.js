const mongoose = require('mongoose');

const DEV_MONGO_URI = `mongodb://localhost:27017/${process.env.DB_NAME}`;

const PROD_MONGO_URI = `mongodb+srv://${process.env.MONGO_DB_UN}:${process.env.MONGO_DB_PW}@${process.env.MONGO_DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}`;

const MONGO_URI = process.env.NODE_ENV === 'prod' ? PROD_MONGO_URI : DEV_MONGO_URI;

exports.dbConnect = () => mongoose.connect(MONGO_URI);
