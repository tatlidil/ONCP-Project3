// models/Appointment.js
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);

// routes/api/appointments.js
const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const Appointment = require('../../models/Appointment');

// @route    POST api/appointments
// @desc     Add new appointment
// @access   Private
router.post('/', auth, async (req, res) => {
  try {
    const newAppointment = new Appointment({
      user: req.user.id,
      date: req.body.date
    });

    const appointment = await newAppointment.save();
    res.json(appointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/appointments
// @desc     Get all appointments for the user
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.id }).sort({ date: -1 });
    res.json(appointments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
