const EventService = require('../services/EventService');

// Controller function to get all events
const getEvent = async (req, res) => {
    try {
        const Event = await EventService.getEvent(); // Call the service function to fetch all events
        res.json(Event); // Send the fetched events as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Send an error response with status code 500 if an error occurs
    }
};


const getEventById = async (req, res) => {
    try {
        const { id } = req.params; // Extract the id directly from req.params
        const Event = await EventService.getEventById(id); // Call the service function to fetch the event by id
        res.json(Event); // Send the fetched event as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Send an error response with status code 500 if an error occurs
    }
};


// Controller function to add a new event
const addEvent = async (req, res) => {
    try {
        const EventData = req.body; // Extract event data from request body
        console.log("here");
        const newEvent = await EventService.addEvent(EventData); // Call the service function to add a new event
        res.status(201).json(newEvent); // Send the newly created event as JSON response with status code 201 (Created)
    } catch (error) {
        res.status(400).json({ message: error.message }); // Send an error response with status code 400 if an error occurs during addition
    }
};


// Controller function to delete a event
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params; // Extract event ID from request parameters
        await EventService.deleteEvent(id); // Call the service function to delete the event
        res.sendStatus(204); // Send a success response with status code 204 (No Content) as the event is successfully deleted
    } catch (error) {
        res.status(400).json({ message: error.message }); // Send an error response with status code 400 if an error occurs during deletion
    }
};

module.exports = {
    getEvent,
    getEventById,
    addEvent,
    deleteEvent
};