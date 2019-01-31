const express = require('express');
const router = express.Router();
const dns = require('dns');

router.post('/api/shorturl/new', function (req, res, next) {
  dns.lookup(req.url, function (err, address, family) {     
   if(err) {
     res.json({error: 'invalid URL'}); //placeholder next(err);
   }
     next();
     console.log(address + " exists");
  });       
});

module.exports = router;