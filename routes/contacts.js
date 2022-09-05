const express = require('express');
const router = express.Router();
const {contactField, validateToken, checkAdmin} = require("../middlewares")

const {postContacts, getAllContacts} = require("../controllers/contactsController")


//Create new contact
router.post("/", contactField ,postContacts)

//Get all contacts
router.get("/", validateToken, checkAdmin, getAllContacts)

module.exports = router;