const express = require('express');
const router = express.Router();
const { getOrganization } = require('../controllers/organizationController');

router.get('/', getOrganization);

module.exports = router;