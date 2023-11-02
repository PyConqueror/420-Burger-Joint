const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menus');

router.get('/', menuController.index);

router.get('/:id', menuController.show);

module.exports = router;
