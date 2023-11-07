const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: 'none'
    },
    about: {
        type: String,
        default: 'none'
    },
    imagePath: {
        type: String,
        default: '/images/profile.jpeg'
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
