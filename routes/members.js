const express = require('express')
const router = express.Router()
const { createMember, deleteMember, getMembers, updateMember } = require('../controllers/member.controller')
const { memberFields } = require('../middlewares/memberValidation')
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getMembers)
router.post('/', [memberFields], createMember)
router.put('/:id', updateMember)
router.delete('/:id', validateToken, checkAdmin, deleteMember)

module.exports = router