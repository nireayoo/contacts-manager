const express = require("express");
const router = express.Router();
const userController = require('../controllers/User-controller');

router.post('/register', userController.registerUser);
router.post('/login',(req,res) => {
    res.status(200).json({message:'login suceessful!'})

});
router.post('/current',(req,res) => {
    res.status(200).json({message:'current user!'})

});


module.exports = router;