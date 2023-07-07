const mongoose = require('mongoose');

const User = require('./models/newCommentModel');

mongoose.connect('mongodb://127.0.0.1:27017/newComments')
.then (() => {
    console.log("CONNECTED!")
}) . catch ((err) => {
    console.log("ERROR");
    console.log(err);
});

const p = new User({
    username: 'Sendo',
    comments: 'Pasigaw nga isa!'
});

p.save().then(() => {
    console.log(p)
}).catch(e => {
    console.log(e);
}) 