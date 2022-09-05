const express = require('express');
const router = express.Router();
const { getSlides, putSlides } = require('../controllers/slidesController');

router.get('/', getSlides);

router.put('/:id', putSlides);

module.exports = router;