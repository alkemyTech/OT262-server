const express = require('express');
const router = express.Router();
const { testimonialFields } = require('../middlewares/bodyValidation');
const { postTestimonial } = require('../controllers/testimonialsController');

// create a new testimonial
router.post('/', testimonialFields, postTestimonial);

module.exports = router;