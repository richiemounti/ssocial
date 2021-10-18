const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


//Posts model
const Post  = require('../../models/Post');

// @route GET api/posts
// @desc Get all ipoststems
// @qccess Public
router.get('/', (req, res) => {
    Post.find()
    .sort({date:-1})
    .then(posts => res.json(posts))
});


// @route POST api/posts
// @desc create a post
// @qccess Public
router.post('/', auth, (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        post: req.body.post
    });

    newPost.save().then(post => res.json(post));
});


// @route DELETE api/posts/:id
// @desc delete a post
// @qccess Public
router.delete('/:id', auth, (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.remove().then(() => res.json({sucess: true})))
        .catch(err => res.status(404).json({success: false}));
});
module.exports = router;