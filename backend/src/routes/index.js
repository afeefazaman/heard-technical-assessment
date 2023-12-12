const express = require('express');

const router = express.Router();

const transaction = require('./transaction');

router.use('/transaction', transaction);

module.exports = router;
