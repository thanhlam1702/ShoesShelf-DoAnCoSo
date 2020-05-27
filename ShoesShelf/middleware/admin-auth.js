const User =  require("../models/User");
module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.email){
        res.redirect('/login-admin');
        return;
    }
    if(req.cookies.email !='admin@gmail.com' && req.cookies.password != 'admin'){
        res.redirect('/login-admin');
        return;
    }
    next();
}