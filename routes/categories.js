const express = require('express');
const router = express.Router();
const { list } = require('../controllers/categoriesController');

router.get('/', list);

module.exports = router;
