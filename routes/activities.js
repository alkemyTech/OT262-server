const express = require('express');
const router = express.Router();
const { postActivity, updatedActivity, getActivities, getSingleActivity, deleteActivity } = require("../controllers/activitiesController");
const { activityFieldCheck } = require("../middlewares/activityValidation");
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getActivities);
router.get('/:id', getSingleActivity);
router.post('/', validateToken, checkAdmin, activityFieldCheck, postActivity);
router.put('/:id', validateToken, checkAdmin, updatedActivity)
router.delete('/:id', validateToken, checkAdmin , deleteActivity);

module.exports = router;