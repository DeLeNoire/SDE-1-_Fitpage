const Review = require('../models/Review');

async function createReview(req, res) {
  const { eventId, userId, registrationExperience, eventExperience, breakfastExperience, overallRating } = req.body;
  try {
    const review = new Review({
      eventId,
      userId,
      registrationExperience,
      eventExperience,
      breakfastExperience,
      overallRating,
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Implement other CRUD operations as needed

module.exports = { createReview };
