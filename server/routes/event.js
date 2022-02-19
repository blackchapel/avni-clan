// Importing modules
const express = require('express');
const authorizeJWT = require('../middleware/jwt');
const {
    createEvent,
    getEvents,
    joinEvent,
    startEvent,
    endEvent
} = require('../controllers/event');

// Initializing router
const router = new express.Router();

router.post('/create', authorizeJWT, createEvent);
router.get('/view', getEvents);
router.put('/join', authorizeJWT, joinEvent);
router.put('/start', authorizeJWT, startEvent);
router.put('/end', authorizeJWT, endEvent);

// Exporting Modules
module.exports = router;