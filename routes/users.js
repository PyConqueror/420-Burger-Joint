var express = require('express');
var router = express.Router();

router.get('/login', usersController.loginPage);
router.post('/login', usersController.login);
router.get('/logout', usersController.logout);
router.get('/register', usersController.registerPage);
router.post('/register', usersController.register);

module.exports = router;

