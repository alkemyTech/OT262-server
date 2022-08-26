const { entries } = require('../models')

const getAllNews = async (req, res) => {

    try {
        const news = await entries.findAll({
            attributes: ['name', 'image', 'createdAt']
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

module.exports = { getAllNews };