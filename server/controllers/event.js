// Importing modules
const Event = require('../models/event');
const User = require('../models/user');

// Create Event
const createEvent = async (req, res) => {
    try {
        let newEvent = new Event(req.body);
        let currentUser = req.user;
        let host = req.user;

        newEvent.eventhost = host._id;
        newEvent.status = 'upcoming';
        currentUser.eventscreated.push(newEvent._id);

        await newEvent.save();
        await currentUser.save();

        res.status(201).json({
            message: 'Event created successfully!',
            data: newEvent
        })
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// Get Events
const getEvents = async (req, res) => {
    try {
        let events = await Event.find();

        let ongoingevents = events;
        ongoingevents = ongoingevents.filter((ongoingevent) => {
            return ongoingevent.status === 'ongoing';
        });

        let upcomingevents = events;
        upcomingevents = upcomingevents.filter((upcomingevent) => {
            return upcomingevent.status === 'upcoming';
        });

        // console.log(events);
        res.status(200).json({
            ongoing: ongoingevents,
            upcoming: upcomingevents
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Join Event 
const joinEvent = async (req, res) => {
    try {
        let event = await Event.findById(req.body.eventid);
        let currentUser = req.user;
        
        if(!event) {
            res.status(404).json({
                message: 'Event Not Found!',
            });
        }
        
        if(event.status !== 'ongoing') {
            res.status(403).json({
                message: 'Event has not started!'
            });
        } 
        
        currentUser.eventsjoined.push(event._id);
        event.membersjoined.push(currentUser._id);
        event.usercount = event.membersjoined.length;

        await event.save();
        await currentUser.save();
        
        res.status(201).json({
            message: 'Event joined successfully!'
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Start Event
const startEvent = async (req, res) => {
    try {
        let event = await Event.findById(req.body.eventid);

        if(!event) {
            res.status(404).json({
                message: 'Event Not Found!',
            });
        }
        let userid = req.user._id.toString();
        let hostid = event.eventhost[0].toString();
        console.log(userid);
        console.log(hostid);
        if(!(userid === hostid)) {
            res.status(403).json({
                message: 'User is not the host!'
            });
            return;
        }

        event.status = 'ongoing';
        event.starttimestamp = Date.now();
        await event.save();

        res.status(201).json({
            message: 'Event started successfully!'
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// End Event
const endEvent = async (req, res) => {
    try {
        let event = await Event.findById(req.body.eventid);

        if(!event) {
            res.status(404).json({
                message: 'Event Not Found!',
            });
        }

        if(req.user._id != event.eventhost) {
            res.status(403).json({
                message: 'User is not the host!'
            });
            return;
        }

        event.status = 'ended';
        event.endtimestamp = Date.now();
        
        // Calculating credits based on time
        var a = event.starttimestamp;
        var b = event.endtimestamp;
        var difference = Math.abs(a - b) / 36e5;
        console.log(difference);

        // Awarding appropriate credits
        finalcredits = event.credits * Math.floor(difference);

        await event.save();

        res.status(201).json({
            message: 'Event ended successfully!'
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// Exporting modules
module.exports = {
    createEvent,
    getEvents,
    joinEvent,
    startEvent,
    endEvent
};