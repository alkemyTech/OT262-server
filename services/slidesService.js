const { Slides } = require('../models');

const findAllSlides = async () => {
    const allSlides = await Slides.findAll();
    return allSlides;
}

const findSlide = async (id) => {
    const foundSlide = await Slides.findOne({ where: { id:id } });
    return foundSlide;
}

const updateSlide = async (toUpdateSlide, newData) => {
    const updatedSlide = await toUpdateSlide.update(newData);
    return updatedSlide;
}

module.exports = { findAllSlides, updateSlide, findSlide };