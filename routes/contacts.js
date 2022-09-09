const express = require('express');
const router = express.Router();
const {contactValidation} = require("../middlewares/contactValidation")
const {validateToken} = require("../middlewares/validateToken")
const {checkAdmin} = require("../middlewares/checkAdmin")
const {postContacts, getAllContacts} = require("../controllers/contactsController")

router.get("/", validateToken, checkAdmin, getAllContacts)
router.post("/", contactValidation ,postContacts)

module.exports = router;