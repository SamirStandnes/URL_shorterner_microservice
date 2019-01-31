
const urlFormatValidator = () => {
  return function (req, res, next) {
    let validFormat = /^(https?):\/\/www./g;
    
    console.log(req.body.url.match(validFormat));
    
    if (req.body.url.match(validFormat)) { 
      let https_reg = /^(https?):\/\//;
      console.log(req.body.url);
      let url =  req.body.url;
      req.url = url.replace(https_reg, "");
      console.log(req.url + ' new url');
      next();
    }
    else {
      console.log('invalid format');
      res.json({error: 'invalid URL'});
    }
  };
};

module.exports = urlFormatValidator;