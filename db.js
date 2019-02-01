require('dotenv').config()
// mongodb and mongoose
const mongo = require('mongodb');
const mongoose = require('mongoose');

//connect to db
const mongoURL = process.env.MONGOLAB_URI;
mongoose.connect(mongoURL, {useNewUrlParser: true} );
console.log('just to confirm, here is my mongoURL  ***' + mongoURL + '***');

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