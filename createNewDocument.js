const db = require('./db');

const createNewDocument = () => {
    return async function (req, res, next) {
    let number =  await db.Url.countDocuments();
   
    console.log(number);
    
    let newUrl =  new db.Url({ 
      original_url: req.url,
      shorter_url: number + 1 // testing number
    });
    
    newUrl.save(function(err, data) {
      if(err) {
        throw 'could not save the URL';
      } 
      res.json({  
         original_url: req.url,
         shorter_url: number + 1
       }); 
    });
  };
};

module.exports = createNewDocument;