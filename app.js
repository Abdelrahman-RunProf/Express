const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const port = 3000;
// models 
const userModel = require("./modals/users");


app.post('/', (req, res) => {
    console.log(req.body);

    const userDataModal = new userModel({ userName: req.body.username });
    userDataModal.save()
        .then(() => {
            res.redirect('/?username=' + encodeURIComponent(req.body.username));
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Error saving to database");
        });
});
app.get('/', async (req, res) => {
    const users = await userModel.find().then((data) => {
        return data;
    }).catch((error) => {
        console.log(error);
        return [];
    });
    res.render('hello', { username: req.query.username || null, users });
});

// const user = new userModel({userName:"John"});
mongoose.connect('mongodb+srv://abdelrahmanabdou52_db_user:TrIg0l2gVHD8t02T@cluster0.zjbhhpa.mongodb.net/all-data?appName=Cluster0')
    .then(() => app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })).catch((error) => console.log(error))

