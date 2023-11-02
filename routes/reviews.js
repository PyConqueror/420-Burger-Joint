const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');


module.exports = router;

router.get('/', reviewsController.index);

router.post('/:id/review', reviewsController.create);