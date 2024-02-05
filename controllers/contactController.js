const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModel');
const contactModel = require("../models/contactModel");


//@Route /api/contacts/:id
//Method GET
//access Public

const getContacts = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    const contact = await Contact.find({saverid: id});

    res.status(200).json(contact );
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
    const userId = req.params.id;
    
    const contact  = await Contact.findById(id);
    console.log(contact);
    if(!contact)
    {
        req.status(404).json({message : "contact not found"});
        return;
    }

    const {name,email,phone} = req.body;


    const updateContact = await Contact.findByIdAndUpdate(
            id,
            {
                name,
                email,
                phone,
                userId
            },
            {new:true}
        );

    res.status(200).json({message : `contact updated ${id}`, updateContact});
})

const deleteContact = asyncHandler(async (req,res)=>{
    const id = req.params.contId;
    const contact = await Contact.findById(id);
    
    if(!contact)
    {
        res.status(404).json({message:"the contact not found"});
        return;
    }

    await Contact.deleteOne(contact);
    
    res.status(200).json({message : `contact delete ${id}`,Contact});
})

module.exports = {getContacts,createContact,updateContact,deleteContact};
