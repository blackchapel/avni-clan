// Importing modules
const express = require('express');
const authorizeJWT = require('../middleware/jwt');
const { 
    getUser,
    findRanking
 } = require('../controllers/user');

// Initializing router
const router = new express.Router();

router.get('/dashboard', authorizeJWT, getUser);
router.get('/leaderboard', findRanking);

// Exporting Modules
module.exports = router;