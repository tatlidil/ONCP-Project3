const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const Message = require('../../models/Message');

// @route   GET api/messages
// @desc    Get all messages
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const messages = await Message.find({ user: req.user.id });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/messages
// @desc    Send a message
// @access  Private
router.post('/', auth, async (req, res) => {
  const { text } = req.body;

  try {
    const newMessage = new Message({
      user: req.user.id,
      text,
    });

    const message = await newMessage.save();
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;