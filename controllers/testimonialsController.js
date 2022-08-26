const { validationResult } = require('express-validator');
const { createTestimonial, findTestimonial, updateTestimonial, destroyTestimonial, findAllTestimonial} = require('../services/testimonialsServices');

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

const putTestimonial = async (req, res) => {

    const { id } = req.params;

    const foundTestimonial = await findTestimonial(id);

    if(foundTestimonial === null) {
        return res.status(404).json({
            error: `Testimonial with id ${id} not found` 
        })
    }

    const { name, content, image} = req.body;

    try {
        const toUpdateTestimonial = await updateTestimonial(foundTestimonial, {name, content, image});
        res.status(200).json({
            msg: "Testimonial updated succesfully",
            testimonial: {name, content, image}
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

const deleteTestimonial = async (req, res) => {
    
    const { id } = req.params;

    const foundTestimonial = await findTestimonial(id);

    if(foundTestimonial === null) {
        return res.status(404).json({
            error: `Testimonial with id ${id} not found` 
        })
    }

    try {
        await destroyTestimonial(id);
        res.status(200).json({
            msg: "Testimonial deleted succesfully"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

const getTestimonial = async (req, res) => {
    const allTestimonials = await findAllTestimonial();
    res.status(200).json({
        allTestimonials
    })
}

const getTestimonialById = async (req, res) => {

    const { id } = req.params;

    try {
        const obtainedTestimonial = await findTestimonial(id);

        if(obtainedTestimonial === null) {
            return res.status(404).json({
                error: `Testimonial with id ${id} not found` 
            })
        }else {
            res.status(200).json({
                obtainedTestimonial
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
}

module.exports = {postTestimonial, putTestimonial, deleteTestimonial, getTestimonial, getTestimonialById};