// Importing modules
const User = require('../models/user');
const { generateotp, sendSMS, sendEmail } = require("../utility/otp.js");

// Sending otp to phone
const sendPhoneOtp = async (req, res) => {
    try {
        const user_phone = req.body;
        const currentUser = await User.find({ phone: user_phone });
        
        if(!currentUser) {
            res.status(404).json({
                message: 'User not found!'
            });
        } else {
            const phoneOtp = generateotp(6);
            currentUser.phoneotp = phoneOtp;
            await currentUser.save();

            await sendSMS({
                message: `Your OTP for registration is ${phoneOtp}`,
                contactNumber: newUser.phone,
                phoneOtp
            });

            res.status(200).json({
                message: 'OTP sent to phone!'
            });
        }
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Sending otp to email
const sendEmailOtp = async (req, res) => {
    try {
        const user_email = req.body;
        const currentUser = await User.find({ email: user_email });
        
        if(!currentUser) {
            res.status(404).json({
                message: 'User not found!'
            });
        } else {
            const emailOtp = generateotp(6);
            currentUser.emailotp = phoneOtp;
            await currentUser.save();

            await sendEmail ({
                message: `Dear User, your OTP for registration is ${emailOtp}`,
                emailId: newUser.email,
                emailOtp
            });
            
            res.status(200).json({
                message: 'OTP sent to email!',
                data: currentUser._id
            });
        }
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Verifying phone
const verifyPhoneOtp = async (req, res) => {
    try {
        const { userid, otp } = req.body;
        const currentUser = await User.findById(userid);

        if (!currentUser) {
            res.status(404).json({
                message: 'User not found'
            });
            return;
        }

        if(currentUser.phoneotp !== otp) { 
            res.status(403).json({
                message: 'Incorrect OTP!'
            });
        } else {
            currentUser.phoneotp = undefined;
            await currentUser.save();

            res.status(200).json({
               message: 'OTP Verified' 
            });
        }
    } catch(error) {
        res.status(400).json({
            message: error.message
        }); 
    }
};

// Verifying email
const verifyEmailOtp = async (req, res) => {
    try {
        const { userid, otp } = req.body;
        const currentUser = await User.findById(userid);

        if (!currentUser) {
            res.status(404).json({
                message: 'User not found'
            });
            return;
        }

        if(currentUser.emailotp !== otp) {
            res.status(403).json({
                message: 'Incorrect OTP!'
            });
        } else {
            currentUser.phoneotp = undefined;
            await currentUser.save();
            
            res.status(200).json({
                message: 'OTP Verified!'
            });
        }
    } catch(error) {
        res.status(400).json({
            message: error.message
        }); 
    }
};

// Creating new password
const newPassword = async (req, res) => {
    try {
        const { userid, user_password } = req.body;
        const currentUser = await User.findById(userid);

        currentUser.password = user_password;
        await currentUser.save();

        res.status(200).json({
            message: 'Pawword changed successfully!'
        })
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Exporting modules
module.exports = {
    sendPhoneOtp,
    sendEmailOtp,
    verifyPhoneOtp,
    verifyEmailOtp,
    newPassword
};