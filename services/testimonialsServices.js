const { Testimonial } = require('../models');

const createTestimonial = async (data) => {
    const newTestimonial = await Testimonial.create({...data});
    return newTestimonial;
}

module.exports = {createTestimonial};