const express = require('express');
const router = express.Router();
const dns = require('dns');

router.post('/api/shorturl/new', function (req, res, next) {
  let validFormat = /^(https?):\/\/www./g;
    
  console.log(req.body.url.match(validFormat));
    
  if (req.body.url.match(validFormat)) { 
    let https_reg = /^(https?):\/\//;
    console.log(req.body.url);
    let url =  req.body.url;
    req.url = url.replace(https_reg, "");
    console.log(req.url + ' new url');
    dns.lookup(req.url, function (err, address, family) {     
      if(err) {
        res.json({error: 'invalid URL'}); //placeholder next(err);
      }
      console.log(address + " exists"); 
      next();    
      });
  }
  else {
    console.log('invalid format');
    res.json({error: 'invalid URL'});
  }
});

module.exports = router;