// Importing modules
const express = require('express');
const {
    sendPhoneOtp,
    sendEmailOtp,
    verifyPhoneOtp,
    verifyEmailOtp,
    newPassword
} = require('../controllers/forgotpassword');

// Initializing router
const router = new express.Router();

router.post('/send/phoneotp', sendPhoneOtp);
router.post('/send/emailotp', sendEmailOtp);
router.post('/verify/phoneotp', verifyPhoneOtp);
router.post('/verify/emailotp', verifyEmailOtp);
router.post('/changepassword', newPassword);

// Exporting module
module.exports = router;