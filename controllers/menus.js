const MenuItem = require('../model/menu');
const Review = require('../model/review');
const User = require('../model/user');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const menus = await MenuItem.find({});
    const user = req.user
    res.render('menus/index', { menus, user })
};

async function show(req, res) {
    const menu = await MenuItem.findById(req.params.id);
    const reviews = await Review.find({menuItem: req.params.id}).populate('user')
    const user = req.user
    res.render('menus/show', { menu, reviews, user })
}; 