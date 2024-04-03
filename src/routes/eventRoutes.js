const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.post('/createEvents', eventController.createEvent);

router.get('/getEvents/:id', eventController.getEventById);

// Implement other routes for events CRUD

module.exports = router;
