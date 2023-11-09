const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menus');

router.get('/', menuController.index); //display all menu route
router.get('/:id', menuController.show); //display specific menu page with reviews route

module.exports = router;
