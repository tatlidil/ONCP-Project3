const express = require('express');
const router = express.Router();
const Availability = require('../models/Availability');
const auth = require('../middleware/auth');

// Set availability
router.post('/', auth, async (req, res) => {
  const { availableDates, availableTimes } = req.body;
  try {
    const availability = new Availability({
      doctorId: req.user.id,
      availableDates,
      availableTimes
    });
    await availability.save();
    res.json(availability);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get availability
router.get('/:doctorId', async (req, res) => {
  try {
    const availability = await Availability.findOne({ doctorId: req.params.doctorId });
    res.json(availability);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
