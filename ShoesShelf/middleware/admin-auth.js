const User =  require("../models/User");
module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.email && !req.cookies.avatar && !req.cookies.name){
        res.redirect('/login_admin');
        return;
    }
    if(req.cookies.email !='anhtuan240599@gmail.com' && req.cookies.password !='123456'){
        res.redirect('/login_admin');
        return;
    }
    next();
}