var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  user = req.user
  res.render('index', { title: 'Express', user });
});

module.exports = router;
