const { check } = require("express-validator");

const contactField = [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").notEmpty().withMessage("Email is required")
]

module.exports = {contactField}