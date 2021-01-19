const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        requied: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);