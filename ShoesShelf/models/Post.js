const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,

    },
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
    },
    date: {
        type: String,
        default: getDate(),
    },
    email_post: {
        type: String,
    },
    id_post: {
        type: String
    }

});
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
function getDate() {
    var d = new Date();
    var fullTime = `${ d.getHours()}:${ d.getMinutes() } ${ d.getDate() } /${d.getMonth()}/${ d.getFullYear() }`;
    return fullTime.toString();
}
