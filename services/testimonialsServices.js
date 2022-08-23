const { Testimonial } = require('../models');

const createTestimonial = async (data) => {
    const newTestimonial = await Testimonial.create({...data});
    return newTestimonial;
}

const findTestimonial = async (id) => {
    const foundUpdate = await Testimonial.findOne({ where: { id:id }});
    return foundUpdate;
}

const updateTestimonial = async (toUpdateTestimonial ,newData) => {
    const updatedTestimonial = await toUpdateTestimonial.update(newData);
    return updatedTestimonial;
}
 
module.exports = {createTestimonial, findTestimonial, updateTestimonial};