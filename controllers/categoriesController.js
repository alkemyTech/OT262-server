const { Category } = require("../models");
const { validationResult } = require("express-validator");

const getCategories = async (req, res) => {
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
};

const createCategory = async (req, res) => {
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
};

const updateCategory = async (req, res) => {
	const { name, description } = req.body;
	const { id } = req.params;

	try {
		const categoryInDB = await Category.findByPk(id);

		if (!categoryInDB) {
			return res.status(400).json({
				status: "error",
				message: "Category is not found in DB",
			});
		}
		const updateCategory = {
			name: name || categoryInDB.name,
			description: description || categoryInDB.description,
		};
		await Category.update(updateCategory, {
			where: {
				id,
			},
		});
		return res.status(200).json({
			status: "successful",
			data: updateCategory,
		});
	} catch (error) {
		return res.status(400).json({
			status: "error",
			message: error,
		});
	}
};

const deleteCategory = async (req, res) => {
	const { id } = req.params;

	try {
		const categoryInDB = await Category.findByPk(id);

		if (!categoryInDB) {
			return res.status(400).json({
				status: "error",
				message: "Category is not found in DB",
			});
		}
		const deleteCategory = {
			deletedAt: new Date(),
		};

		await Category.update(deleteCategory, {
			where: {
				id,
			},
		});

		return res.status(200).json({
			status: "successful",
		});
	} catch (error) {
		return res.status(400).json({
			status: "error",
			message: error,
		});
	}
};

module.exports = {
	getCategories,
	createCategory,
	updateCategory,
	deleteCategory,
};
