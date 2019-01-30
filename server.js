const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const greeting = require('./greeting').default;

// mongodb and mongoose
const mongo = require('mongodb');
const mongoose = require('mongoose');

// Basic config
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.use(greeting);


app.listen(port);
console.log('Magic happens on port ' + port);
