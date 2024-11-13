// Import required models and nodemailer configuration
const Subscription = require('../models/subscriptionModel.js'); // Import Subscription model
const transporter = require('../config/nodemailer.js'); // Import nodemailer configuration

// Function to create a new subscription
exports.createSubscription = async (req, res) => {
    try {
        // Destructure request body
        const { firstName, lastName, email, region } = req.body;

        // Create a new subscription instance and save it to the database
        const newSubscription = await Subscription.create({ firstName, lastName, email, region });

        // Configure email options for subscription confirmation
        const mailOptions = {
            from: 'your-email@gmail.com', // Sender email address
            to: email, // Recipient email address
            subject: 'Thank You for Subscribing!', // Email subject
            text: `Dear ${firstName} ${lastName},\n\nThank you for subscribing to our newsletter!\n\nHere are your subscription details:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail Address: ${email}\nRegion: ${region}\n\nBest regards,\nThe Carbon Trace Team`, // Email body
        };

        // Send subscription confirmation email
        await transporter.sendMail(mailOptions);

        // Send success response with the newly created subscription
        res.status(201).json(newSubscription);
    } catch (error) {
        // Handle errors
        console.error('Error creating subscription:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};