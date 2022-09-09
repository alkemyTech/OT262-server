var express = require('express');
var router = express.Router();
const {registerValidation} = require('../middlewares/registervalidation')
const {registerUser} = require('../controllers/registerUser.controller')
const { login, profile } = require('../controllers/authController');
const { loginCheck } = require('../middlewares/loginValidation')
const { validateToken } = require('../middlewares/validateToken')

router.post('/register', registerValidation, registerUser);
router.post('/login', loginCheck ,login);
router.get('/me', validateToken, profile);

module.exports = router