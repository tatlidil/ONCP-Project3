const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medication: { type: String, required: true },
  dosage: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
