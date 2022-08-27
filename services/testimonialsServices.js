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

const destroyTestimonial = async (id) => {
    await Testimonial.destroy({ where : { id } });
    const deletedTestimonial = await Testimonial.findOne({ where: { id:id }, paranoid: false });
    return deletedTestimonial;
}
 
module.exports = {createTestimonial, findTestimonial, updateTestimonial, destroyTestimonial};