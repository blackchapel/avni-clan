// Importing modules
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const User = require('../models/user');

// JWT Authorization
const authorizeJWT = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ '_id': decoded._id, 'tokens.token': token });

        if (!user) {
            res.status(401).json({
                message: 'Please Authenticate!'
            });
        }

        req.user = user;
        req.token = token;
        
        next();
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// Exporting Module
module.exports = authorizeJWT;