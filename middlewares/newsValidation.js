const { check } = require('express-validator');

const newsFieldCheck = [
    check('name', 'Name is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('type', 'Type is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty()
];

module.exports = { newsFieldCheck };