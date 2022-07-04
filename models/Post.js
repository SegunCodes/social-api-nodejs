const mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
    desc:{
        type: String,
        max : 500
    },
    image:{
        type:String
    },
    likes:{
        type: Array,
        default: []
    }
},
{timestamps:true}
);

module.exports = mongoose.model("Post", UserSchema)