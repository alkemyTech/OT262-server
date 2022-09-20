const { validationResult } = require('express-validator');
const { Activity } = require('../models');
const { createActivity, findActivity, updateActivity, destroyActivity, findAllActivity} = require('../services/activitiesServices');

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
        const createdActivity = await Activity.create(newActivity);
        res.status(200).json({
            msg: "New activity created succesfully",
            activity: createdActivity
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }


}
const updatedActivity = async (req, res) => {

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
        const updatedActivityRes = await activity.update(updatedActivity)
        res.status(200).json({
            msg: "Activity updated succesfully",
            activity: updatedActivityRes
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

const getSingleActivity = async (req, res) => {
    const { id } = req.params
    const activity = await Activity.findOne({ where: { id }});
    
    if (!activity){
        return res.status(404).json({
            error: `Activity with id ${id} not found`
        })
    }
    
    res.status(200).json({ activity })
    
};

const getActivities = async (req, res) => {
try {
    const activities = await Activity.findAll();
    res.status(200).json({ activities })
} catch (error) {
    res.status(500).json({
        error: error.message
    });
}

}

const deleteActivity = async (req, res) => {
    const { id } = req.params;

    const foundActivity = await findActivity(id);

    if(foundActivity === null) {
        return res.status(404).json({
            error: `Activity with id ${id} not found` 
        })
    }

    try {
        const deletedActivity = await destroyActivity(id);
        res.status(200).json({
            msg: "Activity deleted succesfully",
            deletedActivity
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

module.exports = {postActivity, updatedActivity, getActivities, getSingleActivity, deleteActivity};
