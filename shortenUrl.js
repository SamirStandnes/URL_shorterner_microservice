const express = require('express');
const router = express.Router();

const urlValidator = require('./urlValidator')();
const dbLookup = require('./dbLookup')();
const createNewDocument = require('./createNewDocument')();

router.post('/api/shorturl/new', urlValidator, dbLookup, createNewDocument);

module.exports = router;
