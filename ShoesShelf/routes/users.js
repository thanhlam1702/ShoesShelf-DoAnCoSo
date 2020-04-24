const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//User model
const User = require('../models/User');

router.get('/register',(req,res) => res.render('register'));

router.get('/login',(req,res) => res.render('login'));

router.post('/register',(req,res)=> {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    //Check require feilds
    if (!name || !email || !password || !password2){
        errors.push({ msg: 'Hãy điền đầy đủ mọi thông tin'});
    }
    //Check password match
    if (password != password2){
        errors.push({ msg:'Password không trùng khớp'});
    }
    //Check password length
    if (password.length < 6){
        errors.push({ msg: 'mật khẩu không được ngắn hơn 6 ký tự'});
    }
    if (errors.length >0){
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
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
                        password2
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });
                    
                    //Ma hoa password
                    bcrypt.genSalt(10, (err, salt)=> 
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
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
    }
});

router.post('/login',(req,res,next) => {
    passport.authenticate('local', {
        successRedirect :'/',
        failureRedirect :'/users/login',
        failureflash: true
    })(req, res, next);
});


module.exports = router;