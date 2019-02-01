'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Basic config
const port = process.env.PORT || 8080;

// test modules
const greeting = require('./greeting');
const test = require('./test');

app.use(bodyParser.urlencoded({extended: false}));

//tests
app.use(greeting);
app.use(test);

// index.html sendFile()
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const redirect = require('./redirect');
const shortenUrl = require('./shortenUrl');

// Mount post middleware
app.use(shortenUrl);

// Mount get middleware
app.use(redirect);

app.listen(port);
console.log('Magic happens on port ' + port);
