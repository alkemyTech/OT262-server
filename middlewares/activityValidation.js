const { check } = require('express-validator');

const activityFieldCheck = [
    check('name', 'Name is required').not().isEmpty(),
    check('name', 'Name must be a string').isString(),
    check('content', 'Content is required').not().isEmpty()
];

module.exports = {activityFieldCheck};