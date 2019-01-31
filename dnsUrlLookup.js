const express = require('express');
//const router = express.Router();
const dns = require('dns');

const dnsLookup = () => {
  return (req, res, next) => {
    dns.lookup(req.url, function (err, address, family) {     
    if(err) {
      res.json({error: 'invalid URL'}); //placeholder next(err);
    }
    console.log(address + " exists"); 
    next();    
    });
  };
} 

module.exports = dnsLookup;