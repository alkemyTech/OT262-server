const jwt = require("jsonwebtoken");

const checkUser = async (req, res, next) => {
    const token = req.token
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    if (!decodedToken.user.roleId){
        return res.status(401).json({message: "Unauthorized"})
    } else {
        res.status(200)
        next();
    }
};

module.exports = { checkUser };