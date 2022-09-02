const express = require('express');
const router = express.Router();
const { getOrganization, updateOrganization } = require('../controllers/organizationController');

router.get('/', getOrganization);
router.put('/', updateOrganization);

module.exports = router;