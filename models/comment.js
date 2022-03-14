const mongoose = require("mongoose");

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text:String,
    date:Date
 
})

const  Comment= mongoose.model("Comment", CommentSchema)


module.exports = Comment;