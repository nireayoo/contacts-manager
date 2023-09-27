const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const userSchema = new Schema({

    username:{
        type: String,
        required : [true, 'Please add username'],
    },
    email:{
        type: String,
        required : [true, 'Please add email'],
        unique: [true, 'Email address already taken'],
    }, 
    password:{
        type: String,
        required : [true, 'Please add password'],
    }, 
    phone:{
        type: BigInt,
        required : false,
    },
    DateOfBirth:{
        type: Date,
        required : false,
    },    

 },
 {timestamps:true}
 );
 
 module.exports = mongoose.model('User', userSchema);