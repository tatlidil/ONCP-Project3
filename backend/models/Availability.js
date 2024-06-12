const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  availableDates: [{ type: Date, required: true }],
  availableTimes: [{ type: String, required: true }]
});

module.exports = mongoose.model('Availability', AvailabilitySchema);
