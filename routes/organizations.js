const express = require('express');
const router = express.Router();
const { getOrganizations, updateOrganization } = require("../controllers/organizationsController");

router.get('/', getOrganizations)
router.put('/:id', updateOrganization)

module.exports = router;