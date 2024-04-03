// userController.js
const User = require('../models/User');

async function getUserProfile(req, res) {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Return user profile data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getUserProfile };
