"use strict";

// newUser
//0rQfUS6zuvCjbcEA
require('dotenv').config();

var express = require('express');

var mongoose = require('mongoose');

var MongoClient = require('mongodb').MongoClient;

var cors = require('cors');

var port = process.env.PORT || 8080;
var app = express();

var path = require('path');

var flash = require("connect-flash");

var session = require("express-session");

app.use(cors());
app.use(express.json()); // Routes

var userRoutes = require('./api/UserRoutes');

var adminRoutes = require('./api/adminRoutes');

app.use(express["static"](path.join(__dirname, 'www')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});
app.use(session({
  secret: "1e1df736",
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use('/users', userRoutes);
app.use('/admin', adminRoutes); //  mongodb+srv://newUser:<password>@cluster0.qcyjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB, {
  useUnifiedTopology: true
}).then(function () {
  app.listen(port, function () {
    console.log("app running on port ".concat(port, " and connected with db"));
  });
})["catch"](function (err) {
  return console.log(err);
});