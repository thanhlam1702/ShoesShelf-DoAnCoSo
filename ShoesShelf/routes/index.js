const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated ,  forwardAuthenticated } = require('../config/auth');
const upload = require('../middleware/upload')
const postcontroller = require('../controller/postcontroller')

//User model
const User = require('../models/User');

const Post = require('../models/Post');


router.get('/', (req,res) => res.render('index'));

router.get('/About.html',(req,res) => res.render('About'));

router.get('/your')

//Login handle
router.post('/login',(req,res,next) => {
    passport.authenticate('local', {
        successRedirect : '/main',
        failureRedirect : '/users/login',
        failureflash: true
    })(req, res, next);
});
router.post('/register',upload.single('avatar'),(req,res)=> {
    const { name, email, password, password2, avatar } = req.body;
    let errors = [];

    User.findOne({ email: email })
            .then(user => {
                if(user) {
                    //User exists
                    errors.push({ msg: 'Email đã được sử dụng'});
                    res.render('register',{
                        errors,
                        name,
                        email,
                        password,
                        password2,
                        avatar
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password,
                        avatar,
                        
                    });
                    if (req.file) {
                        newUser.avatar = req.file.filename
                        
                    }
                    
                    //Ma hoa password
                    bcrypt.genSalt(10, (err, salt)=> 
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            //Set password to hashed
                            newUser.password = hash;
                            //Save user
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg','Bạn đã tạo tài khoản thành công bây giờ bạn có thể đăng nhập');
                                    res.redirect('/');
                                })
                                .catch(err => console.log(err));
                        })
                    )
                }
            })
    
});
router.post('/upload',upload.array('image',20),(req,res)=> {
    const { status, brands, hashtag, collections, image } = req.body;
        const newPost = new Post({
            status,
            brands,
            hashtag,
            collections,
            image
        });
        if (req.files)
        {
            let filename = ''
            req.files.forEach(function(files, index, arr){
                filename = filename + files.filename + ','
            })
            newPost.image = filename
        }
            newPost.save()
            .then(post => {
                res.json ({
                    message: 'Đăng bài thành công'
                }) 
            })
            .catch(err => console.log(err));
        
});


router.post('/store',upload.array('image',20), postcontroller.store)

  

//logout  handle
router.get('/logout',(req,res) => {
    req.logout();
    req.flash('success_msg','You are logout');
    res.redirect('/');
});

//Dashboard
router.get('/main',ensureAuthenticated, (req,res) => 
    res.render('main', {name: req.user.name})
);    

module.exports = router;