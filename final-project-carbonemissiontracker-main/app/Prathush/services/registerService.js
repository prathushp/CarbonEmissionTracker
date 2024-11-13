
// Import the Registration model
const Registration = require("../models/Registration");

// Function to register for an event
exports.registerForEvent = async (formData) => {
    try {
        // Create a new registration instance with the provided form data
        const registration = new Registration(formData);
        // Save the registration to the database
        await registration.save();
        // Return a success message
        return 'Registration successful';
    } catch (error) {
        // Log any errors that occur during registration
        console.error('Error registering:', error);
        // Throw an error with a generic message for internal server errors
        throw new Error('Internal server error');
    }
};
