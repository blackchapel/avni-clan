// Importing modules
const express = require('express');
const authorizeJWT = require('../middleware/jwt');
const {
    signup,
    login,
    logout,
    logoutall
} = require('../controllers/auth');
const findRanking = require('../controllers/leaderboard');
const verifyotps = require('../controllers/otp');

// Initializing router
const router = new express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.put('/logout', authorizeJWT, logout);
router.put('/logoutall', authorizeJWT, logoutall);
router.put('/otp', authorizeJWT, verifyotps);
router.get('/leaderboard', findRanking)

// Exporting Modules
module.exports = router;