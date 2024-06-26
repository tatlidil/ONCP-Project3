const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');

// @route   POST api/contact
// @desc    Submit a contact form
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, phone, contactMethod, comments } = req.body;
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      contactMethod,
      comments
    });
    await newContact.save();
    res.status(200).json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
