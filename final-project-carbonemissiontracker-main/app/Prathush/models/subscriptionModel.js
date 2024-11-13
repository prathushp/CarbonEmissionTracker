// Import mongoose library
const mongoose = require('mongoose');

// Define the subscription schema using mongoose.Schema
const subscriptionSchema = new mongoose.Schema({
    firstName: { type: String, required: true }, // First name of the subscriber (required)
    lastName: { type: String, required: true }, // Last name of the subscriber (required)
    email: { type: String, required: true }, // Email of the subscriber (required)
    region: { type: String, required: true }, // Region of the subscriber (required)
});

// Create the Subscription model using the subscription schema
const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Export the Subscription model to make it available in other files
module.exports = Subscription;