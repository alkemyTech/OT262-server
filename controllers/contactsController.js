const { validationResult } = require("express-validator");
const { createContact, getAllContacts } = require("../services/contactsServices");

const postContacts = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors });
  }

  const { name, phone, email, message } = req.body;

  try {
    const newContact = await createContact({ name, phone, email, message });
    res.status(200).json({
      message: "Contact created",
      data: newContact,
    });
  } catch (err) {
    res.status(500).json({ message: "There's been an error" });
  }
};

//Get all contacts
const getContacts = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors });
  }
  try {
    const getContacts = await getAllContacts();
    res.status(200).json({
      message: "Contacts listed successfully",
      data: getContacts,
    });
  } catch (error) {
    res.status(500).json({ message: "There's been an error" });
  }
};

module.exports = { getContacts, postContacts };
