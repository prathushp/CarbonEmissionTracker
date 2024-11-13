// Import the Event model
const Event = require('../models/Events');

// Function to retrieve all events
const getEvent = async () => {
    return await Event.find();
};

// Function to retrieve an event by its ID
const getEventById = async (id) => {
    return await Event.findById(id);
};

// Function to add a new event
const addEvent = async (EventData) => {
    return await Event.create(EventData);
};

// Function to delete an event by its ID
const deleteEvent = async (id) => {
    return await Event.findByIdAndDelete(id);
};

// Export the functions for use in other files
module.exports = {
    getEvent,
    getEventById,
    addEvent,
    deleteEvent
};
