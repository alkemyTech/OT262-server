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

const deleteMember = async (req, res) => {
  const { id } = req.params
  const memberFound = await Member.findByPk(id)
  if (!memberFound) {
    return res.status(404).json({ message: 'Member not found' })
  }
  try {
    const deletedMember = {
      deletedAt: new Date()
    }
    await Member.update(deletedMember, { where: { id } })
    const member = await Member.findByPk(id)
    return res.status(200).json({ message: 'Member deleted successfully', member })
  } catch (error) {
    return res.send(error)
  }
}

const updateMember = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  const { id } = req.params
  const { name, image } = req.body
  try {
    const member = await Member.findByPk(id)
    if (!member) {
      return res.status(404).json({ message: 'Member not found' })
    }
    const updatedMember = {
      name,
      image
    }
    await Member.update(updatedMember, { where: { id } })
    return res.status(200).json(updatedMember)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createMember,
  deleteMember,
  updateMember
}



