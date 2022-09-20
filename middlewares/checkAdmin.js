const jwt = require("jsonwebtoken");

const checkAdmin = async (req, res, next) => {
    const token = req.token
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (decodedToken.user.roleId == 1){
        return res.status(401).json({message: "Unauthorized"})
    } else {
        res.status(200)
        next();
    }

    
};

module.exports = { checkAdmin };