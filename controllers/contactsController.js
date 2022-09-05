const { validationResult } = require("express-validator");
const {createContact } = require("../services/contactsServices");

const postContacts = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    return res.status(400).json({ errors:errors });

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

//Get all contacts
const getAllContacts = async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    return res.status(400).json({ errors:errors });

  }
  try{
  if(req.user.roleID === 2){
     const getContacts = await Contacts.findAll()
      res.status(200).json({ 
          message:"Contacts listed successfully",
          payload:getContacts 
      })
  }else{
    res.status(201).json({message:"You have no access!"})
  }

}

  catch (error) {
    res.status(500).json({ message: "There's been an error"})
  }

}


module.exports = {getAllContacts, postContacts}