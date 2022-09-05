const { User } = require('../models');

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

module.exports = { deleteUser }