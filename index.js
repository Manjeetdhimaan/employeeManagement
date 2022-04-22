// newUser
//0rQfUS6zuvCjbcEA
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const port = process.env.PORT || 8080
const app = express();
var path = require('path');


const flash = require("connect-flash");
const session = require("express-session");
var passport = require("passport");

var LocalStrategy = require('passport-local');


app.use(cors());
app.use(express.json());
// Routes
const userRoutes = require('./api/UserRoutes');
const adminRoutes = require('./api/adminRoutes');

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);

app.use(express.static(path.join(__dirname, 'www')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.use(session({
    name: `myname`,
    secret: "1e1df736",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 36000000,
        httpOnly: false,
        secure: false
    }
}));
require('./api/views/passport-config');
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



//  mongodb+srv://newUser:<password>@cluster0.qcyjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`app running on port ${port} and connected with db`)
        })
    }).catch(err => console.log(err))