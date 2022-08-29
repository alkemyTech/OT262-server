const express = require('express');
const router = express.Router();
const {contactField} = require("../middlewares/contactValidation")
const {postContacts} = require("../controllers/contactsController")


//Create new contact
router.post("/", contactField ,postContacts)

module.exports = router;