const express = require('express');
const router = express.Router();
const { postActivity, updateActivity, getSingleActivity } = require("../controllers/activitiesController");
const { activityFieldCheck } = require("../middlewares/activityValidation");

// create activity
router.post('/', activityFieldCheck, postActivity);
router.put('/:id', updateActivity)


//get single activity
router.get('/:id', getSingleActivity);
module.exports = router;