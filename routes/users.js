const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const ensureAuthenticated = require('../config/ensureAuthenticated');
const upload = require('../utils/multer')

router.get('/login', usersController.loginPage); //login page route
router.post('/login', usersController.login); //login route
router.get('/logout', usersController.logout); //logout route
router.get('/register', usersController.registerPage); //register page route
router.post('/register', usersController.register); //register form route
router.get('/profile', ensureAuthenticated, usersController.profile); //logged in user profile check page route
router.get('/profile/:id/edit', ensureAuthenticated, usersController.edit); //logged in user profile edit page route
router.post('/profile/:id/edit', ensureAuthenticated, usersController.update); //update profile route 
router.get('/profile/:id/show', usersController.show); //show specific user profile page from the reviews section
router.post('/profile/:id/profilepic', upload.single('profilepic'), usersController.profilepic); //upload user's profile picture route using multer and cloudinary

module.exports = router;

