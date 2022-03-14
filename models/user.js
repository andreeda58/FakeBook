const mongoose = require("mongoose");

const Schema = mongoose.Schema

const UserSchema = new Schema({
   
    name: String,
    lastName: String,
    birthdate: Date,
    password: String,
    email: String,
    adress:String,
    

    groups: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Groups"
    },
    date: Date

})

const User = mongoose.model("User", UserSchema)


module.exports = User;