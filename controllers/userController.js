const asyncHandler = require("express-async-handler");


const registerUser = asyncHandler(async (req , res)=>{
    res.status(200).json({message:"User is registered..."})
})

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"user is login..."})
})

const getCurrentUser = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    res.json({message : `get current user of ${id}`})
})

const updateUser = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    res.json({message : `update the current user ${id}`});
})
module.exports = {registerUser,loginUser,getCurrentUser,updateUser};