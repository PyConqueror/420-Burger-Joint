const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const ensureAuthenticated = require('../config/ensureAuthenticated');


module.exports = router;

router.get('/', reviewsController.index);
router.get('/:id', ensureAuthenticated, reviewsController.reviewPage);
router.post('/:id', reviewsController.create);  