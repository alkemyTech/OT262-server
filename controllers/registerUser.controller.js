const { validationResult } = require("express-validator");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { createToken } = require("../controllers/jwtAuth.controller");

const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors });
  }
  const { firstName, lastName, email, password, image } = await req.body;
  try {
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ where: { email: email } });

    if (oldUser) {
      res.status(400).send("User already exists");
    } else {
      const encryptedPassword = bcrypt.hashSync(password, 10);

      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: encryptedPassword,
        image,
        roleId: 1,
      });
      const token = createToken(newUser);

      res
        .status(200)
        .json({ 
          msg: "User created successfully", 
          data: {
            firstName,
            lastName,
            email,
            image,
            roleId: newUser.roleId
          },
          token
        });
    }
  } catch (err) {
    res.status(400).json({ msg: "Error creating user", err });
    console.log(err);
  }
};

module.exports = { registerUser };
