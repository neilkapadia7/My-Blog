const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Image = require('../models/Image');

router.post(
    '/',
    [
        auth,
        [
            check('path', 'Path Is Required').not().isEmpty(),
            check('user', 'User Is Required').not().isEmpty()
        ]
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { path, user } = req.body;

        try {
            const newImage = new Image({
                path,
                user: req.user.id
            });  
            
            const image = await newImage.save();

            res.json(image);
        } 
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
});

module.exports = router;