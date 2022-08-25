const express = require('express');
const router = express.Router();
const { testimonialFields } = require('../middlewares/bodyValidation');
const { postTestimonial, putTestimonial, deleteTestimonial } = require('../controllers/testimonialsController');

// create a new testimonial
router.post('/', testimonialFields, postTestimonial);

router.put('/:id', putTestimonial);

router.delete('/:id', deleteTestimonial);

module.exports = router;