const express = require('express');
const router = express.Router();
const Prescription = require('../models/Prescription');
const auth = require('../middleware/auth');

// Get prescriptions for a patient
router.get('/', auth, async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ patientId: req.user.id });
    res.json(prescriptions);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
