const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// mongodb and mongoose
const mongo = require('mongodb');
const mongoose = require('mongoose');

// Basic config
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));





app.get("/api", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.listen(port);
console.log('Magic happens on port ' + port);