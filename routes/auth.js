var express = require('express');
var router = express.Router();
const {registerValidation} = require('../middlewares/registervalidation')
const {registerUser} = require('../controllers/registerUser.controller')
const { login } = require('../controllers/authController');
const { loginCheck } = require('../middlewares/loginValidation')

router.post('/register', registerValidation, registerUser);

router.post('/login', loginCheck ,login);

module.exports = router