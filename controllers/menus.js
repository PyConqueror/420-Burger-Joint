const MenuItem = require('../model/menu');
const Review = require('../model/review');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const menus = await MenuItem.find({});
    res.render('menus/index', { menus })
};

async function show(req, res) {
    const menu = await MenuItem.findById(req.params.id);
    const reviews = await Review.find({menuItem: req.params.id})
    console.log(reviews)
    res.render('menus/show', { menu, reviews })
}; 