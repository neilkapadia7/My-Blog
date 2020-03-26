const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const auth = require('../middleware/auth');

const User = require('../models/User');
const Blog = require('../models/Blog');

// @route   GET    api/blogs
// @desc    Get all Blogs
// @access  Private


// @route   POST    api/blogs
// @desc    Add New Blog
// @access  Private


// @route   PUT    api/blogs/:id
// @desc    Update Blogs
// @access  Private


// @route   DELETE    api/blogs/:id
// @desc    Delete Blog
// @access  Private

module.exports = router;