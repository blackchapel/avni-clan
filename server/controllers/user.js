// Importing Modules
const User = require('../models/user.js');
const { 
    removeSensitiveData, 
    removeUnnecessaryData 
} = require('../utility/functions'); 

// Get User Data
const getUser = async (req, res) => {
    
    try {
        let currentUser = await User.findById(req.user._id).populate('eventscreated').populate('eventsjoined');
    
        let eventscreated = currentUser.eventscreated
        let eventsjoined = currentUser.eventsjoined;

        currentUser = removeSensitiveData(currentUser);

        res.status(200).json({
            user: currentUser,
            credits: currentUser.credits,
            eventscreated: eventscreated,
            eventsjoined: eventsjoined
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const findRanking = async (req, res) => {
    try {
        let users = await User.find();
        users.sort((a, b) => (a.credits < b.credits) ? 1 : -1);

        users = users.filter((ongoingevent) => {
            return removeSensitiveData(ongoingevent);
        });

        res.status(200).json({
            data: users
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Exporting Modules
module.exports = { 
    getUser,
    findRanking
};