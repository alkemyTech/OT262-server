const express = require('express');
const router = express.Router();
const { getSlides, putSlides } = require('../controllers/slidesController');
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getSlides);
router.put('/:id', validateToken, checkAdmin, putSlides);

module.exports = router;