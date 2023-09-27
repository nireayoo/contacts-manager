const asynchandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER A USER

const registerUser = asynchandler(async (req,res) =>{
    const {username, email,password} = req.body;
    if(!username || !password || !email){
        res.status(400);
        throw new Error('All fields are mandatory');

    }
    const availableUser = User.findOne({email})
    if(availableUser){
        res.status(400);
        throw new Error('User already registered');

    }
    //Hashpassword
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashPassword,
    });
    console.log(`User created ${user}!`);
    res.status(200).json({message: 'User registered sucessfully'});

});
//LOGIN A USER
const loginUser = asynchandler(async (req,res) =>{
    res.status().json();

});
//GET CURRENT USER private info
const profileUser = asynchandler(async (req,res) =>{
    res.status().json();

});

module.exports = {
    registerUser,
    loginUser,
    profileUser,

}