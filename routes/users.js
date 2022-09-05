var express = require('express');
var router = express.Router();
const { deleteUser } = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/:id', deleteUser);



module.exports = router;
