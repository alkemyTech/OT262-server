var jwt = require("jsonwebtoken");


//This should be imported into userRegister. Right below user.create function.
const createToken = (id,firstName,email) => {
  return jwt.sign({ id,firstName,email}, process.env.SECRET_KEY, { expiresIn: 360000 });
};

module.exports = {createToken}