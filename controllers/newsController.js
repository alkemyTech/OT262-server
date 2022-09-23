const { validationResult } = require('express-validator');
const { createNews, findNews, updateNews, destroyNews, findAllNews} = require('../services/newsServices');


const getNewsById = async (req, res) => {

    const { id } = req.params;
    const newsDetails = await findNews(id)

    if(newsDetails === null) {
        return res.status(404).json({
            error: `News with id ${id} not found` 
        })
    }

    try {
        res.status(200).json({
            msg: "News details",
            newsDetails: newsDetails
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

const deleteNewsById = async (req, res) => {
    
    const { id } = req.params;

    const foundNews = await findNews(id);

    if(foundNews === null) {
        return res.status(404).json({
            error: `News with id ${id} not found` 
        })
    }

    try {
        const deletedNews = await destroyNews(id);
        res.status(200).json({
            msg: "News deleted succesfully",
            deletedNews
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

const postNews = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors
        })
    } 
    
    const { name, content, image, type, categoryId } = req.body;
    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
    
    const fileType = image.split(":")[1].split(";")[0];
    
    if (!SUPPORTED_FORMATS.includes(fileType)){
        return res.status(500).json({
            error: `Only file extensions accepted are ${SUPPORTED_FORMATS}`
        })
    }

    try {
        const createdNew = await createNews({ name, content, image, type, categoryId })
        res.status(200).json({
            msg: "New news created succesfully",
            data: createdNew
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

const getAllNews = async (req, res) => {

    try {
        const news = await findAllNews()
        res.status(200).json({
            msg: "All the news",
            allNews: news
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

const putNews = async (req, res) => {

    const { id } = req.params;

    const foundNews = await findNews(id);

    if(foundNews === null) {
        return res.status(404).json({
            error: `News with id ${id} not found` 
        })
    }

    const { name, content, image} = req.body;
    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

    const fileType = image.split(":")[1].split(";")[0];
    if (!SUPPORTED_FORMATS.includes(fileType)){
        return res.status(500).json({
            error: `Only file extensions accepted are ${SUPPORTED_FORMATS}`
        })
    }

    try {
        const toUpdateNews = await updateNews(foundNews, {name, content, image});
        res.status(200).json({
            msg: "News updated succesfully",
            News: toUpdateNews
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

module.exports = { getAllNews, postNews, deleteNewsById, getNewsById, putNews };