// Import the Express framework
const express = require('express');

// Import the subscription controller module
const subscriptionController = require('../controllers/subscriptionController.js');

// Create a new router instance
const router = express.Router();

// Define a POST route to handle subscription creation
router.post('/', subscriptionController.createSubscription);

// Export the router to make it available for use in other files
module.exports = router;