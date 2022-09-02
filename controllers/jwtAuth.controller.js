let jwt = require("jsonwebtoken");


//This should be imported into userRegister. Right below user.create function.
const createToken = (user) => {
  return jwt.sign({user}, process.env.SECRET_KEY, { expiresIn: 360000 });
};

module.exports = {createToken}