var express = require('express');
var router = express.Router();
const { getAllUsers } = require('../controllers/userController')
const { deleteUser } = require('../controllers/userController')
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', validateToken, checkAdmin, getAllUsers);
router.delete('/:id', validateToken, checkAdmin, deleteUser);



module.exports = router;
