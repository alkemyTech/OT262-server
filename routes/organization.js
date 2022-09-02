const express = require('express');
const router = express.Router();
const { getOrganization, updateOrganization } = require('../controllers/organizationController');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getOrganization);
router.put('/', checkAdmin, updateOrganization);

module.exports = router;