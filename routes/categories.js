const express = require('express');
const router = express.Router();
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoriesController');
const validation = require('../middlewares/categoryValidation');
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getCategories);
router.post('/', validateToken, checkAdmin, validation, createCategory);
router.put('/:id', validateToken, checkAdmin, updateCategory);
router.delete('/:id', validateToken, checkAdmin, deleteCategory);

module.exports = router;