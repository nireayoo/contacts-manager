//get all contacts
//route GET /api/contacts
const asynchandler = require('express-async-handler');
const Contact = require('../models/Contact');

const getContacts =  async (req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
};
const createContact = asynchandler(async (req,res) =>{
    //if they are not empty we create sth
    console.log('The request body is:', req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){

        res.status(400);
        throw new error('All fields are mandatory');
    }
    const contact = await Contact.create({
        name,
        email,
        phone,

    })
    res.status(200).json(contact);
});

const getContact = asynchandler(async (req,res) =>{
    res.status(200).json({message: `get contact for ${req.params.id}`});
});

const updateContact = asynchandler(async (req,res) =>{
    res.status(200).json({message: `update contact for ${req.params.id}`});
});

const deleteContact = asynchandler(async (req,res) =>{
    res.status(200).json({message: `delete contact for ${req.params.id}`});
});


module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
}

//controller contains all the request to our db
