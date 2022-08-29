const { validationResult } = require("express-validator");
const { createContact } = require("../services/contactsServices");

const postContacts = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.message });
  }

  const {name,phone,email,message} = req.body

  try{
    const newContact = await createContact({name,phone,email,message})
    res.status(200).json({ 
        message:"Contact created",
        payload:newContact
    })
}
    catch(err){
        res.status(500).json({ message: "There's been an error"})
    }
}

module.exports = {postContacts}