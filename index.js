const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const User = require('./models/newCommentModel');

mongoose.connect('mongodb://127.0.0.1:27017/newComments')
.then (() => {
    console.log("CONNECTED!")
}) . catch ((err) => {
    console.log("ERROR");
    console.log(err);
});

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }));

// Default HOMEPAGE!
app.get('/', (req, res) => {
    res.send("Hello World");
})

//My Webpage starts here. . .

app.get('/comments', async (req,res) => {
    const profile = await User.find({})
    res.render("comments", { profile })
})

app.get('/comments/new', (req, res) => {
    res.render("newComments")
})

app.post('/comments/new', async (req, res) => {
    const newComment = new User(req.body);
    await newComment.save();
    res.redirect("/comments");
})

app.get("/comments/:id", async (req,res) => {
    const { id } = req.params;
    const profile = await User.findById(id);
    res.render("user", { profile });
});

app.get("/comments/:id/edit", async (req,res) => {
    const {id} = req.params;
    const userProfile =  await User.findById(id);
    res.render("editUser", { userProfile })
});

app.listen('3000', () => {
    console.log("Your are listening to port 3000");
})