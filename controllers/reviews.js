const Review = require('../model/review');
const MenuItem = require('../model/menu');

module.exports = {
    index,
    create,
    reviewPage
};

async function index(req, res) {
    const reviews = await Review.find({});
    res.render('reviews/index', { reviews })
};

async function reviewPage(req, res) {
    const menu = await MenuItem.findById(req.params.id);
    res.render('reviews/review', { menu })
};

async function create(req, res) {
    const menuItem = await MenuItem.findById(req.params.id);
    const loggedInUser = '65444e4698a1546af46bca63';// tester1 id
    const { comment, rating } = req.body;
    const review = new Review({
        menuItem: menuItem._id,
        user: loggedInUser,
        comment: comment,
        rating: rating
    });
    await review.save();
    menuItem.reviews.push(review._id);
    await menuItem.save();
    res.redirect(/menus/ + menuItem._id); 
};