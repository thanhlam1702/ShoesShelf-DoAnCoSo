const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const { ensureAuthenticated ,  forwardAuthenticated } = require('./config/auth');
const passport = require('passport');
var bodyParser =require("body-parser");
var formidable = require('formidable');
var fs = require('fs');


var app = express();

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());
//Passport config
require('./config/passport')(passport);

// DB config
const db = require('./config/keys').MongoURI;

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('MongoDB connected....'))
    .catch(err => console.log(err));
//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Bodyparser
app.use(express.urlencoded({extended: false}));

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();
})
// Routes
app.use('/',require('./routes/index'));

app.use('/users',require('./routes/users'));

//static files
app.use(express.static('./assets'));

// SS blog post

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(db, { useNewUrlParser: true}, function(error,client){
    var blog = client.db("blog");
    console.log("DB connect");
    app.get("/your-shelf",ensureAuthenticated ,(req,res) => {
        blog.collection("posts").find().toArray(function(error,posts){
            posts = posts.reverse();
            res.render('your-shelf',{posts : posts,name: req.user.name});
        })
    });
    app.post("/uppost",function(req,res){
        blog.collection("posts").insertOne(req.body, function(error, document){
            res.render("index");
        });
    });
    app.post("/image", function(req,res){
        var formDaTa = new formidable.IncomingForm();
        formDaTa.parse(req, function (error, fields, files) {
            var oldPath = files.file.path;
            var newPath = "assets/images/userPost/" + files.file.name;

            fs.rename(oldPath, newPath, function(err) {
                res.send("/" + newPath);
            });
        });
    });
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, console.log(`server run on port ${PORT}`));