const express = require('express');
const router = express.Router();
const { createNews } = require("../controllers/newsController");
const { newsFieldCheck } = require("../middlewares/newsValidation");

router.post('/', newsFieldCheck, createNews)

module.exports = router;