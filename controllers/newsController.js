const { entries } = require('../models')
const { validationResult } = require('express-validator')


const deleteNewsById = async (req, res) => {
    
    const { id } = req.params
    
    try {
        const news = await entries.findOne({ where: {id}});

        if(!news) {
            return res.status(404).json({
                status: "error",
                message: `News with id ${id} not found` 
            })
        }

        const deletedNews = {
			deletedAt: new Date(),
		};

        await entries.update(deletedNews, {
			where: {
				id,
			},
		});

        res.status(200).json({
            msg: "News deleted succesfully",
            news
        })

    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

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

module.exports = { getAllNews, createNews, deleteNewsById };