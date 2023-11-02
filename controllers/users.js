const User = require('../model/user');

module.exports = {
    register,
};

async function register(req, res) {
    const user = new User(req.body);
    await user.save();
    res.redirect('/users/login')
    }




