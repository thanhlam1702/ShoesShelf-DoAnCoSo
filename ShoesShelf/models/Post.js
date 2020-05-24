const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    status: {
        type: String,
        
    },
    brands: {
        type: String,
        
    },
    hashtag: {
        type: String,
        
    },
<<<<<<< HEAD
    image: {
        type: Array,
    },
    collections: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    id_post:{
        type:String
=======
    image: [{
        name: String,
    }],
    collections: {
        type: String,
>>>>>>> 0f2e3ba9eff2f7d4eaa4bf8ca2951ebe5aecd043
    }
    
});
const Post = mongoose.model('Post',PostSchema);

module.exports = Post;