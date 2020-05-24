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
    date: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
<<<<<<< HEAD
        default: ('avatar-default.png')
=======
>>>>>>> 0f2e3ba9eff2f7d4eaa4bf8ca2951ebe5aecd043
    }
    
});
const User = mongoose.model('User',UserSchema);

module.exports = User;