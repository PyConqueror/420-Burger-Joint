const Review = require('../model/review');
const MenuItem = require('../model/menu');

module.exports = {
    index,
    create,
    reviewPage,
    editPage,
    update
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

async function editPage(req, res) {
    const review = await Review.findById(req.params.id).populate('menuItem')
    res.render('reviews/edit', {review})
}

async function update (req, res) {
    const id = req.params.id
    const rating = req.body.rating
    const comment = req.body.comment
    const updatedReview = await Review.findByIdAndUpdate(id, {
        rating: rating,
        comment: comment
    })
    await updatedReview.save()
    res.redirect('/users/profile')
} 

