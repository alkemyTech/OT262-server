const express = require('express');
const router = express.Router();
const { postActivity, updateActivity, deleteActivity } = require("../controllers/activitiesController");
const { activityFieldCheck } = require("../middlewares/activityValidation");

// create activity
router.post('/', activityFieldCheck, postActivity);
router.put('/:id', updateActivity)


//soft delete activity
router.delete('/:id', deleteActivity);
module.exports = router;