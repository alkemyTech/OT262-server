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

module.exports = {
	getOrganization,
};