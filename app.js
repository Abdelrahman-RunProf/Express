const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userModel = require("./modals/users");
const port = 3000;
const moment = require('moment'); // require
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://abdelrahmanabdou52_db_user:TrIg0l2gVHD8t02T@cluster0.zjbhhpa.mongodb.net/all-data?appName=Cluster0')
    .then(() => app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })).catch((error) => console.log(error))



app.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.render('index', { users, moment });
    } catch (error) {
        console.log('error from get', error);
        res.render('index', { users: [] });
    }
});



app.get('/user/add', (req, res) => {
    res.render('user/add')
});
app.get('/user/edit/:id', (req, res) => {
    res.render('user/edit')
});
app.get('/user/search', (req, res) => {
    res.render('user/search')
});
app.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.findById(id);
        console.log(user, 'user from view');
        res.render('user/view', { user, moment });
    } catch (error) {
        console.log(error);
        res.render('user/view', { user: null });
    }
});

app.post("/user/add", (req, res) => {
    const { firstName, lastName, email, telephone, age, country, gender } = req.body;
    const userModelData = new userModel({
        firstName,
        lastName,
        email,
        telephone,
        age,
        country,
        gender
    })
    userModelData.save()
        .then(() => {
            res.redirect('/')
            console.log("user added successfully")
        })
        .catch((error) => {
            console.log(error)
        })

})
app.use((req, res) => {
    res.status(404).render("404")
});
