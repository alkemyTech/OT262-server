const express = require('express');
const router = express.Router();
const { getAllNews, createNews, deleteNewsById, getNewsById } = require("../controllers/newsController");
const { newsFieldCheck } = require("../middlewares/newsValidation");

router.get('/', getAllNews)
router.post('/', newsFieldCheck, createNews)
router.delete('/:id', deleteNewsById)
router.get('/:id', getNewsById)

module.exports = router;