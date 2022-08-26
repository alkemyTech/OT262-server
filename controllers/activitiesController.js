const { validationResult } = require('express-validator');
const { Activity } = require('../models')

const postActivity = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors
        })
    } 

    const { name, content, image } = req.body;

    try {
        const newActivity = { name, content, image }
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
const updateActivity = async (req, res) => {

    const { name, content, image } = req.body;
    const { id } = req.params;
    const updatedActivity = { name, content, image }
    const activity = await Activity.findOne({ where: { id }});
    
    if (!activity){
        return res.status(404).json({
            error: `Activity with id ${id} not found`
        })
    }

    try {
        activity.update(updatedActivity)
        res.status(200).json({
            msg: "Activity updated succesfully",
            activity: updatedActivity
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

const deleteActivity = async (req, res) => {
    const { id } = req.params;
    const activity = await Activity.findOne({ where: {id}});

    if (!activity){
        return res.status(404).json({
            error: `Activity with id ${id} not found`
        })
    }

    activity.deletedAt = Date.now()
    res.status(200).json({
        activity
    })
}


module.exports = {postActivity, updateActivity, deleteActivity};