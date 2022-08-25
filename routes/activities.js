const express = require('express');
const router = express.Router();
const { postActivity } = require("../controllers/activitiesController");
const { activityFieldCheck } = require("../middlewares/activityValidation");

// create activity
router.post('/', activityFieldCheck, postActivity);

module.exports = router;