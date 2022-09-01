const { Organization } = require("../models");

const getOrganizations = async (req, res) => {
	try {
		const organizations = await Organization.findAll({include: "networks"});
		return res.status(200).json({
			status: "successful",
			data: organizations,
		});
	} catch (error) {
		return res.status(400).json({
			status: "error",
			message: error,
		});
	}
};

module.exports = {
	getOrganizations,
};
