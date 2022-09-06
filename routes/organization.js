const express = require('express');
const router = express.Router();
const { getOrganization, updateOrganization } = require('../controllers/organizationController');
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getOrganization);
router.put('/', validateToken, checkAdmin, updateOrganization);

module.exports = router;