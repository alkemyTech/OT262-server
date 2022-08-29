const express = require('express')
const router = express.Router()
const { createMember, deleteMember } = require('../controllers/member.controller')
const { memberFields } = require('../middlewares/memberValidation')

router.post('/', [memberFields], createMember)
router.delete('/:id', deleteMember)

module.exports = router