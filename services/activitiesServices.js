const { Activity } = require('../models');

const createActivity = async (data) => {
    const newActivity = await Activity.create({...data});
    return newActivity;
}

const findActivity = async (id) => {
    const foundUpdate = await Activity.findOne({ where: { id:id }});
    return foundUpdate;
}

const updateActivity = async (toUpdateActivity ,newData) => {
    const updatedActivity = await toUpdateActivity.update(newData);
    return updatedActivity;
}

const destroyActivity = async (id) => {
    await Activity.destroy({ where : { id } });
    const deletedActivity = await Activity.findOne({ where: { id:id }, paranoid: false });
    return deletedActivity;
}

const findAllActivity = async () => {
    const allActivity = await Activity.findAll();
    return allActivity;
}
 
module.exports = {createActivity, findActivity, updateActivity, destroyActivity,findAllActivity};