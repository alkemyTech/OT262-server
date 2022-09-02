const { check } = require('express-validator');

const loginCheck = [
    check('email', 'Email address is required').not().isEmpty(),
    check('email', 'Email address must be a valid email format').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must be a string').isString()
];

module.exports = {loginCheck};