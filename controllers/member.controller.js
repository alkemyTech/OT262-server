const { Member } = require('../models')
const { validationResult } = require('express-validator')

const createMember = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  try {
    const { name, image } = req.body
    const newMember = await Member.create({ name, image })
    res.status(201).json(newMember)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createMember
}