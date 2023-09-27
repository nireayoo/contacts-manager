const express = require("express");
const router = express.Router();
const userController = require('../controllers/User-controller');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/current', userController.profileUser);


module.exports = router;