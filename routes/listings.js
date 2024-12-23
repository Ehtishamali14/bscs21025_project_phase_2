const express = require('express');
const router = express.Router();
const listings = require('../data/listings.json');

// Get all listings
router.get('/', (req, res) => {
  res.json(listings);
});

// Get listing by ID
router.get('/:id', (req, res) => {
  const listing = listings.find(l => l.id === parseInt(req.params.id));
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ message: 'Listing not found' });
  }
});

// Search listings by location (basic filter example)
router.get('/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const results = listings.filter(listing =>
    listing.title.toLowerCase().includes(query)
  );
  res.json(results);
});

module.exports = router;
