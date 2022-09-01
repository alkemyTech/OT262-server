const express = require('express');
const router = express.Router();
const { getAllNews, createNews } = require("../controllers/newsController");
const { newsFieldCheck } = require("../middlewares/newsValidation");

router.get('/', getAllNews)
router.post('/', newsFieldCheck, createNews)

module.exports = router;