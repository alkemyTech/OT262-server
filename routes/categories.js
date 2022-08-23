const express = require('express');
const router = express.Router();
const { list, create, update, destroy } = require('../controllers/categoriesController');
const validation = require('../middlewares/categoryValidation');

router.get('/', list);
router.post('/', validation, create);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
