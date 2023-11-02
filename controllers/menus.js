const MenuItem = require('../model/menu');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const menus = await MenuItem.find({});
    res.render('menus/index', { menus })
};

async function show(req, res) {
    const menu = await MenuItem.findById(req.params.id);
    res.render('menus/show', { menu })
}; 