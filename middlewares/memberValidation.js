const { check } = require('express-validator')

const memberFields = [
  check('name')
    .exists()
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .bail()
    .isString(),
  check('image')
    .isString()
    .withMessage('Image must be a string')
]
module.exports = {
  memberFields
}