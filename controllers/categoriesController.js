const { Category } = require("../models");

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
};
