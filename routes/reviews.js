const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');


module.exports = router;

router.get('/', reviewsController.index);
router.get('/:id', reviewsController.reviewPage);
router.post('/:id', reviewsController.create);  