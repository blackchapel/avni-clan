const User = require('../models/user');

const findRanking = async (req, res) => {
    try {
        let users = await User.find();
        users.sort((a, b) => (a.credits < b.credits) ? 1 : -1);
        console.log(users);


        res.status(200).json({
            data: users
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = findRanking;