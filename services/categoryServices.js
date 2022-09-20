const { Category } = require('../models');

const createCategory = async (data) => {
    const newCategory = await Category.create({...data});
    return newCategory;
}

const findCategory = async (id) => {
    const foundUpdate = await Category.findOne({ where: { id:id }});
    return foundUpdate;
}

const updateCategory = async (toUpdateCategory ,newData) => {
    const updatedCategory = await toUpdateCategory.update(newData);
    return updatedCategory;
}

const destroyCategory = async (id) => {
    await Category.destroy({ where : { id } });
    const deletedCategory = await Category.findOne({ where: { id:id }, paranoid: false });
    return deletedCategory;
}

const findAllCategory = async () => {
    const allCategorys = await Category.findAll();
    return allCategorys;
}
 
module.exports = {createCategory, findCategory, updateCategory, destroyCategory,findAllCategory};