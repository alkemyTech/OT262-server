const { validationResult } = require('express-validator');
const { entries } = require('../models')

const createNews = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors
        })
    } 

    const { name, content, image, type } = req.body;

    try {
        const newNews = { name, content, image, type }
        await entries.create(newNews);
        res.status(200).json({
            msg: "New news created succesfully",
            payload: newNews
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

module.exports = { createNews };