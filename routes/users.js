var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');
const ensureAuthenticated = require('../config/ensureAuthenticated');



router.get('/login', usersController.loginPage);
router.post('/login', usersController.login);
router.get('/logout', usersController.logout);
router.get('/register', usersController.registerPage);
router.post('/register', usersController.register);
router.get('/profile', ensureAuthenticated, usersController.profile);
router.get('/profile/:id/edit', ensureAuthenticated, usersController.edit);
router.post('/profile/:id/edit', ensureAuthenticated, usersController.update);
router.get('/profile/:id/show', usersController.show)
module.exports = router;

