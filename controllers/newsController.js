const { entries } = require('../models')
const { validationResult } = require('express-validator')

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

const getAllNews = async (req, res) => {

    try {
        const news = await entries.findAll({
            attributes: ['name', 'image', 'createdAt', "id"]
        })
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

module.exports = { getAllNews, createNews };