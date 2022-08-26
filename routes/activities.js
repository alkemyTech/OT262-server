const express = require('express');
const router = express.Router();
const { postActivity, updateActivity, getActivities } = require("../controllers/activitiesController");
const { activityFieldCheck } = require("../middlewares/activityValidation");

// create activity
router.post('/', activityFieldCheck, postActivity);
router.put('/:id', updateActivity)
// get all
router.get('/', getActivities);

module.exports = router;