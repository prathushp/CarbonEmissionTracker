// Import the Subscription model
const Subscription = require("../models/subscriptionModel");

// Function to create a new subscription
exports.createSubscription = async (subscriptionData) => {
    try {
        // Create a new subscription instance with the provided subscription data
        const newSubscription = await Subscription.create(subscriptionData);
        // Return the newly created subscription
        return newSubscription;
    } catch (error) {
        // Log any errors that occur during subscription creation
        console.error('Error creating subscription:', error);
        // Throw an error with a generic message for subscription creation errors
        throw new Error('Error creating subscription');
    }
};