const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User signup
router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user (password is hashed automatically by pre-save hook)
    const user = new User({ email, password });
    await user.save();
    
    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
    
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
