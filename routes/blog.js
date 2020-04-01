const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const auth = require('../middleware/auth');

const User = require('../models/User');
const Blog = require('../models/Blog');

// @route   GET    api/blogs
// @desc    Get all Blogs
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const blogs = await Blog.find({ user: req.user.id }).sort({ date: -1 });
        res.json(blogs);    
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   POST    api/blogs
// @desc    Add New Blog
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('title', 'Title is Required').not().isEmpty(),
            check('body', 'Body is Required').not().isEmpty(),
            check('image', 'Image is Required').not().isEmpty(),
            check('author', 'Author is Required').not().isEmpty(),
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) { 
            res.status(400).json({ errors: errors.array() });
        }

        const {title, body, image, author} = req.body;

        try {
            const newBlog = new Blog({
                user: req.user.id,
                title,
                body,
                image,
                author
            }); 
            
            const blog = await newBlog.save();

            res.json(blog);
        } 
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route   PUT    api/blogs/:id
// @desc    Update Blogs
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const {title, body, image} = req.body;

    const blogFields = {};

    if(title) blogFields.title = title;
    if(body) blogFields.body = body;
    if(image) blogFields.image = image;

    try {
        let blog = await Blog.findById(req.params.id);
        
        if(!blog) return res.status(404).json({ msg: 'Blog Not Found'});

        if(blog.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }

        blog = await Blog.findByIdAndUpdate(req.params.id,
                    {$set: blogFields},
                    {new: true}
                );

        res.json(blog);
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE    api/blogs/:id
// @desc    Delete Blog
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);
        
        if(!blog) return res.status(400).json({ msg: 'Blog Not Found'});

        if(blog.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }

        await Blog.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Blog Deleted'});
    } 
    catch (err) {
        
    }
});



module.exports = router;