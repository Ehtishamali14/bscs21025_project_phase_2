// server.js
const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Routes setup...
const listingsRoute = require('./routes/listings');
const bookingsRoute = require('./routes/bookings');

app.use('/api/listings', listingsRoute);
app.use('/api/bookings', bookingsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
