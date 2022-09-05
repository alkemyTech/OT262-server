const { validationResult } = require('express-validator');
const { User } = require('../models')
const {createToken } = require('../controllers/jwtAuth.controller')
const bcrypt = require('bcryptjs');
const { decode } = require('jsonwebtoken');

const login = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors
        })
    } 

    const { email, password } = await req.body;
    try {
        const user = await User.findOne({ where: { email }});
        
        if (!user){
            return res.status(401).json({ message: "The user doesn't exist" });
        }
    
        const correctPassword = await bcrypt.compare(password, user.password);
    
        if (!correctPassword){
            return res.status(401).json({ message: "Invalid credentials"});
        }
        const token = createToken(user)
        res.status(200).json({
            user: user,
            token
        });
        

    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const profile = async (req, res) => {
   const token = req.token;
   
    try {
        
        const user = decode(token, process.env.SECRET_KEY);
        delete user.password;

        return res.status(200).json({
			status: "successful",
			data: user,
		});
        
    } catch(err) {
        return res.status(400).json({
			status: "error",
			message: error,
		});
    }
}

module.exports = { login, profile };