var express = require('express');
var router = express.Router();
const {registerValidation} = require('../middlewares/registervalidation')
const {registerUser} = require('../controllers/registerUser.controller')

router.post('/register', registerValidation, registerUser);

module.exports = router