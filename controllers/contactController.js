const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    res.status(200).json({messeage : `get contacts associted with user ${id}`});
});

const createContact = asyncHandler(async (req,res)=>{
    const contact  = req.body;
    res.status(200).json({messeage : `new contact is created ${contact.name}`});
})

const updateContact = asyncHandler(async (req,res)=>{
    const id = req.params.contId;
    res.status(200).json({message : `contact updated ${id}`});
})

const deleteContact = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    res.status(200).json({message : `contact delete ${id}`});
})

module.exports = {getContacts,createContact,updateContact,deleteContact};
