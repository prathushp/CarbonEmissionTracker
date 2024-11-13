// Import the Express framework
const express = require('express');

// Import the register controller module
const registerController = require('../controllers/registerController.js');

// Create a new router instance
const router = express.Router();

// Define a POST route to handle event registration
router.post('/', registerController.registerForEvent);

// Export the router to make it available for use in other files
module.exports = router;