const mongoose = require("mongoose");

const Schema = mongoose.Schema

const LikeSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },

    //date:String
 
})

const  Like= mongoose.model("Like", LikeSchema)


module.exports = Like;