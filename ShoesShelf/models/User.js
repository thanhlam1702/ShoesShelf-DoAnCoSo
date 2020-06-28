const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ('avatar-default.png'),
    },
    gender: {
        type: String,
    },
    country:{
        type: String,
    },
    post_save:{
        type: mongoose.Schema.Types.ObjectId
    }
    
    
});
const User = mongoose.model('User',UserSchema);

module.exports = User;