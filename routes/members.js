const express = require('express')
const router = express.Router()
const { createMember, deleteMember, getMembers } = require('../controllers/member.controller')
const { memberFields } = require('../middlewares/memberValidation')

router.get('/', getMembers)
router.post('/', [memberFields], createMember)
router.delete('/:id', deleteMember)

module.exports = router