const { check} = require('express-validator');

const registerValidation = [
    check('firstName').notEmpty().withMessage('Name field is required'),
    check('lastName').notEmpty().withMessage('Surname field is required'),
    check('email').notEmpty().withMessage('Email field is required'),
    check('password').notEmpty().withMessage('Password field is required'),
]

module.exports = {registerValidation}