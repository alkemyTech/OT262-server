const { Member } = require('../models')

const createMember = async (req, res) => {
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