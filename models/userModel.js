const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please add the username"]
    },
    email:{
        type:String,
        required:[true,"please add email address"],
        unique:[true, "Email already exist"]
    },
    password:{
        type:String,
        required:[true,"Please add the user Password"]
    },
},{
    timpestamp:true
});

module.exports = mongoose.model("User",userSchema);