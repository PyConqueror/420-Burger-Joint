require('dotenv').config();
require('./config/database');

const MenuItem = require('./model/menu');  
const User = require('./model/user');  

const menuItems = [
    { name: 'The Original GG Burger', description: 'Made with a juicy 100% organic beef patty', price: 9.99 },
    { name: 'The Green Grillers Special', description: 'Served with our secret house sauce and organic grilled chicken', price: 10.99 },
    { name: 'Classic Pizza', description: 'Our take on the classic with organic vegetables and pepperoni', price: 13.99 },
    { name: 'Organic Caesar Salad', description: 'Greens served with organic grilled chicken strips', price: 7.99 },
    { name: 'Mac & Cheese', description: 'A creamy delight made with organic cheese', price: 8.99 },
    { name: 'Homemade Ice Cream', description: 'Cap things off with a cold treat made from organic milk', price: 5.99 }
];

const userList = [
    {username: 'tester1', password: '1234'},
    {username: 'tester2', password:'1234'}]

async function seedData() {
    await MenuItem.deleteMany({});
    await User.deleteMany({});
    await MenuItem.create(menuItems);
    await User.create(userList);
    console.log("Data added succesfully")
}

async function logData() {
    const menus = await MenuItem.find({});
    const users = await User.find({});
    console.log(menus)
    console.log(users)
}

seedData()
logData()