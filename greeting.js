const express = require('express');
const router = express.Router();

router.get('/api', function (req, res) {
    res.json({greeting: 'hello API'});
  });

 module.exports = router; 
