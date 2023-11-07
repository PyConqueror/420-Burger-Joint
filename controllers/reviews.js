const Review = require('../model/review');
const MenuItem = require('../model/menu');

module.exports = {
    index,
    create,
    reviewPage
};

async function index(req, res) {
    const reviews = await Review.find({}).populate('user menuItem');
    const user = req.user
    res.render('reviews/index', { reviews, user })
};

async function reviewPage(req, res) {
    const menu = await MenuItem.findById(req.params.id);
    const user = req.user
    res.render('reviews/review', { menu, user })
};

async function create(req, res) {
    const menuItem = await MenuItem.findById(req.params.id);
    const user = req.user
    const { comment, rating } = req.body;
    const review = new Review({
        menuItem: menuItem._id,
        user: user._id,
        comment: comment,
        rating: rating
    });
    await review.save();
    menuItem.reviews.push(review._id);
    await menuItem.save();
    res.redirect(/menus/ + menuItem._id); 
};