const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' 
    }
});

module.exports = mongoose.model('images', ImageSchema);