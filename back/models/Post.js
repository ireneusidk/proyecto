const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 500 // límite de caracteres opcional
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;