const mongoose = require("mongoose");

//Defining the schema for contact Page
const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//Crating a new collection/model for contact details
const Contact = new mongoose.model("Contact", contactSchema) //(Collection name , Schema Name)

module.exports=Contact
