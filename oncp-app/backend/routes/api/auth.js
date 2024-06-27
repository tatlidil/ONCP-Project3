const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

const router = express.Router();

// @route    POST /api/auth/login
// @desc     Authenticate user & set session
// @access   Public
router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Set session
    req.session.user = { id: user.id, name: user.fullName };
    res.cookie('user', user.id, { maxAge: 900000, httpOnly: true });
    res.json({ msg: 'Login successful', user: req.session.user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST /api/auth/logout
// @desc     Logout user & destroy session
// @access   Public
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Failed to logout');
    }
    res.clearCookie('user');
    res.json({ msg: 'Logout successful' });
  });
});

// @route    GET /api/auth/check-auth
// @desc     Check authentication status
// @access   Public
router.get('/check-auth', (req, res) => {
  if (req.session.user) {
    res.json({ msg: 'Authenticated', user: req.session.user });
  } else {
    res.status(401).json({ msg: 'Not authenticated' });
  }
});

module.exports = router;