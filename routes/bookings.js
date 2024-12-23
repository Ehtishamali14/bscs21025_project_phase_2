const express = require('express');
const router = express.Router();

// Mock booking route
router.post('/', (req, res) => {
  const { listingId, checkIn, checkOut } = req.body;
  if (listingId && checkIn && checkOut) {
    res.status(201).json({ message: 'Booking successful', booking: req.body });
  } else {
    res.status(400).json({ message: 'Invalid booking data' });
  }
});

module.exports = router;
