const express = require('express');
const router = express.Router();
const {contactValidation} = require("../middlewares/contactValidation")
const {validateToken} = require("../middlewares/validateToken")
const {checkAdmin} = require("../middlewares/checkAdmin")
const {postContacts, getAllContacts} = require("../controllers/contactsController")


//Create new contact
router.post("/", contactValidation ,postContacts)

//Get all contacts
router.get("/", /* validateToken, checkAdmin,  */getAllContacts)

module.exports = router;