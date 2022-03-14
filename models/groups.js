const mongoose = require("mongoose");
const user=require("../models/user")

const Schema = mongoose.Schema

const GroupsSchema = new Schema({
    name:String,
    users:[user.schema]
})

const  Groups= mongoose.model("Groups", GroupsSchema)


module.exports = Groups;