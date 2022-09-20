const { entries } = require('../models');

const createNews = async (data) => {
    const newNews = await entries.create({...data});
    return newNews;
}

const findNews = async (id) => {
    const foundUpdate = await entries.findOne({ where: { id:id }});
    return foundUpdate;
}

const updateNews = async (toUpdateNews ,newData) => {
    const updatedNews = await toUpdateNews.update(newData);
    return updatedNews;
}

const destroyNews = async (id) => {
    await entries.destroy({ where : { id } });
    const deletedNews = await entries.findOne({ where: { id:id }, paranoid: false });
    return deletedNews;
}

const findAllNews = async () => {
    const allNewss = await entries.findAll();
    return allNewss;
}
 
module.exports = {createNews, findNews, updateNews, destroyNews,findAllNews};