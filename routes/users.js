var express = require('express');
var router = express.Router();
const {registerValidation} = require('../middlewares/registervalidation')
const {registerUser} = require('../controllers/registerUser.controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth/register', registerValidation, registerUser);



module.exports = router;
