const express = require('express');
const router = express.Router();
const { getAllNews, postNews, deleteNewsById, getNewsById, putNews } = require("../controllers/newsController");
const { newsFieldCheck } = require("../middlewares/newsValidation");
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getAllNews)
router.get('/:id', getNewsById)
router.post('/', validateToken, checkAdmin, newsFieldCheck, postNews)
router.put('/:id', validateToken, checkAdmin, putNews)
router.delete('/:id', validateToken, checkAdmin, deleteNewsById)

module.exports = router;