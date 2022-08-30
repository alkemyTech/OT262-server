var jwt = require("jsonwebtoken");


//This should be imported into userRegister. Right below user.create function.
const createToken = (id,firstName,email) => {
  return jwt.sign({ id,firstName,email}, process.env.TOKEN_KEY, { expiresIn: "3h" });
};

module.exports = {createToken}