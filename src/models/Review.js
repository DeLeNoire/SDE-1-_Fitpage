const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  registrationExperience: { type: Number, required: true },
  eventExperience: { type: Number, required: true },
  breakfastExperience: { type: Number, required: true },
  overallRating: { type: Number, required: true },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  reports: { type: Number, default: 0 },
});

module.exports = mongoose.model('Review', reviewSchema);
