const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('dateOfBirth', 'Date of birth is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phoneNumber', 'Phone number is required').not().isEmpty(),
    check('childName', 'Child\'s name is required').not().isEmpty(),
    check('childDateOfBirth', 'Child\'s date of birth is required').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  async (req, res) => {
    console.log('Incoming request:', req.body); // Log incoming request

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array()); // Log validation errors
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, dateOfBirth, email, phoneNumber, childName, childDateOfBirth, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        console.log('User already exists'); // Log existing user error
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber,
        childName,
        childDateOfBirth,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('JWT_SECRET'), // getting the JWT secret
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            console.error('JWT sign error:', err.message);
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error('Server error:', err.message); // Log server error
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
