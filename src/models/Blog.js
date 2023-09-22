const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    coverImage: {
        data: Buffer,
        contentType: String,
    },

}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

module.exports = Blog;