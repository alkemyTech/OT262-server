const express = require('express');
const router = express.Router();
const {contactField, validateToken} = require("../middlewares/contactValidation")
const {postContacts, getAllContacts} = require("../controllers/contactsController")


//Create new contact
router.post("/", contactField ,postContacts)


//Get all contacts
router.get("/", validateToken, getAllContacts)

module.exports = router;