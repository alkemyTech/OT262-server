const { validationResult } = require('express-validator');

const postTestimonial = async (req, res) => {
    const errors = validationResult(req);

    const { name, content, image} = req.body;

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors
        })
    } else {
        return res.status(200).json({
            name: name,
            content: content
        })
    }
}

module.exports = {postTestimonial};