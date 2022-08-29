const express = require('express');
const router = express.Router();
const { postActivity, updateActivity, getActivities, getSingleActivity } = require("../controllers/activitiesController");
const { activityFieldCheck } = require("../middlewares/activityValidation");

// create activity
router.post('/', activityFieldCheck, postActivity);
router.put('/:id', updateActivity)
// get all
router.get('/', getActivities);


//get single activity
router.get('/:id', getSingleActivity);
module.exports = router;