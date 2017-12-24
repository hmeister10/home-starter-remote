var express = require('express');
var router = express.Router();
var windowModel = require('../models/window');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Found 4 windows connected');
});

router.post('/', function(req, res, next) {
  windowModel(req.body).then((data) => {
    res.send(data);
  }).catch((err) => {
    console.log('ERROR OCCURRED WHILE MANAGING WINDOWS');
    res.send(err);
  })
});


module.exports = router;
