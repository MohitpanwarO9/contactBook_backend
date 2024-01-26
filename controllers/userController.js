const asyncHandler = require("express-async-handler");


const registerUser = asyncHandler(async (req , res)=>{
    res.status(200).json({message:"User is registered..."})
})

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"user is login..."})
})

module.exports = {registerUser,loginUser}