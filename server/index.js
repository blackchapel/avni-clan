// Importing modules
const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const db = require('./connection');

// Initializing an express app
const app = express();

// Server Port
const PORT = process.env.PORT || 5001;

// Formatting incoming data
app.use(cors());
app.use(express.json());

// Logging
app.use(morgan('dev'));

// Importing Routes
const authRoute = require('./routes/auth');
const apidata = require('./routes/api'); 
const payment = require('./routes/payment');
const events = require('./routes/event');

// Routes
app.use('/api/user', authRoute);
app.use('/api/data', apidata);
app.use('/api/payments', payment);
app.use('/api/event', events);

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});