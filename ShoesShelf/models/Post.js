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
    image: {
        type: Array,
    },
    collections: {
        type: String,
    }
    
});
const Post = mongoose.model('Post',PostSchema);

module.exports = Post;