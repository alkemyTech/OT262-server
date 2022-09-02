const { Organization, Member, Testimonial } = require("../models");

const getOrganization = async (req, res) => {
	try {
		const organization = await Organization.findOne();
		const members = await Member.findAll({limit: 5});
		const testimonials = await Testimonial.findAll({limit: 5});
		return res.status(200).json({
			status: "successful",
			data: {
				organization,
				members,
				testimonials,
			},
		});
	} catch (error) {
		return res.status(400).json({
			status: "error",
			message: error,
		});
	}
};

const updateOrganization = async (req, res) => {
	const { name, image, phone, welcomeText, address, facebook, linkedin, instagram } = req.body;
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
			facebook: facebook || organizationInDB.facebook,
			linkedin: linkedin || organizationInDB.linkedin,
			instagram: instagram || organizationInDB.instagram,
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
	getOrganization,
	updateOrganization,
};