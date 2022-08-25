const { check } = require('express-validator');

const testimonialFields = [
    check('name', 'Name is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty()
];

module.exports = {testimonialFields};