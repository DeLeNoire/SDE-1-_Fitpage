const Event = require('../models/Event');

async function createEvent(req, res) {
  const { name, date, location } = req.body;
  try {
    const event = new Event({ name, date, location });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getEventById(req, res) {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      throw new Error('Event not found');
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Implement other CRUD operations as needed

module.exports = { createEvent, getEventById };
