const { Member } = require('../models');

const createMember = async (data) => {
    const newMember = await Member.create({...data});
    return newMember;
}

const findMember = async (id) => {
    const foundUpdate = await Member.findOne({ where: { id:id }});
    return foundUpdate;
}

const updateMember = async (toUpdateMember ,newData) => {
    const updatedMember = await toUpdateMember.update(newData);
    return updatedMember;
}

const destroyMember = async (id) => {
    await Member.destroy({ where : { id } });
    const deletedMember = await Member.findOne({ where: { id:id }, paranoid: false });
    return deletedMember;
}

const findAllMember = async () => {
    const allMembers = await Member.findAll();
    return allMembers;
}
 
module.exports = {createMember, findMember, updateMember, destroyMember,findAllMember};