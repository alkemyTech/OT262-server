const express = require('express');
const router = express.Router();
const { getCategories, postCategory, putCategory, deleteCategory } = require('../controllers/categoriesController');
const validation = require('../middlewares/categoryValidation');
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getCategories);
router.post('/', validateToken, checkAdmin, validation, postCategory);
router.put('/:id', validateToken, checkAdmin, putCategory);
router.delete('/:id', validateToken, checkAdmin, deleteCategory);

module.exports = router;