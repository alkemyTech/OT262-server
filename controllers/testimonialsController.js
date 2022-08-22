const { validationResult } = require('express-validator');
const { createTestimonial } = require('../services/testimonialsServices');

const postTestimonial = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors
        })
    } 

    const { name, content, image} = req.body;

    try {
        const newTestimonial = await createTestimonial({name, content, image});
        res.status(200).json({
            msg: "New testimonial create succesfully",
            testimonial: newTestimonial
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

module.exports = {postTestimonial};