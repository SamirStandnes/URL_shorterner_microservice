
const db = require("../models/db");

const dbLookup = () => { 
   return function (req, res, next) { 
    console.log('req.url  ' + req.url);
     db.Url.findOne({original_url: req.url}, function(err, data) {   
       if (err) {
       throw err; 
       }  
       console.log(data + ' for db_lookup');
       if(data === null) {
         console.log('create new data and give new data');
         next();
       }    
       else if (data !== null) {
         console.log('give data');
         res.json({ 
           original_url: data.original_url ,
           shorter_url: data.shorter_url  // testing number
         });
       }
     });  
   };
};

module.exports = dbLookup;