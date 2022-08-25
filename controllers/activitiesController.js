const { validationResult } = require('express-validator');
const { Activity } = require('../models')

const postActivity = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors
        })
    } 

    const { name, content } = req.body;

    try {
        const newActivity = { name, content }
        await Activity.create(newActivity);
        res.status(200).json({
            msg: "New activity created succesfully",
            activity: newActivity
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

module.exports = {postActivity};