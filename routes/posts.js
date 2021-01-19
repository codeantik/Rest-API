const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//routes
//Get back all posts
router.get('/', async (req, res) => {
    // res.send('This contains all the posts');
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.status(404).json({message: err})
    }
});

//Get a specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.status(404).json({message: err});
    }
});

//Delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch(err) {
        res.status(404).json({message: err});
    }
});

//Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch (err) {
        res.status(404).json({message: err});
    }
});

//Submit a post
router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // post.save()
    // .then(data => {
    //     res.status(200).json(data);
    // })
    // .catch(err => {
    //     res.status(404).json({message: err});
    // })

    try {
        const savePosts = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.status(404).json({message: err});
    }
});


module.exports = router;