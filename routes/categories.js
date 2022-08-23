const express = require('express');
const router = express.Router();
const { list, create, update } = require('../controllers/categoriesController');
const validation = require('../middlewares/categoryValidation');

router.get('/', list);
router.post('/', validation, create);
router.put('/:id', update);

module.exports = router;
