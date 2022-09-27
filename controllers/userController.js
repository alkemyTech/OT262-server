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

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({
        where: { id }
    });

    if (user){
        await user.destroy();
        res.status(200).json({ message: `User with id ${id} successfully deleted`});
    } else {
        return res.status(404).json({message: `No user with id ${id} found`})
    }
}

const putUser = async (req, res) => {
    const { firstName, lastName, email, image, roleId } = req.body;
    const { id } = req.params;
    const updatedUser = { firstName, lastName, email, image, roleId }
    const user = await User.findOne({ where: { id }});
    
    if (!user){
        return res.status(404).json({
            error: `User with id ${id} not found`
        })
    }

    try {
        const updatedUserRes = await user.update(updatedUser)
        res.status(200).json({
            msg: "User updated succesfully",
            activity: updatedUserRes
        })
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            errors: error.message
        })
    }
}

module.exports = { getAllUsers, deleteUser, putUser }
