const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const bodyParser =require('body-parser');

const app = express();
//Passport config
require('./config/passport')(passport);

// DB config
const db = require('./config/keys').MongoURI;

//connect to Mongo
mongoose.connect(db, { userNewUrlParser: true})
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
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(db, { userNewUrlParser: true}, function(error,client){
    var blog = client.db("blog");
    console.log("DB connect");

    app.post("/your-shelf",function(req,res){
        blog.collection("blog").insertOne(req.body, function(error,documet){
            res.render('your-shelf');
        });
    });
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, console.log(`server run on port ${PORT}`));