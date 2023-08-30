const express = require("express");
const dotenv = require("dotenv");

const app = express.Router();
const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});