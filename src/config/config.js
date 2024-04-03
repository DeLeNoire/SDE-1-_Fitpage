module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'ShreyasFitPageBackend',
    mongoURI: process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/eventReviewApp',
  };
  