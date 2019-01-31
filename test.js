const express = require('express');
const mongoose = require('mongoose');
const mongo = require('mongodb');

const router = express.Router();
const server = require("./server");
//const Url = server.Url; remember! 'testing is not defined' error when importing same same at same same time :-)

router.get('/test/:number', function (req, res, next) {
  //console.log(req.params.number);
  let num = parseInt(req.params.number);
  server.Url.findOne({ shorter_url: num}, function (err, data) {
    if (data) {
      console.log(data.original_url);
      res.json({ data: data });
      //res.status(301).redirect('//'+data.original_url);
    }
  });
});

module.exports = router;