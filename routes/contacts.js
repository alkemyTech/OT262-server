const express = require('express');
const router = express.Router();
const {contactValidation} = require("../middlewares/contactValidation")
const {validateToken} = require("../middlewares/validateToken")
const {checkAdmin} = require("../middlewares/checkAdmin")
const {postContacts, getContacts} = require("../controllers/contactsController")

router.get("/", validateToken, checkAdmin, getContacts)
router.post("/", contactValidation ,postContacts)

module.exports = router;