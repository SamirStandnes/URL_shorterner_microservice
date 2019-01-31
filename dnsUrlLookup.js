
const dnsUrlLookup = () => {
  return function (req, res, next) {
    dns.lookup(req.url, function (err, address, family) {     
      if(err) {
        res.json({error: 'invalid URL'}); //placeholder next(err);
      }
        next();
        console.log(address);
    });       
  }
};

module.exports = dnsUrlLookup;