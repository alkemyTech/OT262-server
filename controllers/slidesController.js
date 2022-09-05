const { findAllSlides, updateSlide, findSlide } = require('../services/slidesService');

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

const putSlides = async (req, res) => {

    const { id } = req.params;

    const foundSlide = await findSlide(id);

    if(foundSlide === null) {
        return res.status(404).json({
            error: `Slide with id ${id} not found` 
        })
    }

    const { imageUrl, text, order, organizationId } = req.body;

    try {
        const updatedSlide = await updateSlide(foundSlide, { imageUrl, text, order, organizationId });
        res.status(200).json({
            msg: "Slide updated succesfully",
            updatedSlide
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

module.exports = { getSlides, putSlides };