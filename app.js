const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});