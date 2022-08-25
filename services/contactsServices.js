const {Contacts} = require("../models")

const createContact = async (data) => {
    const newContact = await Contacts.create({...data})
    return newContact;
}

module.exports = {createContact}