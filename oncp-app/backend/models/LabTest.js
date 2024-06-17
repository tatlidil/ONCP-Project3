const mongoose = require('mongoose');

const LabTestSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  testName: { type: String, required: true },
  result: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('LabTest', LabTestSchema);
