const User = require('../model/user');
const passport = require('passport');
const Review = require('../model/review');
const user = require('../model/user');
const cloudinary = require('../utils/cloudinary')

module.exports = {
    registerPage,
    loginPage,
    login,
    register,
    logout,
    profile,
    edit,
    update,
    show,
    profilepic
};

function registerPage(req, res) {
    res.render('users/register', {error: ' '});
}

function loginPage(req, res) {
    res.render('users/login', {error: ' '}); 
}

function login(req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',         
        failureRedirect: '/users/login'
    })(req, res, next);
}

async function register(req, res, next) {
    const existingUser = await User.findOne({username: req.body.username });
    if (existingUser) {
        res.render('users/register',{error: 'Username already taken. Please choose another.' })
        return
    }
    const user = new User(req.body);
    await user.save();
    passport.authenticate('local', {
        successRedirect: '/',         
        failureRedirect: '/users/login'
    })(req, res, next);
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

async function edit(req, res) {
    const user = await User.findById(req.params.id)
    res.render('users/edit', {user})
};

async function update(req, res) {
    const id = req.params.id
    const updatedProfile = await User.findByIdAndUpdate(id, req.body)
    await updatedProfile.save()
    res.redirect('/users/profile')
}

async function show(req, res) {
    const user = req.user
    const id = req.params.id
    const profile = await User.findById(id)
    const reviews = await Review.find({user: id}).populate('menuItem')
    res.render('users/show', {user, profile, reviews})
}

async function profilepic(req, res) {
    const id = req.params.id
    const result = await cloudinary.uploader.upload(req.file.path);
    const update = await User.findByIdAndUpdate(id, {
        imagePath: result.secure_url
    })
    await update.save()
    res.redirect('/users/profile')
}