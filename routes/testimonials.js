const express = require('express');
const router = express.Router();
const { testimonialFields } = require('../middlewares/bodyValidation');
const { postTestimonial, putTestimonial } = require('../controllers/testimonialsController');

// create a new testimonial
router.post('/', testimonialFields, postTestimonial);

router.put('/:id', putTestimonial)

module.exports = router;