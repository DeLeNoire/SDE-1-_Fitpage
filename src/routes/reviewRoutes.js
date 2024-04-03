const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.post('/newReviews', reviewController.createReview);

// Implement other routes for reviews CRUD

module.exports = router;
