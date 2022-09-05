const { check } = require("express-validator");

const contactValidation = [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").notEmpty().withMessage("Email is required")
]


module.exports = {contactValidation}