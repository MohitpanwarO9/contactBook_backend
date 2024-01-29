const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @Route : /api/users/register
// @method : POST
// @access : Public

const registerUser = asyncHandler(async (req , res)=>{

    const {username , email, password} = req.body;
    if(!username || !email || !password)
    {
        res.status(400).json({message:"please provide appropratie body"});
        return;
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable)
    {
        res.status(400).json({message:"user already exist"});
        return;
    }

    const user = await User.create({
        username,
        email,
        password
    });

    console.log(`user created ${user}`);

    if(user)
    {
        res.status(201).json({_id: user.id, email: user.email, password: user.password});
        return;
    }
    else
    {
        res.status(400).json({message:"user data not valid"});
        return;
    }
    
    res.json({message:"User is registered..."})
})

// @Route : /api/users/login
// @method : GET
// @access : Public

const loginUser = asyncHandler(async (req,res)=>{
    const {email, password} = req.body;
    
    if(!email || !password)
    {
        res.status(400).json({message : "Please enter email , password"});
        return;
    }

    const findUser = await User.findOne({email});

    if(!findUser)
    {
        res.status(400).json({message : "User not found ... please enter correct email..."});
        return;
    }
    else
    {
        if(findUser.password === password)
        {
            console.log(findUser);
            res.status(200).json({message:"Login success.. ", _id: findUser.id, username: findUser.username,});
            return;
        }
        else
        {
            res.status(400).json({message:"password does not match... please try again..."})
            return;
        }
    }
    res.json({message:"user is login..."})
})

// @Route : /api/users/:id
// @method : GET
// @access : Public

const getCurrentUser = asyncHandler(async (req,res)=>{

    const user = await User.findById(req.params.id);
    if(!user)
    {
        res.status(400).json({message:"User not found"});
        return;
    }
    
    res.status(200).json(user);
})

// @Route : /api/users/:id
// @method : PUT
// @access : Public
const updateUser = asyncHandler(async (req,res)=>{
    
    const user = await User.findById(req.params.id);
    if(!user)
    {
        res.status(400).json({message:"User not found..."});
        return;
    }

    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.json(updateUser);
})


module.exports = {registerUser,loginUser,getCurrentUser,updateUser};