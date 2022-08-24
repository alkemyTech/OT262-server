const express = require('express');
const router = express.Router();
const { list, create } = require('../controllers/categoriesController');
const validation = require('../middlewares/categoryValidation');

router.get('/', list);
router.post('/', validation, create);

module.exports = router;
