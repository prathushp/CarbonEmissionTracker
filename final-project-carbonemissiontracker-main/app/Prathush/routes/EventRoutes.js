const express = require('express');
const EventController = require('./../controllers/EventControllers.js');

const router = express.Router(); // Creating an instance of Express router

// Defining routes and associating them with corresponding controller methods
router.get('/', EventController.getEvent); // Route to handle GET requests for retrieving all events
router.get('/:id', EventController.getEventById); // Route to handle GET requests for retrieving all events
router.post('/', EventController.addEvent); // Route to handle POST requests for adding a new event

router.delete('/:id',EventController.deleteEvent); // Route to handle DELETE requests for deleting a event
module.exports = router;