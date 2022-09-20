const {Contacts} = require("../models")

//Create new contact
const createContact = async (data) => {
    const newContact = await Contacts.create({...data})
    return newContact;
}

const getAllContacts = async () => {
    const allContacts = await Contacts.findAll();
    return allContacts;
}




module.exports = {createContact, getAllContacts}