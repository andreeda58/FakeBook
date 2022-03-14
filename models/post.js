const mongoose = require("mongoose");
const Like=require("./like")
const Comment= require("./comment")

const Schema = mongoose.Schema

const PostSchema = new Schema({
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text: String,
    location: String,
    picture: String,
    date: Date,
    comments:[Comment.schema],
    likes:[Like.schema]
})

const Post = mongoose.model("Post", PostSchema)


module.exports = Post;