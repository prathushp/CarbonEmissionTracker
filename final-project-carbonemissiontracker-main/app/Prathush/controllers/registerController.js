// Import required models and nodemailer configuration
const Registration = require('../models/Registration.js'); // Import Registration model
const Event = require("../models/Events"); // Import Event model
const transporter = require('../config/nodemailer.js'); // Import nodemailer configuration

// Function to handle event registration
const registerForEvent = async (req, res) => {
    try {
        // Destructure request body
        const { firstName, lastName, email, numOfTickets, eventId } = req.body;

        // Create a new registration instance
        const registration = new Registration({
            firstName,
            lastName,
            email,
            numOfTickets,
            eventId,
        });

        // Save registration details to database
        await registration.save();

        // Find the event associated with the eventId
        const event = await Event.findById(eventId);

        // Configure email options
        const mailOptions = {
            from: 'your-email@example.com', // Sender email address
            to: email, // Recipient email address
            subject: 'Thank You for Registering!', // Email subject
            text: `Dear ${firstName} ${lastName},\n\nThank you for registering for the "${event.title}"!\n\nEvent Date: ${event.EventDate}\n\nYou have successfully purchased ${numOfTickets} ticket(s) for the event.See you soon!\n\nBest regards,\nThe Carbon Trace Team`, // Email body
        };

        // Send registration confirmation email
        await transporter.sendMail(mailOptions);

        // Send success response
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        // Handle errors
        console.error('Error registering:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Export registerForEvent function
module.exports = {
    registerForEvent
};
