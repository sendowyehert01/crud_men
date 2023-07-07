const mongoose = require('mongoose');

const newUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', newUserSchema);

module.exports = User;