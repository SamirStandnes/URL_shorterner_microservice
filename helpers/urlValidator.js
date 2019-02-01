const dns = require('dns');

const dnsLookup = () => {
  return async function (req, res, next) {
    let validFormat = /^(https?):\/\/www./g;
    console.log(req.body.url.match(validFormat));  
    if (req.body.url.match(validFormat)) { 
      //let https_reg = /^(https?):\/\//;
      console.log(req.body.url + ' url request given');
      let urlTest = req.body.url.match(/www.\w+.\w+/g);
      console.log(urlTest + ' new url');
      await dns.lookup(urlTest[0], function (err, address, family) {     
        if(err) {
          res.json({error: 'invalid URL'}); //placeholder next(err);
        }
        console.log(address + " exists"); 
        req.url = req.body.url;
        next();    
        });
    }
    else {
      console.log('invalid format');
      res.json({error: 'invalid URL'});
    }
  };
};

module.exports = dnsLookup;