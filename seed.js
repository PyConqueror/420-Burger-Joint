require('dotenv').config();
require('./config/database');

const MenuItem = require('./model/menu');  
const User = require('./model/user');  

const menuItems = [
    { name: 'The Original GG Burger', description: 'Made with a juicy 100% organic beef patty', price: 9.99, imagePath:'/images/burger.jpeg'},
    { name: 'The Green Grillers Special', description: 'Served with our secret house sauce and organic grilled chicken', price: 10.99, imagePath:'/images/salad.jpeg' },
    { name: 'Classic Pizza', description: 'Our take on the classic with organic vegetables and pepperoni', price: 13.99, imagePath:'/images/pizza.jpeg' },
    { name: 'Organic Caesar Salad', description: 'Greens served with organic grilled chicken strips', price: 7.99, imagePath:'/images/caeser.jpeg' },
    { name: 'Mac & Cheese', description: 'A creamy delight made with organic cheese', price: 8.99, imagePath:'/images/macandcheese.jpeg' },
    { name: 'Homemade Fried Ice Cream', description: 'Vanilla ice cream covered with our special crunchy coating, deep fried and topped with chocolate', price: 5.99, imagePath:'/images/friedicecream.jpeg' }
];

const userList = [
    {username: 'tester1', password: '1234'},
    {username: 'tester2', password:'1234'}]

const reviewList = [
    {menuItem:'65498a302d03cdcc7f6d8f7d', user: '65498aa91af4809d2b3847ef', rating: 5, comment: 'Delicious'}
]
async function seedData() {
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