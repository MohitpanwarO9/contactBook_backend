const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModel');


//@Route /api/contacts/:id
//Method GET
//access Public

const getContacts = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    res.status(200).json({messeage : `get contacts associted with user ${id}`});
});

//@Route /api/contact/:id
//Method POST
//access Public

const createContact = asyncHandler(async (req,res)=>{
    const {name,email,phone}  = req.body;
    const saverid = req.params.id;

    if(!name || !email || !phone || !saverid)
    {
        res.status(400).json({message:"Please check the contact details"});
        return;
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        saverid
    })

    res.status(200).json(contact);
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
