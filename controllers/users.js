const User = require('../model/user');
const passport = require('passport')

module.exports = {
    registerPage,
    loginPage,
    login,
    register,
    logout
};

function registerPage(req, res) {
    res.render('users/register')
}

function loginPage(req, res) {
    res.render('users/login'); 
}

function login(req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',         
        failureRedirect: '/users/login' 
    })(req, res, next);
}

async function register(req, res) {
    const user = new User(req.body);
    await user.save();
    res.redirect('/users/login')
    }

function logout(req, res) {
    req.logout();
    res.redirect('/');
}
