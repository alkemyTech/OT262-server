const { Category } = require("../models");
const { validationResult } = require('express-validator');

module.exports = {
	list: async (req, res) => {
		try {
			const categories = await Category.findAll({
				attributes: ["name"],
			});
			return res.status(200).json({
				status: "successful",
				data: categories,
			});
		} catch (error) {
			return res.status(400).json({
				status: "error",
				message: error,
			});
		}
	},
	create: async (req, res) => {
        
        const errors = validationResult(req);
        
		if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors,
			});
		}

        const { name, description } = req.body;
        
		try {
			const newCategory = {
				name,
				description,
			};
			await Category.create(newCategory);
			return res.status(201).json({
				status: "successful",
			});
		} catch (error) {
			return res.status(400).json({
				status: "error",
				message: error,
			});
		}
	},
};
