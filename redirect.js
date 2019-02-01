const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/api/shorturl/:number', (req, res, next) => {
    let num = parseInt(req.params.number); 
    db.Url.findOne({shorter_url: num}, (err, data) => {
        if (data) {
            console.log(data.original_url); 
            res.status(301).redirect(data.original_url);
          }
    });
});

module.exports = router;