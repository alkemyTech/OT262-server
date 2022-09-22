const express = require('express');
const router = express.Router();
const { testimonialFields } = require('../middlewares/bodyValidation');
const { postTestimonial, putTestimonial, deleteTestimonial, getTestimonial, getTestimonialById } = require('../controllers/testimonialsController');
const { validateToken } = require('../middlewares/validateToken');
const { checkAdmin } = require('../middlewares/checkAdmin');
const { checkUser } = require('../middlewares/checkUser');

router.get('/', getTestimonial);
router.get('/:id', validateToken, checkUser, getTestimonialById);
router.post('/', validateToken, checkUser, testimonialFields, postTestimonial);
router.put('/:id', validateToken, checkAdmin, putTestimonial);
router.delete('/:id', validateToken, checkAdmin, deleteTestimonial);

module.exports = router;