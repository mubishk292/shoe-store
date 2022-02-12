const mongoose = require('mongoose')

let userStructure  = mongoose.Schema({
    username :String,
    password :String,
    email :String,
    pic :String,
})

let User = mongoose.model('user' , userStructure);
module.exports = User;