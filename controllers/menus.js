const MenuItem = require('../model/menu');
const Review = require('../model/review');

module.exports = {
    index,
    show
};

async function index(req, res) { //display main menu page
    const menus = await MenuItem.find({});
    const user = req.user
    res.render('menus/index', { menus, user })
};

async function show(req, res) { //display specific menu with reviews
    const menu = await MenuItem.findById(req.params.id);
    const reviews = await Review.find({menuItem: req.params.id}).populate('user')
    const user = req.user
    res.render('menus/show', { menu, reviews, user })
}; 