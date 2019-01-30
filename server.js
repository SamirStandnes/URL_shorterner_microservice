const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const greeting = require('./greeting');

// mongodb and mongoose
const mongo = require('mongodb');
const mongoose = require('mongoose');

// Basic config
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));

var mongoURL = 'mongodb://database_two:Database_two_password2@ds157844.mlab.com:57844/database_two';
console.log('just to confirm, here is my mongoURL  ***' + mongoURL + '***');

//mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, {useMongoClient: true, useNewUrlParser: true} );

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  original_url: String,
  shorter_url: Number,
});

const Url = mongoose.model('Url', urlSchema);



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.use(greeting);

app.get('/test', function (req, res) {
  Url.findOne({shorter_url: 1}, function (err, data) {
    if (data) {
      console.log(data.original_url); 
      res.json({data: data});
      //res.status(301).redirect('//'+data.original_url);
    }
  });
});

app.listen(port);
console.log('Magic happens on port ' + port);
