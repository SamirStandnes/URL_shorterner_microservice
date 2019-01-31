const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
exports.app = app;

// mongodb and mongoose
const mongo = require('mongodb');
const mongoose = require('mongoose');

// test modules
const greeting = require('./greeting');
const test = require('./test');


// Basic config
const port = process.env.PORT || 8080;

//connect to db
const mongoURL = 'mongodb://database_two:Database_two_password2@ds157844.mlab.com:57844/database_two';
mongoose.connect(mongoURL, {useNewUrlParser: true} );
console.log('just to confirm, here is my mongoURL  ***' + mongoURL + '***');

app.use(bodyParser.urlencoded({extended: false}));

//define db model
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  original_url: String,
  shorter_url: Number,
});

// init db model
const Url = mongoose.model('Url', urlSchema);
//export model
module.exports.Url = Url;

//tests
app.use(greeting);
app.use(test);

// index.html sendFile()
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const urlFormatValidator = require('./urlFormatValidator');
//const dnsUrlLookup = require('dnsUrlLookup');

app.use(urlFormatValidator);


app.listen(port);
console.log('Magic happens on port ' + port);
