var express = require('express');
var router = express.Router();
var windowModel = require('../models/window');

const manageWindows = (req, res) => {
  console.log('MANAGING WINDOWS')
  windowModel(req.body).then((data) => {
    res.send(data);
  }).catch((err) => {
    console.log('ERROR OCCURRED WHILE MANAGING WINDOWS');
    res.send(err);
  })
}

router.post('/', function(req, res, next) {
  console.log('--- --- --- --- ---');
  console.log(req.body);
  console.log('--- --- --- --- ---');
  manageWindows(req, res);
});

module.exports = router;
