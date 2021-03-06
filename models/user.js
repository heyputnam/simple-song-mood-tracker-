const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    googleId: String,
    displayName: String,
    firstName: String,
    lastName: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

module.exports =  mongoose.model('User', userSchema)