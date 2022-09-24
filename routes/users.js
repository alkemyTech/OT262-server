var express = require('express');
var router = express.Router();
const { getAllUsers, deleteUser, putUser } = require('../controllers/userController')
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', validateToken, checkAdmin, getAllUsers);
router.delete('/:id', validateToken, checkAdmin, deleteUser);
router.put('/:id', validateToken, checkAdmin, putUser)

module.exports = router;
