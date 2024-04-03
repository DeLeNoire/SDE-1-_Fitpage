const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// Example endpoint to get user profile (protected route)
router.get('/profile', authMiddleware.verifyToken, (req, res) => {
    // Handle logic to get user profile
    res.send('User profile route');
  });
  
module.exports = router;
