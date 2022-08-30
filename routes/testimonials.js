const express = require('express');
const router = express.Router();
const { testimonialFields } = require('../middlewares/bodyValidation');
const { postTestimonial, putTestimonial, deleteTestimonial, getTestimonial, getTestimonialById } = require('../controllers/testimonialsController');

// create a new testimonial
router.post('/', testimonialFields, postTestimonial);

router.put('/:id', putTestimonial);

router.delete('/:id', deleteTestimonial);

router.get('/', getTestimonial);

router.get('/:id', getTestimonialById);

module.exports = router;