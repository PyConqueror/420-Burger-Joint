const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    reviews: [{ //one to many
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    imagePath: String 
}, {
    timestamps: true
});

module.exports = mongoose.model('MenuItem', menuSchema);