const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const Prescription = require('../../models/Prescription');

// @route   GET api/prescriptions
// @desc    Get all prescriptions
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ user: req.user.id });
    res.json(prescriptions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
