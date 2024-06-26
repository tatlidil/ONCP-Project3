const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  contactMethod: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
