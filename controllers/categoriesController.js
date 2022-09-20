const { Category } = require("../models");
const { validationResult } = require("express-validator");
const { createCategory, findCategory, updateCategory, destroyCategory, findAllCategory} = require('../services/CategoryServices');

const getCategories = async (req, res) => {
	try {
		const categories = await Category.findAll();
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

const postCategory = async (req, res) => {
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
		const createdCategory = await Category.create(newCategory);
		return res.status(201).json({
			status: "successful",
			createdCategory
		});
	} catch (error) {
		return res.status(400).json({
			status: "error",
			message: error,
		});
	}
};

const putCategory = async (req, res) => {
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
		const updatedCategory = await categoryInDB.update(updateCategory);
		return res.status(200).json({
			status: "successful",
			data: updatedCategory,
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

    const foundCategory = await findCategory(id);

    if(foundCategory === null) {
        return res.status(404).json({
            error: `Testimonial with id ${id} not found` 
        })
    }

    try {
        const deletedCategory = await destroyCategory(id);
        res.status(200).json({
            msg: "Category deleted succesfully",
            deletedCategory
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something has gone wrong",
            errors: error.message
        })
    }
};

module.exports = {
	getCategories,
	postCategory,
	putCategory,
	deleteCategory,
};
