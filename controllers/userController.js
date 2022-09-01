const { User } = require('../models');

const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).json({ users });
	} catch (error) {
		return res.status(400).json({
			message: error,
		});
	}
};

module.exports = { getAllUsers }