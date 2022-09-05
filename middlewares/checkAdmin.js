const jwt = require("jsonwebtoken");

const checkAdmin = async (req, res, next) => {
    const { token } = req.token
    decodedToken = jwt.verify(token, process.env.JWT_KEY);
    if (!decodedToken.user.roleId == 2){
        return res.status(401).json({message: "access denied"})
    } else {
        res.status(200)
        next();
    }

    
};

module.exports = { checkAdmin };