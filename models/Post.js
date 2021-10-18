const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('posts', PostSchema);