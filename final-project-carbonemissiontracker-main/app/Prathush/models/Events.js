// Import mongoose library
const mongoose = require('mongoose');

// Define the Event schema using mongoose.Schema
const EventSchema = new mongoose.Schema({
    title: String, // Title of the event
    description: String, // Description of the event
    EventDate: Date // Date of the event
});

// Create the Event model using the Event schema
const Event = mongoose.model('Event', EventSchema);

// Export the Event model to make it available in other files
module.exports = Event;