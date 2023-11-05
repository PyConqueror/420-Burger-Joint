const User = require('../model/user');
const passport = require('passport');
const Review = require('../model/review');
const user = require('../model/user');

module.exports = {
    registerPage,
    loginPage,
    login,
    register,
    logout,
    profile
};

function registerPage(req, res) {
    res.render('users/register', {error: ' '})
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
    const existingUser = await User.findOne({username: req.body.username });
    if (existingUser) {
        res.render('users/register',{error: 'Username already taken. Please choose another.' })
        return
    }
    const user = new User(req.body);
    await user.save();
    res.redirect('/')
};

function logout(req, res){
    req.logout(function() {
        res.redirect('/')
    });
};
   
async function profile(req, res) {
    const user = req.user
    const reviews = await Review.find({user: user._id}).populate('menuItem')
    res.render('users/profile', {user, reviews})
};
