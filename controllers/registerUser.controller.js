const User = require('../models/user')
const bcrypt = require("bcryptjs");

const registerUser =  async (req,res) => {

    try{
        const { firstName, lastName, email, password, image } = req.body;

        if (!(email && password && firstName && lastName)) {
            res.status(400).send("All input is required");
          }

          const oldUser = await User.findOne({ where: { email: email}})
          
          if(oldUser){
            res.status(200).send("User already exists")
          }

           const encryptedPassword = await bcrypt(password,10);

            const newUser = await User.create({ 
                firstName,
                lastName,
                email,
                password:encryptedPassword,
                image
            });

            res.status(200).send("User created successfully", newUser)
    }
    catch(err) {
        res.status(500).send("Error creating user", err)
    }

}

module.exports = {registerUser}