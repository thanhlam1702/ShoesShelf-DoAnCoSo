const Post = require('../models/Post');

const store = (req , res , next) => {
    let newPost = new Post ({
        status: req.body.status,
        collections: req.body.collections,
        brands: req.body.brands,
        hashtag: req.body.hashtag
            
    }) 
    if (req.files)
    {
        let path = ''
        req.files.foreach(function(files, index, arr){
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        newPost.image = path
    }
        newPost.save()
        .then(post => {
        req.flash('success_msg','đăng bài thành công');
        res.redirect('/');
        })
        .catch(err => console.log(err));
    
}

module.exports = { store  }