const express = require('express')
const router = express.Router()
const { postMember, deleteMember, getMembers, putMember } = require('../controllers/member.controller')
const { memberFields } = require('../middlewares/memberValidation')
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');

router.get('/', getMembers)
router.post('/', [memberFields], postMember)
router.put('/:id', putMember)
router.delete('/:id', validateToken, checkAdmin, deleteMember)

module.exports = router