const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const upload = require('../middleware/upload')
const postcontroller = require('../controller/postcontroller')

//User model
const User = require('../models/User');

const Post = require('../models/Post');

router.get('/About.html', (req, res) => res.render('About'));

router.get('/posts', (req, res) => res.render('posts'));

router.get('/login-admin',(req,res,next) => {
    const errors = req.flash().error ;
    res.render('loginadmin',{ errors});
});


router.post('/posts/id', function (req, res, next) {
    res.cookie('idpost', req.body.id)
    var id = req.body.id;
    res.redirect('/posts/' + id);

});
router.get('/login',(req,res,next) => {
    const errors = req.flash().error ;
    res.render('login',{ errors});
});

router.get('/register',(req,res,next) => {
    const errors = req.flash().error ;
    res.render('register',{ errors});
});

//Login handle
// router.post('/login',(req,res,next) => {
//     passport.authenticate('local', {
//         successRedirect : '/main',
//         failureRedirect : '/',
//         failureflash: true
//     })(req, res, next);
// });
router.post('/register', upload.single('avatar'), (req, res) => {
    const { name, email, password, password2, avatar } = req.body;
    let errors = [];

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                //User exists
                errors.push({ msg: 'Email đã được sử dụng' });
                res.render('register', {
                    errors : `Email đã có người sử dụng `,
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
                        req.flash('success_msg', 'Bạn đã tạo tài khoản thành công bây giờ bạn có thể đăng nhập');
                        res.redirect('/');
                    })
                    .catch(err => console.log(err));
            }
        })

});
router.post('/upload', upload.array('image', 20), (req, res) => {
    const { status, brands, hashtag, collections, image, id_post, title, email_post } = req.body;
    const newPost = new Post({
        title,
        status,
        brands,
        hashtag,
        collections,
        image,
        id_post: req.body.txtIdpost,
        email_post: req.body.txtEmailpost
    });
    if (req.files) {
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
router.get('/logout', (req, res) => {
    res.clearCookie('id');
    res.clearCookie('name');
    res.clearCookie('avatar');
    res.clearCookie('email');
    res.render('index',{success:true,index:data})
});

router.post('/login', function (req, res) {
    var email = req.body.email
    var password = req.body.password
    let errors = `<h1> sai mật khẩu </h1>`;
    User.findOne({ email: email, password: password }, function (err, data) {
        if (!err) {
            if(!data){
                res.render('login',{
                    errors : `Sai mật khẩu hoặc tài khoản`
                });
            
            }else{
                res.cookie('id',data.id)
                res.cookie('email',data.email)
                res.cookie('name',data.name)
                res.cookie('avatar',data.avatar)
                res.cookie('post_save',data.post_save)
                res.redirect('/main');
            }
        }
    })
});
router.get("/" ,(req,res) => {
    if (req.query.search) {     
        const regex = new RegExp(fullTextSearchVi(req.query.search), 'gi');

        Post.find({brands : regex},function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                var noMatch = ""
                if(data.length < 1) {
                    noMatch = "Không có kết quả bạn cần tìm, vui lòng thử lại.";
                }
                res.clearCookie('id');
                res.clearCookie('name');
                res.clearCookie('avatar');
                res.clearCookie('email');
                res.render('index',{posts:data,noMatch: noMatch});
            }
    });
    } else {
        Post.find(function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                res.clearCookie('id');
                res.clearCookie('name');
                res.clearCookie('avatar');
                res.clearCookie('email');
                res.render('index',{posts:data});
            }

        })
    };   
});

router.post('/login-admin', function (req, res) {
    var email = req.body.email
    var password = req.body.password
    let errors = `<h1> sai mật khẩu </h1>`;
    User.findOne({ email: email, password: password }, function (err, data) {
        if (!err) {
            if(!data){
                res.render('loginadmin',{
                    errors : `Sai mật khẩu hoặc tài khoản`
                });

            
            }else{
                res.cookie('id',data.id)
                res.cookie('email',data.email)
                res.cookie('name',data.name)
                res.cookie('avatar',data.avatar)
                res.redirect('/admin');
            }
        }
    })
});
var au = require('../middleware/admin-auth')

router.get("/admin" ,au.requireAuth ,(req,res) => {
    if (req.query.search) {     
        const regex = new RegExp(fullTextSearchVi(req.query.search), 'gi');

        Post.find({ brands : regex },function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                var noMatch = ""
                if(data.length < 1) {
                    noMatch = "Không có kết quả bạn cần tìm, vui lòng thử lại.";
                }
                res.render('admin-manager',{posts:data,name:req.cookies.name,avatar:req.cookies.avatar,noMatch: noMatch});
            }
    });
    } else {
        Post.find(function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                res.render('admin-manager',{posts:data,name:req.cookies.name,avatar:req.cookies.avatar});
            }

        })
    };   
});
router.get("/manager-account" ,au.requireAuth ,(req,res) => {
    if (req.query.search) {     
        const regex = new RegExp(fullTextSearchVi(req.query.search), 'gi');

        User.find({email : regex},function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                var noMatch = ""
                if(data.length < 1) {
                    noMatch = "Không có kết quả bạn cần tìm, vui lòng thử lại.";
                }
                res.render('manager-account',{users:data,name:req.cookies.name,avatar:req.cookies.avatar,noMatch: noMatch});
            }
    });
    } else {
        User.find(function(err,data){
            if(err){
                res.json({kq:0});
            }else{
                res.render('manager-account',{users:data,name:req.cookies.name,avatar:req.cookies.avatar});
            }

        })
    };   
});






module.exports = router;