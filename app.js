const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const contactRoutes = require('./routes/ContactsRoutes');
const errorHandler = require("./middleware/errorHandler");
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
},
console.log("DB is now connected")).catch((err)=>{
    console.log(err);

});

const PORT = 5000;

app.use('/api/contacts', contactRoutes);
app.use(errorHandler);
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});