const asynchandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//REGISTER A USER

const registerUser = asynchandler(async (req,res) =>{
    const {username, email ,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error('All fields are mandatory');

    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error('User already registered');
    }
    //Hashpassword
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("hashed password: ", hashPassword)
    const user = await User.create({
        username,
        email,
        password: hashPassword,
    });
    console.log(`User created ${user}!`);
    if(user){
        res.status(201).json({ _id: user.id, email:user.email});  

    }else{
        res.status(400);
        throw new Error('User data is not valid');
    }
 
    res.json({message: 'User registered sucessfully'});
    

});
//LOGIN A USER
//we need to ensure that the client has to pass acess 
const loginUser = asynchandler(async (req,res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error('All fields are mandatory!');
    }
   //we find the user by mail and then compare the password with hashed password;
   const user = await User.findOne({email});
   //check
   if(user && (await bcrypt.compare(password, user.password))){
    const accessToken = jwt.sign({
        user: {
            username: user.username,
            email: user.email,
            id: user.id,
        },
    }, process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: "1m"});
    res.status(200).json({accessToken});

   }else{
    res.status(401);
    throw new Error('Email or password not valid')

   }

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