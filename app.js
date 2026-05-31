const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const port = 3000;
// models 
const userModel = require("./modals/users");
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/hello.html');
});


app.post('/', (req, res) => {
    console.log(req.body)

    const userDataModal = new userModel({ userName: req.body.username });
    console.log(req.body)
    userDataModal.save().then(() => res.send(`<h1>Thank you for submitting your name, ${req.body.username}</h1>`)).catch((error) => console.log(error))

});

// const user = new userModel({userName:"John"});
mongoose.connect('mongodb+srv://abdelrahmanabdou52_db_user:TrIg0l2gVHD8t02T@cluster0.zjbhhpa.mongodb.net/all-data?appName=Cluster0')
    .then(() => app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })).catch((error) => console.log(error))

