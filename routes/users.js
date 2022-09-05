var express = require('express');
var router = express.Router();
const { getAllUsers } = require('../controllers/userController')
const { deleteUser } = require('../controllers/userController')


/* GET users listing. */
router.get('/', getAllUsers);

// Delete user
router.delete('/:id', deleteUser);



module.exports = router;
