const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const { ensureAuthenticated ,  forwardAuthenticated } = require('./config/auth');
const passport = require('passport');
const bodyParser =require("body-parser");
const formidable = require('formidable');
const upload = require('./middleware/upload');
const cookieParser = require('cookie-parser');
var fs = require('fs');


var app = express();
app.use(cookieParser('dasdasd'))
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
var auth =require('./middleware/auth');
//static files
app.use(express.static(__dirname,''));
var Post = require('./models/Post');
// SS blog post

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(db, { useNewUrlParser: true}, function(error,client){
    var test = client.db("test");
    console.log("DB connect");
    app.get("/your-shelf",auth.requireAuth,(req,res) => {
        Post.find(function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                res.render('your-shelf',{posts:data,name:req.cookies.name,avatar:req.cookies.avatar,id:req.cookies.id });
            }

        })
    });
    app.get("/account-setting",auth.requireAuth ,(req,res) => {
        Post.find(function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                res.render('account-setting',{posts:data,name:req.cookies.name,avatar:req.cookies.avatar,email:req.cookies.email});
            }

        })
    });
    app.get("/your-shelf-fbgg" ,(req,res) => {
        test.collection("posts").find().toArray(function(error,posts){
            posts = posts.reverse();
            res.render('your-shelf-fbgg',{posts : posts});
        })
    });
    app.get("/main",auth.requireAuth,(req,res) => {
        Post.find(function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                res.render('main',{posts:data,name:req.cookies.name,avatar:req.cookies.avatar});
            }

        })
    });
    app.get("/" ,(req,res) => {
        test.collection("posts").find().toArray(function(error,posts){
            posts = posts.reverse();
            res.render('index',{posts : posts});
        })
    });
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, console.log(`server run on port ${PORT}`));