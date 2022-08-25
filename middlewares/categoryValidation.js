const { check } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage("Name is required").bail()
        .isString().withMessage("Name is a String").bail()
];