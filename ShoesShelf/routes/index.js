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

router.get('/About.html',(req,res) => res.render('About'));

router.get('/posts',(req,res) => res.render('posts'))


router.post('/posts/id',function(req,res,next){
    res.cookie('idpost',req.body.id)
    var id=req.body.id;
    res.redirect('/posts/'+id);
    
});
//Login handle
// router.post('/login',(req,res,next) => {
//     passport.authenticate('local', {
//         successRedirect : '/main',
//         failureRedirect : '/',
//         failureflash: true
//     })(req, res, next);
// });
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
                    //Save user
                    newUser.save()
                        .then(user => {
                            req.flash('success_msg','Bạn đã tạo tài khoản thành công bây giờ bạn có thể đăng nhập');
                            res.redirect('/');
                        })
                        .catch(err => console.log(err));
                }
            })
    
});
router.post('/upload',upload.array('image',20),(req,res)=> {
    const { status, brands, hashtag, collections, image ,id_post} = req.body;
        const newPost = new Post({
            status,
            brands,
            hashtag,
            collections,
            image,
            id_post:req.body.txtIdpost
        });
        if (req.files)
        {
            var fineinfo = req.files
            newPost.image = fineinfo
            // let filename = ''
            // req.files.forEach(function(files, index, arr){
            //     filename = filename + files.filename + ','
            // })
            // filename = filename.substring(0, filename.lastIndexOf(","))
            // newPost.image = filename
        }
            newPost.save()
            .then(post => {
                res.redirect('/main')
            })
            .catch(err => console.log(err));
        
});

//logout  handle
router.get('/logout',(req,res) => {
    req.logout();
    req.flash('success_msg','You are logout');
    res.redirect('/');
});

router.post('/login', function(req, res) {
    var email = req.body.email
    var password = req.body.password
    User.findOne({email:email,password: password }, function(err, data) {
        if (!err) {
            if(!data){
                res.render('login',{
                    errors: [
                         'User does not exist.'
                    ],
                    values : req.body
                })
                return
           }else{
                res.cookie('id',data.id)
                res.cookie('email',data.email)
                res.cookie('name',data.name)
                res.cookie('avatar',data.avatar)
                res.redirect('/main');
            }
        } 
    })
});

router.get('/main#5ec291b84abc1603c0500c91',function(req, res , next) {
    res.render('posts')
})


module.exports = router;