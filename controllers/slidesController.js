const { findAllSlides } = require('../services/slidesService');

const getSlides = async (req, res) => {
    try {
        const slides = await findAllSlides();
        res.status(200).json({
            slides
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

module.exports = { getSlides };