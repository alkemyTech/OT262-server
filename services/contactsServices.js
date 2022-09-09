const {Contacts} = require("../models")

//Create new contact
const createContact = async (data) => {
    const newContact = await Contacts.create({...data})
    return newContact;
}




module.exports = {createContact}