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

const updateOrganization = async (req, res) => {
	const { name, image, phone, welcomeText, address } = req.body;
	const { id } = req.params;

	try {
		const organizationInDB = await Organization.findByPk(id);

		if (!organizationInDB) {
			return res.status(400).json({
				status: "error",
				message: "Organization is not found in DB",
			});
		}
		const updateOrganization = {
			name: name || organizationInDB.name,
			image: image || organizationInDB.image,
			phone: phone || organizationInDB.phone,
			welcomeText: welcomeText || organizationInDB.welcomeText,
			address: address || organizationInDB.address,
		};
		await Organization.update(updateOrganization, {
			where: {
				id,
			},
		});
		return res.status(200).json({
			status: "successful",
			data: updateOrganization,
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
	updateOrganization
};
