const User =  require("../models/User");
module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.email && !req.cookies.id && !req.cookies.name){
        res.redirect('/');
        return;
    }
    User.findOne({ name:req.cookies.name},function(err,data){
        if(!data){
        res.redirect('/');
            return;
        }
    })
}