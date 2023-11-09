const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const ensureAuthenticated = require('../config/ensureAuthenticated');

router.get('/', reviewsController.index); //all reviews page route
router.get('/:id', ensureAuthenticated, reviewsController.reviewPage); //add reviews page route
router.post('/:id', ensureAuthenticated, reviewsController.create); //create reviews route
router.get('/edit/:id', ensureAuthenticated, reviewsController.editPage); //edit reviews page route (from the profile section)
router.post('/edit/:id', ensureAuthenticated, reviewsController.update); //update reviews route (from the profile section)
router.delete('/:id', ensureAuthenticated, reviewsController.delete); //delete review route (from the profile section)

module.exports = router;