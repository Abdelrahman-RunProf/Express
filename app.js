const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const userModel = require("./modals/users");
const port = 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://abdelrahmanabdou52_db_user:TrIg0l2gVHD8t02T@cluster0.zjbhhpa.mongodb.net/all-data?appName=Cluster0')
    .then(() => app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })).catch((error) => console.log(error))


// auto reload
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
// auto reload ends
app.get('/', (req, res) => {

    res.render('index')

});

app.get('/add.html', (req, res) => {
    res.render('user/add')
});
app.get('/user/edit', (req, res) => {
    res.render('user/edit')
});
app.get('/user/search', (req, res) => {
    res.render('user/search')
});
app.get('/user/view', (req, res) => {
    res.render('user/view')
});


app.use((req, res) => {
    res.status(404).render("404")
});
