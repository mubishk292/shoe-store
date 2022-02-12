const mongoose = require('mongoose');

let adStructure = mongoose.Schema({
    title: String,
    name: String,
    description: String,
    price: Number,
    pic: String,
});

module.exports = mongoose.model('ad', adStructure)