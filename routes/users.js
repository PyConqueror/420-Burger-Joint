var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');
const ensureAuthenticated = require('../config/ensureAuthenticated');
const user = require('../model/user');


router.get('/login', usersController.loginPage);
router.post('/login', usersController.login);
router.get('/logout', usersController.logout);
router.get('/register', usersController.registerPage);
router.post('/register', usersController.register);
router.get('/profile', ensureAuthenticated, usersController.profile);
router.get('/profile/:id/edit', ensureAuthenticated, usersController.edit);
router.post('/profile/:id/edit', ensureAuthenticated, usersController.update);

module.exports = router;

