const express = require('express');
const router = express.Router();
const LabTest = require('../models/LabTest');
const auth = require('../middleware/auth');

// Get lab tests for a patient
router.get('/', auth, async (req, res) => {
  try {
    const labTests = await LabTest.find({ patientId: req.user.id });
    res.json(labTests);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
