const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const upload = require('../middleware/upload')

//User model
const User = require('../models/User');

router.post('/dangky',upload.single('avatar'),(req,res)=> {
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




module.exports = router;