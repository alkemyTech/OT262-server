const { Member } = require('../models')
const { validationResult } = require('express-validator')
const { createMember, findMember, updateMember, destroyMember, findAllMember} = require('../services/membersServices');

const getMembers = async (req, res) => {
  try {
    const members = await Member.findAll()
    res.status(200).json({ data: members })
  } catch (error) {
    res.status(500).send(error)
  }
}

const postMember = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  try {
    const { name, image, rol } = req.body
    const newMember = await Member.create({ name, image, rol })
    res.status(201).json(newMember)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteMember = async (req, res) => {
  const { id } = req.params;

    const foundMember = await findMember(id);

    if(foundMember === null) {
        return res.status(404).json({
            error: `Member with id ${id} not found` 
        })
    }

    try {
        const deletedMember = await destroyMember(id);
        res.status(200).json({
            msg: "Member deleted succesfully",
            deletedMember
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

const putMember = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  const { id } = req.params
  const { name, image, rol } = req.body
  try {
    const member = await Member.findByPk(id)
    if (!member) {
      return res.status(404).json({ message: 'Member not found' })
    }
    const updatedMember = {
      name,
      image,
      rol
    }
    await Member.update(updatedMember, { where: { id } })
    return res.status(200).json(updatedMember)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getMembers,
  postMember,
  deleteMember,
  putMember
}



