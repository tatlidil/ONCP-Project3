const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');

// Request appointment
router.post('/', auth, async (req, res) => {
  const { doctorId, date, time, reason } = req.body;
  try {
    const appointment = new Appointment({
      patientId: req.user.id,
      doctorId,
      date,
      time,
      reason
    });
    await appointment.save();
    res.json(appointment);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get appointments for a patient
router.get('/patient', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.user.id });
    res.json(appointments);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get appointments for a doctor
router.get('/doctor', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.user.id });
    res.json(appointments);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Accept or decline appointment
router.patch('/:id', auth, async (req, res) => {
  const { status } = req.body;
  try {
    let appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ msg: 'Appointment not found' });

    appointment.status = status;
    await appointment.save();
    res.json(appointment);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
