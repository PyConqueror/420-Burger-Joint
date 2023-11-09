const User = require('../model/user');
const passport = require('passport');
const Review = require('../model/review');
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

function registerPage(req, res) { //display register page
    res.render('users/register', {error: ' '});
}

function loginPage(req, res) { //display login page
    res.render('users/login', {error: ' '}); 
}

function login(req, res, next) { //login function from the login page
    passport.authenticate('local', {
        successRedirect: '/',         
        failureRedirect: '/users/login'
    })(req, res, next);
}

async function register(req, res, next) { //register function from the register page
    const existingUser = await User.findOne({username: req.body.username }); //check whether if username exists
    if (existingUser) {
        res.render('users/register',{error: 'Username already taken. Please choose another.' })
        return
    } //if no continue creating the account
    const user = new User(req.body);
    await user.save();
    passport.authenticate('local', {
        successRedirect: '/',         
        failureRedirect: '/users/login'
    })(req, res, next);
};

function logout(req, res){ //logout function
    req.logout(function() {
        res.redirect('/')
    });
};
   
async function profile(req, res) { //view user profile page (logged in user)
    const user = req.user
    const reviews = await Review.find({user: user._id}).populate('menuItem')
    res.render('users/profile', {user, reviews})
};

async function edit(req, res) { //display edit profile page
    const user = await User.findById(req.params.id)
    res.render('users/edit', {user})
};

async function update(req, res) { //function to update user profile
    const id = req.params.id
    const updatedProfile = await User.findByIdAndUpdate(id, req.body)
    await updatedProfile.save()
    res.redirect('/users/profile')
}

async function show(req, res) { //display selected user profile from the reviews section 
    const user = req.user
    const id = req.params.id
    const profile = await User.findById(id)
    const reviews = await Review.find({user: id}).populate('menuItem')
    res.render('users/show', {user, profile, reviews})
}

async function profilepic(req, res) { //function to upload profile picture from the profile section
    const id = req.params.id
    const result = await cloudinary.uploader.upload(req.file.path);
    const update = await User.findByIdAndUpdate(id, {
        imagePath: result.secure_url
    })
    await update.save()
    res.redirect('/users/profile')
}