const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
  user = req.user
  res.render('index');
});

module.exports = router;
