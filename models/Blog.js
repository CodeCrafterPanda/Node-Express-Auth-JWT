const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    tags: {
      type: [String]
    },
    images: {
      type: [String]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
