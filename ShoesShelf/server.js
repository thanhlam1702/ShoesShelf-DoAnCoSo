const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const { ensureAuthenticated ,  forwardAuthenticated } = require('./config/auth');
const passport = require('passport');
const bodyParser =require("body-parser");
const formidable = require('formidable');
<<<<<<< HEAD
const upload = require('./middleware/upload');
const cookieParser = require('cookie-parser');
=======
const upload = require('./middleware/upload')
>>>>>>> 0f2e3ba9eff2f7d4eaa4bf8ca2951ebe5aecd043
var fs = require('fs');


var app = express();
<<<<<<< HEAD
app.use(cookieParser('dasdasd'))
=======

>>>>>>> 0f2e3ba9eff2f7d4eaa4bf8ca2951ebe5aecd043
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
<<<<<<< HEAD
var auth =require('./middleware/auth');
//static files
app.use(express.static(__dirname,''));
var Post = require('./models/Post');
=======

//static files
app.use(express.static(__dirname,''));

>>>>>>> 0f2e3ba9eff2f7d4eaa4bf8ca2951ebe5aecd043
// SS blog post

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(db, { useNewUrlParser: true}, function(error,client){
    var test = client.db("test");
    console.log("DB connect");
<<<<<<< HEAD
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

=======
    app.get("/your-shelf",ensureAuthenticated ,(req,res) => {
        test.collection("posts").find().toArray(function(error,posts){
            posts = posts.reverse();
            res.render('your-shelf',{posts : posts,name: req.user.name, avatar: req.user.avatar});
>>>>>>> 0f2e3ba9eff2f7d4eaa4bf8ca2951ebe5aecd043
        })
    });
    app.get("/your-shelf-fbgg" ,(req,res) => {
        test.collection("posts").find().toArray(function(error,posts){
            posts = posts.reverse();
            res.render('your-shelf-fbgg',{posts : posts});
        })
    });
<<<<<<< HEAD
    app.get("/main",auth.requireAuth,(req,res) => {
        if (req.query.search) {     
                const regex = new RegExp(escapeRegex(req.query.search), 'gi');

                Post.find({brands : regex},function(err,data){
                    if(err){
                        res.json({kq:0});
                    }else{
                        var noMatch = ""
                        if(data.length < 1) {
                            noMatch = "Không có kết quả bạn cần tìm, vui lòng thử lại.";
                        }
                        res.render('main',{posts:data,name:req.cookies.name,avatar:req.cookies.avatar, noMatch: noMatch});
                    }
            });
        } else {
            Post.find(function(err,data){
                if(err){
                    res.json({kq:0});
                }else{
                    res.render('main',{posts:data,name:req.cookies.name,avatar:req.cookies.avatar});
                }

            })
        };
    });
    app.get("/" ,(req,res) => {
        if (req.query.search) {     
            const regex = new RegExp(escapeRegex(req.query.search), 'gi');

            Post.find({brands : regex},function(err,data){
                if(err){
                    res.json({kq:0});
                }else{
                    var noMatch = ""
                    if(data.length < 1) {
                        noMatch = "Không có kết quả bạn cần tìm, vui lòng thử lại.";
                    }
                    res.render('index',{posts:data,noMatch: noMatch});
                }
        });
        } else {
            Post.find(function(err,data){
                if(err){
                    res.json({kq:0});
                }else{
                    res.render('index',{posts:data});
                }

            })
        };   
    });
    app.get('/posts/:id',auth.requireAuth,function(req,res,next){
        Post.find(function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                res.render('posts',{output:req.params.id,posts:data,name:req.cookies.name,avatar:req.cookies.avatar,id:req.cookies.id,idpost:req.cookies.idpost });
            }

        })
    });
    
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

=======
});

>>>>>>> 0f2e3ba9eff2f7d4eaa4bf8ca2951ebe5aecd043
const PORT = process.env.PORT || 4444;

app.listen(PORT, console.log(`server run on port ${PORT}`));