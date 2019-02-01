const express = require('express');
const router = express.Router();

const urlValidator = require('../helpers/urlValidator')();
const dbLookup = require('../helpers/dbLookup')();
const createNewDocument = require('../helpers/createNewDocument')();

router.post('/api/shorturl/new', urlValidator, dbLookup, createNewDocument);

module.exports = router;
