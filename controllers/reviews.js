const Review = require('../model/review');
const MenuItem = require('../model/menu');

module.exports = {
    index,
    create
};

async function index(req, res) {
    const reviews = await Review.find({});
    res.render('reviews/index', { reviews })
};

async function create(req, res) {
    const menuItem = await MenuItem.findById(req.params.id);
    const loggedInUser = req.session.user;
    const { comment, rating } = req.body;
    const review = new Review({
        menuItem: menuItem._id,
        user: loggedInUser._id,
        comment: comment,
        rating: rating
    });
    await review.save();
    menuItem.reviews.push(review._id);
    await menuItem.save();
    res.redirect(/menus/ + menuItem._id); 
};