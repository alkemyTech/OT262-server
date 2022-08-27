const { Slides } = require('../models');

const findAllSlides = async () => {
    const allSlides = await Slides.findAll();
    return allSlides;
}

module.exports = { findAllSlides };