const express = require('express')
const router = express.Router()
const { createMember } = require('../controllers/member.controller')
const { memberFields } = require('../middlewares/memberValidation')

router.post('/', [memberFields], createMember)

module.exports = router