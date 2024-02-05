const express = require("express");
const router = express.Router();

const {getContacts,createContact,updateContact,deleteContact} = require('../controllers/contactController');

router.get('/:id',getContacts)
    .post('/:id',createContact)
    .put('/:id/:contId',updateContact)
    .delete('/:id/:contId',deleteContact);

module.exports =  router;