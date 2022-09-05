const express = require('express');
const router = express.Router();
const { getSlides } = require('../controllers/slidesController');

router.get('/', getSlides);

module.exports = router;