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
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new error('contact not found');

    }
    res.status(200).json(contact);
});

const updateContact = asynchandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new error('contact not found');

    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.status(200).json(updatedContact);
});

const deleteContact = asynchandler(async (req,res) =>{
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact){
        res.status(400);
        throw new error('contact not found');

    }
    await Contact.remove();
    res.status(200).json(contact);
});


module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
}

//controller contains all the request to our db
