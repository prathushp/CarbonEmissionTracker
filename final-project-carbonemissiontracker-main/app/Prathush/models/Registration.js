// Import mongoose library
const mongoose = require('mongoose');

// Define the registration schema using mongoose.Schema
const registrationSchema = new mongoose.Schema({
    firstName: String, // First name of the registrant
    lastName: String, // Last name of the registrant
    email: String, // Email of the registrant
    numOfTickets: Number, // Number of tickets registered
    eventId: { // Reference to the Event model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
});

// Create the Registration model using the registration schema
const Registration = mongoose.model('Registration', registrationSchema);

// Export the Registration model to make it available in other files
module.exports = Registration;