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

/* GET home page. */
router.get('/', function(req, res, next) {
  manageWindows(req, res);
});

router.post('/', function(req, res, next) {
  manageWindows(req, res);
});

module.exports = router;
