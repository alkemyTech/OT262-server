const { Organization, Member, Testimonial } = require("../models");

const getOrganization = async (req, res) => {
	try {
		const organizations = await Organization.findAll();
		const members = await Member.findAll();
		const testimonial = await Testimonial.findAll();
		return res.status(200).json({
			status: "successful",
			data: {
				...organizations,
				...members,
				...testimonial
			},
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
};